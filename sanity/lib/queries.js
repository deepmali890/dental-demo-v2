// sanity/lib/queries.js

// Home Page
export const HOMEPAGE_QUERY = `
  {
    "homepage": *[_type == "homepage"][0] {
      hero {
        badge,
        heading,
        headingHighlight,
        subheading,
        primaryCta,
        secondaryCta,
        "heroImage": heroImage { asset->, alt },
        "heroImageMobile": heroImageMobile { asset-> },
        videoUrl,
        trustIndicators
      },
      announcementBanner,
      highlights,
      servicesSection {
        sectionTitle,
        sectionSubtitle,
        showAllServices,
        viewAllCta,
        "featuredServices": featuredServices[]-> {
          _id,
          title,
          "slug": slug.current,
          shortDescription,
          icon,
          "coverImage": coverImage { asset->, alt },
          "pricing": pricing { showPrice, startingFrom, priceRange }
        }
      },
      ourTeamSection {
      sectionTitle,
      sectionSubtitle,
      displayMode,
     "teamMembers": teamMembers[]-> {
     _id,
     name,
     designation,
     shortBio,
     experience,
     "profilePhoto": profilePhoto { asset->, alt }
  }
},
      aboutSnippet {
        sectionLabel,
        heading,
        description,
        "image": image { asset->, alt },
        features,
        cta
      },
      statsSection,
      testimonialsSection {
        sectionTitle,
        sectionSubtitle,
        displayMode,
        "manualTestimonials": manualTestimonials[]-> {
          _id,
          patientName,
          patientInitials,
          patientCity,
          review,
          rating,
          source,
          treatmentType,
          "patientPhoto": patientPhoto { asset->, alt },
          "relatedService": relatedService-> { title, "slug": slug.current }
        }
      },
      ctaBanner {
        heading,
        subtext,
        primaryCta,
        secondaryCta,
        "backgroundImage": backgroundImage { asset->, alt },
        bgColor
      },
      gallerySection,
      blogSection,
      faqSection {
        isVisible,
        sectionTitle,
        "faqs": faqs[]-> {
          _id,
          question,
          answer,
          category
        }
      },
      seo
    },
 
    "allFeaturedTestimonials": *[
      _type == "testimonial" &&
      isFeatured == true &&
      status == "published"
    ] | order(order asc) [0...6] {
      _id,
      patientName,
      patientInitials,
      patientCity,
      review,
      rating,
      source,
      treatmentType,
      "patientPhoto": patientPhoto { asset->, alt }
    },
 
    "allFeaturedServices": *[
      _type == "service" &&
      status == "published" &&
      isFeatured == true
    ] | order(order asc) [0...6] {
      _id,
      title,
      "slug": slug.current,
      shortDescription,
      icon,
      "coverImage": coverImage { asset->, alt }
    },
    "allDoctors": *[
  _type == "doctor" &&
  status == "active"
] | order(order asc) {
  _id,
  name,
  designation,
  shortBio,
  experience,
  "profilePhoto": profilePhoto { asset->, alt }
},
 
    "latestPosts": *[
      _type == "blogPost" &&
      status == "published"
    ] | order(publishedAt desc) [0...3] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      readTimeMinutes,
      "coverImage": coverImage { asset->, alt },
      "author": author-> { name, "photo": profilePhoto { asset-> } },
      "categories": categories[]-> { title, "slug": slug.current, color }
    },
 
    "clinicInfo": *[_type == "clinicInfo"][0] {
      clinicName,
      tagline,
      "logo": logo { asset->, alt },
      contact,
      stats,
      socialMedia,
      openingHours
    }
  }
`

// Service
export const SERVICES_LIST_QUERY = `
  *[_type == "service" && status == "published"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
   shortDescription,
    icon,
    duration,
    painLevel,
    "coverImage": coverImage {
      asset->,
      alt
    },
    isFeatured,
    "pricing": pricing {
      showPrice,
      startingFrom,
      priceRange,
      note
    }
  }
`

