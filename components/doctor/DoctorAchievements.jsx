import { Award } from 'lucide-react'

export default function DoctorAchievements({ doctor }) {
  if (!doctor.achievements?.length) return null

  return (
    <section className="space-y-6 sm:space-y-8">

      {/* Header */}
      <div>
        <h2 className="
          text-lg sm:text-xl md:text-2xl 
          font-semibold 
          text-gray-900
        ">
          Awards & Achievements
        </h2>
      </div>

      {/* List */}
      <div className="
        space-y-3 sm:space-y-4
      ">

        {doctor.achievements.map((a, i) => (
          <div
            key={i}
            className="
              flex items-start gap-3 
              p-4 sm:p-5
              rounded-xl sm:rounded-2xl
              bg-gray-50
              border border-gray-100
              transition
              hover:bg-gray-100
            "
          >

            {/* Icon */}
            <div className="
              w-9 h-9 sm:w-10 sm:h-10
              rounded-xl 
              bg-white 
              flex items-center justify-center 
              flex-shrink-0
              shadow-sm
            ">
              <Award size={16} className="text-brand-600" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">

              <p className="
                text-sm sm:text-base 
                font-semibold 
                text-gray-900
                leading-snug
              ">
                {a.title}
              </p>

              {(a.organization || a.year) && (
                <p className="
                  text-xs sm:text-sm 
                  text-gray-500 
                  mt-1
                ">
                  {a.organization}
                  {a.year && ` · ${a.year}`}
                </p>
              )}

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}