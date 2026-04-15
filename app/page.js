import React, { cache } from 'react'
import { getHomepageData } from '@/sanity/lib/fetchData'


import AnnouncementBar from '@/components/layout/AnnouncementBar'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import AboutSnippet from '@/components/sections/AboutSnippet'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'
import BlogSection from '@/components/sections/BlogSection'
import FAQSection from '@/components/sections/FAQSection'
import OurTeamSection from '@/components/sections/OurTeamSection'

export const revalidate = 600
const getData = cache(getHomepageData)

export async function generateMetadata() {
    try {
        const data = await getData()
        const seo = data?.homepage?.seo

        return {
            title: seo?.metaTitle || 'Best Dental Clinic',
            description: seo?.metaDescription || 'Complete dental care with advanced technology',
        }
    } catch (error) {
        console.error("Metadata Error:", error)
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
        allDoctors
    } = data


    const isVisible = (section) => section?.isVisible !== false

    return (
        <> {/* Announcement */}
            {hp?.announcementBanner?.isActive && (
                <AnnouncementBar data={hp.announcementBanner} />
            )}

            {/* Hero */}
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

            {/* About */}
            {hp?.aboutSnippet && (
                <AboutSnippet data={hp.aboutSnippet} />
            )}

            {/* Services */}
            {hp?.servicesSection && (
                <ServicesSection
                    data={hp.servicesSection}
                    fallbackServices={allFeaturedServices}
                />
            )}

            {/* Why Us */}
            {hp?.highlights?.items?.length > 0 && (
                <WhyUsSection data={hp.highlights} />
            )}

            {/* Our Team */}
            {hp?.ourTeamSection && (
                <OurTeamSection
                    data={hp.ourTeamSection}
                    fallbackDoctors={allDoctors}
                />
            )}


            {/* Testimonials */}
            {hp?.testimonialsSection && (
                <TestimonialsSection
                    data={hp.testimonialsSection}
                    fallbackTestimonials={allFeaturedTestimonials}
                />
            )}

            {/* CTA */}
            {hp?.ctaBanner?.heading && (
                <CTABanner data={hp.ctaBanner} />
            )}

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
