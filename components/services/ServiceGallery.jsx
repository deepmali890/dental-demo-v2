import React from 'react'
import SanityImage from '../ui/SanityImage'

const ServiceGallery = ({ service }) => {
    return (
        <div>
            {/* Gallery */}
            {service.galleryImages?.length > 0 && (
                <div>

                    {/* Header */}
                    <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2">
                        Our Work
                    </p>
                    <h2 className="text-[26px] font-bold text-slate-900 tracking-tight mb-7">
                        Gallery
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {service.galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`group relative overflow-hidden rounded-2xl bg-slate-100
            ${idx === 0 ? 'col-span-2 md:col-span-1 aspect-[4/3] md:aspect-square' : 'aspect-square'}
          `}
                            >
                                <SanityImage
                                    image={img.image || img}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-brand-950/0 group-hover:bg-brand-950/20 
            transition-colors duration-300" />

                                {/* Caption on hover */}
                                {img.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 
              translate-y-full group-hover:translate-y-0 transition-transform duration-300
              bg-gradient-to-t from-brand-950/80 to-transparent">
                                        <p className="text-[12px] text-white/90 font-medium leading-snug line-clamp-1">
                                            {img.caption}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>
    )
}

export default ServiceGallery
