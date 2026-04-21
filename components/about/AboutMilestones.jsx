export default function AboutMilestones({ about }) {
  if (!about?.milestones?.length) return null

  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-brand-600 font-semibold mb-3">
            Our Journey
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Key Milestones
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          {/* Mobile left line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 md:hidden" />

          <div className="space-y-12">

            {about.milestones.map((m, i) => {
              const isLeft = i % 2 === 0

              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                >

                  {/* Mobile Dot */}
                  <div className="absolute left-4 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-600 border-4 border-white shadow md:hidden" />

                  {/* Content */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">

                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">

                      <span className="text-xs text-brand-600 font-semibold mb-2 block">
                        {m.year}
                      </span>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                        {m.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {m.description}
                      </p>

                    </div>

                  </div>

                  {/* Desktop Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-600 border-4 border-white shadow" />

                </div>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}