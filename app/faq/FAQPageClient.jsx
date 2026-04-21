'use client'

import React, { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import FAQSection from '@/components/sections/FAQSection'
import FAQStatsBar from '@/components/faq/FAQStatsBar'
import FAQCategoryGrid from '@/components/faq/FAQCategoryGrid'
import FAQCTA from '@/components/faq/FAQCTA'

import {
  MessageCircle,
  Calendar,
  Stethoscope,
  CreditCard,
  Baby,
  AlertTriangle,
  HeartPulse,
} from 'lucide-react'

export default function FAQPageClient({ faqs }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { value: 'all', label: 'All Questions', icon: MessageCircle },
    { value: 'general', label: 'General', icon: MessageCircle },
    { value: 'appointments', label: 'Appointments', icon: Calendar },
    { value: 'treatments', label: 'Treatments', icon: Stethoscope },
    { value: 'costs', label: 'Costs & Insurance', icon: CreditCard },
    { value: 'children', label: 'Children', icon: Baby },
    { value: 'emergencies', label: 'Emergencies', icon: AlertTriangle },
    { value: 'aftercare', label: 'After Care', icon: HeartPulse },
  ]

  const grouped = categories.slice(1).reduce((acc, cat) => {
    const group = faqs?.filter(f => f.category === cat.value) || []
    if (group.length) acc.push({ ...cat, faqs: group })
    return acc
  }, [])

  const filteredFaqs =
    activeCategory === 'all'
      ? faqs
      : faqs.filter(f => f.category === activeCategory)

  return (
    <div className="bg-white">

      {/* HERO */}
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Clear answers to help you understand treatments and care."
        badge="Patient Help Center"
      />

      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* STATS */}
        <div className="mt-10 sm:mt-12 md:mt-14">
          <FAQStatsBar 
            total={faqs.length} 
            categories={grouped.length} 
          />
        </div>

        {/* CATEGORY GRID */}
        <div className="mt-10 sm:mt-12">
          <FAQCategoryGrid
            grouped={grouped}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

      </div>

      <div className="mt-12 sm:mt-14 md:mt-16">
        <FAQSection
          data={{ sectionTitle: 'All Questions' }}
          faqs={filteredFaqs}
        />
      </div>

      {/* CTA */}
      <div className="mt-12 sm:mt-14 md:mt-16">
        <FAQCTA />
      </div>

    </div>
  )
}