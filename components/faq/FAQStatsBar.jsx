import React from 'react'

export default function FAQStatsBar({ total, categories }) {
  if (!total && !categories) return null

  const stats = [
    { value: `${total}+`, label: 'Questions Answered' },
    { value: categories, label: 'Categories' },
    { value: '24H', label: 'Response Time' },
    { value: '10+', label: 'Years Experience' },
  ]

  return (
    <section className="bg-slate-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-10 text-center">

          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center relative"
            >

              {/* Divider (desktop only) */}
              {idx !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-gray-100" />
              )}

              {/* Value */}
              <span className="text-2xl sm:text-3xl font-semibold text-brand-900 tracking-tight">
                {item.value}
              </span>

              {/* Label */}
              <p className="mt-1 text-[11px] sm:text-xs text-gray-500 uppercase tracking-[0.08em]">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}