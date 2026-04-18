import { revalidatePath, revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

const TYPE_TO_TAGS = {
    homepage: ['homepage'],
    clinicInfo: ['clinicInfo'],
    navigation: ['navigation'],
    aboutPage: ['aboutPage'],
    appointmentSettings: ['appointmentSettings'],
    service: ['service'],
    doctor: ['doctor'],
    blogPost: ['blogPost'],
    blogCategory: ['blogCategory'],
    testimonial: ['testimonial'],
    beforeAfter: ['beforeAfter'],
    galleryItem: ['galleryItem'],
    faq: ['faq'],
    pricingPlan: ['pricingPlan'],
}

const TYPE_TO_PATHS = {
    homepage: ['/'],
    clinicInfo: ['/', '/contact', '/about'],
    navigation: ['/'],
    aboutPage: ['/about'],
    appointmentSettings: ['/contact'],
    service: ['/services'],
    doctor: ['/team'],
    blogPost: ['/blog'],
    blogCategory: ['/blog'],
    testimonial: ['/'],
    galleryItem: ['/gallery'],
    faq: ['/faq'],
    pricingPlan: ['/pricing'],
}

export async function POST(request) {
    // 1. Verify webhook secret
    const secret = request.headers.get('x-sanity-webhook-secret')

    if (!process.env.SANITY_REVALIDATE_SECRET) {
        console.error('[Revalidate] SANITY_REVALIDATE_SECRET is not set!')
        return NextResponse.json(
            { error: 'Server misconfigured' },
            { status: 500 }
        )
    }

    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
        console.warn('[Revalidate] Invalid secret received')
        return NextResponse.json(
            { error: 'Invalid secret' },
            { status: 401 }
        )
    }


    // 2. Parse request body
    let body
    try {
        body = await request.json()
    } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const docType = body?._type
    const slug = body?.slug?.current
    const id = body?._id

    console.log(`[Revalidate] Triggered for _type: ${docType}, slug: ${slug}, id: ${id}`)


    try {
        if (docType && TYPE_TO_TAGS[docType]) {
            // Revalidate cache tags
            TYPE_TO_TAGS[docType].forEach(tag => {
                revalidateTag(tag)
                console.log(`[Revalidate] Tag revalidated: ${tag}`)
            })

            // Revalidate static paths
            const paths = TYPE_TO_PATHS[docType] || []
            paths.forEach(path => {
                revalidatePath(path)
                console.log(`[Revalidate] Path revalidated: ${path}`)
            })

            // Revalidate specific slug path if available
            if (slug) {
                const slugPath =
                    docType === 'service' ? `/services/${slug}` :
                        docType === 'blogPost' ? `/blog/${slug}` :
                            docType === 'doctor' ? `/team/${slug}` :
                                null

                if (slugPath) {
                    revalidatePath(slugPath)
                    console.log(`[Revalidate] Slug path cleared: ${slugPath}`)
                }
            }
        } else {
            // Unknown type — revalidate everything
            console.warn(`[Revalidate] Unknown _type: ${docType} — revalidating all tags`)
            Object.values(TYPE_TO_TAGS).flat().forEach(tag => revalidateTag(tag))
        }

        return NextResponse.json({
            revalidated: true,
            type: docType,
            slug: slug || null,
            timestamp: new Date().toISOString(),
        })
    } catch (err) {
        console.error('[Revalidate] Error:', err)
        return NextResponse.json({ error: 'Revalidation failed', detail: err.message }, { status: 500 })
    }
}

// Health check
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        endpoint: '/api/revalidate',
        hasSecret: !!process.env.SANITY_REVALIDATE_SECRET,
    })
}