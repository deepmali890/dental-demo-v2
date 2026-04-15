import SanityImage from '@/components/ui/SanityImage'

export default function AboutTechnology({ about }) {
  const tech = about?.technology

  if (!tech?.items?.length) return null

  return (
    <section className="py-16  md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
            Advanced Care
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Technology & Equipment
          </h2>

          {tech.description && (
            <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed">
              {tech.description}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {tech.items.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden transition hover:border-gray-200"
            >

              {/* Image */}
              {item.image?.asset && (
                <div className="relative h-44 w-full overflow-hidden">
                  <SanityImage
                    image={item.image}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5">

                <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
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