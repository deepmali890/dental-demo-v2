// faq.js — Frequently Asked Questions schema
// Used for FAQ page, homepage, and service-related FAQs

import { CircleQuestionMark } from "lucide-react";

export const faqSchema = {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  icon: CircleQuestionMark,
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'FAQ Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Appointments', value: 'appointments' },
          { title: 'Treatments', value: 'treatments' },
          { title: 'Costs & Insurance', value: 'costs' },
          { title: 'Children Dentistry', value: 'children' },
          { title: 'Emergencies', value: 'emergencies' },
          { title: 'Post-Treatment Care', value: 'aftercare' },
        ],
      },
      initialValue: 'general',
    },
    {
      name: 'relatedService',
      title: 'Related Service',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'Optional: link this FAQ to a specific service',
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
      initialValue: 'published',
    },
    {
      name: 'isFeatured',
      title: 'Featured FAQ',
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
  ],

  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
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