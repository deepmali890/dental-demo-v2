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
    <section className="bg-white py-8 sm:py-10 md:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl 
            font-semibold 
            text-gray-900
          ">
            Available Days
          </h2>
        </div>

        {/* Days */}
        <div className="
          flex flex-wrap 
          gap-2 sm:gap-3
        ">
          {Object.entries(daysMap).map(([short, full]) => {
            const active = doctor.availableDays.includes(full)

            return (
              <span
                key={short}
                className={`
                  px-2.5 py-1 sm:px-3 sm:py-1.5
                  rounded-lg 
                  text-[11px] sm:text-xs 
                  font-medium 
                  border 
                  transition
                  whitespace-nowrap
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