import { Tag } from 'lucide-react'

export default function BlogTags({ tags }) {
  if (!tags?.length) return null

  return (
    <div className="pt-8 mt-12 border-t border-gray-100 space-y-4">

      {/* Label */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Tag size={14} className="opacity-60" />
        <span>Tags</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 text-xs text-gray-700 border border-gray-200 rounded-full transition hover:border-gray-300 hover:bg-gray-50"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  )
}