'use client'

import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import CTAButton from '@/components/ui/CTAButton'

export default function CTABanner({ data }) {
  if (!data) return null

  return (
    <section className="relative my-10 sm:my-14 lg:my-20 px-4 sm:px-6 lg:px-8">

      <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-brand-900 text-white">

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

        {/* Glow */}
        <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-[60px] sm:blur-[80px]" />
        <div className="absolute bottom-0 left-6 sm:left-10 w-40 sm:w-56 h-40 sm:h-56 bg-indigo-400/10 rounded-full blur-[40px] sm:blur-[60px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 lg:py-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

            {/* LEFT */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-4 sm:space-y-6">

              {data.heading && (
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  {data.heading}
                </h2>
              )}

              {data.subtext && (
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed">
                  {data.subtext}
                </p>
              )}

            </div>

            {/* RIGHT CTA */}
            <div className="flex justify-center lg:justify-end">

              <div className="w-full max-w-md sm:max-w-lg lg:max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg">

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4">

                  {data.primaryCta && (
                    <div className="relative group w-full">
                      <div className="absolute -inset-1 bg-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                      <CTAButton
                        data={data.primaryCta}
                        className="relative w-full !bg-white !text-slate-900 !py-3 sm:!py-4 lg:!py-5 !rounded-xl !text-sm sm:!text-base !font-bold shadow-xl hover:!scale-[1.02] transition-all flex items-center justify-center gap-2"
                      />
                    </div>
                  )}

                  {data.secondaryCta && (
                    <CTAButton
                      data={data.secondaryCta}
                      className="w-full !bg-white/5 !text-white !border-2 !border-white/10 !backdrop-blur-xl !py-3 sm:!py-4 lg:!py-5 !rounded-xl !text-sm sm:!text-base !font-bold hover:!bg-white/10 transition-all flex items-center justify-center gap-2"
                    />
                  )}

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />

      </div>
    </section>
  )
}