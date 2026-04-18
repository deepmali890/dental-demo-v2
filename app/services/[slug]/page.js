import { notFound } from 'next/navigation'
import { urlFor } from '@/sanity/lib/client'

import { buildServiceSchema } from '@/lib/utils'
import { getAllServiceSlugs, getServiceBySlug } from '@/sanity/lib/fetchData'

import FAQSection from '@/components/sections/FAQSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceContent from '@/components/services/ServiceContent'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceProcedure from '@/components/services/ServiceProcedure'
import ServiceGallery from '@/components/services/ServiceGallery'
import ServiceDoctors from '@/components/services/ServiceDoctors'
import ServicePricing from '@/components/services/ServicePricing'
import ServiceCTA from '@/components/services/ServiceCTA'
import ServiceRelated from '@/components/services/ServiceRelated'
import ServiceBeforeAfter from '@/components/services/ServiceBeforeAfter'
import TestimonialsCarousel from '@/components/services/TestimonialsCarousel '

export const revalidate = 3600

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs()

  return slugs.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params

  const service = await getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.seo?.metaTitle || service.title,
    description: service.seo?.metaDescription || service.shortDescription,
    openGraph: service.seo?.ogImage?.asset
      ? {
        images: [
          urlFor(service.seo.ogImage)
            .width(1200)
            .height(630)
            .url(),
        ],
      }
      : undefined,
  }
}

const ServiceDetailPage = async ({ params }) => {
  const { slug } = await params

  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || ''

  const jsonLd = buildServiceSchema({
    service,
    siteUrl,
    clinicName: 'Dental Clinic',
  })

  const hasFaqs = service.faqs?.length > 0
  const hasTestimonials = service.testimonials?.length > 0


  return (
    <>
      <ServiceHero service={service} jsonLd={jsonLd} />

      <section className="section  bg-white md:px-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

            <div className="space-y-12 lg:col-span-2">
              <ServiceContent service={service} />
              <ServiceBenefits service={service} />
              <ServiceProcedure service={service} />
              <ServiceGallery service={service} />
              <ServiceDoctors service={service} />
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <ServicePricing service={service} />
                <ServiceCTA service={service} />
                <ServiceRelated service={service} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {hasFaqs && (
        <FAQSection
          data={{ sectionTitle: `${service.title} — FAQs` }}
          faqs={service.faqs}
        />
      )}

      {hasTestimonials && (
        <TestimonialsCarousel
          testimonials={service.testimonials}
          title={`What Patients Say About ${service.title}`}
        />
      )}

      <ServiceBeforeAfter service={service} />
    </>
  )
}

export default ServiceDetailPage