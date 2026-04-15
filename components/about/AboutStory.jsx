import PortableTextRenderer from '@/components/PortableTextRenderer'
import SanityImage from '@/components/ui/SanityImage'

export default function AboutStory({ about }) {
  if (!about?.story) return null

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* IMAGE */}
          {about.story.image?.asset && (
            <div className="relative w-full">

              <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-gray-100">
                <SanityImage
                  image={about.story.image}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 rounded-2xl border border-gray-100 pointer-events-none" />

            </div>
          )}

          {/* CONTENT */}
          <div className="max-w-xl">

            {/* Label */}
            <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
              Our Story
            </p>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-5">
              {about.story.heading || 'How We Started'}
            </h2>

            {/* Content */}
            <div className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4">
              {about.story.content ? (
                <PortableTextRenderer value={about.story.content} />
              ) : (
                <p>
                  Our journey to deliver exceptional dental care with trust,
                  technology, and compassion.
                </p>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}