import { Calendar, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServiceCTA = () => {
    return (
        <div>
            {/* Book CTA */}
            <div className="rounded-2xl border border-brand-200 bg-brand-900 p-6 text-white text-center">

                <div className="mb-4">
                    <Calendar size={26} className="mx-auto text-brand-200" />
                </div>

                <h3 className="text-lg font-semibold mb-1">
                    Book Appointment
                </h3>

                <p className="text-sm text-brand-200 mb-5">
                    Free consultation for your first visit
                </p>

                <Link
                    href="/contact"
                    className="block w-full bg-white text-brand-900 font-semibold py-3 rounded-xl transition hover:bg-gray-100"
                >
                    Book Now — It&rsquo;s Free
                </Link>

                <a
                    href="tel:"
                    className="mt-4 flex items-center justify-center gap-2 text-sm text-brand-200 hover:text-white transition"
                >
                    <Phone size={14} />
                    Or call us directly
                </a>

            </div>
        </div>
    )
}

export default ServiceCTA
