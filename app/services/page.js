// app/services/page.jsx

import PageHero from '@/components/ui/PageHero'
import ServiceCard from '@/components/common/ServiceCard'
import { getAllServices } from '@/sanity/lib/fetchData'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const revalidate = 3600

export const metadata = {
  title: 'Our Dental Services',
  description:
    'Comprehensive dental treatments — from routine checkups to advanced cosmetic dentistry.',
}

export default async function ServicesPage() {
  const services = await getAllServices()

  const featured = services?.filter(s => s.isFeatured) || []
  const regular = services?.filter(s => !s.isFeatured) || []

  return (
    <>
      <PageHero
        title="Our Dental Services"
        subtitle="Comprehensive dental care with advanced technology and a gentle touch"
        badge="🦷 Complete Dental Care"
      />

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* FEATURED */}
          {featured.length > 0 && (
            <div className="mb-12 sm:mb-16">

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2">
                <span className="w-1 h-5 sm:h-6 bg-brand-600 rounded-full block" />
                Popular Treatments
              </h2>

              <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4 
                gap-4 sm:gap-6
              ">
                {featured.map((service) => (
                  <ServiceCard
                    key={service._id}
                    service={service}
                    highlighted
                    showMeta
                  />
                ))}
              </div>

            </div>
          )}

          {/* REGULAR */}
          {regular.length > 0 && (
            <div>

              {featured.length > 0 && (
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2">
                  <span className="w-1 h-5 sm:h-6 bg-gray-300 rounded-full block" />
                  All Services
                </h2>
              )}

              <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4 
                gap-4 sm:gap-6
              ">
                {regular.map((service) => (
                  <ServiceCard key={service._id} service={service} />
                ))}
              </div>

            </div>
          )}

          {/* EMPTY */}
          {!services?.length && (
            <div className="text-center py-20 sm:py-24 text-gray-400">
              <span className="text-4xl sm:text-5xl block mb-3 sm:mb-4">🦷</span>
              <p className="text-sm sm:text-base">
                Services coming soon. Please check back later.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 bg-white">

        <div className="max-w-5xl mx-auto">

          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">

            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900" />

            {/* Glow */}
            <div className="absolute -top-16 -left-16 w-52 sm:w-60 h-52 sm:h-60 bg-blue-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-40px] right-[-20px] w-52 sm:w-60 h-52 sm:h-60 bg-cyan-400/10 rounded-full blur-[80px]" />

            {/* Content */}
            <div className="
              relative z-10 
              bg-white/5 backdrop-blur-xl border border-white/10 
              px-5 sm:px-6 md:px-10 
              py-10 sm:py-12 md:py-14 
              text-center
            ">

              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Not Sure Which Treatment You Need?
              </h2>

              <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Book a free consultation — our doctors will guide you.
              </p>

              <Link href="/contact" className="group relative inline-flex items-center gap-2">

                {/* Glow */}
                <div className="absolute -inset-1 bg-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition" />

                {/* Button */}
                <span className="
                  relative 
                  bg-white text-slate-900 
                  px-5 sm:px-6 
                  py-2.5 sm:py-3 
                  rounded-xl 
                  font-semibold 
                  text-sm sm:text-base 
                  flex items-center gap-2 
                  shadow-lg 
                  group-hover:scale-[1.04] 
                  active:scale-[0.98]
                  transition
                ">
                  Book Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </span>

              </Link>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}