// components/ui/PageHero.jsx
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

export default function PageHero({ title, subtitle, image, badge, children }) {
  return (
    <section className="relative bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white py-16 md:py-24 overflow-hidden">
      {image?.asset && (
        <>
          <Image
            src={urlFor(image).width(1440).height(500).url()}
            alt={image.alt || title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-900/60" />
        </>
      )}
      {/* Decorative blob */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-700/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative container mx-auto px-4 text-center">
        {badge && (
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">{title}</h1>
        {subtitle && <p className="text-brand-200 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}