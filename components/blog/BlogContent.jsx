import PortableTextRenderer from '@/components/PortableTextRenderer'
import BlogTags from './BlogTags'
import BlogAuthorCard from './BlogAuthorCard'

export default function BlogContent({ post }) {
  return (
    <article className="
      lg:col-span-2 
      w-full 
      max-w-3xl 
      mx-auto
    ">

      {/* Content */}
      <div className="
        space-y-6 sm:space-y-8 md:space-y-10
        text-sm sm:text-base
      ">
        <div className="
          prose 
          max-w-none

          prose-headings:font-semibold
          prose-headings:text-gray-900
          prose-headings:tracking-tight

          prose-p:text-gray-600
          prose-p:leading-relaxed

          prose-strong:text-gray-900

          prose-a:text-brand-600
          prose-a:no-underline
          hover:prose-a:underline

          prose-li:text-gray-600
        ">
          <PortableTextRenderer value={post.body} />
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 sm:my-12 h-px bg-gray-100" />

      {/* Footer */}
      <div className="space-y-8 sm:space-y-10">

        {/* Tags */}
        {post.tags?.length > 0 && (
          <BlogTags tags={post.tags} />
        )}

        {/* Author */}
        {post.author && (
          <BlogAuthorCard author={post.author} />
        )}

      </div>

    </article>
  )
}