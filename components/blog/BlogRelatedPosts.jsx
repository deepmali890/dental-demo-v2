import BlogSection from '@/components/sections/BlogSection'

export default function BlogRelatedPosts({ post }) {
  if (!post.relatedPosts?.length) return null

  return (
    <section className="
      mt-14 sm:mt-16 md:mt-20 
      pt-10 sm:pt-12 
      border-t border-gray-100
    ">

      <div className="
        max-w-7xl mx-auto 
        px-4 sm:px-6 lg:px-8
      ">

        <BlogSection
          data={{ sectionTitle: 'You Might Also Like' }}
          posts={post.relatedPosts}
        />

      </div>

    </section>
  )
}