import { CalendarDays, CheckCircle2, ChevronRight, Clock } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SanityImage from '../ui/SanityImage'

const painMap = {
  painless: {
    label: 'Painless',
    cls: 'bg-white/10 border border-white/10 text-white/80',
  },
  mild: {
    label: 'Mild Discomfort',
    cls: 'bg-white/10 border border-white/10 text-white/80',
  },
  moderate: {
    label: 'Moderate',
    cls: 'bg-white/10 border border-white/10 text-white/80',
  },
}

const ServiceHero = ({ service, jsonLd }) => {
  const pain = painMap[service?.painLevel]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px] flex items-end">

        {/* Background */}
        <div className="absolute inset-0">
          {service.coverImage?.asset && (
            <SanityImage
              image={service.coverImage}
              fill
              context="hero"
              className="object-cover"
              priority  // ✅ LCP — must have priority
            />
          )}
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative w-full container mx-auto px-4 pb-12 md:pb-16 pt-32 md:pt-40">

          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/50 mb-6 font-medium"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={10} className="opacity-40" aria-hidden="true" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight size={10} className="opacity-40" aria-hidden="true" />
            <span className="text-white/80">{service.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-4">
            {service.title}
          </h1>

          {/* Description */}
          {service.shortDescription && (
            <p className="text-white/70 text-[15px] md:text-lg max-w-xl mb-8 leading-relaxed">
              {service.shortDescription}
            </p>
          )}

          {/* Meta + CTA */}
          <div className="flex flex-wrap items-center gap-3">
            {service.duration && (
              <span className="flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-[13px] text-white/80">
                <Clock size={14} className="opacity-60" />
                {service.duration}
              </span>
            )}

            {pain && (
              <span
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] ${pain.cls}`}
              >
                <CheckCircle2 size={14} />
                {pain.label}
              </span>
            )}

            {service.pricing?.showPrice && service.pricing?.startingFrom && (
              <span className="bg-white text-primary px-4 py-2 rounded-full text-[13px] font-semibold">
                From ₹{service.pricing.startingFrom.toLocaleString()}
              </span>
            )}

            <div className="flex-1 hidden md:block" />

            <Link
              href="/contact"
              className="flex items-center gap-2 bg-white text-primary hover:bg-white/90 transition px-6 py-2.5 rounded-xl text-[13px] font-semibold"
            >
              <CalendarDays size={16} />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceHero