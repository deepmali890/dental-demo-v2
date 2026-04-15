
export default function robots() {
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/studio/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}