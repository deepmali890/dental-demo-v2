import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BlogCard from '../common/BlogCard'

export default function BlogSection({ data, posts }) {
  if (!posts?.length) return null

  const displayPosts = posts.slice(0, 3)

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">

          <div className="max-w-xl">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2 sm:mb-3">
              Dental Knowledge
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
              {data?.sectionTitle || 'Latest Articles'}
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 sm:mt-3">
              Expert tips, guides, and insights for better dental health.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-900 group shrink-0"
          >
            View All Articles
            <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-900 text-white transition group-hover:translate-x-1 group-hover:bg-brand-600">
              <ArrowRight size={14} />
            </span>
          </Link>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 sm:mt-10 md:hidden text-center">
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