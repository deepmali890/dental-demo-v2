import { Phone, AlertTriangle } from 'lucide-react'

export default function ContactEmergency({ emergency }) {
  if (!emergency?.isAvailable) return null

  return (
    <div className="border border-red-200 bg-red-50/70 rounded-2xl p-6">

      {/* Header */}
      <div className="flex items-start gap-3 mb-3">

        <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
          <AlertTriangle size={18} className="text-red-600" />
        </div>

        <div>
          <h3 className="text-base font-semibold text-red-700">
            Dental Emergency?
          </h3>
          <p className="text-xs text-red-500 mt-0.5">
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

      {/* CTA */}
      {emergency.emergencyPhone && (
        <a
          href={`tel:${emergency.emergencyPhone}`}
          className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold py-3 rounded-xl transition-colors"
        >
          <Phone size={15} />
          Call Now — {emergency.emergencyPhone}
        </a>
      )}

    </div>
  )
}