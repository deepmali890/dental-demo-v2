"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

const doctors = [
    {
        name: "Dr. Amit Bithu",
        title: " Specialist Orthodontist",
        image: "/images/AmitBithuDP.jpg",
        experience: "10+ Years Experience",
        bio: "Dr. Amit Bithu is one of the leading orthodontists in Jodhpur and he is also a co-founder of Perfect Smile Orthodontic and Implant Centre which is located in Air Force Area, Jodhpur. He was a former specialist orthodontist in MDM Hospital (S.N Medical College). Presently, he is working as an Associate Professor in Jodhpur Dental College. His passion for orthodontics has led him to attend numerous advanced courses around the world. He also believes in constantly updating himself by attending the major Dental Conferences. He has attended over 1000 orthodontic cases. He has also presented many papers in the orthodontic conferences and published many articles and journals. Besides all his achievements, he is also an active member of the Indian Orthodontic Society.",
        credentials: [
            "BDS, MDS (Orthodontics)",
            "Certified Implantologist",
            "Member of Indian Dental Association",
        ],
    },
    {
        name: "Dr. Arvind Singh",
        title: "Specialist in Prosthodontics and Crown & Bridge",
        image: "/images/arvindsinghbithu.jpg",
        experience: "14+ Years Experience",
        bio: "Dr. Arvind Singh is a leading prosthodontics with over 14 years of experience in the field of Dentistry. He is also a gold medalist in the department of Prosthodontics and Crown& Bridge. Presently, he is associated with Jodhpur Dental College as an assistant professor. His passion for Prosthodontics and Dental Implants has led him to attend multitudinous advanced courses around the world and he has also been a part of major dental conferences around the world. He has successfully placed over 500 implants and Prosthodontics Rehabilitation Cases and he is having a plethora of happy patients who are satisfied with the results delivered.",
        credentials: [
            "BDS, Fellowship in Cosmetic Dentistry",
            "Smile Design Expert",
            "Advanced Aesthetic Dentistry Certified",
        ],
    },
];

export default function AboutDoctor() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <p className="text-xs uppercase tracking-widest text-[#ef1f38] mb-2">
                        Meet Your Doctors
                    </p>
                    <h2 className="heading-lg md:text-4xl font-semibold text-gray-900">
                        Our Expert Dental Team
                    </h2>
                </div>

                {/* DOCTORS LIST */}
                <div className="space-y-20">
                    {doctors.map((doctor, index) => (
                        <div
                            key={doctor.name}
                            className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                                }`}
                        >

                            {/* IMAGE */}
                            <div className={`flex justify-center ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                                <div className="relative w-full max-w-sm aspect-[4/5] rounded-sm overflow-hidden border border-gray-200">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover"
                                    />

                                    <div className="absolute bottom-3 left-3 bg-white border border-gray-200 px-3 py-1 rounded-sm text-xs text-gray-600">
                                        {doctor.experience}
                                    </div>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                                    {doctor.name}
                                </h3>
                                <p className="text-[#ef1f38] text-sm font-medium mb-4">
                                    {doctor.title}
                                </p>

                                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                    {doctor.bio}
                                </p>

                                {/* Credentials */}
                                <div className="mb-6">
                                    <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                                        Qualifications
                                    </h4>

                                    <ul className="space-y-2">
                                        {doctor.credentials.map((cred) => (
                                            <li key={cred} className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-[#ef1f38] mt-0.5" />
                                                <span className="text-sm text-gray-700">{cred}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#ef1f38] text-white text-sm font-medium hover:bg-[#ef1f38]/90 transition"
                                >
                                    Book Consultation
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}