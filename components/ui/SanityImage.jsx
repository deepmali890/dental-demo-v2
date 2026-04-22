import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'


export default function SanityImage({
  image,
  width = 800,
  height = 600,
  fit = 'crop',
  className = '',
  fill = false,
  priority = false,
  sizes,
  context = 'default',
}) {
  if (!image?.asset) return null

  const contextWidth = {
    hero: 800,
    coverImage: 800,
    card: 400,
    gallery: 400,
    thumbnail: 200,
    avatar: 120,
    blog: 600,
    team: 400,
    service: 500,
    default: width,
  }


  const finalWidth = contextWidth[context] || width
  const src = urlFor(image)
    .width(finalWidth)
    .auto('format')
    .url()

  const alt = image.alt || ''

  const contextSizes = {
    hero: '100vw',
    coverImage: '(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw',
    card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    gallery: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px',
    thumbnail: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px',
    avatar: '(max-width: 640px) 64px, 96px',
    blog: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px',
    team: '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 300px',
    service: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px',
    default: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  }

  const resolvedSizes = sizes || contextSizes[context] || contextSizes.default

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={resolvedSizes}
        className={className}
        priority={priority}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={finalWidth}
      height={Math.round((finalWidth / width) * height)}
      sizes={resolvedSizes}
      className={className}
      priority={priority}
      style={{ width: '100%', height: 'auto' }}
    />
  )
}