// clinicInfo.js — Global clinic information (singleton)
// Used across header, footer, contact page, and site-wide settings

import { Hospital } from "lucide-react";

export const clinicInfoSchema = {
  name: 'clinicInfo',
  title: 'Clinic Information',
  type: 'document',
  icon: Hospital,
  __experimental_actions: ['update', 'publish'],

  fields: [
    // ─── Basic Information ───────────────────────────────
    {
      name: 'clinicName',
      title: 'Clinic Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Example: "Your Smile, Our Passion"',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: false },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
    },
    {
      name: 'logoDark',
      title: 'Dark Logo',
      type: 'image',
      options: { hotspot: false },
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    },
    {
      name: 'establishedYear',
      title: 'Established Year',
      type: 'number',
    },

    // ─── Contact Information ─────────────────────────────
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'primaryPhone',
          title: 'Primary Phone',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'secondaryPhone',
          title: 'Secondary Phone',
          type: 'string',
        },
        {
          name: 'whatsapp',
          title: 'WhatsApp Number',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Primary Email',
          type: 'string',
          validation: (Rule) => Rule.email(),
        },
        {
          name: 'appointmentEmail',
          title: 'Appointment Email',
          type: 'string',
          validation: (Rule) => Rule.email(),
        },
        {
          name: 'emergencyNumber',
          title: 'Emergency Contact',
          type: 'string',
        },
      ],
    },

    // ─── Address ─────────────────────────────────────────
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'street', title: 'Street Address', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'landmark', title: 'Landmark', type: 'string' },
        { name: 'city', title: 'City', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'state', title: 'State', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'pincode', title: 'PIN Code', type: 'string', validation: (Rule) => Rule.required().length(6) },
        { name: 'country', title: 'Country', type: 'string', initialValue: 'India' },
        { name: 'googleMapsUrl', title: 'Google Maps Link', type: 'url' },
        { name: 'embedMapUrl', title: 'Embed Map URL', type: 'url' },
        { name: 'coordinates', title: 'Coordinates', type: 'geopoint' },
      ],
    },

    // ─── Branches ────────────────────────────────────────
    {
      name: 'branches',
      title: 'Other Branches',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'branchName', type: 'string', title: 'Branch Name', validation: (Rule) => Rule.required() },
            { name: 'address', type: 'text', title: 'Address' },
            { name: 'phone', type: 'string', title: 'Phone' },
            { name: 'email', type: 'string', title: 'Email' },
            { name: 'googleMapsUrl', type: 'url', title: 'Maps Link' },
            { name: 'isMainBranch', type: 'boolean', title: 'Main Branch', initialValue: false },
          ],
          preview: { select: { title: 'branchName', subtitle: 'address' } },
        },
      ],
    },

    // ─── Opening Hours ───────────────────────────────────
    {
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [{ type: 'openingHours' }],
    },
    {
      name: 'holidayNote',
      title: 'Holiday Note',
      type: 'text',
      rows: 2,
    },

    // ─── Social Media ────────────────────────────────────
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
        { name: 'twitter', type: 'url', title: 'Twitter / X' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'practo', type: 'url', title: 'Practo' },
        { name: 'justdial', type: 'url', title: 'JustDial' },
        { name: 'googleBusiness', type: 'url', title: 'Google Business Profile' },
      ],
    },

    // ─── Stats ───────────────────────────────────────────
    {
      name: 'stats',
      title: 'Clinic Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value', validation: (Rule) => Rule.required() },
            { name: 'label', type: 'string', title: 'Label', validation: (Rule) => Rule.required() },
            { name: 'icon', type: 'string', title: 'Icon' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    },

    // ─── Certifications ─────────────────────────────────
    {
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name', validation: (Rule) => Rule.required() },
            { name: 'logo', type: 'image', title: 'Logo' },
            { name: 'url', type: 'url', title: 'Verification URL' },
          ],
          preview: { select: { title: 'name', media: 'logo' } },
        },
      ],
    },

    // ─── SEO ─────────────────────────────────────────────
    {
      name: 'seo',
      title: 'Global SEO',
      type: 'seo',
    },
  ],

  preview: {
    select: {
      title: 'clinicName',
      media: 'logo',
    },
  },
}