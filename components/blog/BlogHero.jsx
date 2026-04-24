import Link from 'next/link'
import { Calendar, ChevronRight, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import SanityImage from '@/components/ui/SanityImage'

export default function BlogHero({ post, jsonLd }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-brand-900 py-10 sm:py-12 md:py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT */}
            <div>

              <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/50 mb-5 font-medium">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight size={10} />
                <Link href="/blog" className="hover:text-white">Blog</Link>
                <ChevronRight size={10} />
                <span className="text-white/80 line-clamp-1">
                  {post.title}
                </span>
              </nav>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2">

                {post.publishedAt && (
                  <span className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-2 rounded-lg text-xs sm:text-sm text-white/80">
                    <Calendar size={14} />
                    {formatDate(post.publishedAt)}
                  </span>
                )}

                {post.readTimeMinutes && (
                  <span className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-2 rounded-lg text-xs sm:text-sm text-white/80">
                    <Clock size={14} />
                    {post.readTimeMinutes} min read
                  </span>
                )}

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="
                relative
                w-full
                aspect-[2/1]   /* 🔥 EXACT RATIO */
                rounded-2xl
                overflow-hidden
                bg-white/5
                border border-white/10
                flex items-center justify-center
              ">
                {post.coverImage?.asset && (
                  <SanityImage
                    image={post.coverImage}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"  /* 🔥 NO CROP */
                    priority
                  />
                )}
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}