// Serivce Detail Page
export const SERVICE_DETAIL_QUERY = `
    *[_type == "service" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    fullDescription,
    duration,
    painLevel,
    benefits,
    procedure,
    pricing,
    faqs,
    isFeatured,
    "coverImage": coverImage { asset->, alt },
    "galleryImages": galleryImages[] {
      "image": image { asset->, alt },
      alt,
      caption
    },
    "assignedDoctors": assignedDoctors[]-> {
    _id,
    name,
    designation,
    "slug": slug.current,
    experience,
    specializations,
    "profilePhoto": profilePhoto { asset->, alt }
    },
    "relatedServices": relatedServices[]-> {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    icon,
    "coverImage": coverImage { asset->, alt }
    },
    "testimonials": *[
    _type == "testimonial" &&
    references(^._id) &&
    status == "published"
    ] | order(order asc) [0...4] {
    _id,
    patientName,
    review,
    rating,
    treatmentType,
    "patientPhoto": patientPhoto { asset-> }
    },
    "beforeAfterCases": *[
    _type == "beforeAfter" &&
    relatedService._ref == ^._id &&
    status == "published"
    ] | order(order asc) [0...6] {
    _id,
    title,
    "beforeImage": beforeImage { asset->, alt },
    "afterImage": afterImage { asset->, alt },
    treatmentDuration,
    description
    },
    primaryCta,
    secondaryCta,
    seo
}
`

// Query to fetch slugs of all published services for dynamic routing
export const SERVICES_SLUGS_QUERY = `
  *[_type == "service" && status == "published"] {
    "slug": slug.current
  }
`

// Doctor List Query
export const DOCTORS_LIST_QUERY = `
  *[_type == "doctor" && status == "active"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    designation,
    role,
    experience,
    specializations,
    qualifications[] { degree, institution, year },
    shortBio,
    availableDays,
    isFounder,
    "profilePhoto": profilePhoto { asset->, alt }
  }
`

// Doctor Detail Query
export const DOCTOR_DETAIL_QUERY = `
*[_type == "doctor" && slug.current == $slug && status == "active"][0] {
_id,
name,
"slug": slug.current,
designation,
role,
experience,
qualifications,
specializations,
registrationNumber,
languages,
shortBio,
fullBio,
achievements,
socialLinks,
availableDays,
isFounder,
"profilePhoto": profilePhoto { asset->, alt },
"coverPhoto": coverPhoto { asset-> },
"services": *[_type == "service" && references(^._id) && status == "published"] {
_id,
title,
"slug": slug.current,
shortDescription,
"coverImage": coverImage { asset->, alt }
},
seo
}
`

// Blog Posts List Query
export const BLOG_LIST_QUERY = `
  *[_type == "blogPost" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTimeMinutes,
    isFeatured,
    tags,
    "coverImage": coverImage { asset->, alt },
    "author": author-> {
      name,
      designation,
      "slug": slug.current,
      "photo": profilePhoto { asset-> }
    },
    "categories": categories[]-> {
      title,
      "slug": slug.current,
      color
    }
  }
`

// Blog by category filter
export const BLOG_BY_CATEGORY_QUERY = `
  *[
    _type == "blogPost" &&
    status == "published" &&
    $categorySlug in categories[]->slug.current
  ] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTimeMinutes,
    "coverImage": coverImage { asset->, alt },
    "author": author-> { name, "photo": profilePhoto { asset-> } },
    "categories": categories[]-> { title, "slug": slug.current, color }
  }
`

