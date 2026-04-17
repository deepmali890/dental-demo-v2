import { MapPin, Phone, Mail, Clock } from "lucide-react";
import clinicData from "@/config/clinicData";
import Image from "next/image";

export default function Location() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest text-[#ef1f38] mb-2">
            Location
          </p>

          <h2 className="heading-lg md:text-4xl font-semibold text-gray-900">
            Visit Our Clinic
          </h2>

          <p className="text-gray-500 text-sm mt-3">
            Conveniently located in {clinicData.city}. Easy access & parking available.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT INFO */}
          <div className="flex flex-col gap-4">

            {/* ADDRESS */}
            <div className="border border-gray-200 rounded-sm p-4 flex gap-3">
              <div className="w-9 h-9 bg-[#ef1f38] flex items-center justify-center rounded-sm">
                <MapPin size={16} className="text-white" />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Address
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {clinicData.address} <br />
                  {clinicData.city}, {clinicData.state} – {clinicData.pincode}
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="border border-gray-200 rounded-sm p-4 flex gap-3">
              <div className="w-9 h-9 bg-[#ef1f38] flex items-center justify-center rounded-sm">
                <Phone size={16} className="text-white" />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Phone
                </p>
                <a href={`tel:${clinicData.phone}`} className="text-[#ef1f38] text-sm">
                  {clinicData.phoneDisplay}
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="border border-gray-200 rounded-sm p-4 flex gap-3">
              <div className="w-9 h-9 bg-[#ef1f38] flex items-center justify-center rounded-sm">
                <Mail size={16} className="text-white" />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Email
                </p>
                <a href={`mailto:${clinicData.email}`} className="text-[#ef1f38] text-sm">
                  {clinicData.email}
                </a>
              </div>
            </div>

            {/* HOURS */}
            <div className="border border-gray-200 rounded-sm p-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-[#ef1f38]" />
                <p className="text-sm font-medium text-gray-900">
                  Clinic Hours
                </p>
              </div>

              <div className="space-y-1">
                {clinicData.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-xs py-1">
                    <span className="text-gray-500">{h.day}</span>
                    <span className="text-gray-900 font-medium">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* CLINIC IMAGE */}
            <div className="relative h-48 sm:h-56 border border-gray-200 rounded-sm overflow-hidden">
              <Image
                src="/gallery/Gallery_9.jpg"
                alt="Clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            {/* MAP */}
            <div className="border border-gray-200 rounded-sm overflow-hidden h-80 sm:h-90">

              <div className="px-4 py-2 border-b border-gray-200 bg-white text-xs text-gray-500">
                {clinicData.clinicName} Location
              </div>

              <iframe
                src={clinicData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="clinic location"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}