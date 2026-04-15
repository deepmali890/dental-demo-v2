import { MapPin } from 'lucide-react'

export default function ContactMap({ mapUrl, height = 450 }) {
  if (!mapUrl) return null

  return (
    <div className="mt-16">

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center">
            <MapPin size={16} className="text-brand-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Find Us on Map
          </h2>
        </div>
        <p className="text-sm text-gray-500">
          Easily locate our clinic and plan your visit
        </p>
      </div>

      {/* Map */}
      <div
        className="
          w-full 
          rounded-2xl 
          overflow-hidden 
          border border-gray-100
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
          className="border-0"
        />
      </div>

    </div>
  )
}