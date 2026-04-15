'use client'

import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import CTAButton from '@/components/ui/CTAButton'

export default function CTABanner({ data }) {
  if (!data) return null

  return (
    <section className="relative my-16 lg:my-24 px-4 sm:px-6 lg:px-8">

      <div className="relative overflow-hidden rounded-xl bg-brand-900 text-white">

        {/* Background Image */}
        {data.backgroundImage?.asset && (
          <Image
            src={urlFor(data.backgroundImage).width(1600).height(600).url()}
            alt={data.backgroundImage?.alt || 'CTA'}
            fill
            className="object-cover opacity-25"
            priority
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900/90 to-brand-800" />

        {/* Soft Glow (Premium touch, controlled) */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-10 w-56 h-56 bg-indigo-400/10 rounded-full blur-[60px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-16 lg:py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-6">

              {data.heading && (
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                  {data.heading}
                </h2>
              )}

              {data.subtext && (
                <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                  {data.subtext}
                </p>
              )}

            </div>

            {/* RIGHT CTA (Improved alignment) */}
            <div className="flex justify-center lg:justify-end">

              <div className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 shadow-lg">

                <div className="flex flex-col sm:flex-row lg:flex-col gap-4">

                  {data.primaryCta && (
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                      <CTAButton
                        data={data.primaryCta}
                        className="relative w-full !bg-white !text-slate-900 !py-5 !rounded-xl !text-md md:!px-8 !font-black shadow-xl hover:!scale-[1.02] transition-all flex items-center justify-center gap-2"
                      />
                    </div>
                  )}

                  {data.secondaryCta && (
                    <CTAButton
                      data={data.secondaryCta}
                      className="w-full !bg-white/5 !text-white !border-2 !border-white/10 !backdrop-blur-xl  !py-5 !rounded-xl !text-md !font-black hover:!bg-white/10 transition-all flex items-center justify-center gap-2"
                    />
                  )}

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Bottom subtle line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />

      </div>
    </section>
  )
}