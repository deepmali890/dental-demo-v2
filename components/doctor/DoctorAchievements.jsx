import { Award } from 'lucide-react'

export default function DoctorAchievements({ doctor }) {
  if (!doctor.achievements?.length) return null

  return (
    <section className="bg-white">
      <div className="container mx-auto md:px-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Awards & Achievements
          </h2>

        {/* List */}
        <div className="space-y-4">
          {doctor.achievements.map((a, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 border border-gray-100 rounded-2xl"
            >

              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Award size={16} className="text-gray-700" />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {a.title}
                </p>

                {(a.organization || a.year) && (
                  <p className="text-xs text-gray-500 mt-1">
                    {a.organization}
                    {a.year && ` · ${a.year}`}
                  </p>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}