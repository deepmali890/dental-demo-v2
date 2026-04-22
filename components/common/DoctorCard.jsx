'use client'

import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

export default function DoctorCard({ doctor }) {

    return (
        <Link
            href={`/team/${doctor.slug}`}
            className="relative group block"
        >

            {/* Image */}
            <div className="relative h-[400px]  mt-4 w-full rounded-2xl overflow-hidden bg-gray-100">

                {doctor.profilePhoto?.asset ? (
                    <Image
                        src={urlFor(doctor.profilePhoto).width(600).auto('format').url()}
                        alt={doctor.profilePhoto?.alt || doctor.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl">
                        👨‍⚕️
                    </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[88%]">
                <div className="bg-white/80 backdrop-blur-md rounded-xl px-4 py-3 text-center border border-white/40 shadow-soft transition-all duration-300 group-hover:-translate-y-1">

                    {/* Name */}
                    <h3 className="text-sm font-semibold text-gray-900">
                        {doctor.name}
                    </h3>

                    {/* Role */}
                    {doctor.designation && (
                        <p className="text-xs text-gray-600 mt-0.5">
                            {doctor.designation}
                        </p>
                    )}

                </div>
            </div>

        </Link>
    )
}