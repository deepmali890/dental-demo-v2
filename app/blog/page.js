import BlogCard from '@/components/common/BlogCard'
import CTABanner from '@/components/sections/CTABanner'
import PageHero from '@/components/ui/PageHero'
import SanityImage from '@/components/ui/SanityImage'
import { formatDate } from '@/lib/utils'
import {
  getAllBlogPosts,
  getBlogCategories,
  getHomepageData,
} from '@/sanity/lib/fetchData'
import { Clock, User } from 'lucide-react'
import Link from 'next/link'
import React, { cache } from 'react'

export const revalidate = 3600

const getData = cache(getHomepageData)

export const metadata = {
  title: 'Dental Health Blog',
  description:
    'Expert tips, treatment guides, and oral health advice from our dental professionals.',
}

export default async function BlogPage({ searchParams = {} }) {
  const params = await searchParams

  const categoryParam =
    typeof params?.category === 'string'
      ? decodeURIComponent(params.category).toLowerCase()
      : null

  const [posts, categories, homepageData] = await Promise.all([
    getAllBlogPosts(),
    getBlogCategories(),
    getData(),
  ])

  const filtered = categoryParam
    ? posts?.filter((p) =>
      p.categories?.some((c) => {
        const slug =
          typeof c.slug === 'object'
            ? c.slug.current
            : c.slug

        return slug?.toLowerCase() === categoryParam
      })
    )
    : posts

  const featured = filtered?.find((p) => p.isFeatured)

  const remaining =
    filtered?.filter((p) => p._id !== featured?._id) || []

  const cta = homepageData?.homepage?.ctaBanner

  return (
    <>
      {/* HERO */}
      <PageHero
        title="Dental Health Blog"
        subtitle="Expert advice, treatment guides, and oral health tips from our dental team"
        badge="📝 Health Tips & Insights"
      />

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* CATEGORY NAV */}
          {categories?.length > 0 && (
            <div className="mb-10 sm:mb-12 border-b border-gray-100">
              <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-3 text-xs sm:text-sm no-scrollbar">

                {/* ALL */}
                <Link
                  href="/blog"
                  className={`whitespace-nowrap pb-2 transition ${!categoryParam
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  All
                </Link>

                {/* CATEGORY LIST */}
                {categories.map((cat) => {
                  const slug =
                    typeof cat.slug === 'object'
                      ? cat.slug.current
                      : cat.slug

                  const isActive =
                    categoryParam === slug?.toLowerCase()

                  return (
                    <Link
                      key={cat._id}
                      href={`/blog?category=${encodeURIComponent(slug)}`}
                      className={`whitespace-nowrap pb-2 transition ${isActive
                          ? 'text-gray-900 border-b-2 border-gray-900'
                          : 'text-gray-500 hover:text-gray-900'
                        }`}
                    >
                      {cat.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* FEATURED POST */}
          {featured && (
            <Link
              href={`/blog/${featured.slug?.current || featured.slug}`}
              className="group block mb-14 sm:mb-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">

                {/* IMAGE */}
                <div className="relative h-[220px] sm:h-[260px] md:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                  {featured.coverImage?.asset ? (
                    <SanityImage
                      image={featured.coverImage}
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-3xl text-gray-400">
                      📝
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div>

                  {/* CATEGORIES */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featured.categories?.map((cat) => (
                      <span
                        key={cat.slug?.current || cat.slug}
                        className="text-xs text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mb-3 sm:mb-4 group-hover:text-brand-600 transition">
                    {featured.title}
                  </h2>

                  {/* EXCERPT */}
                  {featured.excerpt && (
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5 line-clamp-3">
                      {featured.excerpt}
                    </p>
                  )}

                  {/* META */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-500">
                    {featured.author?.name && (
                      <span className="flex items-center gap-1.5">
                        <User size={14} />
                        {featured.author.name}
                      </span>
                    )}

                    {featured.readTimeMinutes && (
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {featured.readTimeMinutes} min read
                      </span>
                    )}

                    {featured.publishedAt && (
                      <span>
                        {formatDate(featured.publishedAt)}
                      </span>
                    )}
                  </div>

                </div>
              </div>
            </Link>
          )}

          {/* BLOG GRID */}
          {remaining.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {remaining.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : !featured ? (
            <div className="text-center py-20 sm:py-24 text-gray-400">
              <span className="text-4xl block mb-3 sm:mb-4">📝</span>
              <p className="text-sm sm:text-base">
                No posts found. Check back soon!
              </p>
            </div>
          ) : null}

        </div>
      </section>

      {/* CTA */}
      {cta?.heading && <CTABanner data={cta} />}
    </>
  )
}