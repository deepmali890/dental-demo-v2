'use client'

import { urlFor } from '@/sanity/lib/client'
import { Images, Play, X } from 'lucide-react'
import Image from 'next/image'
import { useState, useCallback, lazy, Suspense } from 'react'

const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'clinic', label: 'Clinic' },
  { value: 'equipment', label: 'Equipment' },
  { value: 'team', label: 'Team' },
  { value: 'smiles', label: 'Smile Stories' },
  { value: 'events', label: 'Events' },
]

/* ---------- Lightbox — inline (small enough) ---------- */
function Lightbox({ item, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-6 right-6 text-white/70 hover:text-white"
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      <div
        className="max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={urlFor(item.image).width(1400).url()}
          alt={item.title}
          width={1400}
          height={900}
          className="w-full max-h-[80vh] object-contain rounded-xl"
        />

        {item.title && (
          <p className="text-white text-center mt-4 text-sm">{item.title}</p>
        )}
      </div>
    </div>
  )
}

export default function GalleryGrid({ items }) {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered =
    active === 'all' ? items : items?.filter((i) => i.category === active)

  const openLightbox = useCallback((item) => {
    setLightbox(item)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
  }, [])

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">

        {/* Tabs */}
        <div className="flex gap-6 overflow-x-auto mb-10 border-b border-gray-100 pb-3 text-sm">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.value
            return (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`whitespace-nowrap pb-2 transition ${
                  isActive
                    ? 'text-gray-900 border-b-2 border-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        {filtered?.length > 0 ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item._id}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => item.mediaType !== 'video' && openLightbox(item)}
              >
                {/* VIDEO */}
                {item.mediaType === 'video' ? (
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                  >
                    {item.videoThumbnail?.asset ? (
                      <Image
                        src={urlFor(item.videoThumbnail).width(500).auto('format').url()}
                        alt={item.title}
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    ) : (
                      <div className="aspect-video bg-gray-100 flex items-center justify-center">
                        <Play size={32} className="text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                        <Play size={18} className="text-gray-900 ml-0.5" />
                      </div>
                    </div>
                  </a>
                ) : item.image?.asset ? (
                  <>
                    <Image
                      src={urlFor(item.image).width(500).auto('format').url()}
                      alt={item.image?.alt || item.title}
                      width={500}
                      height={400}
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition line-clamp-2">
                        {item.title}
                      </p>
                    </div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 flex flex-col items-center text-gray-400">
            <Images size={40} />
            <p className="mt-3 text-sm">No images in this category yet.</p>
          </div>
        )}

        {/* Lightbox — only rendered when open */}
        {lightbox && <Lightbox item={lightbox} onClose={closeLightbox} />}
      </div>
    </section>
  )
}