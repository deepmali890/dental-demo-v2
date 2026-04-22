import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const SocialIcon = ({ type }) => {
  const icons = {
    facebook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="24"
        height="24"
      >
        <g
          fill="#ffffff"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(8.53333,8.53333)">
            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z" />
          </g>
        </g>
      </svg>
    ),

    instagram: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="24"
        height="24"
      >
        <g
          fill="#ffffff"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(8.53333,8.53333)">
            <path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z" />
          </g>
        </g>
      </svg>
    ),

    youtube: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="24"
        height="24"
      >
        <g
          fill="#ffffff"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(8.53333,8.53333)">
            <path d="M15,4c-4.186,0 -9.61914,1.04883 -9.61914,1.04883l-0.01367,0.01563c-1.90652,0.30491 -3.36719,1.94317 -3.36719,3.93555v6v0.00195v5.99805v0.00195c0.00384,1.96564 1.4353,3.63719 3.37695,3.94336l0.00391,0.00586c0,0 5.43314,1.05078 9.61914,1.05078c4.186,0 9.61914,-1.05078 9.61914,-1.05078l0.00195,-0.00195c1.94389,-0.30554 3.37683,-1.97951 3.37891,-3.94727v-0.00195v-5.99805v-0.00195v-6c-0.00288,-1.96638 -1.43457,-3.63903 -3.37695,-3.94531l-0.00391,-0.00586c0,0 -5.43314,-1.04883 -9.61914,-1.04883zM12,10.39844l8,4.60156l-8,4.60156z" />
          </g>
        </g>
      </svg>
    ),
  }
  return icons[type] || null
}

export default function Footer({ clinicInfo, navigation }) {
  const clinic = clinicInfo || {}
  const nav = navigation || {}

  const columns = nav.footerColumns || []
  const bottomLinks = nav.footerBottomLinks || []
  const social = clinic.socialMedia || {}
  const contact = clinic.contact || {}
  const address = clinic.address || {}
  const hours = clinic.openingHours || []

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const todayHours = hours.find(h => h.day === today)

  const socialLinks = [
    { key: 'facebook', href: social.facebook },
    { key: 'instagram', href: social.instagram },
    { key: 'youtube', href: social.youtube },
  ].filter(s => s.href)

  return (
    <footer className="bg-primary text-white overflow-hidden">

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Clinic */}
          <div className="max-w-sm">
            {clinic.logo?.asset ? (
              <Image
                src={urlFor(clinic.logo).height(48).auto('format').url()}
                alt={clinic.clinicName}
                width={140}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain mb-4 brightness-0 invert"
              />
            ) : (
              <p className="text-lg sm:text-xl font-semibold mb-4">
                {clinic.clinicName || 'Dental Clinic'}
              </p>
            )}

            <p className="text-sm text-white/70 mb-5 leading-relaxed">
              {clinic.tagline}
            </p>

            {/* Social */}
            {socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  >
                    <SocialIcon type={s.key} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Nav Columns */}
          {columns.slice(0, 3).map((col, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold mb-4">
                {col.heading}
              </h3>

              <ul className="space-y-2 text-sm text-white/70">
                {col.links?.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.url}
                      className="hover:text-white transition break-words"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>

            <ul className="space-y-3 text-sm text-white/70">

              {address.street && (
                <li className="flex gap-2 items-start">
                  <MapPin size={16} className="mt-1 opacity-70 shrink-0" />
                  <span className="leading-relaxed">
                    {address.street}, {address.city}
                  </span>
                </li>
              )}

              {contact.primaryPhone && (
                <li className="flex gap-2 items-center">
                  <Phone size={16} className="opacity-70 shrink-0" />
                  <a
                    href={`tel:${contact.primaryPhone}`}
                    className="break-all"
                  >
                    {contact.primaryPhone}
                  </a>
                </li>
              )}

              {contact.email && (
                <li className="flex gap-2 items-center">
                  <Mail size={16} className="opacity-70 shrink-0" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="break-all"
                  >
                    {contact.email}
                  </a>
                </li>
              )}

              {todayHours && (
                <li className="flex gap-2 items-center">
                  <Clock size={16} className="opacity-70 shrink-0" />
                  <span>
                    {todayHours.isClosed
                      ? 'Closed'
                      : `${todayHours.openTime} – ${todayHours.closeTime}`}
                  </span>
                </li>
              )}
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block mt-5 px-5 py-2.5 rounded-lg bg-white text-primary text-sm font-semibold hover:bg-gray-100 transition"
            >
              Book Appointment
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 gap-3 text-center md:text-left">

          <p className="leading-relaxed">
            {nav.copyrightText ||
              `© ${new Date().getFullYear()} ${clinic.clinicName}. All rights reserved.`}
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {bottomLinks.map((link, i) => (
              <Link key={i} href={link.url} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  )
}