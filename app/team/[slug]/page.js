import DoctorAchievements from '@/components/doctor/DoctorAchievements'
import DoctorAvailability from '@/components/doctor/DoctorAvailability'
import DoctorBio from '@/components/doctor/DoctorBio'
import DoctorCTA from '@/components/doctor/DoctorCTA'
import DoctorHero from '@/components/doctor/DoctorHero'
import DoctorServices from '@/components/doctor/DoctorServices'
import DoctorSocial from '@/components/doctor/DoctorSocial'
import DoctorSpecializations from '@/components/doctor/DoctorSpecializations'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import ServicesSection from '@/components/sections/ServicesSection'
import SanityImage from '@/components/ui/SanityImage'
import { getAllDoctors, getDoctorBySlug } from '@/sanity/lib/fetchData'
import { Award, CheckCircle2, ChevronRight, Globe, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'


export const revalidate = 600

export async function generateStaticParams() {
    const docs = await getAllDoctors()
    return docs?.map((doc) => ({
        slug: doc.slug,
    }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const doctor = await getDoctorBySlug(slug)
    if (!doctor) return { title: 'Doctor Not Found' }
    return {
        title: doctor.seo?.metaTitle || `${doctor.name} — ${doctor.designation}`,
        description: doctor.seo?.metaDescription || doctor.shortBio,
    }
}

export default async function DoctorDetailPage({ params }) {
    const { slug } = await params
    const doctor = await getDoctorBySlug(slug)
    if (!doctor) notFound()

    return (
        <>
            <DoctorHero doctor={doctor} />

            <section className="section bg-white">
                <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">

                    {/* LEFT */}
                    <div className="lg:col-span-2">
                        <DoctorBio doctor={doctor} />
                        <DoctorSpecializations doctor={doctor} />
                        <DoctorAchievements doctor={doctor} />
                    </div>

                    {/* RIGHT */}
                    <aside className="space-y-5 sticky top-24">
                        <DoctorAvailability doctor={doctor} />
                        <DoctorCTA doctor={doctor} />
                        <DoctorSocial doctor={doctor} />
                    </aside>

                </div>

                <DoctorServices doctor={doctor} />
            </section>
            
        </>

    )
}
