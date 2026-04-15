// doctor.js — Doctors and team members schema
// Used for team page, doctor profiles, and service pages

import { Stethoscope } from "lucide-react";

export const doctorSchema = {
  name: 'doctor',
  title: 'Doctors & Team',
  type: 'document',
  icon: Stethoscope,
  fields: [
    // ─── Basic Information ────────────────────────────────
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'Example: "Dr. Rajesh Sharma"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
      description: 'Example: "Chief Dental Surgeon", "Orthodontist"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role Category',
      type: 'string',
      options: {
        list: [
          { title: 'Doctor / Dentist', value: 'doctor' },
          { title: 'Specialist', value: 'specialist' },
          { title: 'Consultant', value: 'consultant' },
          { title: 'Support Staff', value: 'staff' },
          { title: 'Receptionist', value: 'receptionist' },
        ],
      },
      initialValue: 'doctor',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Draft', value: 'draft' },
          { title: 'Inactive', value: 'inactive' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls order on team page (lower appears first)',
      initialValue: 99,
    },
    {
      name: 'isFounder',
      title: 'Founder / Lead Doctor',
      type: 'boolean',
      initialValue: false,
    },

    // ─── Images ───────────────────────────────────────────
    {
      name: 'profilePhoto',
      title: 'Profile Photo',
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
      name: 'coverPhoto',
      title: 'Cover Image (Optional)',
      type: 'image',
      options: { hotspot: true },
    },

    // ─── Professional Details ─────────────────────────────
    {
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'degree',
              type: 'string',
              title: 'Degree',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'institution',
              type: 'string',
              title: 'Institution',
            },
            {
              name: 'year',
              type: 'number',
              title: 'Year of Completion',
            },
          ],
          preview: {
            select: { title: 'degree', subtitle: 'institution' },
          },
        },
      ],
    },
    {
      name: 'specializations',
      title: 'Specializations',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Example: Implants, Orthodontics, Cosmetic Dentistry',
    },
    {
      name: 'experience',
      title: 'Years of Experience',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(60),
    },
    {
      name: 'registrationNumber',
      title: 'Registration Number',
      type: 'string',
    },
    {
      name: 'languages',
      title: 'Languages Spoken',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },

    // ─── Bio ──────────────────────────────────────────────
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
      description: 'Displayed on cards (max 200 characters)',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'fullBio',
      title: 'Full Bio',
      type: 'blockContent',
    },

    // ─── Achievements ─────────────────────────────────────
    {
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Achievement',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'year',
              type: 'number',
              title: 'Year',
            },
            {
              name: 'organization',
              type: 'string',
              title: 'Organization',
            },
          ],
          preview: {
            select: { title: 'title', subtitle: 'year' },
          },
        },
      ],
    },

    // ─── Social Links ─────────────────────────────────────
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'twitter', type: 'url', title: 'Twitter / X' },
        { name: 'facebook', type: 'url', title: 'Facebook' },
      ],
    },
    {
      name: 'availableDays',
      title: 'Available Days',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Monday', 'Tuesday', 'Wednesday',
          'Thursday', 'Friday', 'Saturday', 'Sunday'
        ],
        layout: 'grid',
      },
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
      title: 'name',
      subtitle: 'designation',
      media: 'profilePhoto',
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