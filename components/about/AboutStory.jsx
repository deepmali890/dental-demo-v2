import PortableTextRenderer from '@/components/PortableTextRenderer'
import SanityImage from '@/components/ui/SanityImage'

export default function AboutStory({ about }) {
  if (!about?.story) return null

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* IMAGE */}
          {about.story.image?.asset && (
            <div className="relative w-full flex justify-center lg:justify-start">

              <div className="relative w-full max-w-[420px] lg:max-w-none">

                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                  <SanityImage
                    image={about.story.image}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-gray-100 pointer-events-none" />

              </div>

            </div>
          )}

          {/* CONTENT */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">

            {/* Label */}
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2 sm:mb-3">
              Our Story
            </p>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-3 sm:mb-5">
              {about.story.heading || 'How We Started'}
            </h2>

            {/* Content */}
            <div className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed space-y-3 sm:space-y-4">
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