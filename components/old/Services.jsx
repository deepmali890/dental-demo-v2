"use client";

import {
  Sparkles,
  AlignCenter,
  CircleDot,
  Shield,
  Smile,
  Heart,
} from "lucide-react";
import clinicData from "@/config/clinicData";
import Image from "next/image";

const iconMap = {
  Sparkles,
  AlignCenter,
  CircleDot,
  Shield,
  Smile,
  Heart,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#ef1f38] mb-2">
            Services
          </p>

          <h2 className="text-3xl heading-lg md:text-4xl font-semibold text-gray-900">
            Dental Treatments
          </h2>

          <p className="text-gray-500 text-sm mt-3">
            Modern, painless and effective treatments in {clinicData.city}
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {clinicData.services.map((service) => {
            const Icon = iconMap[service.icon] ?? Smile;

            return (
              <div
                key={service.id}
                className="group border border-gray-200 rounded-sm overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  {/* ICON + TITLE */}
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-9 h-9 bg-[#ef1f38] border border-gray-200 flex items-center justify-center rounded-sm">
                      <Icon size={18} className="text-white" />
                    </div>

                    <h3 className="text-base font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {/* HIGHLIGHT */}
                  {service.highlight && (
                    <p className="text-xs text-[#ef1f38] font-medium">
                      {service.highlight}
                    </p>
                  )}

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}