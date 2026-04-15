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
    // Verify webhook secret
    const secret = request.headers.get('x-webhook-secret')
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
        console.warn('[Revalidate] Unauthorized webhook attempt')
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    let body
    try {
        body = await request.json()
    } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const docType = body?._type
    const slug = body?.slug?.current

    console.log(`[Revalidate] Triggered for _type: ${docType}, slug: ${slug}`)
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
                let slugPath = null
                if (docType === 'service') slugPath = `/services/${slug}`
                if (docType === 'blogPost') slugPath = `/blog/${slug}`
                if (docType === 'doctor') slugPath = `/team/${slug}`

                if (slugPath) {
                    revalidatePath(slugPath)
                    console.log(`[Revalidate] Slug path revalidated: ${slugPath}`)
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
    return NextResponse.json({ status: 'Revalidation endpoint active ✅' })
}