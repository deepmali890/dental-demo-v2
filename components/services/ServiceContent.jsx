import React from 'react'
import PortableTextRenderer from '../PortableTextRenderer'

const ServiceContent = ({ service }) => {
  if (!service.fullDescription) return null

  return (
    <section className="space-y-8 sm:space-y-10">

      {/* Top Divider */}
      <div className="h-px bg-gray-100" />

      {/* Content Wrapper */}
      <div className="w-full max-w-none lg:max-w-3xl">

        <div
          className="
            prose max-w-none

            /* Typography Scaling */
            prose-sm sm:prose-base lg:prose-lg

            /* Headings */
            prose-headings:font-semibold
            prose-headings:text-gray-900
            prose-headings:tracking-tight
            prose-headings:leading-tight

            /* Paragraph */
            prose-p:text-gray-600
            prose-p:leading-relaxed

            /* Strong */
            prose-strong:text-gray-900

            /* Links */
            prose-a:text-brand-600
            prose-a:no-underline
            hover:prose-a:underline

            /* Lists */
            prose-li:text-gray-600

            /* Spacing control */
            prose-headings:mt-6
            prose-headings:mb-3
            prose-p:my-3
          "
        >
          <PortableTextRenderer value={service.fullDescription} />
        </div>

      </div>

      {/* Bottom Divider */}
      <div className="h-px bg-gray-100" />

    </section>
  )
}

export default ServiceContent