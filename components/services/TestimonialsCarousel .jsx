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
    <section className="bg-white py-12 sm:py-14 md:py-16">

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="
          text-xl sm:text-2xl md:text-3xl 
          font-semibold text-gray-900
        ">
          {title}
        </h2>

        {/* Card */}
        <div className="
          mt-8 sm:mt-10
          border border-gray-100 
          rounded-xl sm:rounded-2xl 
          p-5 sm:p-7 md:p-10 
          bg-white
        ">

          {/* Rating */}
          <div className="flex justify-center gap-1 mb-3 sm:mb-4">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className="text-yellow-500 fill-yellow-500"
              />
            ))}
          </div>

          {/* Review */}
          <p className="
            text-sm sm:text-base md:text-lg 
            text-gray-600 
            leading-relaxed 
            mb-6 sm:mb-8
          ">
            “{current.review}”
          </p>

          {/* Patient */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">

            {/* Photo */}
            <div className="
              w-10 h-10 sm:w-12 sm:h-12 
              rounded-full 
              overflow-hidden 
              bg-gray-100 
              flex-shrink-0
            ">
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
            <div className="text-left min-w-0">
              <p className="
                text-sm 
                font-semibold text-gray-900 
                truncate
              ">
                {current.patientName}
              </p>

              <p className="
                text-xs 
                text-gray-500 
                truncate
              ">
                {current.treatmentType}
              </p>
            </div>

          </div>

        </div>

        {/* Controls */}
        <div className="
          flex items-center justify-center 
          gap-3 sm:gap-4 
          mt-5 sm:mt-6
        ">

          {/* Prev */}
          <button
            onClick={prev}
            className="
              w-9 h-9 sm:w-10 sm:h-10 
              rounded-full 
              border border-gray-200 
              flex items-center justify-center 
              hover:bg-gray-50 
              active:scale-[0.95]
              transition
            "
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5 sm:gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`
                  h-1.5 rounded-full transition-all duration-300
                  ${i === index 
                    ? 'w-5 sm:w-6 bg-gray-900' 
                    : 'w-2 bg-gray-300'
                  }
                `}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="
              w-9 h-9 sm:w-10 sm:h-10 
              rounded-full 
              border border-gray-200 
              flex items-center justify-center 
              hover:bg-gray-50 
              active:scale-[0.95]
              transition
            "
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

    </section>
  )
}

export default TestimonialsCarousel