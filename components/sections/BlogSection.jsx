import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { urlFor } from '@/sanity/lib/client'
import { formatDate } from '@/lib/utils'
import BlogCard from '../common/BlogCard'

export default function BlogSection({ data, posts }) {
  if (!posts?.length) return null

  const displayPosts = posts.slice(0, 3)

  return (
    <section className="section bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">

          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
              Dental Knowledge
            </p>

            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
              {data?.sectionTitle || 'Latest Articles'}
            </h2>

            <p className="text-gray-500 text-sm md:text-base mt-3">
              Expert tips, guides, and insights for better dental health.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group"
          >
            View All Articles
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white transition group-hover:translate-x-1 group-hover:bg-brand-600">
              <ArrowRight size={14} />
            </span>
          </Link>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 md:hidden text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
          >
            View All Articles
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}
