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
}) {
  if (!image?.asset) return null

  const src = urlFor(image)
    .width(width)
    .height(height)
    .fit(fit)
    .auto('format')
    .url()

  const alt = image.alt || ''

  const defaultSizes =
    sizes ||
    "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={defaultSizes}
        className={className}
        priority={priority}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={defaultSizes}
      className={className}
      priority={priority}
      style={{ width: "100%", height: "auto" }}
    />
  )
}