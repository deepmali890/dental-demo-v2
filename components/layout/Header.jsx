'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown, Calendar, PhoneCall, MapPin, Clock } from 'lucide-react'
import * as Icons from 'lucide-react'
import { urlFor } from '@/sanity/lib/client'

export default function Header({ clinicInfo, navigation }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }, [isOpen])

  const navItems = navigation?.headerNav || []
  const clinicName = clinicInfo?.clinicName || 'Dental Clinic'
  const phone = clinicInfo?.contact?.primaryPhone
  const address = clinicInfo?.contact?.address
  const workingHours = clinicInfo?.workingHours || 'Mon–Sat: 9am – 7pm'
  const logo = clinicInfo?.logo

  return (
    <>
      {/* ── TOP BAR ─────────────────────────────────────────────── */}
      <div className="hidden lg:block bg-brand-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 py-2 flex items-center justify-between gap-4">
          {/* Left: address + hours */}
          <div className="flex items-center gap-5">
            {address && (
              <span className="flex items-center gap-1.5 opacity-90">
                <MapPin size={12} />
                {address}
              </span>
            )}
            <span className="flex items-center gap-1.5 opacity-90">
              <Clock size={12} />
              {workingHours}
            </span>
          </div>

          {/* Right: phone */}
          {phone && (
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition font-medium"
            >
              <Phone size={12} />
              {phone}
            </a>
          )}
        </div>
      </div>

      {/* ── MAIN HEADER ─────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-[100]  transition-all duration-300 ${scrolled
            ? 'bg-white/70 backdrop-blur-xl  shadow-md border-b border-white/20'
            : 'bg-white shadow-sm'
          }`}
      >
        <div className="px-4 min-h-[70px] max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 h-[70px] w-full">

            {/* ── LOGO (always left-aligned, no absolute) ── */}
            <Link href="/" className="shrink-0">
              {logo?.asset ? (
                <Image
                  src={urlFor(logo).width(140).url()}
                  alt={clinicName}
                  width={160}
                  height={50}
                  className="w-32 sm:w-40 h-auto object-contain"
                  priority
                />
              ) : (
                <span className="font-semibold text-lg text-slate-800">{clinicName}</span>
              )}
            </Link>

            {/* ── DESKTOP NAV (center) ── */}
            <ul className="hidden lg:flex items-center gap-x-1 flex-1 justify-center">
              {navItems.map((item, idx) => {
                const hasChildren = item.children?.length > 0
                const isActive = pathname === item.url

                return (
                  <li
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.url || '#'}
                      className={`flex items-center gap-1 px-3 py-2 text-[15px] font-medium transition rounded-md ${isActive
                          ? 'text-brand-900'
                          : 'text-slate-700 hover:text-brand-900 hover:bg-slate-50'
                        }`}
                    >
                      {item.label}
                      {hasChildren && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`}
                        />
                      )}
                    </Link>

                    {hasChildren && (
                      <div
                        className={`absolute left-0 top-full mt-3 w-72 bg-white/95 backdrop-blur-md border border-slate-100 rounded-xl p-2 shadow-xl transition-all duration-200 ${activeDropdown === idx
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2'
                          }`}
                      >
                        {item.children.map((child, cIdx) => {
                          const Icon = Icons[child.icon] || Icons.Sparkles

                          return (
                            <Link
                              key={cIdx}
                              href={child.url}
                              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-50 transition group"
                            >
                              <div className="w-5 h-5 flex items-center justify-center text-brand-900 shrink-0">
                                <Icon size={18} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-800 group-hover:text-brand-900">
                                  {child.label}
                                </p>
                                {child.description && (
                                  <p className="text-xs text-slate-500 mt-0.5 truncate">
                                    {child.description}
                                  </p>
                                )}
                              </div>
                              <ChevronDown
                                size={14}
                                className="rotate-[-90deg] text-slate-400 group-hover:text-brand-900 transition shrink-0"
                              />
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* ── RIGHT ACTIONS ── */}
            <div className="flex items-center gap-3 shrink-0">

              {/* Book Appointment — desktop only */}
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-900 hover:opacity-90 rounded-md transition"
              >
                <Calendar size={14} />
                Book Appointment
              </Link>

              {/* Phone icon — mobile only */}
              <a
                href={`tel:${phone}`}
                className="flex lg:hidden items-center text-slate-600 bg-slate-100 p-2 rounded-full hover:bg-slate-200 transition"
              >
                <PhoneCall size={18} />
              </a>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden cursor-pointer p-2 rounded-md text-slate-600 hover:bg-slate-100 transition"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 lg:hidden transition-all duration-300 ${isOpen ? 'z-[999] visible' : 'z-[-1] invisible'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute left-0 top-0 h-full w-[300px] bg-white shadow-2xl p-6 transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          {/* Logo in drawer */}
          <div className="mb-6">
            <Link href="/" onClick={() => setIsOpen(false)}>
              {logo?.asset ? (
                <Image
                  src={urlFor(logo).width(120).url()}
                  alt={clinicName}
                  width={120}
                  height={30}
                  className="w-28 object-contain"
                />
              ) : (
                <span className="font-semibold text-lg">{clinicName}</span>
              )}
            </Link>
          </div>

          {/* Nav links */}
          <nav className="space-y-1 flex-1">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.url || '#'}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition ${pathname === item.url
                    ? 'bg-brand-50 text-brand-900'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-brand-900'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact info in drawer */}
          <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
            {address && (
              <p className="flex items-start gap-2 text-xs text-slate-500">
                <MapPin size={13} className="mt-0.5 shrink-0 text-brand-900" />
                {address}
              </p>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-900"
              >
                <Phone size={13} className="text-brand-900" />
                {phone}
              </a>
            )}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full bg-brand-900 text-white py-3 rounded-lg text-center font-medium hover:opacity-90 transition"
              onClick={() => setIsOpen(false)}
            >
              <Calendar size={15} />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}