export default function AboutMilestones({ about }) {
  if (!about?.milestones?.length) return null

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-3">
            Our Journey
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Key Milestones
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-8">

            {about.milestones.map((m, i) => (
              <div key={i} className="relative flex gap-6">

                {/* Dot + Year */}
                <div className="relative z-10 flex flex-col items-center">

                  <div className="w-9 h-9 rounded-full bg-brand-600 text-white text-xs font-semibold flex items-center justify-center">
                    {m.year}
                  </div>

                </div>

                {/* Card */}
                <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5">

                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {m.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {m.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}