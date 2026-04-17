import DoctorCard from '@/components/common/DoctorCard'
import FounderDoctorCard from '@/components/common/FounderDoctorCard'
import CTABanner from '@/components/sections/CTABanner'
import PageHero from '@/components/ui/PageHero'
import { getAllDoctors, getHomepageData } from '@/sanity/lib/fetchData'
import React, { cache } from 'react'

export const revalidate = 600
export const metadata = {
    title: 'Our Dental Team',
    description: 'Meet our experienced team of dental professionals dedicated to your smile.',
}

const getData = cache(getHomepageData)

export default async function TeamPage() {
    const doctors = await getAllDoctors()
    const founders = doctors?.filter(d => d.isFounder) || []
    const rest = doctors?.filter(d => !d.isFounder) || []

    const homepageData = await getData()
    const cta = homepageData?.homepage?.ctaBanner


    return (
        <>
            <PageHero
                title="Meet Our Team"
                subtitle="Experienced, caring dental professionals dedicated to your perfect smile"
                badge="👨‍⚕️ Our Experts"
            />

            <section className="section bg-white max-w-7xl mx-auto">
                <div className="container mx-auto px-4">
                    {/* Founder / Lead doctors */}
                    {founders.length > 0 && (
                        <div className="mb-16">

                            <div className="mb-8">
                                <span className="section-label">
                                    Leadership
                                </span>
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                    Founding Doctors
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {founders.map((doc) => (
                                    <FounderDoctorCard key={doc._id} doctor={doc} />
                                ))}
                            </div>

                        </div>
                    )}

                    {/* Rest of team */}
                    {rest.length > 0 && (
                        <div className=''>
                            {founders.length > 0 && (
                                <h2 className="text-2xl  font-bold text-gray-900 mb-8 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-gray-300 rounded-full" />
                                    Our Specialists
                                </h2>
                            )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {rest.map(doc => <DoctorCard key={doc._id} doctor={doc} />)}
                            </div>
                        </div>
                    )}

                    {!doctors?.length && (
                        <div className="text-center py-24 text-gray-400">
                            <span className="text-5xl block mb-4">👨‍⚕️</span>
                            <p>Team information coming soon.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            {cta?.heading && <CTABanner data={cta} />}
        </>
    )
}



