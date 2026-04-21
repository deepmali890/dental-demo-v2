import { CheckCircle2 } from 'lucide-react'

export default function DoctorSpecializations({ doctor }) {
  if (!doctor.specializations?.length) return null

  return (
    <section className="space-y-6 sm:space-y-8">

      {/* Header */}
      <div>
        <h2 className="
          text-lg sm:text-xl md:text-2xl 
          font-semibold 
          text-gray-900
        ">
          Areas of Expertise
        </h2>
      </div>

      {/* List */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        gap-3 sm:gap-4
      ">

        {doctor.specializations.map((s, i) => (
          <div
            key={i}
            className="
              flex items-start gap-3 
              p-3 sm:p-4
              rounded-xl 
              bg-gray-50
              transition
              hover:bg-gray-100
            "
          >

            {/* Icon */}
            <div className="
              w-7 h-7 
              rounded-full 
              bg-white 
              flex items-center justify-center 
              flex-shrink-0
            ">
              <CheckCircle2
                size={14}
                className="text-brand-600"
              />
            </div>

            {/* Text */}
            <span className="
              text-sm 
              text-gray-700 
              leading-relaxed
            ">
              {s}
            </span>

          </div>
        ))}

      </div>

    </section>
  )
}