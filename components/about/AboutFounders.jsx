import Link from 'next/link'
import SanityImage from '@/components/ui/SanityImage'

export default function AboutFounders({ founders }) {
  if (!founders?.length) return null

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
            Leadership
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Meet the Founders
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-col gap-8 max-w-4xl mx-auto">

          {founders.map((doc) => (
            <Link
              key={doc._id}
              href={`/team/${doc.slug}`}
              className="group"
            >

              <div className="bg-white border border-gray-100 rounded-2xl p-6 transition hover:border-gray-200">

                {/* Top */}
                <div className="flex items-center gap-4 mb-4">

                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    {doc.profilePhoto?.asset ? (
                      <SanityImage
                        image={doc.profilePhoto}
                        fill
                        sizes="64px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xl">
                        👨‍⚕️
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand-600 transition truncate">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">
                      {doc.designation}
                    </p>
                  </div>

                </div>

                {/* Optional Bio */}
                {doc.shortBio && (
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {doc.shortBio}
                  </p>
                )}

                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-brand-600 font-medium">
                  View Profile →
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}