import { CalendarDays, CheckCircle2, ChevronRight, Clock } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SanityImage from '../ui/SanityImage'

const painMap = {
  painless: { label: 'Painless' },
  mild: { label: 'Mild Discomfort' },
  moderate: { label: 'Moderate' },
}

const ServiceHero = ({ service, jsonLd }) => {
  const pain = painMap[service?.painLevel]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 🔥 DARK HERO */}
      <section className="bg-brand-900 py-10 sm:py-12 md:py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/50 mb-5 font-medium">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight size={10} />
                <Link href="/services" className="hover:text-white">Services</Link>
                <ChevronRight size={10} />
                <span className="text-white/80">{service.title}</span>
              </nav>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
                {service.title}
              </h1>

              {/* Description */}
              {service.shortDescription && (
                <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 max-w-xl">
                  {service.shortDescription}
                </p>
              )}

              {/* Meta */}
              <div className="flex flex-wrap gap-2 mb-6">

                {service.duration && (
                  <span className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-2 rounded-lg text-xs sm:text-sm text-white/80">
                    <Clock size={14} />
                    {service.duration}
                  </span>
                )}

                {pain && (
                  <span className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-2 rounded-lg text-xs sm:text-sm text-white/80">
                    <CheckCircle2 size={14} />
                    {pain.label}
                  </span>
                )}

                {service.pricing?.showPrice && service.pricing?.startingFrom && (
                  <span className="bg-white text-brand-900 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold">
                    From ₹{service.pricing.startingFrom.toLocaleString()}
                  </span>
                )}

              </div>

              {/* CTA */}
              <div className="flex gap-3 flex-wrap">

                <Link
                  href="/contact"
                  className="flex items-center gap-2 bg-white text-brand-900 hover:bg-white/90 transition px-5 py-3 rounded-xl text-sm font-semibold"
                >
                  <CalendarDays size={16} />
                  Book Appointment
                </Link>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="
                relative
                w-full
                aspect-[4/3]
                rounded-2xl
                overflow-hidden
                bg-white/10
                border border-white/10
                shadow-lg
              ">
                {service.coverImage?.asset && (
                  <SanityImage
                    image={service.coverImage}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                )}
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default ServiceHero