import CTABanner from '@/components/sections/CTABanner'
import GalleryGrid from '@/components/sections/GalleryGrid'
import PageHero from '@/components/ui/PageHero'
import { getAllGalleryItems, getHomepageData } from '@/sanity/lib/fetchData'
import { cache } from 'react'

export const revalidate = 3600

export const metadata = {
    title: 'Clinic Gallery',
    description:
        'Explore our modern clinic, advanced equipment, and smile transformations.',
}

const getData = cache(getHomepageData)

export default async function GalleryPage() {
    const items = await getAllGalleryItems()

    const hasItems = items?.length > 0

    const homepageData = await getData()
    const cta = homepageData?.homepage?.ctaBanner

    return (
        <>
            {/* Hero */}
            <PageHero
                title="Our Clinic Gallery"
                subtitle="Explore our clinic, advanced equipment, and real patient transformations"
                badge="🏥 Inside Our Clinic"
            />

            {/* Content */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto md:px-8">

                    {hasItems ? (
                        <GalleryGrid items={items} />
                    ) : (
                        <div className="text-center py-24 text-gray-400">
                            <span className="text-5xl block mb-4">🖼️</span>
                            <p className="text-sm">
                                Gallery content will be updated soon.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            {cta?.heading && <CTABanner data={cta} />}
        </>
    )
}