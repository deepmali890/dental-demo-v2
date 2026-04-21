import PortableTextRenderer from '@/components/PortableTextRenderer'

export default function DoctorBio({ doctor }) {
  if (!doctor.fullBio && !doctor.shortBio) return null

  return (
    <section className="space-y-6">

      {/* Heading */}
      <div>
        <h2 className="
          text-lg sm:text-xl md:text-2xl 
          font-semibold 
          text-gray-900
        ">
          About Doctor
        </h2>
      </div>

      {/* Content */}
      <div className="
        max-w-3xl
        text-sm sm:text-base
      ">

        {doctor.fullBio ? (
          <div className="
            prose max-w-none

            prose-headings:font-semibold
            prose-headings:text-gray-900

            prose-p:text-gray-600
            prose-p:leading-relaxed

            prose-strong:text-gray-900
            prose-li:text-gray-600
          ">
            <PortableTextRenderer value={doctor.fullBio} />
          </div>
        ) : (
          <p className="
            text-gray-600 
            leading-relaxed
          ">
            {doctor.shortBio}
          </p>
        )}

      </div>

    </section>
  )
}