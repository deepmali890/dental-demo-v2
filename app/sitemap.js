

import { getSitemapData } from '@/sanity/lib/fetchData'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

export default async function sitemap() {
  const data = await getSitemapData()

  // Static pages
  const staticPages = [
    { url: `${BASE_URL}`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/team`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/gallery`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/pricing`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/faq`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
  ].map(p => ({ ...p, lastModified: new Date() }))


  // Dynamic service pages
  const servicePages = (data?.services || []).map(s => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(s._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))


  // Dynamic blog pages
  const blogPages = (data?.blogs || []).map(b => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastModified: new Date(b._updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Dynamic doctor pages
  const doctorPages = (data?.doctors || []).map(d => ({
    url: `${BASE_URL}/team/${d.slug}`,
    lastModified: new Date(d._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...blogPages, ...doctorPages]
}

