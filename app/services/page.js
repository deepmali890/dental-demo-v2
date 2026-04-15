// app/services/page.jsx

import PageHero from '@/components/ui/PageHero'
import ServiceCard from '@/components/common/ServiceCard'
import { getAllServices } from '@/sanity/lib/fetchData'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const revalidate = 600

export const metadata = {
    title: 'Our Dental Services',
    description:
        'Comprehensive dental treatments — from routine checkups to advanced cosmetic dentistry. Book your appointment today.',
}

export default async function ServicesPage() {
    const services = await getAllServices()

    console.log('Fetched services:', services)

    const featured = services?.filter(s => s.isFeatured) || []
    const regular = services?.filter(s => !s.isFeatured) || []

    return (
        <>
            {/* 🔹 Hero */}
            <PageHero
                title="Our Dental Services"
                subtitle="Comprehensive dental care with advanced technology and a gentle touch"
                badge="🦷 Complete Dental Care"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">

                {featured.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                            <span className="w-1 h-6 bg-brand-600 rounded-full block" />
                            Popular Treatments
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featured.map((service) => (
                                <ServiceCard
                                    key={service._id}
                                    service={service}
                                    highlighted={true}
                                    showMeta={true}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {regular.length > 0 && (
                    <div>
                        {featured.length > 0 && (
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                                <span className="w-1 h-6 bg-gray-300 rounded-full block" />
                                All Services
                            </h2>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {regular.map((service) => (
                                <ServiceCard
                                    key={service._id}
                                    service={service}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {!services?.length && (
                    <div className="text-center py-24 text-gray-400">
                        <span className="text-5xl block mb-4">🦷</span>
                        <p>Services coming soon. Please check back later.</p>
                    </div>
                )}
            </div>

            <section className="relative py-20 lg:py-24 px-4 bg-white">

                {/* Content Wrapper */}
                <div className="max-w-5xl mx-auto">

                    {/* CTA Card */}
                    <div className="relative overflow-hidden rounded-3xl">

                        {/* Background Gradient (ONLY CARD) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900" />

                        {/* Glow Effects */}
                        <div className="absolute -top-16 -left-16 w-60 h-60 bg-blue-500/20 rounded-full blur-[100px]" />
                        <div className="absolute bottom-[-40px] right-[-20px] w-60 h-60 bg-cyan-400/10 rounded-full blur-[80px]" />

                        {/* Glass Layer */}
                        <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-12 md:px-10 md:py-14 text-center shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]">

                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                Not Sure Which Treatment You Need?
                            </h2>

                            <p className="text-white/70 text-sm md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                                Book a free consultation — our doctors will guide you to the right treatment.
                            </p>

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2"
                            >
                                {/* Glow */}
                                <div className="absolute -inset-1 bg-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition" />

                                {/* Button */}
                                <span className="relative bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold text-sm md:text-base flex items-center gap-2 shadow-lg group-hover:scale-[1.04] transition">
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