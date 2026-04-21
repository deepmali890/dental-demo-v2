import { Clock } from 'lucide-react'

export default function ContactHours({ hours, holidayNote }) {
  if (!hours?.length) return null

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
  })

  return (
    <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-50 rounded-lg sm:rounded-xl flex items-center justify-center">
          <Clock size={16} className="text-brand-600" />
        </div>

        <div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            Clinic Hours
          </h2>

          <p className="text-[11px] sm:text-xs text-gray-400">
            Visit us during these hours
          </p>
        </div>
      </div>

      {/* Hours List */}
      <div className="divide-y divide-gray-100">

        {hours.map((h, i) => {
          const isToday = h.day === today

          return (
            <div
              key={i}
              className={`
                flex items-center justify-between 
                py-2.5 sm:py-3 text-sm
                ${isToday ? 'bg-brand-50/50 px-3 rounded-lg' : ''}
              `}
            >

              {/* Day */}
              <span
                className={`
                  text-sm
                  ${isToday
                    ? 'text-brand-700 font-semibold'
                    : 'text-gray-600'}
                `}
              >
                {h.day}
              </span>

              {/* Time */}
              {h.isClosed ? (
                <span className="text-red-500 font-medium text-sm">
                  Closed
                </span>
              ) : (
                <span
                  className={`
                    text-xs sm:text-sm
                    ${isToday
                      ? 'text-brand-700 font-medium'
                      : 'text-gray-500'}
                  `}
                >
                  {h.openTime} – {h.closeTime}
                </span>
              )}

            </div>
          )
        })}

      </div>

      {/* Holiday Note */}
      {holidayNote && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
            {holidayNote}
          </p>
        </div>
      )}

    </div>
  )
}