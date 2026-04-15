// testimonial.js — Patient testimonials and reviews schema
// Used for homepage, reviews page, and service-specific testimonials

import { Star } from "lucide-react"

export const testimonialSchema = {
  name: 'testimonial',
  title: 'Testimonials & Reviews',
  type: 'document',
  icon: Star,
  fields: [
    // ─── Patient Information ─────────────────────────────
    {
      name: 'patientName',
      title: 'Patient Name',
      type: 'string',
      description: 'Full name or first name only (for privacy)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'patientInitials',
      title: 'Display Initials',
      type: 'string',
      description: 'Example: "R.S." (use when name is hidden)',
    },
    {
      name: 'patientCity',
      title: 'City',
      type: 'string',
      description: 'Example: "Jaipur", "Delhi"',
    },
    {
      name: 'patientAge',
      title: 'Age (Optional)',
      type: 'number',
    },
    {
      name: 'patientPhoto',
      title: 'Patient Photo (Optional)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },

    // ─── Review Content ─────────────────────────────────
    {
      name: 'review',
      title: 'Review Text',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(20).max(500),
    },
    {
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      options: {
        list: [
          { title: '5 Stars', value: 5 },
          { title: '4 Stars', value: 4 },
          { title: '3 Stars', value: 3 },
        ],
        layout: 'radio',
      },
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    },
    {
      name: 'reviewDate',
      title: 'Review Date',
      type: 'date',
    },

    // ─── Source Information ──────────────────────────────
    {
      name: 'source',
      title: 'Review Source',
      type: 'string',
      options: {
        list: [
          { title: 'Google', value: 'google' },
          { title: 'Direct / Clinic', value: 'direct' },
          { title: 'JustDial', value: 'justdial' },
          { title: 'Practo', value: 'practo' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Other', value: 'other' },
        ],
      },
      initialValue: 'google',
    },
    {
      name: 'sourceUrl',
      title: 'Original Review URL',
      type: 'url',
      description: 'Optional link to original review (Google, Practo, etc.)',
    },

    // ─── Display Settings ────────────────────────────────
    {
      name: 'status',
      title: 'Display Status',
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
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Highlight on homepage',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    },

    // ─── Relationships ───────────────────────────────────
    {
      name: 'relatedService',
      title: 'Related Service',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'Optional: link this review to a specific service',
    },
    {
      name: 'treatedBy',
      title: 'Treated By',
      type: 'reference',
      to: [{ type: 'doctor' }],
    },
    {
      name: 'treatmentType',
      title: 'Treatment Type',
      type: 'string',
      description: 'Example: "Dental Implants", "Braces"',
    },
  ],

  preview: {
    select: {
      title: 'patientName',
      review: 'review',
      media: 'patientPhoto',
      rating: 'rating',
    },
    prepare({ title, review, media, rating }) {
      const stars = '⭐'.repeat(rating || 5)
      return {
        title: `${title} ${stars}`,
        subtitle: review ? review.substring(0, 60) + '...' : '',
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
      title: 'Latest First',
      name: 'dateDesc',
      by: [{ field: 'reviewDate', direction: 'desc' }],
    },
    {
      title: 'Highest Rating',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }],
    },
  ],
}