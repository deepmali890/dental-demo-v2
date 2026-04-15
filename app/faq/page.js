// /app/faq/page.jsx

import { getAllFAQs } from '@/sanity/lib/fetchData'
import FAQPageClient from './FAQPageClient'

export default async function FAQPage() {
  const faqs = await getAllFAQs()

  return <FAQPageClient faqs={faqs || []} />
}