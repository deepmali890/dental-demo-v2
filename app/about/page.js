import PageHero from '@/components/ui/PageHero'
import { getAboutPageData, getAllDoctors, getClinicInfo, getHomepageData } from '@/sanity/lib/fetchData'

import AboutStory from '@/components/about/AboutStory'
import AboutMission from '@/components/about/AboutMission'
import AboutStats from '@/components/about/AboutStats'
import AboutMilestones from '@/components/about/AboutMilestones'
import AboutFounders from '@/components/about/AboutFounders'
import CTABanner from '@/components/sections/CTABanner'
import { cache } from 'react'
import AboutAffiliations from '@/components/about/AboutAffiliations'
import AboutTechnology from '@/components/about/AboutTechnology'

export const revalidate = 600
const getData = cache(getHomepageData)

export const metadata = {
    title: 'About Us',
    description: 'Learn about our clinic and team.',
}

export default async function AboutPage() {

    const [about, clinicInfo, doctors] = await Promise.all([
        getAboutPageData(),
        getClinicInfo(),
        getAllDoctors(),
    ])

    console.log('about:', about)

    const founders = Array.isArray(doctors)
        ? doctors.filter(d => d.isFounder)
        : []

    const homepageData = await getData()
    const cta = homepageData?.homepage?.ctaBanner


    return (
        <>
            <PageHero
                title={about?.pageTitle || 'About Our Clinic'}
                subtitle="Our story, mission, and the people dedicated to your dental health"
                badge="🏥 Our Story"
            />

            <AboutStory about={about} />
            <AboutMission about={about} />
            <AboutAffiliations about={about} />
            <AboutTechnology about={about} />
            <AboutStats clinicInfo={clinicInfo} />
            <AboutMilestones about={about} />
            <AboutFounders founders={founders} />

            {/* CTA */}
            {cta?.heading && <CTABanner data={cta} />}

        </>
    )
}