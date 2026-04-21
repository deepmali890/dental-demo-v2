import DoctorAchievements from '@/components/doctor/DoctorAchievements'
import DoctorAvailability from '@/components/doctor/DoctorAvailability'
import DoctorBio from '@/components/doctor/DoctorBio'
import DoctorCTA from '@/components/doctor/DoctorCTA'
import DoctorHero from '@/components/doctor/DoctorHero'
import DoctorServices from '@/components/doctor/DoctorServices'
import DoctorSocial from '@/components/doctor/DoctorSocial'
import DoctorSpecializations from '@/components/doctor/DoctorSpecializations'
import { getAllDoctors, getDoctorBySlug } from '@/sanity/lib/fetchData'
import { notFound } from 'next/navigation'
import React from 'react'

export const revalidate = 3600

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
      {/* HERO */}
      <DoctorHero doctor={doctor} />

      {/* MAIN */}
      <section className="bg-white py-10 sm:py-12 md:py-16">

        <div className="
          max-w-7xl mx-auto 
          px-4 sm:px-6 lg:px-8
          grid grid-cols-1 lg:grid-cols-3 
          gap-8 md:gap-10 lg:gap-12
        ">

          {/* LEFT CONTENT */}
          <div className="
            lg:col-span-2 
            space-y-8 sm:space-y-10 md:space-y-12
          ">
            <DoctorBio doctor={doctor} />
            <DoctorSpecializations doctor={doctor} />
            <DoctorAchievements doctor={doctor} />
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="
            space-y-4 sm:space-y-5
            lg:sticky lg:top-24
            h-fit
          ">
            <DoctorAvailability doctor={doctor} />
            <DoctorCTA doctor={doctor} />
            <DoctorSocial doctor={doctor} />
          </aside>

        </div>

        {/* SERVICES */}
        <div className="
          mt-12 sm:mt-14 md:mt-16
          max-w-7xl mx-auto 
          px-4 sm:px-6 lg:px-8
        ">
          <DoctorServices doctor={doctor} />
        </div>

      </section>
    </>
  )
}