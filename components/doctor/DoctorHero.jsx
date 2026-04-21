import Link from 'next/link'
import { ChevronRight, GraduationCap } from 'lucide-react'
import SanityImage from '@/components/ui/SanityImage'

export default function DoctorHero({ doctor }) {
  return (
    <section className="bg-white border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-14">

        {/* Breadcrumb */}
        <nav className="
          flex items-center gap-2 
          text-[10px] sm:text-[11px] 
          uppercase tracking-widest 
          text-gray-400 
          mb-6 sm:mb-8
        ">
          <Link href="/" className="hover:text-gray-900 transition">Home</Link>
          <ChevronRight size={10} />
          <Link href="/team" className="hover:text-gray-900 transition">Team</Link>
          <ChevronRight size={10} />
          <span className="text-gray-900 truncate">{doctor.name}</span>
        </nav>

        <div className="
          flex flex-col md:flex-row 
          items-center md:items-start 
          gap-6 sm:gap-8 md:gap-12
        ">

          {/* IMAGE */}
          <div className="
            w-full md:w-auto 
            flex justify-center md:block
          ">
            <div className="
              relative 
              w-40 h-40 
              sm:w-48 sm:h-48 
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
                  sizes="(max-width:768px) 192px, 208px"
                  className="object-cover"
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
                text-xs 
                font-semibold 
                text-brand-600 
                bg-brand-50 
                px-3 py-1 
                rounded-full 
                mb-3
              ">
                Founder
              </span>
            )}

            {/* Name */}
            <h1 className="
              text-xl sm:text-2xl md:text-3xl lg:text-4xl 
              font-semibold 
              text-gray-900 
              leading-tight 
              mb-2
            ">
              {doctor.name}
            </h1>

            {/* Designation */}
            {doctor.designation  && (
              <p className="
                text-gray-600 
                text-sm sm:text-base 
                mb-4 sm:mb-5
              ">
                {doctor.designation}
              </p>
            )}

            {/* Pills */}
            <div className="
              flex flex-wrap 
              justify-center md:justify-start 
              gap-2 
              mb-5 sm:mb-6
            ">

              {doctor.experience && (
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {doctor.experience}+ years
                </span>
              )}

              {doctor.registrationNumber && (
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  Reg: {doctor.registrationNumber}
                </span>
              )}

              {doctor.languages?.map((l) => (
                <span key={l} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {l}
                </span>
              ))}

            </div>

            {/* Qualifications */}
            {doctor.qualifications?.length > 0 && (
              <div className="space-y-2">

                {doctor.qualifications.map((q, i) => (
                  <div
                    key={i}
                    className="
                      flex items-start gap-2 
                      text-sm text-gray-700
                    "
                  >
                    <GraduationCap
                      size={14}
                      className="text-brand-600 mt-0.5 flex-shrink-0"
                    />

                    <span>
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