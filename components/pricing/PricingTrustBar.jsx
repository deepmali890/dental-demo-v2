import React from 'react'
import { ShieldCheck, CreditCard, BadgeCheck, Stethoscope } from 'lucide-react'

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    text: 'No Hidden Charges',
  },
  {
    icon: CreditCard,
    text: 'EMI Available',
  },
  {
    icon: BadgeCheck,
    text: 'Insurance Accepted',
  },
  {
    icon: Stethoscope,
    text: 'Free Consultation',
  },
]

export default function PricingTrustBar() {
  return (
    <section className="border-y border-gray-100 bg-brand-50/40">
      <div className="max-w-6xl mx-auto px-4 py-5">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon

            return (
              <div
                key={i}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                {/* Icon */}
                <div className="w-9 h-9 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-brand-600">
                  <Icon size={16} />
                </div>

                {/* Text */}
                <p className="text-sm font-medium text-gray-700 leading-tight">
                  {item.text}
                </p>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}