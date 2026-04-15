// pricingPlan.js — Pricing plans and treatment packages schema

import { CircleDollarSign } from "lucide-react"

export const pricingPlanSchema = {
  name: 'pricingPlan',
  title: 'Pricing & Packages',
  type: 'document',
  icon: CircleDollarSign,
  fields: [
    // ─── Basic Information ───────────────────────────────
    {
      name: 'title',
      title: 'Plan / Package Name',
      type: 'string',
      description: 'Example: "Basic Dental Checkup", "Complete Smile Makeover Package"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'planType',
      title: 'Plan Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single Treatment', value: 'single' },
          { title: 'Package Deal', value: 'package' },
          { title: 'Membership Plan', value: 'membership' },
          { title: 'EMI Plan', value: 'emi' },
        ],
      },
      initialValue: 'single',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Hidden', value: 'hidden' },
          { title: 'Promotional', value: 'promotional' },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
    },
    {
      name: 'isPopular',
      title: 'Most Popular',
      type: 'boolean',
      description: 'Highlight this plan with a badge',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    },

    // ─── Pricing Details ────────────────────────────────
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      initialValue: '₹',
      options: {
        list: [
          { title: '₹ INR', value: '₹' },
          { title: '$ USD', value: '$' },
        ],
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Set to 0 if pricing is not fixed (e.g., "Contact Us")',
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      description: 'Used to show discounts (strikethrough)',
    },
    {
      name: 'priceLabel',
      title: 'Custom Price Label',
      type: 'string',
      description: 'Example: "Starting from ₹2,000", "Contact Us"',
    },
    {
      name: 'priceUnit',
      title: 'Price Unit',
      type: 'string',
      description: 'Example: "per tooth", "per session", "per month"',
    },

    // ─── Included Items ─────────────────────────────────
    {
      name: 'includedItems',
      title: "What's Included",
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'item',
              type: 'string',
              title: 'Item',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'isHighlighted',
              type: 'boolean',
              title: 'Highlighted',
              initialValue: false,
            },
          ],
          preview: { select: { title: 'item' } },
        },
      ],
    },
    {
      name: 'notIncluded',
      title: 'Not Included',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'validityDays',
      title: 'Validity (Days)',
      type: 'number',
      description: '0 means no expiry',
    },
    {
      name: 'promoEndDate',
      title: 'Promotional End Date',
      type: 'datetime',
      hidden: ({ document }) => document?.status !== 'promotional',
    },

    // ─── CTA ────────────────────────────────────────────
    {
      name: 'cta',
      title: 'Call To Action',
      type: 'cta',
    },

    // ─── Relationships ──────────────────────────────────
    {
      name: 'relatedService',
      title: 'Related Service',
      type: 'reference',
      to: [{ type: 'service' }],
    },
    {
      name: 'includedServices',
      title: 'Included Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      hidden: ({ document }) => document?.planType !== 'package',
    },
  ],

  preview: {
    select: {
      title: 'title',
      price: 'price',
      currency: 'currency',
    },
    prepare({ title, price, currency }) {
      return {
        title,
        subtitle: price
          ? `${currency}${price.toLocaleString()}`
          : 'Contact for pricing',
      }
    },
  },
}