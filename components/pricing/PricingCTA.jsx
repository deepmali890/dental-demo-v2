import React from 'react'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function PricingCTA() {
  return (
    <section className="py-16 md:py-20 bg-brand-50">
      <div className="max-w-4xl mx-auto px-4">

        <div className="relative bg-brand-900 border border-gray-100 rounded-2xl p-8 md:p-12 text-center">

          {/* Small Label */}
          <p className="text-[11px] uppercase tracking-[0.12em] text-white font-semibold mb-3">
            Need Help?
          </p>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Need a Custom Treatment Plan?
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto mb-8">
            Book a free consultation — our doctors will provide a personalized treatment plan and exact cost estimate.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row  items-center justify-center gap-3">

            <Link
              href="/contact"
              className="btn-primary  btn-lg gap-2"
            >
              Get Free Estimate
              <ArrowRight size={16} />
            </Link>

            <a
              href="tel:+919999999999"
              className="btn-secondary  text-white flex items-center border px-4 py-2  rounded-2xl border-gray-200 btn-lg gap-2"
            >
              <Phone size={16} />
              Call Now
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}