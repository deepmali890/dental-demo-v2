import SanityImage from '@/components/ui/SanityImage'

export default function AboutAffiliations({ about }) {
  const affiliations = about?.affiliations

  if (!affiliations?.length) return null

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2 sm:mb-3">
            Our Credentials
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            Affiliations & Certifications
          </h2>
        </div>

        {/* SCROLL WRAPPER */}
        <div className="relative">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* SCROLL CONTENT */}
          <div className="
            flex gap-4 sm:gap-6
            overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth
            pb-2
            scrollbar-hide
          ">

            {affiliations.map((a, i) => (
              <a
                key={i}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  min-w-[140px] sm:min-w-[160px] md:min-w-[180px]
                  snap-start
                  group border border-gray-100 rounded-xl sm:rounded-2xl
                  p-4 sm:p-5
                  flex flex-col items-center justify-center text-center
                  transition hover:border-gray-200 bg-white
                "
              >

                {/* Logo */}
                <div className="h-10 sm:h-12 flex items-center justify-center mb-2 sm:mb-3">
                  {a.logo?.asset ? (
                    <SanityImage
                      image={a.logo}
                      width={120}
                      height={60}
                      className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
                    />
                  ) : (
                    <span className="text-lg sm:text-xl">🏥</span>
                  )}
                </div>

                {/* Name */}
                <p className="text-[10px] sm:text-xs text-gray-500 group-hover:text-brand-600 transition leading-snug">
                  {a.name}
                </p>

              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}