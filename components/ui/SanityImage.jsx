// components/ui/SanityImage.jsx
// Wrapper around next/image that accepts Sanity image objects
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

export default function SanityImage({
  image,
  width  = 800,
  height = 600,
  fit    = 'crop',
  className = '',
  fill   = false,
  priority = false,
  sizes,
}) {
  if (!image?.asset) return null

  const src = urlFor(image)
    .width(width)
    .height(height)
    .fit(fit)
    .auto('format')
    .url()

  const alt = image.alt || ''

  if (fill) {
    return <Image src={src} alt={alt} fill className={className} priority={priority} sizes={sizes} />
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  )
}