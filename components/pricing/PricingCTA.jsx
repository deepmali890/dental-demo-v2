import React from 'react'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function PricingCTA() {
  return (
    <section className="relative py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900" />

          {/* Glow Effects */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-40px] right-[-20px] w-64 h-64 bg-cyan-400/10 rounded-full blur-[80px]" />

          {/* Overlay (depth) */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

          {/* Content */}
          <div className="relative z-10 px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 text-center">

            {/* Label */}
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-white/80 font-semibold mb-3">
              Need Help?
            </p>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-3">
              Need a Custom Treatment Plan?
            </h2>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
              Book a free consultation — our doctors will guide you and provide an exact cost estimate.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">

              {/* Primary */}
              <Link
                href="/contact"
                className="relative group w-full sm:w-auto"
              >
                <div className="absolute -inset-1 bg-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition" />

                <span className="
                  relative 
                  w-full sm:w-auto
                  bg-white text-slate-900 
                  px-6 sm:px-8 
                  py-3 sm:py-3.5 
                  rounded-xl 
                  font-semibold 
                  text-sm sm:text-base
                  flex items-center justify-center gap-2 
                  shadow-lg 
                  transition 
                  group-hover:scale-[1.03]
                ">
                  Get Free Estimate
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </span>
              </Link>

              {/* Secondary */}
              <a
                href="tel:+919999999999"
                className="
                  w-full sm:w-auto
                  bg-white/10 
                  text-white 
                  border border-white/20 
                  backdrop-blur-xl
                  px-6 sm:px-8 
                  py-3 sm:py-3.5 
                  rounded-xl 
                  font-semibold 
                  text-sm sm:text-base
                  flex items-center justify-center gap-2 
                  transition 
                  hover:bg-white/20
                "
              >
                <Phone size={16} />
                Call Now
              </a>

            </div>

          </div>

          {/* Bottom subtle line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />

        </div>

      </div>

    </section>
  )
}