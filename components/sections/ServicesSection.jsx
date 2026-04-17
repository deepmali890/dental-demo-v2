import React from 'react'
import CTAButton from '../ui/CTAButton'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ServiceCard from '../common/ServiceCard'



export default function ServicesSection({ data, fallbackServices }) {
    const title = data?.sectionTitle || 'Our Services'
    const subtitle = data?.sectionSubtitle || 'Comprehensive dental care under one roof'

    const services = data?.featuredServices?.length
        ? data.featuredServices
        : fallbackServices || []

    const cta = data?.viewAllCta

    if (!services.length) return null

    return (
        <section className="relative py-20 max-w-7xl mx-auto lg:py-24 bg-[#FCFCFD]" id="services">
            <div className="max-w-7xl mx-auto px-4">

                {/* Compact Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            {title}
                        </h2>
                        <p className="mt-3 text-slate-500 text-base md:text-lg">
                            {subtitle}
                        </p>
                    </div>

                    <div className="hidden md:block">
                        {cta ? (
                            <CTAButton data={cta} className="!rounded-full !px-8 !py-3 !bg-blue-900 !text-white !text-sm" />
                        ) : (
                            <Link href="/services" className="group flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider">
                                View All Services
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        )}
                    </div>
                </div>

                {/* The "Premium Minimalist" Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <ServiceCard
                            key={service._id || idx}
                            service={service}
                        />
                    ))}
                </div>

                {/* Mobile-only CTA */}
                <div className="mt-10 md:hidden text-center">
                    <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 font-bold">
                        View All Services <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    )
}

