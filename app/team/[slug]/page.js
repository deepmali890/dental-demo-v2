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
      <section className="bg-white py-8 sm:py-10 md:py-14">

        <div className="
          max-w-7xl mx-auto 
          px-4 sm:px-6 lg:px-8
        ">

          <div className="
            grid 
            grid-cols-1 
            lg:grid-cols-3 
            gap-8 lg:gap-12
          ">

            {/* LEFT CONTENT */}
            <div className="
              lg:col-span-2 
              space-y-6 sm:space-y-8 md:space-y-10
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

              {/* MOBILE FIX: stack order better */}
              <div className="space-y-4 sm:space-y-5">
                <DoctorAvailability doctor={doctor} />
                <DoctorCTA doctor={doctor} />
                <DoctorSocial doctor={doctor} />
              </div>

            </aside>

          </div>

          {/* SERVICES */}
          <div className="
            mt-10 sm:mt-12 md:mt-14
          ">
            <DoctorServices doctor={doctor} />
          </div>

        </div>

      </section>
    </>
  )
}