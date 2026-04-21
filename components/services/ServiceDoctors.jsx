import { ChevronRight } from 'lucide-react'
import React from 'react'
import SanityImage from '../ui/SanityImage'
import Link from 'next/link'

const ServiceDoctors = ({ service }) => {
  if (!service.assignedDoctors?.length) return null

  return (
    <section className="space-y-6 sm:space-y-8">

      {/* Header */}
      <div>
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2">
          Specialist Team
        </p>

        <h2 className="
          text-xl sm:text-2xl md:text-[26px] 
          font-bold text-slate-900 
          tracking-tight
        ">
          Meet Your Doctor
        </h2>
      </div>

      {/* Grid */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        gap-3 sm:gap-4
      ">

        {service.assignedDoctors.map(doc => (
          <Link
            key={doc._id}
            href={`/team/${doc.slug}`}
            className="
              group 
              flex items-center gap-3 sm:gap-4 
              w-full
              p-3 sm:p-4 
              bg-white 
              border border-gray-100 
              rounded-xl sm:rounded-2xl 
              transition
              hover:border-brand-600/40
              hover:shadow-sm
              active:scale-[0.98]
            "
          >

            {/* Photo */}
            <div className="
              relative 
              w-14 h-14 sm:w-[68px] sm:h-[68px] 
              rounded-lg sm:rounded-xl 
              overflow-hidden 
              flex-shrink-0 
              bg-brand-50
            ">
              {doc.profilePhoto?.asset ? (
                <SanityImage
                  image={doc.profilePhoto}
                  fill
                  sizes="(max-width:640px) 56px, 68px"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xl sm:text-2xl">
                  👨‍⚕️
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">

              <p className="
                text-sm sm:text-[15px] 
                font-semibold text-slate-900 
                group-hover:text-brand-600 
                transition-colors 
                truncate
              ">
                {doc.name}
              </p>

              <p className="
                text-xs sm:text-[13px] 
                text-slate-400 
                mt-0.5 
                truncate
              ">
                {doc.designation}
              </p>

              {doc.experience && (
                <span className="
                  inline-block mt-1.5 sm:mt-2 
                  text-[10px] sm:text-[11px] 
                  font-semibold text-brand-600 
                  bg-brand-50 
                  px-2 py-0.5 sm:px-2.5 sm:py-0.5 
                  rounded-full
                ">
                  {doc.experience} yrs experience
                </span>
              )}

            </div>

            {/* Arrow */}
            <ChevronRight
              size={16}
              className="
                text-slate-300 
                group-hover:text-brand-500 
                flex-shrink-0
                transition-colors
              "
            />

          </Link>
        ))}

      </div>

    </section>
  )
}

export default ServiceDoctors