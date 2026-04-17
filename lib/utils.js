import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(...inputs))
}

export function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function truncate(str, n = 100) {
  if (!str) return ''
  return str.length > n
    ? str.slice(0, n).trimEnd() + '…'
    : str
}

export function estimateReadTime(blocks) {
  if (!Array.isArray(blocks)) return 1

  const words = blocks
    .filter(b => b._type === 'block')
    .flatMap(b => b.children || [])
    .map(c => c.text || '')
    .join(' ')
    .split(/\s+/).length

  return Math.max(1, Math.ceil(words / 200))
}

export function buildServiceSchema({ service, siteUrl, clinicName }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.title,
    description: service.shortDescription,
    url: `${siteUrl}/services/${service.slug}`,
    provider: {
      '@type': 'Dentist',
      name: clinicName,
    },
  }
}

export function buildArticleSchema({ post, siteUrl, clinicName }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: post.title,
    description: post.excerpt,
    url: `${siteUrl}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    author: post.author
      ? { '@type': 'Person', name: post.author.name }
      : { '@type': 'Organization', name: clinicName },
  }
}

export function buildLocalBusinessSchema({ clinicInfo, siteUrl }) {
  const c = clinicInfo

  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: c?.clinicName,
    url: siteUrl,
    telephone: c?.contact?.primaryPhone,
    email: c?.contact?.email,

    address: c?.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: c.address.street,
          addressLocality: c.address.city,
          addressRegion: c.address.state,
          postalCode: c.address.pincode,
          addressCountry: 'IN',
        }
      : undefined,

    openingHoursSpecification: c?.openingHours
      ?.filter(h => !h.isClosed)
      .map(h => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${h.day}`,
        opens: h.openTime,
        closes: h.closeTime,
      })),
  }
}