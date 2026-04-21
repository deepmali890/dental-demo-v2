'use client'

import React, { useState } from 'react'
import SanityImage from '../ui/SanityImage'

const CompareSlider = ({ before, after }) => {
  const [position, setPosition] = useState(50)

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percent = (x / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, percent)))
  }

  return (
    <div
      className="
        relative w-full 
        aspect-[4/3]   /* 🔥 FIX: natural ratio */
        overflow-hidden 
        rounded-xl sm:rounded-2xl 
        cursor-ew-resize 
        select-none
      "
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onTouchMove={(e) => handleMove(e.touches[0])}
    >

      {/* AFTER IMAGE */}
      <SanityImage
        image={after}
        fill
        className="object-cover md:object-contain"  /* 🔥 FIX */
      />

      {/* BEFORE IMAGE */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <SanityImage
          image={before}
          fill
          className="object-cover md:object-contain"
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="
          absolute top-1/2 -translate-y-1/2 -translate-x-1/2
          w-9 h-9 sm:w-10 sm:h-10 
          rounded-full bg-white shadow-lg 
          flex items-center justify-center
        "
        style={{ left: `${position}%` }}
      >
        <div className="w-2 h-2 bg-gray-400 rounded-full" />
      </div>

      {/* Labels */}
      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
        Before
      </span>

      <span className="absolute bottom-2 right-2 bg-brand-600/90 text-white text-xs px-2 py-1 rounded">
        After
      </span>
    </div>
  )
}

const ServiceBeforeAfter = ({ service }) => {
  if (!service.beforeAfterCases?.length) return null

  return (
    <section className="bg-gray-50 py-14 sm:py-16 md:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold">
            Real Results
          </span>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-2">
            Before & After
          </h2>
        </div>

        {/* Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 sm:gap-8
        ">

          {service.beforeAfterCases.map((c) => (
            <div
              key={c._id}
              className="
                bg-white 
                rounded-2xl 
                overflow-hidden 
                border border-gray-100
                shadow-sm
              "
            >

              {/* Slider */}
              <CompareSlider
                before={c.beforeImage}
                after={c.afterImage}
              />

              {/* Content */}
              <div className="p-4 sm:p-5">

                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {c.title}
                </h3>

                {c.treatmentDuration && (
                  <p className="text-xs text-gray-400 mt-1">
                    Duration: {c.treatmentDuration}
                  </p>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default ServiceBeforeAfter