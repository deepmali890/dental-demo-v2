// openingHours.js — Clinic opening hours object

export const openingHoursObject = {
  name: 'openingHours',
  title: 'Opening Hours',
  type: 'object',
  fields: [
    {
      name: 'day',
      title: 'Day',
      type: 'string',
      options: {
        list: [
          { title: 'Monday', value: 'Monday' },
          { title: 'Tuesday', value: 'Tuesday' },
          { title: 'Wednesday', value: 'Wednesday' },
          { title: 'Thursday', value: 'Thursday' },
          { title: 'Friday', value: 'Friday' },
          { title: 'Saturday', value: 'Saturday' },
          { title: 'Sunday', value: 'Sunday' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isClosed',
      title: 'Closed on this day',
      type: 'boolean',
      description: 'Enable if the clinic is closed on this day',
      initialValue: false,
    },
    {
      name: 'openTime',
      title: 'Opening Time',
      type: 'string',
      description: 'Example: 09:00 AM',
      hidden: ({ parent }) => parent?.isClosed,
    },
    {
      name: 'closeTime',
      title: 'Closing Time',
      type: 'string',
      description: 'Example: 07:00 PM',
      hidden: ({ parent }) => parent?.isClosed,
    },
    {
      name: 'note',
      title: 'Special Note',
      type: 'string',
      description: 'Optional note (e.g., "Emergency only", "By appointment")',
    },
  ],

  preview: {
    select: {
      title: 'day',
      open: 'openTime',
      close: 'closeTime',
      closed: 'isClosed',
    },
    prepare({ title, open, close, closed }) {
      return {
        title,
        subtitle: closed ? 'Closed' : `${open || ''} - ${close || ''}`,
      }
    },
  },
}