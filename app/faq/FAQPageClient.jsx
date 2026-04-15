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
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Clear answers to help you understand treatments and care."
        badge="Patient Help Center"
      />

      <FAQStatsBar total={faqs.length} categories={grouped.length} />

      <FAQCategoryGrid
        grouped={grouped}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <FAQSection
        data={{ sectionTitle: 'All Questions' }}
        faqs={filteredFaqs}
      />

      <FAQCTA />
    </>
  )
}