'use client'
import React from 'react'
import dynamic from 'next/dynamic'

/* ---------- Dynamic Icon Loader ---------- */
function getIcon(name) {
  if (!name) return null

  const formatted =
    name
      .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
      .replace(/^(.)/, (c) => c.toUpperCase())

  return dynamic(() =>
    import('lucide-react').then((mod) => mod[formatted] || mod.HelpCircle)
  )
}

/* ---------- Grid Columns ---------- */
function getGridCols(count) {
  if (count <= 2) return 'sm:grid-cols-2'
  if (count === 3) return 'sm:grid-cols-2 lg:grid-cols-3'
  if (count === 4) return 'sm:grid-cols-2 lg:grid-cols-4'
  return 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
}

export default function WhyUsSection({ data }) {
  if (!data?.items?.length) return null

  const items = data.items

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24" id="why-us">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">

          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2 sm:mb-3">
            Commitment to Excellence
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            {data.sectionTitle || 'Why Patients Trust Us'}
          </h2>

          {data.sectionSubtitle && (
            <p className="mt-2 sm:mt-3 text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
              {data.sectionSubtitle}
            </p>
          )}

        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${getGridCols(items.length)} gap-4 sm:gap-6 lg:gap-8`}>

          {items.map((item, idx) => {
            const Icon = getIcon(item.icon)

            return (
              <div
                key={idx}
                className="group text-center px-3 sm:px-4 py-5 sm:py-6 border border-gray-100 rounded-xl sm:rounded-2xl transition hover:border-gray-200"
              >

                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-5 rounded-lg sm:rounded-xl bg-brand-50 flex items-center justify-center transition group-hover:bg-white">
                  {Icon && (
                    <Icon
                      size={18}
                      className="text-brand-600 transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-brand-600 transition leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                {item.description && (
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
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