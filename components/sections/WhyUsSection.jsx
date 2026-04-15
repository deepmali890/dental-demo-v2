'use client'
import React from 'react'
import * as Icons from "lucide-react"

/* ---------- Icon Resolver ---------- */
function resolveIcon(name) {
  if (!name) return Icons.HelpCircle

  const formatted =
    name
      .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
      .replace(/^(.)/, (c) => c.toUpperCase())

  return Icons[formatted] || Icons.HelpCircle
}

/* ---------- Grid Columns ---------- */
function getGridCols(count) {
  if (count <= 2) return 'lg:grid-cols-2'
  if (count === 3) return 'lg:grid-cols-3'
  return 'lg:grid-cols-4'
}

export default function WhyUsSection({ data }) {
  if (!data?.items?.length) return null

  const items = data.items

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white" id="why-us">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
            Commitment to Excellence
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {data.sectionTitle || 'Why Patients Trust Us'}
          </h2>

          {data.sectionSubtitle && (
            <p className="mt-3 text-gray-500 text-sm md:text-base leading-relaxed">
              {data.sectionSubtitle}
            </p>
          )}

        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${getGridCols(items.length)} gap-8`}>

          {items.map((item, idx) => {
            const Icon = resolveIcon(item.icon)

            return (
              <div
                key={idx}
                className="group text-center px-4 py-6 border border-gray-100 rounded-2xl transition hover:border-gray-200"
              >

                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-brand-50 flex items-center justify-center transition group-hover:bg-white">
                  <Icon
                    size={20}
                    className="text-brand-600 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition">
                  {item.title}
                </h3>

                {/* Description */}
                {item.description && (
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[260px] mx-auto">
                    {item.description}
                  </p>
                )}

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}