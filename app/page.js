import React, { cache } from 'react'
import { getAboutPageData, getHomepageData } from '@/sanity/lib/fetchData'
import dynamic from 'next/dynamic'

// ─── Above-fold: Static imports (needed for LCP) ──────────────────
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import AboutAffiliations from '@/components/about/AboutAffiliations'

// ─── Below-fold: Dynamic imports (lazy loaded) ───────────────────
const WhyUsSection = dynamic(
  () => import('@/components/sections/WhyUsSection'),
  { ssr: true }
)

const ServicesSection = dynamic(
  () => import('@/components/sections/ServicesSection'),
  { ssr: true }
)

const AboutSnippet = dynamic(
  () => import('@/components/sections/AboutSnippet'),
  { ssr: true }
)

const OurTeamSection = dynamic(
  () => import('@/components/sections/OurTeamSection'),
  { ssr: true }
)

// Testimonials: animations + heavy — ssr:false
const TestimonialsSection = dynamic(
  () => import('@/components/sections/TestimonialsSection'),
  { ssr: true }
)



const CTABanner = dynamic(
  () => import('@/components/sections/CTABanner'),
  { ssr: true }
)

const BlogSection = dynamic(
  () => import('@/components/sections/BlogSection'),
  { ssr: true }
)

// FAQ: SSR for SEO
const FAQSection = dynamic(
  () => import('@/components/sections/FAQSection'),
  { ssr: true }
)

export const revalidate = 3600
const getData = cache(getHomepageData)

export async function generateMetadata() {
  try {
    const data = await getData()
    const seo = data?.homepage?.seo

    return {
      title: seo?.metaTitle || 'Best Dental Clinic',
      description:
        seo?.metaDescription || 'Complete dental care with advanced technology',
    }
  } catch (error) {
    console.error('Metadata Error:', error)
    return {
      title: 'Best Dental Clinic',
      description: 'Complete dental care',
    }
  }
}

const HomePage = async () => {
  const data = await getData()

  if (!data?.homepage) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading content...
      </div>
    )
  }

  const {
    homepage: hp,
    clinicInfo,
    allFeaturedServices,
    allFeaturedTestimonials,
    latestPosts,
    allDoctors,
  } = data



  const [about] = await Promise.all([
    getAboutPageData(),
  ])

  const isVisible = (section) => section?.isVisible !== false

  return (
    <>
      {/* Announcement */}
      {hp?.announcementBanner?.isActive && (
        <AnnouncementBar data={hp.announcementBanner} />
      )}

      {/* Hero — Above fold, no lazy load */}
      {hp?.hero?.heading && (
        <HeroSection data={hp.hero} clinicInfo={clinicInfo} />
      )}

      {/* Stats */}
      {isVisible(hp?.statsSection) && (
        <StatsSection
          data={hp.statsSection}
          clinicStats={clinicInfo?.stats}
        />
      )}

      {/* Why Us */}
      {hp?.highlights?.items?.length > 0 && (
        <WhyUsSection data={hp.highlights} />
      )}

      {/* Services */}
      {hp?.servicesSection && (
        <ServicesSection
          data={hp.servicesSection}
          fallbackServices={allFeaturedServices}
        />
      )}

      {/* About */}
      {hp?.aboutSnippet && <AboutSnippet data={hp.aboutSnippet} />}

      {/* Our Team */}
      {hp?.ourTeamSection && (
        <OurTeamSection
          data={hp.ourTeamSection}
          fallbackDoctors={allDoctors}
        />
      )}

      {/* About Affiliations */}
      <AboutAffiliations about={about} />

      {/* Testimonials */}
      {hp?.testimonialsSection && (
        <TestimonialsSection
          data={hp.testimonialsSection}
          fallbackTestimonials={allFeaturedTestimonials}
        />
      )}

      {/* CTA */}
      {hp?.ctaBanner?.heading && <CTABanner data={hp.ctaBanner} />}

      {/* Blog */}
      {isVisible(hp?.blogSection) && (
        <BlogSection data={hp.blogSection} posts={latestPosts} />
      )}

      {/* FAQ */}
      {isVisible(hp?.faqSection) && hp?.faqSection?.faqs?.length > 0 && (
        <FAQSection data={hp.faqSection} faqs={hp.faqSection.faqs} />
      )}
    </>
  )
}

export default HomePage