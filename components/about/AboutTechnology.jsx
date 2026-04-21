import SanityImage from '@/components/ui/SanityImage'

export default function AboutTechnology({ about }) {
  const tech = about?.technology

  if (!tech?.items?.length) return null

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2 sm:mb-3">
            Advanced Care
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            Technology & Equipment
          </h2>

          {tech.description && (
            <p className="text-gray-500 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed">
              {tech.description}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          {tech.items.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden transition hover:border-gray-200"
            >

              {/* Image */}
              {item.image?.asset && (
                <div className="relative h-40 sm:h-44 w-full overflow-hidden">
                  <SanityImage
                    image={item.image}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-4 sm:p-5">

                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-brand-600 transition leading-tight">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}