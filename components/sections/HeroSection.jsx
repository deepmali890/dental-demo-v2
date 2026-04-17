import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { CheckCircle2, Phone, Star, Sparkles, MessageCircle } from 'lucide-react'
import CTAButton from '../ui/CTAButton'

export default function HeroSection({ data, clinicInfo }) {
  const phone =
    clinicInfo?.contact?.whatsapp ||
    clinicInfo?.contact?.primaryPhone

  const stats = clinicInfo?.stats?.slice(0, 3) || []

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-50 pt-20 lg:pt-30 pb-16 lg:pb-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Glow blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-blue-100/50 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-cyan-50/60 blur-[100px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Geometric panel */}
        <div className="absolute top-0 right-0 h-full w-1/3 bg-white skew-x-[-12deg] translate-x-32 shadow-[0_0_80px_rgba(0,0,0,0.02)] hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto mx-auto relative  z-10  px-4 ">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">

          {/* LEFT */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start">

            {/* Badge */}
            {data.badge && (
              <div className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 mb-8 transition hover:bg-blue-100/60">
                <span className="text-xs font-bold tracking-widest text-blue-900 uppercase">
                  {data.badge}
                </span>
              </div>
            )}

            {/* Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
              {data.heading?.split(data.headingHighlight).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && data.headingHighlight && (
                    <span className="relative inline-block text-blue-600">
                      {data.headingHighlight}
                      <svg className="absolute -bottom-2 left-0 w-full opacity-30" viewBox="0 0 358 12" fill="none">
                        <path d="M3 9C118.957 4.47226 238.497 2.4933 355 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                      </svg>
                    </span>
                  )}
                </React.Fragment>
              ))}
            </h1>

            {/* Subheading */}
            {data.subheading && (
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 lg:text-xl font-medium">
                {data.subheading}
              </p>
            )}

            {/* Trust */}
            {data.trustIndicators?.length > 0 && (
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {data.trustIndicators.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">

              {data.primaryCta && (
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-blue-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition"></div>
                  <CTAButton
                    data={data.primaryCta}
                    className="relative w-full sm:w-auto !bg-blue-600 !text-white !px-8 !py-4 !rounded-xl !font-bold flex items-center justify-center gap-2 hover:!bg-blue-700 transition "
                  />
                </div>
              )}

              {data.secondaryCta && (
                <CTAButton
                  data={data.secondaryCta}
                  className="w-full sm:w-auto !bg-white !text-slate-900 !border-2 !border-slate-100 !px-8 !py-4 !rounded-xl !font-bold hover:!bg-slate-50 transition"
                />
              )}

            </div>

            {/* WhatsApp */}
            {phone && (
              <a
                href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-3 group px-4 py-2 rounded-lg hover:bg-white/50 transition"
              >
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <MessageCircle size={18} />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600">
                   {phone}
                  </span>
                </div>
              </a>
            )}

          </div>

          {/* RIGHT */}
          <div className="relative lg:col-span-5 xl:col-span-6">
            <div className="relative mx-auto max-w-[500px]">

              {/* Image */}
              <div className="relative overflow-hidden rounded-[3rem] border-[12px] border-white shadow-xl aspect-[4/5]">
                {data.heroImage?.asset ? (
                  <Image
                    src={urlFor(data.heroImage).width(1000).height(1250).url()}
                    alt={data.heroImage.alt || 'Dental'}
                    fill
                    className="object-cover "
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-6xl">🦷</div>
                )}
              </div>

              {/* Stats */}
              {stats.length > 0 && (
                <div className="absolute -bottom-8 -left-4 hidden sm:flex gap-6 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center px-3 border-r last:border-0">
                      <div className="text-xl font-bold text-blue-600">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

    </section>
  )
}