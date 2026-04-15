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
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
            What Drives Us
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Mission & Values
          </h2>
        </div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">

          {mv.mission && (
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {mv.mission}
              </p>
            </div>
          )}

          {mv.vision && (
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {mv.vision}
              </p>
            </div>
          )}

        </div>

        {/* Core Values */}
        {mv.coreValues?.length > 0 && (
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5">

            {mv.coreValues.map((v, i) => {
              const Icon = getLucideIcon(v.icon)

              return (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl p-5 transition hover:border-gray-200"
                >

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                    {Icon ? (
                      <Icon size={18} className="text-brand-600" />
                    ) : (
                      <span>⭐</span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    {v.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed">
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