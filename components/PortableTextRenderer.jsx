import { urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-600 leading-relaxed text-[15px] md:text-base">
        {children}
      </p>
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-12 mb-4 tracking-tight">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-3">
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">
        {children}
      </h4>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-gray-300 pl-4 my-8 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 my-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 my-6 list-decimal list-inside">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 text-gray-600 leading-relaxed">
        <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-gray-600">{children}</li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">
        {children}
      </strong>
    ),

    em: ({ children }) => <em className="italic">{children}</em>,

    code: ({ children }) => (
      <code className="bg-gray-100 text-gray-800 rounded px-1.5 py-0.5 text-sm">
        {children}
      </code>
    ),

    link: ({ value, children }) => {
      const isExternal = value?.href?.startsWith('http')

      const baseClass =
        'text-brand-600 hover:text-brand-700 underline underline-offset-2'

      return isExternal ? (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {children}
        </a>
      ) : (
        <Link href={value.href} className={baseClass}>
          {children}
        </Link>
      )
    },

    internalLink: ({ value, children }) => {
      const slug = value?.reference?.slug?.current
      const type = value?.reference?._type

      const href =
        type === 'service'
          ? `/services/${slug}`
          : type === 'blogPost'
          ? `/blog/${slug}`
          : type === 'doctor'
          ? `/team/${slug}`
          : `/${slug}`

      return (
        <Link
          href={href}
          className="text-brand-600 hover:text-brand-700 underline"
        >
          {children}
        </Link>
      )
    },
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset) return null

      return (
        <figure className="my-10">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-100">
            <Image
              src={urlFor(value).width(900).url()}
              alt={value.alt || ''}
              fill
              className="object-cover"
            />
          </div>

          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },

    callout: ({ value }) => {
      return (
        <div className="border border-gray-200 rounded-xl p-4 my-8 bg-gray-50 text-gray-700">
          {value.text}
        </div>
      )
    },
  },
}

export default function PortableTextRenderer({ value }) {
  if (!value) return null

  return (
    <div className="space-y-5">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  )
}