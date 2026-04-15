import React from 'react'
import PortableTextRenderer from '../PortableTextRenderer'
import { CheckCircle2 } from 'lucide-react'
import CTAButton from '../ui/CTAButton'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

export default function AboutSnippet({ data }) {
  if (!data?.heading) return null

  return (
    <section className="py-16 md:py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* Image */}
          {data.image?.asset && (
            <div className="relative max-w-md mx-auto w-full">

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={urlFor(data.image).width(700).height(875).url()}
                  alt={data.image.alt || 'About our clinic'}
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          )}

          {/* Content */}
          <div className="max-w-xl">

            {/* Label */}
            {data.sectionLabel && (
              <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
                {data.sectionLabel}
              </p>
            )}

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mb-4">
              {data.heading}
            </h2>

            {/* Description */}
            {data.description && (
              <div className="text-gray-600 text-sm leading-relaxed">
                <PortableTextRenderer value={data.description} />
              </div>
            )}

            {/* Features */}
            {data.features?.length > 0 && (
              <ul className="space-y-3 mt-6">

                {data.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">

                    <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center mt-0.5">
                      <CheckCircle2 size={14} className="text-brand-600" />
                    </div>

                    <span className="text-sm text-gray-700 leading-relaxed">
                      {f}
                    </span>

                  </li>
                ))}

              </ul>
            )}

            {/* CTA */}
            {data.cta && (
              <div className="mt-6">
                <CTAButton
                  data={data.cta}
                  className="!rounded-xl !px-6 !py-3 btn-primary"
                />
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}