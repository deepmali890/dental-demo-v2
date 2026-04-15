import React from 'react'
import PortableTextRenderer from '../PortableTextRenderer'

const ServiceContent = ({ service }) => {
  if (!service.fullDescription) return null

  return (
    <section className="space-y-10">

      {/* Top Divider */}
      <div className="h-px bg-gray-100" />

      {/* Content */}
      <div className="max-w-3xl">

        <div className="prose max-w-none
          prose-headings:font-semibold
          prose-headings:text-gray-900
          prose-headings:tracking-tight
          prose-p:text-gray-600
          prose-p:leading-relaxed
          prose-strong:text-gray-900
          prose-a:text-brand-600
          prose-a:no-underline hover:prose-a:underline
          prose-li:text-gray-600
        ">
          <PortableTextRenderer value={service.fullDescription} />
        </div>

      </div>

      {/* Bottom Divider */}
      <div className="h-px bg-gray-100" />

    </section>
  )
}

export default ServiceContent