// blogPost.js — Blog and article schema

import { Newspaper } from "lucide-react"

export const blogPostSchema = {
  name: 'blogPost',
  title: 'Blog & Articles',
  type: 'document',
  icon: Newspaper,
  fields: [
    // ─── Core Information ────────────────────────────────
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(100),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
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
          { title: 'Scheduled', value: 'scheduled' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'Used for scheduling and sorting articles',
    },
    {
      name: 'isFeatured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Highlight this post on homepage or blog page',
      initialValue: false,
    },

    // ─── Author & Categorization ─────────────────────────
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'doctor' }],
      description: 'Select the doctor who authored this article',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogCategory' }] }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },

    // ─── Media ───────────────────────────────────────────
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

    // ─── Content ─────────────────────────────────────────
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Displayed on blog cards (max 250 characters)',
      validation: (Rule) => Rule.required().max(250),
    },
    {
      name: 'body',
      title: 'Article Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readTimeMinutes',
      title: 'Read Time (minutes)',
      type: 'number',
      description: 'Estimated reading time (optional)',
    },

    // ─── Relationships ───────────────────────────────────
    {
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      description: 'Displayed as related services at the end of the article',
      validation: (Rule) => Rule.max(3),
    },
    {
      name: 'relatedPosts',
      title: 'Related Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPost' }] }],
      validation: (Rule) => Rule.max(3),
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
      return {
        title,
        subtitle: `Status: ${status}`,
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Latest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Title A–Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
}