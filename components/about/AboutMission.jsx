import * as Icons from 'lucide-react'

export default function AboutMission({ about }) {
  if (!about?.missionVision) return null

  const mv = about.missionVision

  function getLucideIcon(name) {
    if (!name) return null

    const formattedName = name
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase())
      .replace(/\s/g, '')

    return Icons[formattedName] || null
  }

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2 sm:mb-3">
            What Drives Us
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            Mission & Values
          </h2>
        </div>

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-14">

          {mv.mission && (
            <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {mv.mission}
              </p>
            </div>
          )}

          {mv.vision && (
            <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {mv.vision}
              </p>
            </div>
          )}

        </div>

        {/* Core Values */}
        {mv.coreValues?.length > 0 && (
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">

            {mv.coreValues.map((v, i) => {
              const Icon = getLucideIcon(v.icon)

              return (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition hover:border-gray-200"
                >

                  {/* Icon */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-50 flex items-center justify-center mb-3 sm:mb-4">
                    {Icon ? (
                      <Icon size={16} className="text-brand-600" />
                    ) : (
                      <span>⭐</span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    {v.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {v.description}
                  </p>

                </div>
              )
            })}

          </div>
        )}

      </div>
    </section>
  )
}