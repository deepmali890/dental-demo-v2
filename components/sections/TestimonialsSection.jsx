'use client'
import React from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { urlFor } from '@/sanity/lib/client'

/* ---------- Card ---------- */
function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:-translate-y-1">

      <Quote
        size={24}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-100 group-hover:text-brand-50 transition"
      />

      <div className="relative z-10">

        {/* Rating */}
        <div className="flex gap-1 mb-2 sm:mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < (testimonial.rating || 5)
                  ? "fill-amber-400 text-amber-400"
                  : "text-gray-200"
              }
            />
          ))}
        </div>

        {/* Review */}
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 line-clamp-4">
          {testimonial.review}
        </p>

        {/* User */}
        <div className="flex items-center gap-2 sm:gap-3">
          {testimonial.patientPhoto?.asset ? (
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0">
              <Image
                src={urlFor(testimonial.patientPhoto).width(80).auto('format').url()}
                alt={testimonial.patientName}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
              {(testimonial.patientName?.[0] || 'P').toUpperCase()}
            </div>
          )}

          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
              {testimonial.patientName}
            </p>
            <p className="text-[10px] sm:text-[11px] text-gray-400">
              {testimonial.patientCity || 'Verified Patient'}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

/* ---------- Column ---------- */
function Column({ items, reverse, mobile = false }) {
  const doubled = [...items, ...items]

  return (
    <div
      className={`relative overflow-hidden 
        ${mobile ? 'h-[420px] sm:h-[500px]' : 'h-[420px] md:h-[520px] lg:h-[600px]'}`}
    >

      {/* Gradient */}
      <div className="absolute top-0 left-0 w-full h-12 sm:h-16 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 bg-gradient-to-t from-white to-transparent z-10" />

      <div
        className={`flex flex-col gap-3 sm:gap-4 ${mobile
            ? 'animate-scroll-mobile'
            : reverse
              ? 'animate-scroll-reverse'
              : 'animate-scroll'
          }`}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} testimonial={item} />
        ))}
      </div>
    </div>
  )
}

/* ---------- Main ---------- */
export default function TestimonialsSection({ data, fallbackTestimonials }) {
  const list =
    data?.displayMode === 'manual' && data?.manualTestimonials?.length
      ? data.manualTestimonials
      : fallbackTestimonials || []

  if (!list.length) return null

  const half = Math.ceil(list.length / 2)
  const col1 = list.slice(0, half)
  const col2 = list.slice(half)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2 sm:mb-3">
            Patient Stories
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
            Real Smiles, Real Experiences
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 sm:mt-3">
            Trusted by hundreds of happy patients across all treatments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

          {/* Mobile */}
          <div className="md:hidden">
            <Column items={list} mobile />
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <Column items={col1} />
          </div>

          <div className="hidden md:block mt-6 md:mt-10">
            <Column items={col2} reverse />
          </div>

        </div>

      </div>
    </section>
  )
}