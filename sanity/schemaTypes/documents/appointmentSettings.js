// appointmentSettings.js — Appointment and contact settings (singleton)
// Controls booking form, time slots, and contact page

import { CalendarDays } from "lucide-react";

export const appointmentSettingsSchema = {
  name: 'appointmentSettings',
  title: 'Appointment Settings',
  type: 'document',
  icon: CalendarDays,
  __experimental_actions: ['update', 'publish'],

  fields: [
    // ─── Form Settings ────────────────────────────────
    {
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
      initialValue: 'Book an Appointment',
    },
    {
      name: 'formSubtitle',
      title: 'Form Subtitle',
      type: 'string',
    },
    {
      name: 'formSuccessMessage',
      title: 'Success Message',
      type: 'text',
      rows: 2,
      initialValue:
        'Thank you! We will confirm your appointment within 24 hours.',
    },
    {
      name: 'formRecipientEmail',
      title: 'Recipient Email',
      type: 'string',
      description: 'All form submissions will be sent to this email',
      validation: (Rule) => Rule.email(),
    },

    // ─── Time Slots ───────────────────────────────────
    {
      name: 'availableSlots',
      title: 'Available Time Slots',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Example: "10:00 AM", "11:00 AM", "2:00 PM"',
    },
    {
      name: 'slotDurationMinutes',
      title: 'Slot Duration (Minutes)',
      type: 'number',
      initialValue: 30,
    },
    {
      name: 'advanceBookingDays',
      title: 'Advance Booking Limit (Days)',
      type: 'number',
      initialValue: 30,
      description: 'Maximum days in advance a user can book',
    },

    // ─── Emergency Booking ─────────────────────────────
    {
      name: 'emergencyBooking',
      title: 'Emergency Booking',
      type: 'object',
      fields: [
        {
          name: 'isAvailable',
          title: 'Emergency Available',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'emergencyPhone',
          title: 'Emergency Phone',
          type: 'string',
        },
        {
          name: 'note',
          title: 'Emergency Note',
          type: 'text',
          rows: 2,
        },
      ],
    },

    // ─── Contact Page ─────────────────────────────────
    {
      name: 'contactPage',
      title: 'Contact Page',
      type: 'object',
      fields: [
        {
          name: 'pageTitle',
          title: 'Page Title',
          type: 'string',
          initialValue: 'Contact Us',
        },
        {
          name: 'pageSubtitle',
          title: 'Subtitle',
          type: 'text',
          rows: 2,
        },
        {
          name: 'showMap',
          title: 'Show Map',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'mapHeight',
          title: 'Map Height (px)',
          type: 'number',
          initialValue: 450,
        },
      ],
    },

    // ─── SEO ──────────────────────────────────────────
    {
      name: 'seo',
      title: 'Contact Page SEO',
      type: 'seo',
    },
  ],
}