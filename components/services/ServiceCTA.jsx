import { Calendar, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServiceCTA = () => {
  return (
    <div className="w-full">

      <div className="
        rounded-xl sm:rounded-2xl 
        border border-brand-200 
        bg-brand-900 
        p-4 sm:p-5 md:p-6 
        text-white 
        text-center
      ">

        {/* Icon */}
        <div className="mb-3 sm:mb-4">
          <div className="
            w-10 h-10 sm:w-12 sm:h-12 
            mx-auto 
            rounded-xl 
            bg-white/10 
            flex items-center justify-center
          ">
            <Calendar size={20} className="text-brand-200" />
          </div>
        </div>

        {/* Title */}
        <h3 className="
          text-base sm:text-lg 
          font-semibold 
          mb-1
        ">
          Book Appointment
        </h3>

        {/* Subtitle */}
        <p className="
          text-xs sm:text-sm 
          text-brand-200 
          mb-4 sm:mb-5
        ">
          Free consultation for your first visit
        </p>

        {/* Primary CTA */}
        <Link
          href="/contact"
          className="
            block w-full 
            bg-white text-brand-900 
            font-semibold 
            text-sm sm:text-base
            py-2.5 sm:py-3 
            rounded-lg sm:rounded-xl 
            transition 
            hover:bg-gray-100
            active:scale-[0.98]
          "
        >
          Book Now — It&rsquo;s Free
        </Link>

        {/* Divider */}
        <div className="my-3 sm:my-4 h-px bg-white/10" />

        {/* Secondary CTA */}
        <a
          href="tel:"
          className="
            flex items-center justify-center gap-2 
            text-xs sm:text-sm 
            text-brand-200 
            hover:text-white 
            transition
          "
        >
          <Phone size={14} />
          Or call us directly
        </a>

      </div>

    </div>
  )
}

export default ServiceCTA