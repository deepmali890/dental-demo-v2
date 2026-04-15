'use client'
// components/sections/FAQSection.jsx
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import PortableTextRenderer from '@/components/PortableTextRenderer'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 transition-transform">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {/* answer can be portable text array or plain string */}
          {Array.isArray(faq.answer)
            ? <PortableTextRenderer value={faq.answer} />
            : <p>{faq.answer}</p>
          }
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
    <section className="section" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
              Got Questions?
            </p>

            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
              {data?.sectionTitle || 'Frequently Asked Questions'}
            </h2>

            <p className="text-gray-500 text-sm md:text-base mt-3">
              Everything you need to know before your visit.
            </p>
          </div>
          <div className="space-y-3">
            {list.map((faq, idx) => (
              <FAQItem
                key={faq._id || idx}
                faq={faq}
                isOpen={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}