// aboutPage.js — About page schema (singleton)
// Controls story, mission, vision, milestones, and clinic details
import { InfoIcon } from 'lucide-react'

export const aboutPageSchema = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: InfoIcon,
  __experimental_actions: ['update', 'publish'],

  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About Us',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pageBannerImage',
      title: 'Hero Banner Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
    },

    // ─── Story ───────────────────────────────────────────
    {
      name: 'story',
      title: 'Our Story',
      type: 'object',
      fields: [
        { name: 'heading', type: 'string', title: 'Heading' },
        { name: 'content', type: 'blockContent', title: 'Content' },
        {
          name: 'image',
          type: 'image',
          title: 'Story Image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
        },
      ],
    },

    // ─── Mission & Vision ───────────────────────────────
    {
      name: 'missionVision',
      title: 'Mission & Vision',
      type: 'object',
      fields: [
        { name: 'mission', type: 'text', title: 'Mission', rows: 3 },
        { name: 'vision', type: 'text', title: 'Vision', rows: 3 },
        {
          name: 'coreValues',
          title: 'Core Values',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'icon', type: 'string', title: 'Icon' },
                { name: 'title', type: 'string', title: 'Value', validation: (Rule) => Rule.required() },
                { name: 'description', type: 'text', title: 'Description' },
              ],
            },
          ],
        },
      ],
    },

    // ─── Milestones ─────────────────────────────────────
    {
      name: 'milestones',
      title: 'Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', type: 'string', title: 'Year', validation: (Rule) => Rule.required() },
            { name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() },
            { name: 'description', type: 'text', title: 'Description' },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },

    // ─── Technology ─────────────────────────────────────
    {
      name: 'technology',
      title: 'Technology & Equipment',
      type: 'object',
      fields: [
        { name: 'sectionTitle', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', title: 'Description' },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Name', validation: (Rule) => Rule.required() },
                { name: 'description', type: 'text', title: 'Description' },
                {
                  name: 'image',
                  type: 'image',
                  title: 'Image',
                  options: { hotspot: true },
                  fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
                },
              ],
            },
          ],
        },
      ],
    },

    // ─── Affiliations ───────────────────────────────────
    {
      name: 'affiliations',
      title: 'Affiliations & Partners',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            {
              name: 'logo',
              type: 'image',
              title: 'Logo',
              options: { hotspot: false },
              fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
            },
            { name: 'url', type: 'url', title: 'Website' },
          ],
        },
      ],
    },

    // ─── SEO ────────────────────────────────────────────
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    },
  ],
}