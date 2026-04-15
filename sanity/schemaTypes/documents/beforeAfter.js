// beforeAfter.js — Before and after treatment cases schema
// Used for gallery page and service-specific showcases

import { ArrowLeftRight } from "lucide-react"

export const beforeAfterSchema = {
  name: 'beforeAfter',
  title: 'Before & After Cases',
  type: 'document',
  icon: ArrowLeftRight,
  fields: [
    // ─── Basic Information ───────────────────────────────
    {
      name: 'title',
      title: 'Case Title',
      type: 'string',
      description: 'Example: "Smile Makeover - Missing Teeth Restored"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
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
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
    },
    {
      name: 'isFeatured',
      title: 'Featured Case',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    },

    // ─── Images ─────────────────────────────────────────
    {
      name: 'beforeImage',
      title: 'Before Image',
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
      name: 'afterImage',
      title: 'After Image',
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

    // ─── Case Details ───────────────────────────────────
    {
      name: 'patientAge',
      title: 'Patient Age (Optional)',
      type: 'number',
    },
    {
      name: 'patientGender',
      title: 'Patient Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Male', value: 'male' },
          { title: 'Female', value: 'female' },
          { title: 'Not Specified', value: 'unspecified' },
        ],
        layout: 'radio',
      },
      initialValue: 'unspecified',
    },
    {
      name: 'treatmentDuration',
      title: 'Treatment Duration',
      type: 'string',
      description: 'Example: "3 months", "Single session"',
    },
    {
      name: 'description',
      title: 'Case Description',
      type: 'text',
      rows: 4,
      description: 'Explain the problem, treatment, and outcome',
    },
    {
      name: 'patientConsent',
      title: 'Patient Consent Obtained',
      type: 'boolean',
      description: 'Important: written patient consent is required before publishing',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },

    // ─── Relationships ───────────────────────────────────
    {
      name: 'relatedService',
      title: 'Related Service',
      type: 'reference',
      to: [{ type: 'service' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'treatedBy',
      title: 'Treated By',
      type: 'reference',
      to: [{ type: 'doctor' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'afterImage',
      status: 'status',
    },
    prepare({ title, media, status }) {
      return {
        title,
        subtitle: status,
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
  ],
}