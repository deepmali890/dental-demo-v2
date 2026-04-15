'use client'

import React, { useState } from 'react'
import PlanCard from '@/components/common/planCard'

const TABS = [
  { key: 'package', label: 'Packages' },
  { key: 'membership', label: 'Membership' },
  { key: 'single', label: 'Treatments' },
]

export default function PricingPlansSection({
  plans,
  title,
  subtitle,
  label,
}) {
  const [active, setActive] = useState('package')

  if (!plans?.length) return null

  const filtered = plans.filter(p => p.planType === active)

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          {label && (
            <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
              {label}
            </p>
          )}

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {title || 'Pricing Plans'}
          </h2>

          {subtitle && (
            <p className="text-gray-500 text-sm mt-3">
              {subtitle}
            </p>
          )}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-1 bg-gray-100 p-1 rounded-xl overflow-x-auto">

            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition ${
                  active === tab.key
                    ? 'bg-white text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}

          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((plan, index) => {

              const isFeatured = plan.isFeatured || index === 1

              return (
                <div
                  key={plan._id}
                  className={`relative ${isFeatured ? 'md:-mt-4' : ''}`}
                >
                  {isFeatured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="text-[10px] font-bold bg-brand-900 text-white px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`h-full rounded-2xl border ${
                    isFeatured ? 'border-brand-600' : 'border-gray-100'
                  }`}>
                    <PlanCard plan={plan} />
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <p className="text-center text-gray-400 py-16">
            No plans available.
          </p>
        )}

      </div>
    </section>
  )
}