import { Calendar } from 'lucide-react'
import Link from 'next/link'

export default function DoctorCTA({ doctor }) {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

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
              w-10 h-10 sm:w-12 sm:h-12 
              mx-auto 
              rounded-xl 
              bg-white/10 
              flex items-center justify-center
            ">
              <Calendar size={20} className="text-brand-200 sm:size-24" />
            </div>
          </div>

          {/* Content */}
          <h3 className="
            text-base sm:text-lg 
            font-semibold 
            mb-1 leading-tight
          ">
            Book with Dr. {doctor.name.split(' ').pop()}
          </h3>

          <p className="
            text-xs sm:text-sm 
            text-brand-200 
            mb-4 sm:mb-5
          ">
            Get expert consultation from our specialist
          </p>

          {/* CTA */}
          <Link
            href={`/contact?doctor=${doctor.slug}`}
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
            Book Appointment
          </Link>

        </div>

      </div>
    </section>
  )
}