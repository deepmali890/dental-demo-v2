import Link from 'next/link'
import SanityImage from '@/components/ui/SanityImage'

export default function FounderDoctorCard({ doctor }) {
  return (
    <Link
      href={`/team/${doctor.slug}`}
      className="group grid grid-cols-1 md:grid-cols-2 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 bg-white"
    >

      {/* Image */}
      <div className="relative h-[260px] sm:h-[300px] md:h-full">
        {doctor.profilePhoto?.asset ? (
          <SanityImage
            image={doctor.profilePhoto}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-3xl sm:text-4xl">
            👨‍⚕️
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">

        {/* Role */}
        <span className="text-[10px] sm:text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">
          Founder & Lead Dentist
        </span>

        {/* Name */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-brand-600 transition leading-tight">
          {doctor.name}
        </h3>

        {/* Designation */}
        {doctor.designation && (
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {doctor.designation}
          </p>
        )}

        {/* Experience */}
        {doctor.experience && (
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            {doctor.experience}+ years experience
          </p>
        )}

        {/* Bio */}
        {doctor.shortBio && (
          <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 leading-relaxed line-clamp-3">
            {doctor.shortBio}
          </p>
        )}

      </div>
    </Link>
  )
}