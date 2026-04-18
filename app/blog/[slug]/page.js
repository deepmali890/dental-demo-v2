import { notFound } from 'next/navigation'

import { getAllBlogSlugs, getBlogPostBySlug } from '@/sanity/lib/fetchData'
import { buildArticleSchema } from '@/lib/utils'

import BlogHero from '@/components/blog/BlogHero'
import BlogContent from '@/components/blog/BlogContent'
import BlogSidebar from '@/components/blog/BlogSidebar'
import BlogRelatedPosts from '@/components/blog/BlogRelatedPosts'

export const revalidate = 3600

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()

  return slugs.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params

  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: post.seo?.ogImage?.asset
      ? {
          images: [
            urlFor(post.seo.ogImage)
              .width(1200)
              .height(630)
              .url(),
          ],
        }
      : undefined,
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params

  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || ''

  const jsonLd = buildArticleSchema({
    post,
    siteUrl,
    clinicName: 'Dental Clinic',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogHero post={post} jsonLd={jsonLd} />

      <section className="bg-white pt-12 pb-16 md:px-6">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-3">
          <BlogContent post={post} />
          <BlogSidebar post={post} />
        </div>

        <BlogRelatedPosts post={post} />
      </section>
    </>
  )
}