import * as Icons from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServiceRelated = ({ service }) => {
  if (!service.relatedServices?.length) return null

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 space-y-5">

      {/* Header */}
      <div>
        <h3 className="text-base font-semibold text-gray-900">
          Related Services
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Explore treatments similar to this service
        </p>
      </div>

      {/* List */}
      <div className="space-y-2">

        {service.relatedServices.map((s) => {
          const Icon = Icons[s.icon] || Icons.Stethoscope

          return (
            <Link
              key={s._id}
              href={`/services/${s.slug}`}
              className="group flex items-center gap-4 p-3 rounded-xl border border-transparent transition
                         hover:border-gray-200 hover:bg-gray-50"
            >

              {/* Icon Box */}
              <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-brand-900" />
              </div>

              {/* Title */}
              <div className="flex-1">
                <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                  {s.title}
                </p>
              </div>

              {/* Arrow */}
              <ChevronRight
                size={16}
                className="text-gray-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-gray-400"
              />

            </Link>
          )
        })}

      </div>

    </div>
  )
}

export default ServiceRelated