import { MapPin } from 'lucide-react'

export default function ContactMap({ mapUrl, height = 450 }) {
  if (!mapUrl) return null

  return (
    <div className="mt-10 sm:mt-14 md:mt-16">

      {/* Header */}
      <div className="mb-4 sm:mb-6">

        <div className="flex items-center gap-3 mb-1">

          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-50 rounded-lg sm:rounded-xl flex items-center justify-center">
            <MapPin size={16} className="text-brand-600" />
          </div>

          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            Find Us on Map
          </h2>

        </div>

        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          Easily locate our clinic and plan your visit
        </p>

      </div>

      {/* Map */}
      <div
        className="
          w-full 
          rounded-xl sm:rounded-2xl 
          overflow-hidden 
          border border-gray-100
          shadow-sm
        "
        style={{
          height: height,
        }}
      >
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0 w-full h-full"
        />
      </div>

    </div>
  )
}