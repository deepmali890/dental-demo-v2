import { Tag } from 'lucide-react'

export default function BlogTags({ tags }) {
  if (!tags?.length) return null

  return (
    <div className="
      pt-6 sm:pt-8 
      mt-8 sm:mt-10 
      border-t border-gray-100
    ">

      {/* Header */}
      <div className="
        flex items-center gap-2 
        text-xs sm:text-sm 
        text-gray-500 
        mb-3 sm:mb-4
      ">
        <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
          <Tag size={14} className="opacity-70" />
        </div>
        <span className="font-medium">Tags</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">

        {tags.map((tag) => (
          <span
            key={tag}
            className="
              px-3 py-1.5 
              text-xs sm:text-sm 
              text-gray-700 
              bg-gray-100
              rounded-full
              transition
              hover:bg-gray-200
              active:scale-[0.96]
            "
          >
            #{tag}
          </span>
        ))}

      </div>

    </div>
  )
}