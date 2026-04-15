'use client'

import React from 'react'

export default function FAQCategoryGrid({ grouped, activeCategory, onSelect }) {
  if (!grouped?.length) return null

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

          {/* ALL */}
          <button
            onClick={() => onSelect('all')}
            className={`flex flex-col items-center justify-center gap-1.5 py-4 rounded-xl border text-sm font-medium transition ${
              activeCategory === 'all'
                ? 'bg-brand-900 text-white border-brand-900'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
            }`}
          >
            All
          </button>

          {/* Categories */}
          {grouped.map((group) => {
            const Icon = group.icon
            const isActive = activeCategory === group.value

            return (
              <button
                key={group.value}
                onClick={() => onSelect(group.value)}
                className={`flex flex-col items-center justify-center gap-1.5 py-4 rounded-xl border text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand-900 text-white border-brand-900'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                {Icon && <Icon size={16} />}
                <span className="text-xs text-center leading-tight">
                  {group.label}
                </span>
              </button>
            )
          })}

        </div>

      </div>
    </section>
  )
}