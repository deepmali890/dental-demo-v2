import { CheckCircle2 } from 'lucide-react'

export default function DoctorSpecializations({ doctor }) {
  if (!doctor.specializations?.length) return null

  return (
    <section className="section bg-white">
      <div className="md:px-6">

        {/* Header */}
        <div className="">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Areas of Expertise
          </h2>
        </div>

        {/* List */}
        <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
          {doctor.specializations.map((s, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-700">

              <CheckCircle2
                size={16}
                className="text-brand-600 mt-0.5 flex-shrink-0"
              />

              <span>{s}</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}