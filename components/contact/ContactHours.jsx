import { Clock } from 'lucide-react'

export default function ContactHours({ hours, holidayNote }) {
  if (!hours?.length) return null

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
  })

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">

      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center">
          <Clock size={16} className="text-brand-600" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Clinic Hours
          </h2>
          <p className="text-xs text-gray-400">
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
              className={`flex items-center justify-between py-2.5 text-sm ${
                isToday ? 'bg-brand-50/50 px-2 outline-none' : ''
              }`}
            >
              <span
                className={`${
                  isToday
                    ? 'text-brand-700 font-semibold'
                    : 'text-gray-600'
                }`}
              >
                {h.day}
              </span>

              {h.isClosed ? (
                <span className="text-red-500 font-medium">
                  Closed
                </span>
              ) : (
                <span
                  className={`${
                    isToday
                      ? 'text-brand-700 font-medium'
                      : 'text-gray-500'
                  }`}
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
          <p className="text-xs text-gray-400 leading-relaxed">
            {holidayNote}
          </p>
        </div>
      )}

    </div>
  )
}