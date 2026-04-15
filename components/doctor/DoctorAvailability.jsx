export default function DoctorAvailability({ doctor }) {
  if (!doctor.availableDays?.length) return null

  const daysMap = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday',
  }

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Available Days
          </h2>
        </div>

        {/* Days */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(daysMap).map(([short, full]) => {
            const active = doctor.availableDays.includes(full)

            return (
              <span
                key={short}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition
                  ${
                    active
                      ? 'bg-brand-50 text-brand-700 border-brand-100'
                      : 'bg-gray-50 text-gray-400 border-gray-100'
                  }
                `}
              >
                {short}
              </span>
            )
          })}
        </div>

      </div>
    </section>
  )
}