// Blog Detail Query
export const BLOG_DETAIL_QUERY = `
    *[_type == "blogPost" && slug.current == $slug && status == "published"][0] {
     _id,
    title,
    "slug": slug.current,
    body,
    excerpt,
    publishedAt,
    readTimeMinutes,
    isFeatured,
    tags,
    "coverImage": coverImage { asset->, alt },
    "author": author-> {
      _id,
      name,
      designation,
      shortBio,
      "slug": slug.current,
      socialLinks,
      "profilePhoto": profilePhoto { asset->, alt }
    },
    "categories": categories[]-> {
      title,
      "slug": slug.current,
      color
    },
    "relatedServices": relatedServices[]-> {
      _id,
      title,
      "slug": slug.current,
      shortDescription,
      icon,
      "coverImage": coverImage { asset->, alt }
    },
    "relatedPosts": relatedPosts[]-> {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "coverImage": coverImage { asset->, alt }
    },
    seo
    }
`

// Query to fetch slugs of all published blog posts for dynamic routing
export const BLOG_SLUGS_QUERY = `
  *[_type == "blogPost" && status == "published"] {
    "slug": slug.current
  }
`

// Blog Categories List Query with post count
export const BLOG_CATEGORIES_QUERY = `
  *[_type == "blogCategory"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    color,
    "postCount": count(*[_type == "blogPost" && references(^._id) && status == "published"])
  }
`

// Testimonials List Query
export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && status == "published"] | order(order asc) {
    _id,
    patientName,
    patientInitials,
    patientCity,
    review,
    rating,
    reviewDate,
    source,
    sourceUrl,
    treatmentType,
    isFeatured,
    "patientPhoto": patientPhoto { asset->, alt },
    "relatedService": relatedService-> { title, "slug": slug.current },
    "treatedBy": treatedBy-> { name, designation }
  }
`

// Featured Testimonials for Homepage
export const FEATURED_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && status == "published" && isFeatured == true]
  | order(order asc) [0...6] {
    _id,
    patientName,
    patientInitials,
    patientCity,
    review,
    rating,
    treatmentType,
    "patientPhoto": patientPhoto { asset->, alt }
  }
`

// Before & After Cases List Query
export const BEFORE_AFTER_LIST_QUERY = `
  *[_type == "beforeAfter" && status == "published" && patientConsent == true]
  | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    treatmentDuration,
    patientAge,
    patientGender,
    isFeatured,
    "beforeImage": beforeImage { asset->, alt },
    "afterImage": afterImage { asset->, alt },
    "relatedService": relatedService-> { title, "slug": slug.current },
    "treatedBy": treatedBy-> { name, designation }
  }
`

// Filter by service
export const BEFORE_AFTER_BY_SERVICE_QUERY = `
  *[
    _type == "beforeAfter" &&
    status == "published" &&
    patientConsent == true &&
    relatedService._ref == $serviceId
  ] | order(order asc) {
    _id,
    title,
    description,
    treatmentDuration,
    "beforeImage": beforeImage { asset->, alt },
    "afterImage": afterImage { asset->, alt }
  }
`

// Gallery Images Query
export const GALLERY_QUERY = `
  *[_type == "galleryItem" && status == "published"] | order(order asc) {
    _id,
    title,
    mediaType,
    category,
    description,
    capturedDate,
    isFeatured,
    "image": image { asset->, alt },
    videoUrl,
    "videoThumbnail": videoThumbnail { asset-> }
  }
`

// Gallery by category filter
export const GALLERY_BY_CATEGORY_QUERY = `
  *[_type == "galleryItem" && status == "published" && category == $category]
  | order(order asc) {
    _id,
    title,
    mediaType,
    description,
    "image": image { asset->, alt },
    videoUrl
  }
`

// FAQs List Query
export const FAQ_ALL_QUERY = `
  *[_type == "faq" && status == "published"] | order(order asc) {
    _id,
    question,
    answer,
    category,
    isFeatured,
    "relatedService": relatedService-> { title, "slug": slug.current }
  }
`

// FAQs by category filter
export const FAQ_BY_CATEGORY_QUERY = `
  *[_type == "faq" && status == "published" && category == $category]
  | order(order asc) {
    _id,
    question,
    answer
  }
`

