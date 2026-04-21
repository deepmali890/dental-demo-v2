'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import PortableTextRenderer from '@/components/PortableTextRenderer'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="
      rounded-xl sm:rounded-2xl 
      border border-gray-100 
      bg-white
      overflow-hidden
      transition
    ">

      {/* Button */}
      <button
        onClick={onToggle}
        className="
          w-full 
          flex items-start sm:items-center 
          justify-between 
          gap-3 sm:gap-4 
          px-4 sm:px-5 
          py-4 sm:py-5 
          text-left
          active:scale-[0.99]
          transition
        "
      >

        {/* Question */}
        <span className="
          font-medium sm:font-semibold 
          text-gray-900 
          text-sm sm:text-base 
          leading-snug 
          pr-2 sm:pr-4
        ">
          {faq.question}
        </span>

        {/* Icon */}
        <span className="
          flex-shrink-0 
          w-7 h-7 sm:w-8 sm:h-8 
          rounded-full 
          bg-brand-50 
          flex items-center justify-center 
          text-brand-600
          transition
        ">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>

      </button>

      {/* Answer */}
      <div
        className={`
          grid 
          transition-all duration-300 ease-in-out
          ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden">

          <div className="
            px-4 sm:px-5 
            pb-4 sm:pb-5 
            pt-1 sm:pt-2
            text-gray-600 
            text-xs sm:text-sm 
            leading-relaxed 
            border-t border-gray-100
          ">

            {Array.isArray(faq.answer)
              ? <PortableTextRenderer value={faq.answer} />
              : <p>{faq.answer}</p>
            }

          </div>

        </div>
      </div>

    </div>
  )
}

export default function FAQSection({ data, faqs }) {
  const [openIdx, setOpenIdx] = useState(null)
  const list = faqs || []

  if (!list.length) return null

  return (
    <section className="py-14 sm:py-16 lg:py-20" id="faq">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">

            <p className="
              text-[10px] sm:text-[11px] 
              uppercase tracking-[0.12em] 
              text-brand-600 
              font-semibold 
              mb-2 sm:mb-3
            ">
              Got Questions?
            </p>

            <h2 className="
              text-xl sm:text-2xl md:text-3xl lg:text-4xl 
              font-semibold 
              text-gray-900
            ">
              {data?.sectionTitle || 'Frequently Asked Questions'}
            </h2>

            <p className="
              text-gray-500 
              text-xs sm:text-sm md:text-base 
              mt-2 sm:mt-3
            ">
              Everything you need to know before your visit.
            </p>

          </div>

          {/* FAQ List */}
          <div className="space-y-3 sm:space-y-4">
            {list.map((faq, idx) => (
              <FAQItem
                key={faq._id || idx}
                faq={faq}
                isOpen={openIdx === idx}
                onToggle={() =>
                  setOpenIdx(openIdx === idx ? null : idx)
                }
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}