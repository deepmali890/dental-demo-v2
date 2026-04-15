import PortableTextRenderer from '@/components/PortableTextRenderer'
import BlogTags from './BlogTags'
import BlogAuthorCard from './BlogAuthorCard'

export default function BlogContent({ post }) {
  return (
    <article className="lg:col-span-2 max-w-2xl">

      {/* Content */}
      <div className="space-y-10">
        <PortableTextRenderer value={post.body} />
      </div>

      {/* Footer */}
      <div className="mt-12 space-y-10">
        <BlogTags tags={post.tags} />
        <BlogAuthorCard author={post.author} />
      </div>

    </article>
  )
}