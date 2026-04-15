import Link from 'next/link'
import SanityImage from '@/components/ui/SanityImage'

export default function BlogAuthorCard({ author }) {
  if (!author?.shortBio) return null

  return (
    <div className="mt-12">

      <div className="border border-gray-100 rounded-2xl p-5 bg-white">

        <div className="flex items-start gap-4">

          {/* Avatar */}
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            {author.image?.asset ? (
              <SanityImage
                image={author.image}
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm text-gray-700 font-semibold">
                {author.name?.[0]}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">

            {/* Name */}
            <p className="text-sm font-semibold text-gray-900">
              {author.name}
            </p>

            {/* Designation */}
            {author.designation && (
              <p className="text-xs text-gray-500 mt-0.5">
                {author.designation}
              </p>
            )}

            {/* Bio */}
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {author.shortBio}
            </p>

            {/* CTA */}
            {author.slug && (
              <Link
                href={`/team/${author.slug}`}
                className="inline-block mt-3 text-xs font-medium text-brand-600 hover:text-brand-700 transition"
              >
                View Profile →
              </Link>
            )}

          </div>

        </div>

      </div>

    </div>
  )
}