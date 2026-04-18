import { client } from "./client";
import {
    ABOUT_PAGE_QUERY,
    APPOINTMENT_SETTINGS_QUERY,
    BEFORE_AFTER_BY_SERVICE_QUERY,
    BEFORE_AFTER_LIST_QUERY,
    BLOG_BY_CATEGORY_QUERY,
    BLOG_CATEGORIES_QUERY,
    BLOG_DETAIL_QUERY,
    BLOG_LIST_QUERY,
    BLOG_SLUGS_QUERY,
    CLINIC_INFO_QUERY,
    DOCTOR_DETAIL_QUERY,
    DOCTORS_LIST_QUERY,
    FAQ_ALL_QUERY,
    FAQ_BY_CATEGORY_QUERY,
    FEATURED_TESTIMONIALS_QUERY,
    GALLERY_BY_CATEGORY_QUERY,
    GALLERY_QUERY,
    HOMEPAGE_QUERY,
    NAVIGATION_QUERY,
    PRICING_ALL_QUERY,
    SEARCH_QUERY,
    SERVICE_DETAIL_QUERY,
    SERVICES_LIST_QUERY,
    SERVICES_SLUGS_QUERY,
    SITEMAP_QUERY,
    TESTIMONIALS_QUERY
} from "./queries";


async function sanityFetch(query, params = {}, tags = []) {
    try {
        return await client.fetch(query, params, {
            next: {
                revalidate: 60, // Revalidate every 60 seconds
                tags: tags.length ? tags : undefined,
            },
        })
    } catch (error) {
        console.error('[Sanity Fetch Error]', error)
        return null
    }
}

// HOMEPAGE
/**
 * Usage: const data = await getHomepageData()
*/
export async function getHomepageData() {
    return sanityFetch(HOMEPAGE_QUERY, {}, ['homepage', 'service', 'testimonial', 'blogPost'])
}

// CLINIC INFO & NAVIGATION
/** * Usage: const data = await getClinicInfo()
*/
export async function getClinicInfo() {
    return sanityFetch(CLINIC_INFO_QUERY, {}, ['clinicInfo'])
}

// NAVIGATION
/** * Usage: const data = await getNavigation()
*/
export async function getNavigation() {
    return sanityFetch(NAVIGATION_QUERY, {}, ['navigation'])
}

/**
 * Header + Footer for all pages, including static ones.
 * This is used in:
 * app/layout.js 
 */

export async function getLayoutData() {
    const [clinicInfo, navigation] = await Promise.all([
        getClinicInfo(),
        getNavigation()
    ])
    return {
        clinicInfo,
        navigation
    }
}

// Services
export async function getAllServices() {
    return sanityFetch(SERVICES_LIST_QUERY, {}, ['service'])
}


// Service Detail
/**
 * Single service detail — /services/[slug]
 * @param {string} slug
 */
export async function getServiceBySlug(slug) {
    return sanityFetch(SERVICE_DETAIL_QUERY, { slug }, ['service'])
}

// All service slugs for dynamic routing in /services/[slug]
export async function getAllServiceSlugs() {
    const data = await sanityFetch(SERVICES_SLUGS_QUERY, {}, ['service'])
    return data || []
}

// Doctors
export async function getAllDoctors() {
    return sanityFetch(DOCTORS_LIST_QUERY, {}, ['doctor'])
}


// Doctor Detail
export async function getDoctorBySlug(slug) {
    return sanityFetch(DOCTOR_DETAIL_QUERY, { slug }, ['doctor'])
}

// Blog Posts
export async function getAllBlogPosts() {
    return sanityFetch(BLOG_LIST_QUERY, {}, ['blogPost'])
}

// Blog Post Detail
export async function getBlogPostBySlug(slug) {
    return sanityFetch(BLOG_DETAIL_QUERY, { slug }, ['blogPost'])
}

// All blog post slugs for dynamic routing in /blog/[slug]
export async function getAllBlogSlugs() {
    const data = await sanityFetch(BLOG_SLUGS_QUERY, {}, ['blogPost'])
    return data || []
}

// Blog Categories
export async function getBlogCategories() {
    return sanityFetch(BLOG_CATEGORIES_QUERY, {}, ['blogCategory'])
}

// Blog Posts by Category
export async function getBlogPostsByCategory(categorySlug) {
    return sanityFetch(BLOG_BY_CATEGORY_QUERY, { categorySlug }, ['blogPost'])
}

// Testimonials
export async function getAllTestimonials() {
    return sanityFetch(TESTIMONIALS_QUERY, {}, ['testimonial'])
}

// Featured Testimonials for homepage section
export async function getFeaturedTestimonials() {
    return sanityFetch(FEATURED_TESTIMONIALS_QUERY, {}, ['testimonial'])
}

// Before & After Cases
export async function getAllBeforeAfterCases() {
    return sanityFetch(BEFORE_AFTER_LIST_QUERY, {}, ['beforeAfter'])
}

// Before & After Cases by Service for service detail page
export async function getBeforeAfterByService(serviceId) {
    return sanityFetch(BEFORE_AFTER_BY_SERVICE_QUERY, { serviceId }, ['beforeAfter'])
}

//  Gallery
export async function getAllGalleryItems() {
    return sanityFetch(GALLERY_QUERY, {}, ['galleryItem'])
}

// Gallery Items by Category for gallery page filtering
export async function getGalleryByCategory(category) {
    return sanityFetch(GALLERY_BY_CATEGORY_QUERY, { category }, ['galleryItem'])
}

// FAQs
export async function getAllFAQs() {
    return sanityFetch(FAQ_ALL_QUERY, {}, ['faq'])
}

// FAQs by Category for service detail page or FAQ page filtering
export async function getFAQsByCategory(category) {
    return sanityFetch(FAQ_BY_CATEGORY_QUERY, { category }, ['faq'])
}


// Pricing Plans
export async function getAllPricingPlans() {
    return sanityFetch(PRICING_ALL_QUERY, {}, ['pricingPlan'])
}

// About Page (static content)
export async function getAboutPageData() {
    return sanityFetch(ABOUT_PAGE_QUERY, {}, ['aboutPage'])
}

// Appointment Settings (for booking form)
export async function getAppointmentSettings() {
    return sanityFetch(APPOINTMENT_SETTINGS_QUERY, {}, ['appointmentSettings'])
}

// Search
export async function searchContent(term) {
    if (!term || term.length < 2) return { services: [], blogs: [], doctors: [] }
    const searchTerm = `*${term}*`
    return sanityFetch(SEARCH_QUERY, { searchTerm })
}

export async function getSitemapData() {
    return sanityFetch(SITEMAP_QUERY)
}


