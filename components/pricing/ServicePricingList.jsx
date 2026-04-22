'use client'
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

/* ---------- Dynamic Icon Resolver ---------- */
function getIcon(name) {
  if (!name) {
    return dynamic(() =>
      import('lucide-react').then(mod => mod.Stethoscope)
    )
  }

  const formatted = name
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, c => c.toUpperCase())

  return dynamic(() =>
    import('lucide-react').then(mod => mod[formatted] || mod.Stethoscope)
  )
}

export default function ServicePricingList({ services }) {
  if (!services?.length) return null

  const filtered = services.filter(s => s.pricing?.showPrice)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {filtered.map(service => {
            const Icon = getIcon(service.icon)

            return (
              <Link
                key={service._id}
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between h-full p-5 rounded-2xl border border-gray-100 bg-white transition hover:border-gray-200"
              >

                {/* TOP */}
                <div className="flex items-start gap-3">

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    {Icon && <Icon size={18} />}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-600 transition">
                      {service.title}
                    </p>

                    {service.pricing.note && (
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed line-clamp-2">
                        {service.pricing.note}
                      </p>
                    )}
                  </div>

                </div>

                {/* BOTTOM */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">

                  {service.pricing.priceRange ? (
                    <p className="text-sm font-semibold text-brand-600 text-right">
                      {service.pricing.priceRange}
                    </p>
                  ) : service.pricing.startingFrom ? (
                    <p className="text-sm font-semibold text-brand-600 text-right">
                      ₹{service.pricing.startingFrom.toLocaleString()}+
                    </p>
                  ) : (
                    <p className="text-xs text-gray-400">
                      Contact us
                    </p>
                  )}

                </div>

              </Link>
            )
          })}

        </div>

      </div>
    </section>
  )
}