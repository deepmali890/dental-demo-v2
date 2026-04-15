// cta.js — Reusable Call-To-Action object

export const ctaObject = {
  name: 'cta',
  title: 'Call To Action',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Button Text',
      type: 'string',
      description: 'Text displayed on the button (e.g., "Book Appointment", "Learn More")',
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Page', value: 'internal' },
          { title: 'External URL', value: 'external' },
          { title: 'Phone Call', value: 'phone' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Email', value: 'email' },
          { title: 'Anchor (Section Link)', value: 'anchor' },
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    },
    {
      name: 'internalLink',
      title: 'Internal Page Path',
      type: 'string',
      description: 'Example: /services, /contact, /about',
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'external',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Example: +91-9876543210',
      hidden: ({ parent }) =>
        parent?.linkType !== 'phone' && parent?.linkType !== 'whatsapp',
    },
    {
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'email',
    },
    {
      name: 'anchorId',
      title: 'Anchor ID',
      type: 'string',
      description: 'Example: #services, #contact',
      hidden: ({ parent }) => parent?.linkType !== 'anchor',
    },
    {
      name: 'style',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Filled)', value: 'primary' },
          { title: 'Secondary (Outlined)', value: 'secondary' },
          { title: 'Ghost (Text Only)', value: 'ghost' },
          { title: 'Link Style', value: 'link' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
    },
    {
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      description: 'Enable to open the link in a new browser tab',
      initialValue: false,
    },
  ],
}