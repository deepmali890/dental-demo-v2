import React from 'react'
import SanityImage from '../ui/SanityImage'

const ServiceGallery = ({ service }) => {
  if (!service.galleryImages?.length) return null

  return (
    <section className="space-y-6 sm:space-y-8">

      {/* Header */}
      <div>
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2">
          Our Work
        </p>

        <h2 className="
          text-xl sm:text-2xl md:text-[26px] 
          font-bold text-slate-900 
          tracking-tight
        ">
          Gallery
        </h2>
      </div>

      {/* Grid */}
      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-2 sm:gap-3
      ">

        {service.galleryImages.map((img, idx) => (
          <div
            key={idx}
            className={`
              group relative overflow-hidden 
              rounded-xl sm:rounded-2xl 
              bg-slate-100

              ${idx === 0 
                ? 'col-span-2 md:col-span-1 aspect-[4/3] md:aspect-square' 
                : 'aspect-square'
              }
            `}
          >

            {/* Image */}
            <SanityImage
              image={img.image || img}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
              className="
                object-cover 
                transition-transform duration-500 
                group-hover:scale-[1.04]
              "
            />

            {/* Overlay */}
            <div className="
              absolute inset-0 
              bg-brand-950/0 
              group-hover:bg-brand-950/20 
              transition-colors duration-300
            " />

            {/* Caption */}
            {img.caption && (
              <div className="
                absolute bottom-0 left-0 right-0 
                px-3 py-2 sm:px-4 sm:py-3
                translate-y-full group-hover:translate-y-0 
                transition-transform duration-300
                bg-gradient-to-t from-brand-950/80 to-transparent
              ">
                <p className="
                  text-[11px] sm:text-[12px] 
                  text-white/90 
                  font-medium 
                  leading-snug 
                  line-clamp-1
                ">
                  {img.caption}
                </p>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  )
}

export default ServiceGallery