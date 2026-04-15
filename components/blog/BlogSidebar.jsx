import Link from 'next/link'
import { Calendar, ChevronRight, Phone } from 'lucide-react'
import * as Icons from 'lucide-react'

export default function BlogSidebar({ post }) {
  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">

        {/* 🔹 Related Services */}
        {post.relatedServices?.length > 0 && (
          <div className="rounded-2xl border border-gray-100 bg-white p-5 space-y-4">

            <h3 className="text-sm font-semibold text-gray-900">
              Related Services
            </h3>

            <div className="space-y-1">
              {post.relatedServices.map((s) => {
                const Icon = Icons[s.icon] || Icons.Stethoscope

                return (
                  <Link
                    key={s._id}
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 transition hover:bg-gray-50"
                  >

                    {/* Icon */}
                    <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-brand-600" />
                    </div>

                    {/* Title */}
                    <span className="flex-1 group-hover:text-gray-900 transition-colors">
                      {s.title}
                    </span>

                    {/* Arrow */}
                    <ChevronRight
                      size={14}
                      className="text-gray-300 group-hover:text-gray-400 transition"
                    />

                  </Link>
                )
              })}
            </div>

          </div>
        )}

        {/* 🔹 CTA (keep your existing for now) */}
        <div className="rounded-2xl border border-brand-200 bg-brand-900 p-6 text-white text-center">

          <div className="mb-4">
            <Calendar size={26} className="mx-auto text-brand-200" />
          </div>

          <h3 className="text-lg font-semibold mb-1">
            Book Appointment
          </h3>

          <p className="text-sm text-brand-200 mb-5">
            Free consultation for your first visit
          </p>

          <Link
            href="/contact"
            className="block w-full bg-white text-brand-900 font-semibold py-3 rounded-xl transition hover:bg-gray-100"
          >
            Book Now — It&rsquo;s Free
          </Link>

          <a
            href="tel:"
            className="mt-4 flex items-center justify-center gap-2 text-sm text-brand-200 hover:text-white transition"
          >
            <Phone size={14} />
            Or call us directly
          </a>

        </div>

      </div>
    </aside>
  )
}