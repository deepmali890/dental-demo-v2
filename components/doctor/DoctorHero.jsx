import Link from 'next/link'
import { ChevronRight, GraduationCap } from 'lucide-react'
import SanityImage from '@/components/ui/SanityImage'

export default function DoctorHero({ doctor }) {
  return (
    <section className="bg-white border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="
          flex items-center gap-2 
          text-[10px] sm:text-[11px] 
          uppercase tracking-widest 
          text-gray-400 
          mb-5 sm:mb-6
        ">
          <Link href="/" className="hover:text-gray-900 transition">Home</Link>
          <ChevronRight size={10} />
          <Link href="/team" className="hover:text-gray-900 transition">Team</Link>
          <ChevronRight size={10} />
          <span className="text-gray-900 truncate max-w-[140px] sm:max-w-none">
            {doctor.name}
          </span>
        </nav>

        <div className="
          flex flex-col md:flex-row 
          items-center md:items-start 
          gap-5 sm:gap-6 md:gap-10
        ">

          {/* IMAGE */}
          <div className="flex justify-center md:block">
            <div className="
              relative 
              w-36 h-36 
              sm:w-44 sm:h-44 
              md:w-52 md:h-64 
              rounded-xl sm:rounded-2xl 
              overflow-hidden 
              bg-gray-100 
              shadow-sm
            ">
              {doctor.profilePhoto?.asset ? (
                <SanityImage
                  image={doctor.profilePhoto}
                  fill
                  sizes="(max-width:768px) 176px, 208px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl">
                  👨‍⚕️
                </div>
              )}
            </div>
          </div>

          {/* INFO */}
          <div className="
            flex-1 
            max-w-2xl 
            text-center md:text-left
          ">

            {/* Founder Badge */}
            {doctor.isFounder && (
              <span className="
                inline-block 
                text-[11px] 
                font-semibold 
                text-brand-600 
                bg-brand-50 
                px-3 py-1 
                rounded-full 
                mb-2 sm:mb-3
              ">
                Founder
              </span>
            )}

            {/* Name */}
            <h1 className="
              text-lg sm:text-xl md:text-2xl lg:text-3xl 
              font-semibold 
              text-gray-900 
              leading-tight 
              mb-1
            ">
              {doctor.name}
            </h1>

            {/* Designation */}
            {doctor.designation && (
              <p className="
                text-gray-600 
                text-xs sm:text-sm md:text-base 
                mb-3 sm:mb-4
              ">
                {doctor.designation}
              </p>
            )}

            {/* Pills */}
            <div className="
              flex flex-wrap 
              justify-center md:justify-start 
              gap-2 
              mb-4 sm:mb-5
            ">

              {doctor.experience && (
                <span className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                  {doctor.experience}+ years
                </span>
              )}

              {doctor.registrationNumber && (
                <span className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                  Reg: {doctor.registrationNumber}
                </span>
              )}

              {doctor.languages?.map((l) => (
                <span key={l} className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                  {l}
                </span>
              ))}

            </div>

            {/* Qualifications */}
            {doctor.qualifications?.length > 0 && (
              <div className="space-y-1.5 sm:space-y-2">

                {doctor.qualifications.map((q, i) => (
                  <div
                    key={i}
                    className="
                      flex items-start gap-2 
                      text-xs sm:text-sm 
                      text-gray-700
                    "
                  >
                    <GraduationCap
                      size={14}
                      className="text-brand-600 mt-0.5 flex-shrink-0"
                    />

                    <span className="leading-snug">
                      {q.degree}
                      {q.institution && (
                        <span className="text-gray-500">
                          {' '}— {q.institution}
                        </span>
                      )}
                    </span>

                  </div>
                ))}

              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  )
}