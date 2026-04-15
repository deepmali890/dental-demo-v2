// seo.js — Reusable SEO object

export const seoObject = {
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Displayed in browser tab and search engine results (50–60 characters recommended)',
      validation: (Rule) =>
        Rule.max(60).warning('Titles longer than 60 characters may be truncated by search engines'),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Appears in search engine result snippets (150–160 characters recommended)',
      validation: (Rule) =>
        Rule.max(160).warning('Descriptions should not exceed 160 characters'),
    },
    {
      name: 'ogImage',
      title: 'Social Share Image (Open Graph)',
      type: 'image',
      description: 'Displayed when sharing on platforms like Facebook, WhatsApp, and Twitter (recommended size: 1200×630px)',
      options: { hotspot: true },
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Used to prevent duplicate content issues (optional)',
    },
    {
      name: 'noIndex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      description: 'Enable to prevent search engines from indexing this page',
      initialValue: false,
    },
  ],
}