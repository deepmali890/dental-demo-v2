// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      //Multi Entry (repeatable content)
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('doctor').title('Doctors & Team'),
      S.documentTypeListItem('blogPost').title('Blog Posts'),
      S.documentTypeListItem('blogCategory').title('Blog Categories'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('beforeAfter').title('Before & After'),
      S.documentTypeListItem('galleryItem').title('Gallery'),
      S.documentTypeListItem('faq').title('FAQs'),
      S.documentTypeListItem('pricingPlan').title('Pricing'),

      S.divider(),


      // Singletons (unique content)
      S.listItem()
        .title('Homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),

      S.listItem()
        .title('Clinic Info')
        .child(
          S.document()
            .schemaType('clinicInfo')
            .documentId('clinicInfo')
        ),

      S.listItem()
        .title('About Page')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),

      S.listItem()
        .title('Navigation')
        .child(
          S.document()
            .schemaType('navigation')
            .documentId('navigation')
        ),

      S.listItem()
        .title('Appointment Settings')
        .child(
          S.document()
            .schemaType('appointmentSettings')
            .documentId('appointmentSettings')
        ),
    ])
