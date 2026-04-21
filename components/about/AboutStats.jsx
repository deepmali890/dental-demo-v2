export default function AboutMission({ about }) {
  if (!about?.missionVision) return null

  const mv = about.missionVision

  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-wider text-brand-600 font-semibold mb-3">
            What Drives Us
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Mission & Values
          </h2>
        </div>

        {/* Mission + Vision (Card Style Upgrade) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">

          {mv.mission && (
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {mv.mission}
              </p>
            </div>
          )}

          {mv.vision && (
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {mv.vision}
              </p>
            </div>
          )}

        </div>

        {/* Core Values (Modern Grid) */}
        {mv.coreValues?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {mv.coreValues.map((v, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-gray-100 transition hover:shadow-md hover:-translate-y-1"
              >

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4 text-lg text-brand-600">
                  {v.icon || '⭐'}
                </div>

                {/* Title */}
                <h4 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition">
                  {v.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.description}
                </p>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  )
}