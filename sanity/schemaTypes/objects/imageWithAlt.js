// imageWithAlt.js — Reusable image object with alt text and caption

export const imageWithAltObject = {
  name: 'imageWithAlt',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Describe the image for accessibility and SEO (e.g., "Dr. Sharma treating a patient")',
      validation: (Rule) =>
        Rule.required().warning('Alt text is important for accessibility and search engines'),
    },
    {
      name: 'caption',
      title: 'Caption (Optional)',
      type: 'string',
      description: 'Text displayed below the image (optional)',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
  },
}