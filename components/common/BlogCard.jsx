import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { urlFor } from "@/sanity/lib/client"
import { formatDate } from "@/lib/utils"

export default function BlogCard({ post }) {
  if (!post) return null

  const imageUrl = post?.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : null

  const category = post?.categories?.[0]

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col bg-white rounded-xl p-4 border border-slate-100 transition-all duration-300 hover:-translate-y-1"
    >

      {/* ✅ IMAGE FIXED */}
      <div className="
        relative
        w-full
        aspect-[1200/630]   /* 🔥 EXACT RATIO */
        overflow-hidden
        rounded-md
        mb-6
        bg-slate-100
        flex items-center justify-center
      ">

        {imageUrl && (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}

        {category && (
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {category.title}
            </span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1">

        {/* Meta */}
        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">

          {post.publishedAt && (
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(post.publishedAt)}
            </span>
          )}

          {post.readTimeMinutes && (
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readTimeMinutes} Min Read
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
            {post.excerpt}
          </p>
        )}

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">

          <span className="text-xs font-semibold text-slate-600">
            {category?.title || "Article"}
          </span>

          <div className="flex items-center gap-1 text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
            Read More <ArrowRight size={14} />
          </div>

        </div>
      </div>
    </Link>
  )
}