// Featured FAQs for Homepage
export const FAQ_HOMEPAGE_QUERY = `
  *[_type == "faq" && status == "published" && isFeatured == true]
  | order(order asc) [0...8] {
    _id,
    question,
    answer
  }
`

// Pricing Plans Query
export const PRICING_ALL_QUERY = `
  *[_type == "pricingPlan" && status in ["active", "promotional"]]
  | order(order asc) {
    _id,
    title,
    planType,
    isPopular,
    status,
    currency,
    price,
    originalPrice,
    priceLabel,
    priceUnit,
    includedItems,
    notIncluded,
    description,
    validityDays,
    promoEndDate,
    cta,
    "relatedService": relatedService-> { title, "slug": slug.current },
    "includedServices": includedServices[]-> { title, "slug": slug.current }
  }
`

// Clinic Info Query
export const CLINIC_INFO_QUERY = `
  *[_type == "clinicInfo"][0] {
    clinicName,
    tagline,
    establishedYear,
    "logo": logo { asset->, alt },
    "logoDark": logoDark { asset-> },
    contact,
    address,
    branches,
    openingHours,
    holidayNote,
    socialMedia,
    stats,
    certifications[] {
      name,
      "logo": logo { asset-> },
      url
    },
    seo
  }
`

// Navigation Menu Query
export const NAVIGATION_QUERY = `
  *[_type == "navigation"][0] {
    headerNav,
    headerCta,
    footerColumns,
    footerBottomLinks,
    footerTagline,
    copyrightText
  }
`

// About Page Query
export const ABOUT_PAGE_QUERY = `
  *[_type == "aboutPage"][0] {
    pageTitle,
    "pageBannerImage": pageBannerImage { asset->, alt },
    story {
      heading,
      content,
      "image": image { asset->, alt }
    },
    missionVision,
    milestones[] {
      year,
      title,
      description,
      "image": image { asset-> }
    },
    technology {
      sectionTitle,
      description,
      items[] {
        name,
        description,
        "image": image { asset->, alt }
      }
    },
    affiliations[] {
      name,
      url,
      "logo": logo { asset->, alt }
    },
    seo
  }
`

// APPOINTMENT SETTINGS
export const APPOINTMENT_SETTINGS_QUERY = `
  *[_type == "appointmentSettings"][0] {
    formTitle,
    formSubtitle,
    formSuccessMessage,
    availableSlots,
    slotDurationMinutes,
    advanceBookingDays,
    emergencyBooking,
    contactPage,
    seo
  }
`

// SEARCH (Cross-content search)
export const SEARCH_QUERY = `
  {
    "services": *[
      _type == "service" &&
      status == "published" &&
      (
        title match $searchTerm ||
        shortDescription match $searchTerm
      )
    ] [0...5] {
      _id, title, "slug": slug.current, shortDescription,
      "type": "service"
    },
    "blogs": *[
      _type == "blogPost" &&
      status == "published" &&
      (
        title match $searchTerm ||
        excerpt match $searchTerm
      )
    ] [0...5] {
      _id, title, "slug": slug.current, excerpt,
      "type": "blog"
    },
    "doctors": *[
      _type == "doctor" &&
      status == "active" &&
      (
        name match $searchTerm ||
        designation match $searchTerm
      )
    ] [0...3] {
      _id, name, "slug": slug.current, designation,
      "type": "doctor"
    }
  }
`

// SITEMAP 
export const SITEMAP_QUERY = `
  {
    "services": *[_type == "service" && status == "published"] {
      "slug": slug.current,
      _updatedAt
    },
    "blogs": *[_type == "blogPost" && status == "published"] {
      "slug": slug.current,
      _updatedAt
    },
    "doctors": *[_type == "doctor" && status == "active"] {
      "slug": slug.current,
      _updatedAt
    }
  }
`