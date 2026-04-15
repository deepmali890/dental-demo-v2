'use client'

import { useEffect, useRef, useState } from 'react'
import * as Icons from 'lucide-react'

/* ---------------- CountUp (Improved) ---------------- */
function CountUp({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!target) return

    const numeric = parseInt(target.replace(/\D/g, ''), 10) || 0
    const suffix = target.replace(/[0-9]/g, '')

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true

        const startTime = Date.now()

        const animate = () => {
          const progress = Math.min((Date.now() - startTime) / duration, 1)
          const value = Math.floor(progress * numeric)

          setCount(value + suffix)

          if (progress < 1) requestAnimationFrame(animate)
          else setCount(target)
        }

        requestAnimationFrame(animate)
      }
    }, { threshold: 0.4 })

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count || '0'}</span>
}

/* ---------------- Icon Resolver ---------------- */
function Icon({ name }) {
  const LucideIcon = Icons[name]

  if (!LucideIcon) {
    return <Icons.HelpCircle className="text-brand-600" />
  }

  return <LucideIcon />
}

/* ---------------- Grid Fix ---------------- */
function getGridCols(count) {
  if (count === 1) return 'md:grid-cols-1'
  if (count === 2) return 'md:grid-cols-2'
  if (count === 3) return 'md:grid-cols-3'
  return 'md:grid-cols-4'
}

/* ---------------- Main Section ---------------- */
export default function StatsSection({ data, clinicStats }) {
  const stats =
    data?.useClinicStats === false
      ? data?.customStats || []
      : clinicStats || []

  if (!stats.length) return null

  return (
    <section className="relative bg-white py-14 md:py-20">

      <div className="max-w-7xl mx-auto px-4">

        {/* Grid */}
        <div
          className={`grid grid-cols-2 ${getGridCols(stats.length)} gap-6 md:gap-8`}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-gray-100 rounded-2xl p-2 text-center"
            >

              {/* Icon */}
              {stat.icon && (
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-brand-50 text-brand-600  transition">
                  <Icon name={stat.icon} size={24} />
                </div>
              )}

              {/* Number */}
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                <CountUp target={stat.value} />
              </div>

              {/* Label */}
              <div className="text-sm text-gray-500 font-medium">
                {stat.label}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}