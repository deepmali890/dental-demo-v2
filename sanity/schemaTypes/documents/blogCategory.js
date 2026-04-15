// blogCategory.js — Blog category schema
// Used for organizing and filtering blog posts

import { Tag } from "lucide-react";

export const blogCategorySchema = {
  name: 'blogCategory',
  title: 'Blog Categories',
  type: 'document',
  icon: Tag,
  fields: [
    {
      name: 'title',
      title: 'Category Name',
      type: 'string',
      description: 'Example: "Oral Health Tips", "Cosmetic Dentistry", "Patient Stories"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used in URLs (e.g., /blog/category/[slug])',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Optional short description for this category',
    },
    {
      name: 'color',
      title: 'Category Color (Hex)',
      type: 'string',
      description: 'Used for UI badges (example: #FF5733)',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls display order (lower appears first)',
      initialValue: 99,
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
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