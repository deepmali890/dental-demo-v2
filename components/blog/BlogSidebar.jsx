'use client'
import Link from 'next/link'
import { Calendar, ChevronRight, Phone, Stethoscope } from 'lucide-react'
import dynamic from 'next/dynamic'

function getIcon(name) {
  if (!name) return Stethoscope

  const formatted = name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\s/g, '')

  return dynamic(() =>
    import('lucide-react').then(mod => mod[formatted] || mod.Stethoscope)
  )
}

export default function BlogSidebar({ post }) {
  return (
    <aside className="lg:col-span-1">

      <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">

        {/* 🔹 Related Services */}
        {post.relatedServices?.length > 0 && (
          <div className="
            rounded-xl sm:rounded-2xl 
            border border-gray-100 
            bg-white 
            p-4 sm:p-5
          ">

            {/* Header */}
            <h3 className="
              text-sm sm:text-base 
              font-semibold 
              text-gray-900 
              mb-3 sm:mb-4
            ">
              Related Services
            </h3>

            {/* List */}
            <div className="space-y-1">

              {post.relatedServices.map((s) => {
                const Icon = getIcon(s.icon)

                return (
                  <Link
                    key={s._id}
                    href={`/services/${s.slug}`}
                    className="
                      group flex items-center gap-3 
                      px-3 py-2.5 
                      rounded-lg 
                      text-sm text-gray-600 
                      transition
                      hover:bg-gray-50
                      active:scale-[0.98]
                    "
                  >

                    {/* Icon */}
                    <div className="
                      w-8 h-8 
                      rounded-lg 
                      bg-brand-50 
                      flex items-center justify-center 
                      flex-shrink-0
                    ">
                      {Icon && <Icon size={16} className="text-brand-600" />}
                    </div>

                    {/* Title */}
                    <span className="
                      flex-1 
                      group-hover:text-gray-900 
                      transition-colors
                      truncate
                    ">
                      {s.title}
                    </span>

                    {/* Arrow */}
                    <ChevronRight
                      size={14}
                      className="
                        text-gray-300 
                        group-hover:text-gray-400 
                        transition
                      "
                    />

                  </Link>
                )
              })}

            </div>

          </div>
        )}

        {/* 🔹 CTA */}
        <div className="
          rounded-xl sm:rounded-2xl 
          border border-brand-200 
          bg-brand-900 
          p-5 sm:p-6 
          text-white 
          text-center
        ">

          {/* Icon */}
          <div className="mb-3 sm:mb-4">
            <div className="
              w-12 h-12 
              mx-auto 
              rounded-xl 
              bg-white/10 
              flex items-center justify-center
            ">
              <Calendar size={22} className="text-brand-200" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-semibold mb-1">
            Book Appointment
          </h3>

          {/* Text */}
          <p className="
            text-xs sm:text-sm 
            text-brand-200 
            mb-4 sm:mb-5
          ">
            Free consultation for your first visit
          </p>

          {/* Button */}
          <Link
            href="/contact"
            className="
              block w-full 
              bg-white 
              text-brand-900 
              font-semibold 
              py-2.5 sm:py-3 
              rounded-xl 
              transition 
              hover:bg-gray-100
              active:scale-[0.98]
            "
          >
            Book Now — It&rsquo;s Free
          </Link>

          {/* Phone */}
          <a
            href="tel:"
            className="
              mt-3 sm:mt-4 
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

    </aside>
  )
}