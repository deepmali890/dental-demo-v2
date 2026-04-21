import { Phone, AlertTriangle } from 'lucide-react'

export default function ContactEmergency({ emergency }) {
  if (!emergency?.isAvailable) return null

  return (
    <div className="
      border border-red-200 bg-red-50/70 
      rounded-xl sm:rounded-2xl 
      p-4 sm:p-6
    ">

      {/* Header */}
      <div className="flex items-start gap-3 mb-3 sm:mb-4">

        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
          <AlertTriangle size={16} className="text-red-600" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-red-700">
            Dental Emergency?
          </h3>

          <p className="text-[11px] sm:text-xs text-red-500 mt-0.5">
            Immediate assistance available
          </p>
        </div>

      </div>

      {/* Note */}
      {emergency.note && (
        <p className="text-sm text-red-600 leading-relaxed mb-4">
          {emergency.note}
        </p>
      )}

      {/* CTA (App-style full width button) */}
      {emergency.emergencyPhone && (
        <a
          href={`tel:${emergency.emergencyPhone}`}
          className="
            flex items-center justify-center gap-2 
            w-full 
            bg-red-600 hover:bg-red-500 active:scale-[0.98]
            text-white text-sm sm:text-base font-semibold
            py-3 sm:py-3.5 
            rounded-lg sm:rounded-xl 
            transition-all duration-200
          "
        >
          <Phone size={16} />
          <span className="truncate">
            Call Now — {emergency.emergencyPhone}
          </span>
        </a>
      )}

    </div>
  )
}