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
      <section className="bg-white py-10 sm:py-12 md:py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {hasItems ? (
            <GalleryGrid items={items} />
          ) : (
            <div className="text-center py-20 sm:py-24 text-gray-400">
              <span className="text-4xl sm:text-5xl block mb-3 sm:mb-4">🖼️</span>

              <p className="text-sm sm:text-base">
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