import Link from 'next/link'
import { Calendar, ChevronRight, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import SanityImage from '@/components/ui/SanityImage'

export default function BlogHero({ post, jsonLd }) {
  return (
    <section className="relative bg-primary overflow-hidden">

      {/* SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 md:pt-28 pb-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/50 mb-6 font-medium">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <ChevronRight size={10} className="opacity-40" />
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
          <ChevronRight size={10} className="opacity-40" />
          <span className="text-white/80 line-clamp-1">
            {post.title}
          </span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-2xl mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3">

          {post.publishedAt && (
            <span className="flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs text-white/80">
              <Calendar size={14} className="opacity-60" />
              {formatDate(post.publishedAt)}
            </span>
          )}

          {post.readTimeMinutes && (
            <span className="flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs text-white/80">
              <Clock size={14} className="opacity-60" />
              {post.readTimeMinutes} min read
            </span>
          )}

        </div>
      </div>

      {/* ✅ FLOATING IMAGE (NO CROPPING) */}
      {/* {post.coverImage?.asset && (
        <div className="absolute right-4 bottom-0 md:right-12 
                        w-[260px] sm:w-[340px] md:w-[440px] lg:w-[520px]
                        pointer-events-none">

          <SanityImage
            image={post.coverImage}
            width={520}
            height={350}
            sizes="(max-width: 640px) 260px, (max-width: 768px) 340px, (max-width: 1024px) 440px, 520px"
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      )} */}

    </section>
  )
}