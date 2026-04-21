import React from 'react'
import { ShieldCheck, CreditCard, BadgeCheck, Stethoscope } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: ShieldCheck, text: 'No Hidden Charges' },
  { icon: CreditCard, text: 'EMI Available' },
  { icon: BadgeCheck, text: 'Insurance Accepted' },
  { icon: Stethoscope, text: 'Free Consultation' },
]

export default function PricingTrustBar() {
  return (
    <section className="border-y border-gray-100 bg-brand-50/40">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">

        <div className="
          grid 
          grid-cols-2 
          md:grid-cols-2 
          lg:flex 
          lg:items-center 
          lg:justify-between 
          gap-3 sm:gap-5
        ">

          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon

            return (
              <div
                key={i}
                className="
                  flex items-center gap-3
                  w-full
                  min-w-0

                  /* MOBILE + TABLET CARD */
                  bg-white 
                  px-3 py-2 sm:px-4 sm:py-3
                  rounded-lg
                  border border-gray-100

                  /* DESKTOP CLEAN STRIP */
                  lg:bg-transparent
                  lg:p-0
                  lg:border-0
                "
              >

                {/* Icon */}
                <div className="
                  w-8 h-8 sm:w-9 sm:h-9 
                  flex-shrink-0
                  rounded-lg sm:rounded-xl 
                  bg-white border border-gray-100 
                  flex items-center justify-center 
                  text-brand-600
                ">
                  <Icon size={16} />
                </div>

                {/* Text */}
                <p className="
                  text-xs sm:text-sm 
                  font-medium text-gray-700 
                  leading-tight
                  break-words
                ">
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