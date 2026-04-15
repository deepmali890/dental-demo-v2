import { Calendar, Phone } from 'lucide-react'
import Link from 'next/link'

export default function DoctorCTA({ doctor }) {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4 max-w-3xl">

        <div className="rounded-2xl border border-brand-200 bg-brand-900 p-6 text-white text-center">

          {/* Icon */}
          <div className="mb-4">
            <Calendar size={24} className="mx-auto text-brand-200" />
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold mb-1">
            Book with Dr. {doctor.name.split(' ').pop()}
          </h3>

          <p className="text-sm text-brand-200 mb-5">
            Get expert consultation from our specialist
          </p>

          {/* CTA */}
          <Link
            href={`/contact?doctor=${doctor.slug}`}
            className="block w-full bg-white text-brand-900 font-semibold py-3 rounded-xl transition hover:bg-gray-100"
          >
            Book Appointment
          </Link>
        </div>

      </div>
    </section>
  )
}