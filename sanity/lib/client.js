import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-04-10',
  useCdn: process.env.NODE_ENV === 'production',
})


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export function getSanityImageProps(image, type = 'default') {
  if (!image?.asset) return { src: '/images/placeholder.jpg', alt: '' }

  const configs = {
    cover: { width: 1200, height: 630 },
    card: { width: 600, height: 400 },
    thumb: { width: 200, height: 200 },
    profile: { width: 400, height: 400 },
    hero: { width: 1920, height: 1080 },
    default: { width: 800, height: 600 },
  }

  const { width, height } = configs[type] || configs.default

  return {
    src: urlFor(image).width(width).height(height).fit('crop').auto('format').url(),
    alt: image.alt || '',
    width,
    height,
    blurDataURL: urlFor(image).width(20).height(20).blur(10).url(),
    placeholder: 'blur',
  }
}