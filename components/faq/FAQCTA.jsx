import React from 'react'
import { Phone, MessageCircle } from 'lucide-react'

export default function FAQCTA({ clinicInfo }) {
  const phone =
    clinicInfo?.contact?.whatsapp ||
    clinicInfo?.contact?.primaryPhone

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-brand-900 border border-gray-100 rounded-2xl p-8 md:p-10 text-center">

          {/* Header */}
          <p className="text-[11px] uppercase tracking-[0.12em] text-white font-semibold mb-3">
            Need Help?
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Still Have Questions?
          </h2>

          <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Our team is happy to guide you and answer any questions about your treatment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">

            {/* Primary */}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-900 text-white text-sm font-semibold hover:bg-brand-800 transition"
              >
                <Phone size={16} />
                Call Now
              </a>
            )}

            {/* Secondary */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-white text-sm font-semibold  transition"
            >
              <MessageCircle size={16} />
              Send Message
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}