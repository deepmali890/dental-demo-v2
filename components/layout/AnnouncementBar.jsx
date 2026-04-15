'use client'

import { X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function AnnouncementBar({ data }) {
  const [visible, setVisible] = useState(false)

  // Smooth mount animation
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  if (!data?.isActive || !visible) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className={`
        relative w-full
        text-white text-sm
        px-4 py-3
        flex items-center justify-center
        text-center
        border-b border-white/10
        backdrop-blur-md
        transition-all duration-500
        ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}
      style={{
        background:
          data.bgColor ||
          'linear-gradient(90deg, #1e3a8a 0%, #1d4ed8 100%)',
      }}
    >

      {/* Content */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 max-w-4xl">

        {/* Text */}
        <p className="font-medium leading-relaxed">
          {data.text}
        </p>

        {/* CTA */}
        {data.linkText && data.linkUrl && (
          <Link
            href={data.linkUrl}
            className="
              inline-flex items-center gap-1
              font-semibold
              text-white
              underline underline-offset-4
              hover:no-underline
              transition
              whitespace-nowrap
            "
          >
            {data.linkText}
            <ArrowRight size={14} />
          </Link>
        )}

      </div>

      {/* Close */}
      <button
        onClick={() => setVisible(false)}
        className="
          absolute right-3 top-1/2 -translate-y-1/2
          w-7 h-7 flex items-center justify-center
          rounded-md
          hover:bg-white/10
          transition
        "
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  )
}