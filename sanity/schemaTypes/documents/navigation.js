// navigation.js — Header and footer navigation schema (singleton)
// Controls menus across the entire website

import { Navigation } from "lucide-react";

export const navigationSchema = {
  name: 'navigation',
  title: 'Navigation & Menus',
  type: 'document',
  icon: Navigation,
  __experimental_actions: ['update', 'publish'],

  fields: [
    // ─── Header Navigation ─────────────────────────────
    {
      name: 'headerNav',
      title: 'Header Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          title: 'Nav Item',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'Example: /services, /about',
            },
            {
              name: 'isExternal',
              title: 'External Link',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'openInNewTab',
              title: 'Open in New Tab',
              type: 'boolean',
              initialValue: false,
            },

            // ─── Dropdown / Mega Menu ───────────────────
            {
              name: 'children',
              title: 'Dropdown Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'description',
                      title: 'Description',
                      type: 'string',
                    },
                    {
                      name: 'icon',
                      title: 'Icon',
                      type: 'string',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'label',
                      subtitle: 'url',
                    },
                  },
                },
              ],
            },
          ],

          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            },
          },
        },
      ],
    },

    {
      name: 'headerCta',
      title: 'Header CTA',
      type: 'cta',
      description: 'Example: "Book Appointment"',
    },

    // ─── Footer Navigation ─────────────────────────────
    {
      name: 'footerColumns',
      title: 'Footer Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Column Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'isExternal',
                      title: 'External',
                      type: 'boolean',
                      initialValue: false,
                    },
                  ],
                  preview: {
                    select: { title: 'label' },
                  },
                },
              ],
            },
          ],
          preview: {
            select: { title: 'heading' },
          },
        },
      ],
    },

    {
      name: 'footerBottomLinks',
      title: 'Footer Bottom Links',
      description: 'Privacy Policy, Terms, etc.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
          preview: { select: { title: 'label' } },
        },
      ],
    },

    {
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'string',
    },

    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'Example: "© 2026 Clinic Name. All rights reserved."',
    },
  ],
}