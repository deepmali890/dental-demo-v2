import SanityImage from '@/components/ui/SanityImage'

export default function AboutAffiliations({ about }) {
  const affiliations = about?.affiliations

  if (!affiliations?.length) return null

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
            Our Credentials
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Affiliations & Certifications
          </h2>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

          {affiliations.map((a, i) => (
            <a
              key={i}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition hover:border-gray-200"
            >

              {/* Logo */}
              <div className="h-12 flex items-center justify-center mb-3">
                {a.logo?.asset ? (
                  <SanityImage
                    image={a.logo}
                    width={120}
                    height={60}
                    className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
                  />
                ) : (
                  <span className="text-xl">🏥</span>
                )}
              </div>

              {/* Name */}
              <p className="text-xs text-gray-500 group-hover:text-brand-600 transition leading-snug">
                {a.name}
              </p>

            </a>
          ))}

        </div>

      </div>
    </section>
  )
}