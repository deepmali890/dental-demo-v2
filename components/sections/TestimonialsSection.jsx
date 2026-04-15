'use client'
import React from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { urlFor } from '@/sanity/lib/client'

/* ---------- Card ---------- */
function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1">

      {/* Quote */}
      <Quote
        size={28}
        className="absolute top-4 right-4 text-gray-100 group-hover:text-brand-50 transition"
      />

      <div className="relative z-10">

        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={13}
              className={
                i < (testimonial.rating || 5)
                  ? "fill-amber-400 text-amber-400"
                  : "text-gray-200"
              }
            />
          ))}
        </div>

        {/* Review */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-4">
          {testimonial.review}
        </p>

        {/* User */}
        <div className="flex items-center gap-3">
          {testimonial.patientPhoto?.asset ? (
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={urlFor(testimonial.patientPhoto).width(80).height(80).url()}
                alt={testimonial.patientName}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">
              {(testimonial.patientName?.[0] || 'P').toUpperCase()}
            </div>
          )}

          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {testimonial.patientName}
            </p>
            <p className="text-[11px] text-gray-400">
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
    <div className={`relative overflow-hidden 
      ${mobile ? 'h-[500px]' : 'h-[420px] md:h-[600px]'}`}>

      {/* Gradient fade */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10" />

      <div
        className={`flex flex-col gap-4 ${
          mobile
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
    <section className="py-16 md:py-20 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
            Patient Stories
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Real Smiles, Real Experiences
          </h2>

          <p className="text-gray-500 text-sm md:text-base mt-3">
            Trusted by hundreds of happy patients across all treatments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Mobile */}
          <div className="md:hidden">
            <Column items={list} mobile />
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <Column items={col1} />
          </div>

          <div className="hidden md:block mt-10">
            <Column items={col2} reverse />
          </div>

        </div>

      </div>
    </section>
  )
}