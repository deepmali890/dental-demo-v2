import { blockContentObject } from "./objects/blockContent";
import { ctaObject } from "./objects/cta";
import { imageWithAltObject } from "./objects/imageWithAlt";
import { openingHoursObject } from "./objects/openingHours";
import { seoObject } from "./objects/seo";



import { clinicInfoSchema } from "./documents/clinicInfo";
import { homepageSchema } from "./documents/homepage";
import { aboutPageSchema } from "./documents/aboutPage";
import { navigationSchema } from "./documents/navigation";
import { appointmentSettingsSchema } from "./documents/appointmentSettings";


import { serviceSchema } from "./documents/service";
import { doctorSchema } from "./documents/doctor";
import { blogCategorySchema } from "./documents/blogCategory";
import { blogPostSchema } from "./documents/blogPost";
import { testimonialSchema } from "./documents/testimonial";
import { beforeAfterSchema } from "./documents/beforeAfter";
import { gallerySchema } from "./documents/gallery";
import { faqSchema } from "./documents/faq";
import { pricingPlanSchema } from "./documents/pricingPlan";

export const schema = {
  types: [
    // Objects
    seoObject,
    ctaObject,
    imageWithAltObject,
    blockContentObject,
    openingHoursObject,

    // Singletons Only Single Entry 
    clinicInfoSchema,
    homepageSchema,
    aboutPageSchema,
    navigationSchema,
    appointmentSettingsSchema,

    // Core Components
    serviceSchema,
    doctorSchema,
    blogCategorySchema,
    blogPostSchema,
    testimonialSchema,
    beforeAfterSchema,
    gallerySchema,
    faqSchema,
    pricingPlanSchema
  ]
}
