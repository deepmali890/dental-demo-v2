import BlogCard from '@/components/common/BlogCard'
import CTABanner from '@/components/sections/CTABanner'
import PageHero from '@/components/ui/PageHero'
import SanityImage from '@/components/ui/SanityImage'
import { formatDate } from '@/lib/utils'
import { getAllBlogPosts, getBlogCategories, getHomepageData } from '@/sanity/lib/fetchData'
import { Clock, User } from 'lucide-react'
import Link from 'next/link'
import React, { cache } from 'react'

export const revalidate = 600

const getData = cache(getHomepageData)

export const metadata = {
  title: 'Dental Health Blog',
  description:
    'Expert tips, treatment guides, and oral health advice from our dental professionals.',
}

export default async function BlogPage({ searchParams }) {
  const categoryParam =
    typeof searchParams?.category === 'string'
      ? searchParams.category
      : null

  const [posts, categories, homepageData] = await Promise.all([
    getAllBlogPosts(),
    getBlogCategories(),
    getData(),
  ])

  const filtered = categoryParam
    ? posts?.filter((p) =>
        p.categories?.some((c) => c.slug === categoryParam)
      )
    : posts

  const featured = filtered?.find((p) => p.isFeatured)
  const remaining = filtered?.filter((p) => p._id !== featured?._id) || []

  const cta = homepageData?.homepage?.ctaBanner

  return (
    <>
      <PageHero
        title="Dental Health Blog"
        subtitle="Expert advice, treatment guides, and oral health tips from our dental team"
        badge="📝 Health Tips & Insights"
      />

      <section className="section bg-white">
        <div className="container mx-auto px-4 max-w-7xl">

          {/*  CATEGORY NAV */}
          {categories?.length > 0 && (
            <div className="mb-12 border-b border-gray-100">
              <div className="flex gap-6 overflow-x-auto pb-3 text-sm">

                <Link
                  href="/blog"
                  className={`whitespace-nowrap pb-2 transition ${
                    !categoryParam
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  All
                </Link>

                {categories.map((cat) => {
                  const isActive = categoryParam === cat.slug

                  return (
                    <Link
                      key={cat._id}
                      href={`/blog?category=${encodeURIComponent(cat.slug)}`}
                      className={`whitespace-nowrap pb-2 transition ${
                        isActive
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

          {/*  FEATURED */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="group block mb-20">

              <div className="grid lg:grid-cols-2 gap-8 items-center">

                {/* Image */}
                <div className="relative h-[260px] md:h-[320px] rounded-2xl overflow-hidden bg-gray-100">
                  {featured.coverImage?.asset ? (
                    <SanityImage
                      image={featured.coverImage}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-3xl text-gray-400">
                      📝
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featured.categories?.map((cat) => (
                      <span
                        key={cat.slug}
                        className="text-xs text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mb-4 group-hover:text-brand-600 transition">
                    {featured.title}
                  </h2>

                  {/* Excerpt */}
                  {featured.excerpt && (
                    <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3">
                      {featured.excerpt}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
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
                      <span>{formatDate(featured.publishedAt)}</span>
                    )}
                  </div>

                </div>
              </div>
            </Link>
          )}

          {/*  GRID */}
          {remaining.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {remaining.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : !featured ? (
            <div className="text-center py-24 text-gray-400">
              <span className="text-4xl block mb-4">📝</span>
              <p>No posts found. Check back soon!</p>
            </div>
          ) : null}

        </div>
      </section>

      {/* CTA */}
      {cta?.heading && <CTABanner data={cta} />}
    </>
  )
}