import React from 'react'
import PageHero from '@/components/ui/PageHero'
import PricingTrustBar from '@/components/pricing/PricingTrustBar'
import ServicePricingList from '@/components/pricing/ServicePricingList'
import PricingPlansSection from '@/components/pricing/PricingPlansSection'
import PricingCTA from '@/components/pricing/PricingCTA'
import { getAllPricingPlans, getAllServices } from '@/sanity/lib/fetchData'

export const revalidate = 3600

export default async function page() {
  const [plans, services] = await Promise.all([
    getAllPricingPlans(),
    getAllServices(),
  ])

  return (
    <>
      <PageHero
        title="Transparent Pricing"
        subtitle="No hidden costs. Quality dental care at affordable rates — know exactly what you pay."
        badge="💰 Honest Pricing"
      />

      <PricingTrustBar />

      <ServicePricingList services={services} />

      <PricingPlansSection
        title="Flexible Pricing Plans"
        subtitle="Choose the plan that fits your needs"
        label="Our Plans"
        plans={plans}
      />

      <PricingCTA />
    </>
  )
}