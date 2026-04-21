import Link from 'next/link'
import SanityImage from '@/components/ui/SanityImage'

export default function BlogAuthorCard({ author }) {
  if (!author?.shortBio) return null

  return (
    <div className="mt-10 sm:mt-12">

      <div className="
        bg-white 
        border border-gray-100 
        rounded-xl sm:rounded-2xl 
        p-4 sm:p-5
        transition
      ">

        <div className="flex items-start gap-3 sm:gap-4">

          {/* Avatar */}
          <div className="
            w-12 h-12 sm:w-14 sm:h-14 
            rounded-full 
            overflow-hidden 
            bg-gray-100 
            flex-shrink-0
          ">
            {author.image?.asset ? (
              <SanityImage
                image={author.image}
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="
                w-full h-full 
                flex items-center justify-center 
                text-sm font-semibold text-gray-700
              ">
                {author.name?.[0]}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">

            {/* Name */}
            <p className="
              text-sm sm:text-base 
              font-semibold 
              text-gray-900
              truncate
            ">
              {author.name}
            </p>

            {/* Designation */}
            {author.designation && (
              <p className="
                text-xs sm:text-sm 
                text-gray-500 
                mt-0.5
                truncate
              ">
                {author.designation}
              </p>
            )}

            {/* Bio */}
            <p className="
              text-xs sm:text-sm 
              text-gray-600 
              mt-2 sm:mt-3 
              leading-relaxed
            ">
              {author.shortBio}
            </p>

            {/* CTA */}
            {author.slug && (
              <Link
                href={`/team/${author.slug}`}
                className="
                  inline-flex items-center gap-1
                  mt-3 
                  text-xs sm:text-sm 
                  font-medium 
                  text-brand-600 
                  hover:text-brand-700 
                  transition
                "
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