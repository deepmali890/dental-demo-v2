import BlogSection from '@/components/sections/BlogSection'

export default function BlogRelatedPosts({ post }) {
  if (!post.relatedPosts?.length) return null

  return (
    <div className="mt-16 pt-12 max-w-7xl mx-auto">
      <BlogSection
        data={{ sectionTitle: 'You Might Also Like' }}
        posts={post.relatedPosts}
      />
    </div>
  )
}