// service.js — Dental services schema
// Controls: services listing page and individual service detail pages

import { BriefcaseMedical } from "lucide-react"

export const serviceSchema = {
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: BriefcaseMedical,
  fields: [
    // ─── Basic Information ────────────────────────────────
    {
      name: 'title',
      title: 'Service Name',
      type: 'string',
      description: 'Example: "Teeth Whitening", "Root Canal Treatment"',
      validation: (Rule) => Rule.required().min(3).max(80),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Automatically generated from the title and used in URLs (/services/[slug])',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .trim()
            .replace(/&/g, 'and')                // & → and
            .replace(/[^a-z0-9\s-]/g, '')        // remove special chars
            .replace(/\s+/g, '-')                // spaces → -
            .replace(/-+/g, '-')                 // multiple - fix
            .slice(0, 96)
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Published', value: 'published' },
          { title: 'Draft', value: 'draft' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order of services on the listing page (lower = higher priority)',
      initialValue: 99,
    },
    {
      name: 'isFeatured',
      title: 'Featured Service',
      type: 'boolean',
      description: 'Enable to highlight this service on the homepage',
      initialValue: false,
    },

    // ─── Visual Content ───────────────────────────────────
    {
      name: 'icon',
      title: 'Service Icon',
      type: 'string',
      description: 'Emoji or SVG code (e.g., 🦷)',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'imageWithAlt' }],
    },

    // ─── Content ─────────────────────────────────────────
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Displayed on cards and listing pages (max 200 characters)',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'blockContent',
      description: 'Displayed on the service detail page with rich formatting',
    },

    // ─── Treatment Details ────────────────────────────────
    {
      name: 'duration',
      title: 'Treatment Duration',
      type: 'string',
      description: 'Example: "30–45 minutes", "2–3 sessions"',
    },
    {
      name: 'painLevel',
      title: 'Comfort Level',
      type: 'string',
      options: {
        list: [
          { title: 'Painless', value: 'painless' },
          { title: 'Mild Discomfort', value: 'mild' },
          { title: 'Moderate', value: 'moderate' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Benefit Title', validation: (Rule) => Rule.required() },
            { name: 'description', type: 'string', title: 'Description' },
            { name: 'icon', type: 'string', title: 'Icon (Emoji)' },
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    },
    {
      name: 'procedure',
      title: 'Procedure Steps',
      type: 'array',
      description: 'Step-by-step treatment process',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepNumber', type: 'number', title: 'Step Number' },
            { name: 'title', type: 'string', title: 'Step Title', validation: (Rule) => Rule.required() },
            { name: 'description', type: 'text', title: 'Description' },
          ],
          preview: {
            select: { title: 'title', step: 'stepNumber' },
            prepare({ title, step }) {
              return { title: `Step ${step}: ${title}` }
            },
          },
        },
      ],
    },

    // ─── Pricing ─────────────────────────────────────────
    {
      name: 'pricing',
      title: 'Pricing',
      type: 'object',
      fields: [
        {
          name: 'showPrice',
          title: 'Show Pricing',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'startingFrom',
          title: 'Starting Price (₹)',
          type: 'number',
        },
        {
          name: 'priceRange',
          title: 'Price Range',
          type: 'string',
        },
        {
          name: 'note',
          title: 'Pricing Note',
          type: 'string',
        },
      ],
    },

    // ─── Relationships ────────────────────────────────────
    {
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      validation: (Rule) => Rule.max(4),
    },
    {
      name: 'assignedDoctors',
      title: 'Assigned Doctors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'doctor' }] }],
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', type: 'string', title: 'Question', validation: (Rule) => Rule.required() },
            { name: 'answer', type: 'text', title: 'Answer', validation: (Rule) => Rule.required() },
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    },

    // ─── Call To Action ───────────────────────────────────
    {
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'cta',
    },
    {
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'cta',
    },

    // ─── SEO ─────────────────────────────────────────────
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    },
  ],

  preview: {
    select: {
      title: 'title',
      status: 'status',
      media: 'coverImage',
    },
    prepare({ title, status, media }) {
      const map = {
        published: 'Published',
        draft: 'Draft',
        archived: 'Archived',
      }
      return {
        title,
        subtitle: map[status] || status,
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Title A–Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
}