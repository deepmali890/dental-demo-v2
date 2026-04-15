import { ChevronRight } from 'lucide-react'
import React from 'react'
import SanityImage from '../ui/SanityImage'
import Link from 'next/link'

const ServiceDoctors = ({ service }) => {
    return (
        <div>
            {/* Assigned Doctors */}
            {service.assignedDoctors?.length > 0 && (
                <div>

                    {/* Header */}
                    <p className="text-[11px] uppercase tracking-[0.12em] text-brand-600 font-semibold mb-2">
                        Specialist Team
                    </p>
                    <h2 className="text-[26px] font-bold text-slate-900 tracking-tight mb-7">
                        Meet Your Doctor
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.assignedDoctors.map(doc => (
                            <Link
                                key={doc._id}
                                href={`/team/${doc.slug}`}
                                className="group flex items-center gap-4 p-4 bg-white border border-brand-600/20 
            rounded-2xl hover:border-brand-900 duration-300"
                            >

                                {/* Photo */}
                                <div className="relative w-[68px] h-[68px] rounded-xl overflow-hidden flex-shrink-0 bg-brand-50">
                                    {doc.profilePhoto?.asset ? (
                                        <SanityImage
                                            image={doc.profilePhoto}
                                            fill
                                            sizes="68px"
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-2xl">
                                            👨‍⚕️
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-[15px] font-semibold text-slate-900 group-hover:text-brand-600 
              transition-colors truncate">
                                        {doc.name}
                                    </p>
                                    <p className="text-[13px] text-slate-400 mt-0.5 truncate">
                                        {doc.designation}
                                    </p>
                                    {doc.experience && (
                                        <span className="inline-block mt-2 text-[11px] font-semibold text-brand-600 
                bg-brand-50 px-2.5 py-0.5 rounded-full">
                                            {doc.experience} yrs experience
                                        </span>
                                    )}
                                </div>

                                {/* Arrow */}
                                <ChevronRight
                                    size={16}
                                    className="text-slate-200 group-hover:text-brand-400 flex-shrink-0
              transition-colors duration-200"
                                />

                            </Link>
                        ))}
                    </div>

                </div>
            )}
        </div>
    )
}

export default ServiceDoctors
