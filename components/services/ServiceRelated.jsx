import * as Icons from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServiceRelated = ({ service }) => {
  if (!service.relatedServices?.length) return null

  return (
    <div className="
      w-full
      rounded-xl sm:rounded-2xl 
      border border-gray-100 
      bg-white 
      p-4 sm:p-5 
      space-y-4 sm:space-y-5
    ">

      {/* Header */}
      <div>
        <h3 className="
          text-sm sm:text-base 
          font-semibold text-gray-900
        ">
          Related Services
        </h3>

        <p className="
          text-[11px] sm:text-xs 
          text-gray-500 
          mt-1
        ">
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
              className="
                group 
                flex items-center gap-3 sm:gap-4 
                w-full
                p-2.5 sm:p-3 
                rounded-lg sm:rounded-xl 
                border border-transparent 
                transition
                hover:border-gray-200 
                hover:bg-gray-50
                active:scale-[0.98]
              "
            >

              {/* Icon Box */}
              <div className="
                w-8 h-8 sm:w-9 sm:h-9 
                rounded-lg 
                bg-brand-50 
                flex items-center justify-center 
                flex-shrink-0
              ">
                <Icon size={16} className="text-brand-600" />
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <p className="
                  text-xs sm:text-sm 
                  text-gray-700 
                  group-hover:text-gray-900 
                  transition-colors 
                  truncate
                ">
                  {s.title}
                </p>
              </div>

              {/* Arrow */}
              <ChevronRight
                size={16}
                className="
                  text-gray-300 
                  flex-shrink-0
                  transition-all duration-200 
                  group-hover:translate-x-0.5 
                  group-hover:text-gray-400
                "
              />

            </Link>
          )
        })}

      </div>

    </div>
  )
}

export default ServiceRelated