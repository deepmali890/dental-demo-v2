// gallery.js — Photo and video gallery schema
// Used for gallery page and homepage media sections

import { FileImage } from "lucide-react";

export const gallerySchema = {
  name: 'galleryItem',
  title: 'Gallery',
  type: 'document',
  icon: FileImage,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'photo',
    },

    // ─── Image ──────────────────────────────────────────
    {
      name: 'image',
      title: 'Photo',
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
      hidden: ({ document }) => document?.mediaType === 'video',
    },

    // ─── Video ──────────────────────────────────────────
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo link',
      hidden: ({ document }) => document?.mediaType === 'photo',
    },
    {
      name: 'videoThumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ document }) => document?.mediaType === 'photo',
    },

    // ─── Categorization ─────────────────────────────────
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Clinic Interior', value: 'clinic' },
          { title: 'Equipment', value: 'equipment' },
          { title: 'Team', value: 'team' },
          { title: 'Events', value: 'events' },
          { title: 'Smile Stories', value: 'smiles' },
          { title: 'Other', value: 'other' },
        ],
      },
      initialValue: 'clinic',
    },

    // ─── Content ────────────────────────────────────────
    {
      name: 'description',
      title: 'Caption / Description',
      type: 'text',
      rows: 2,
    },

    // ─── Display Settings ───────────────────────────────
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Published', value: 'published' },
          { title: 'Hidden', value: 'hidden' },
        ],
        layout: 'radio',
      },
      initialValue: 'published',
    },
    {
      name: 'isFeatured',
      title: 'Featured Item',
      type: 'boolean',
      description: 'Display on homepage',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    },

    // ─── Metadata ───────────────────────────────────────
    {
      name: 'capturedDate',
      title: 'Captured Date',
      type: 'date',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },

  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}