'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SanityImage from '../ui/SanityImage'

const TestimonialsCarousel = ({ testimonials, title }) => {
  const [index, setIndex] = useState(0)

  if (!testimonials?.length) return null

  const current = testimonials[index]

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="section bg-white">

      <div className="container mx-auto px-4 max-w-3xl text-center">

        {/* Heading */}
        <h2 className="section-title">
          {title}
        </h2>

        {/* Card */}
        <div className="mt-10 border border-gray-100 rounded-2xl p-8 md:p-10 bg-white">

          {/* Rating */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={16} className="text-accent fill-accent" />
            ))}
          </div>

          {/* Review */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            “{current.review}”
          </p>

          {/* Patient */}
          <div className="flex items-center justify-center gap-4">

            {/* Photo */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
              {current.patientPhoto?.asset && (
                <SanityImage
                  image={current.patientPhoto}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            {/* Info */}
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">
                {current.patientName}
              </p>
              <p className="text-xs text-gray-500">
                {current.treatmentType}
              </p>
            </div>

          </div>

        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">

          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-gray-900' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>
    </section>
  )
}

export default TestimonialsCarousel