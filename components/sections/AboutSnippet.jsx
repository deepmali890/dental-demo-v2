import React from 'react'
import PortableTextRenderer from '../PortableTextRenderer'
import { CheckCircle2 } from 'lucide-react'
import CTAButton from '../ui/CTAButton'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

export default function AboutSnippet({ data }) {
  if (!data?.heading) return null

  return (
    <section className="py-12 md:py-24 bg-gray-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

          <div className="w-full lg:w-1/2">
            {data.sectionLabel && (
              <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs font-bold tracking-widest uppercase rounded-full mb-5">
                {data.sectionLabel}
              </span>
            )}

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              {data.heading}
            </h2>

            {data.description && (
              <div className="text-gray-600 text-lg leading-relaxed mb-8  border-brand-200">
                <PortableTextRenderer value={data.description} />
              </div>
            )}

            {data.features?.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {data.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200/80">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {data.cta && (
              <div>
                <CTAButton
                  data={data.cta}
                  className="btn-primary"
                />
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2 relative">
            {data.image?.asset && (
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-100 rounded-[2.5rem] rotate-3 -z-10" />
                <div className="relative aspect-square md:aspect-[4/4] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src={urlFor(data.image).width(800).auto('format').url()}
                    alt={data.image.alt || 'About Deeprise'}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 bg-white p-6 rounded-2xl  hidden md:block border border-gray-50">
                  <div className="text-brand-600 font-bold text-2xl">100%</div>
                  <div className="text-gray-500 text-xs uppercase tracking-tighter">Client Satisfaction</div>
                </div>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}