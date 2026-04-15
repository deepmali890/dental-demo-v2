import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

/* 🔥 Custom Social Icons (no library needed) */
const SocialIcon = ({ type }) => {
  const icons = {
    facebook: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M22 12a10 10 0 10-11.6 9.9v-7H7v-3h3.4V9.5c0-3.4 2-5.3 5-5.3 1.4 0 2.9.2 2.9.2v3.2h-1.6c-1.6 0-2.1 1-2.1 2v2.3H18l-.5 3h-2.8v7A10 10 0 0022 12z"/>
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 
        5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.9a1.1 
        1.1 0 110 2.2 1.1 1.1 0 010-2.2z"/>
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16 5 
        12 5 12 5h0s-4 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 
        2-.8 2S2 9.6 2 11.2v1.6C2 14.4 2.2 16 2.2 16s.2 
        1.4.8 2c.8.8 1.9.8 2.4.9C7.4 19 12 19 12 19s4 
        0 6.9-.1c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22 
        9.6 21.8 8 21.8 8zM10 15V9l5 3-5 3z"/>
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
    <footer className="bg-primary text-white">

      {/* Main */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Clinic */}
          <div>
            {clinic.logo?.asset ? (
              <Image
                src={urlFor(clinic.logo).height(48).url()}
                alt={clinic.clinicName}
                width={140}
                height={48}
                className="h-12 w-auto object-contain mb-4 brightness-0 invert"
              />
            ) : (
              <p className="text-xl font-semibold mb-4">
                {clinic.clinicName || 'Dental Clinic'}
              </p>
            )}

            <p className="text-sm text-white/70 mb-5 leading-relaxed">
              {clinic.tagline}
            </p>

            {/* Social */}
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
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

          {/* Nav */}
          {columns.slice(0, 2).map((col, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold mb-4">{col.heading}</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {col.links?.map((link, i) => (
                  <li key={i}>
                    <Link href={link.url} className="hover:text-white transition">
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
                <li className="flex gap-2">
                  <MapPin size={16} className="mt-0.5 opacity-70" />
                  <span>{address.street}, {address.city}</span>
                </li>
              )}

              {contact.primaryPhone && (
                <li className="flex gap-2">
                  <Phone size={16} className="opacity-70" />
                  <a href={`tel:${contact.primaryPhone}`}>{contact.primaryPhone}</a>
                </li>
              )}

              {contact.email && (
                <li className="flex gap-2">
                  <Mail size={16} className="opacity-70" />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}

              {todayHours && (
                <li className="flex gap-2">
                  <Clock size={16} className="opacity-70" />
                  <span>
                    {todayHours.isClosed ? 'Closed' : `${todayHours.openTime} – ${todayHours.closeTime}`}
                  </span>
                </li>
              )}
            </ul>

            {/* CTA */}
            <Link href="/contact" className="btn-primary mt-5">
              Book Appointment
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between text-xs text-white/60 gap-3">

          <p>
            {nav.copyrightText ||
              `© ${new Date().getFullYear()} ${clinic.clinicName}. All rights reserved.`}
          </p>

          <div className="flex gap-4">
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