import Link from 'next/link'
import SanityImage from '@/components/ui/SanityImage'

export default function AboutFounders({ founders }) {
  if (!founders?.length) return null

  const doc = founders[0]

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2 sm:mb-3">
            Leadership
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            Meet the Founder
          </h2>
        </div>

        {/* Single Card */}
        <Link
          href={`/team/${doc.slug}`}
          className="group block"
        >
          <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition hover:border-gray-200 max-w-2xl mx-auto">

            {/* Top */}
            <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-5">

              {/* Image */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                {doc.profilePhoto?.asset ? (
                  <SanityImage
                    image={doc.profilePhoto}
                    fill
                    sizes="(max-width:640px) 64px, (max-width:768px) 80px, 96px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-lg sm:text-xl">
                    👨‍⚕️
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition">
                  {doc.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {doc.designation}
                </p>
              </div>

            </div>

            {/* Bio */}
            {doc.shortBio && (
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed line-clamp-4">
                {doc.shortBio}
              </p>
            )}

            {/* CTA */}
            <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-100 text-sm text-brand-600 font-medium">
              View Profile →
            </div>

          </div>
        </Link>

      </div>
    </section>
  )
}