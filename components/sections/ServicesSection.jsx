import React from 'react'
import CTAButton from '../ui/CTAButton'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ServiceCard from '../common/ServiceCard'

export default function ServicesSection({ data, fallbackServices }) {
    const title = data?.sectionTitle || 'Our Services'
    const subtitle =
        data?.sectionSubtitle ||
        'Comprehensive dental care under one roof'

    const services = data?.featuredServices?.length
        ? data.featuredServices
        : fallbackServices || []

    const cta = data?.viewAllCta

    if (!services.length) return null

    return (
        <section
            className="relative bg-[#FCFCFD] py-12 sm:py-16 lg:py-20 xl:py-24"
            id="services"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
                    
                    <div className="max-w-xl">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                            {title}
                        </h2>

                        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-slate-500">
                            {subtitle}
                        </p>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block shrink-0">
                        {cta ? (
                            <CTAButton
                                data={cta}
                                className="!rounded-full !px-6 sm:!px-8 !py-2.5 sm:!py-3 !bg-blue-900 !text-white !text-sm"
                            />
                        ) : (
                            <Link
                                href="/services"
                                className="group flex items-center gap-2 text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider"
                            >
                                View All Services
                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        )}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {services.map((service, idx) => (
                        <ServiceCard
                            key={service._id || idx}
                            service={service}
                        />
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 sm:mt-10 md:hidden text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm"
                    >
                        View All Services
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    )
}