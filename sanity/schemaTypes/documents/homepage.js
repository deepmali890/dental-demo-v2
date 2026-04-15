// homepage.js — Homepage content schema (singleton)
// Controls all homepage sections dynamically

import { HomeIcon } from "lucide-react"

export const homepageSchema = {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  __experimental_actions: ['update', 'publish'],

  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'highlights', title: 'Highlights' },
    { name: 'services', title: 'Services' },
    { name: 'about', title: 'About' },
    { name: 'stats', title: 'Stats' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'cta', title: 'CTA' },
    { name: 'gallery', title: 'Gallery' },
    { name: 'blog', title: 'Blog' },
    { name: 'faq', title: 'FAQ' },
    { name: 'seo', title: 'SEO' },
  ],

  fields: [
    // ─── HERO ───────────────────────────────────────────
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string' },
        { name: 'heading', title: 'Main Heading', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'headingHighlight', title: 'Highlighted Text', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text', rows: 3, validation: (Rule) => Rule.required() },
        { name: 'primaryCta', title: 'Primary CTA', type: 'cta' },
        { name: 'secondaryCta', title: 'Secondary CTA', type: 'cta' },
        {
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text', validation: (Rule) => Rule.required() }],
        },
        { name: 'heroImageMobile', title: 'Mobile Image', type: 'image' },
        { name: 'videoUrl', title: 'Background Video URL', type: 'url' },
        {
          name: 'trustIndicators',
          title: 'Trust Indicators',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'icon', type: 'string', title: 'Icon' },
                { name: 'text', type: 'string', title: 'Text', validation: (Rule) => Rule.required() },
              ],
            },
          ],
          validation: (Rule) => Rule.max(4),
        },
      ],
    },

    {
      name: 'announcementBanner',
      title: 'Announcement Banner',
      type: 'object',
      fields: [
        {
          name: 'isActive',
          title: 'Show Banner',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'text',
          title: 'Banner Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
        },
        {
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string',
        },
        {
          name: 'variant',
          title: 'Style Variant',
          type: 'string',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Accent', value: 'accent' },
              { title: 'Dark', value: 'dark' },
            ],
          },
          initialValue: 'primary',
        },
      ],
    },

    // ─── HIGHLIGHTS ─────────────────────────────────────
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'object',
      group: 'highlights',
      fields: [
        { name: 'sectionTitle', type: 'string', title: 'Title' },
        { name: 'sectionSubtitle', type: 'text', title: 'Subtitle' },
        {
          name: 'items',
          type: 'array',
          title: 'Items',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'icon', type: 'string', title: 'Icon', validation: (Rule) => Rule.required() },
                { name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() },
                { name: 'description', type: 'text', title: 'Description' },
              ],
            },
          ],
        },
      ],
    },

    // ─── ABOUT ───────────────────────────────────────────
    {
      name: 'aboutSnippet',
      title: 'About Section',
      type: 'object',
      group: 'about',
      fields: [
        { name: 'sectionLabel', type: 'string', title: 'Section Label' },
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          type: 'array',
          title: 'Description',
          of: [{ type: 'block' }],
        },
        {
          name: 'image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
        },
        {
          name: 'features',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'cta',
          type: 'cta',
        },
      ],
    },

    // ─── SERVICES ───────────────────────────────────────
    {
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      group: 'services',
      fields: [
        { name: 'sectionTitle', type: 'string', title: 'Title' },
        { name: 'showAllServices', type: 'boolean', title: 'Show All Services?' },
        {
          name: 'featuredServices',
          type: 'array',
          title: 'Selected Services',
          of: [{ type: 'reference', to: [{ type: 'service' }] }],
          hidden: ({ parent }) => parent?.showAllServices,
        },
        { name: 'viewAllCta', type: 'cta', title: 'View All CTA' },
      ],
    },

    //
    {
      name: 'ourTeamSection',
      title: 'Our Team Section',
      type: 'object',
      group: 'about',
      fields: [
        {
          name: 'sectionTitle',
          type: 'string',
          title: 'Title',
          initialValue: 'Meet Our Experts',
        },
        {
          name: 'sectionSubtitle',
          type: 'text',
          title: 'Subtitle',
        },
        {
          name: 'displayMode',
          type: 'string',
          title: 'Mode',
          options: {
            list: [
              { title: 'Auto (Fetch All)', value: 'auto' },
              { title: 'Manual (Select)', value: 'manual' },
            ],
          },
          initialValue: 'auto',
        },
        {
          name: 'teamMembers',
          type: 'array',
          title: 'Select Team Members',
          of: [{ type: 'reference', to: [{ type: 'doctor' }] }],
          hidden: ({ parent }) => parent?.displayMode !== 'manual',
        },
      ],
    },

    // ─── TESTIMONIALS ───────────────────────────────────
    {
      name: 'testimonialsSection',
      title: 'Testimonials',
      type: 'object',
      group: 'testimonials',
      fields: [
        { name: 'sectionTitle', type: 'string', title: 'Title' },
        {
          name: 'displayMode',
          type: 'string',
          title: 'Mode',
          options: {
            list: [
              { title: 'Auto', value: 'auto' },
              { title: 'Manual', value: 'manual' },
            ],
          },
        },
        {
          name: 'manualTestimonials',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
          hidden: ({ parent }) => parent?.displayMode !== 'manual',
        },
      ],
    },

    {
      name: 'ctaBanner',
      title: 'CTA Banner',
      type: 'object',
      group: 'cta',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subtext',
          type: 'text',
          title: 'Subtext',
        },
        {
          name: 'primaryCta',
          type: 'cta',
          title: 'Primary CTA',
        },
        {
          name: 'secondaryCta',
          type: 'cta',
          title: 'Secondary CTA',
        },
        {
          name: 'backgroundImage',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
        },
        {
          name: 'bgColor',
          type: 'string',
          title: 'Background Color',
        },
      ],
    },

    // ─── FAQ ────────────────────────────────────────────
    {
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      group: 'faq',
      fields: [
        { name: 'sectionTitle', type: 'string', title: 'Title' },
        {
          name: 'faqs',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'faq' }] }],
        },
      ],
    },

    // ─── SEO ────────────────────────────────────────────
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],

  preview: {
    prepare() {
      return { title: 'Homepage Content' }
    },
  },
}