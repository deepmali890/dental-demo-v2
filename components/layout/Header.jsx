'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown, Calendar } from 'lucide-react'
import { urlFor } from '@/sanity/lib/client'

export default function Header({ clinicInfo, navigation }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [isOpen])

  const navItems = navigation?.headerNav || []
  const clinicName = clinicInfo?.clinicName || 'Dental Clinic'
  const phone = clinicInfo?.contact?.primaryPhone
  const logo = clinicInfo?.logo

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-slate-100'
          : 'bg-white'
      }`}
    >
      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[64px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {logo?.asset ? (
              <Image
                src={urlFor(logo).height(80).url()}
                alt={logo.alt || clinicName}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            ) : (
              <span className="font-semibold text-base text-slate-900 tracking-tight">
                {clinicName}
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-2">
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
                    className={`flex items-center gap-1 px-3 py-2 text-[14px] font-medium transition ${
                      isActive
                        ? 'text-brand-900'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        size={14}
                        className={`transition ${
                          activeDropdown === idx ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {hasChildren && (
                    <div
                      className={`absolute left-0 top-full mt-3 w-64 bg-white border border-slate-100 rounded-xl p-2 transition-all duration-200 ${
                        activeDropdown === idx
                          ? 'opacity-100 translate-y-0 visible'
                          : 'opacity-0 translate-y-2 invisible'
                      }`}
                    >
                      {item.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          href={child.url}
                          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 transition"
                        >
                          <span className="w-6 h-6 flex items-center justify-center text-xs bg-slate-100 rounded-md">
                            {child.icon || '•'}
                          </span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {phone && (
              <a
                href={`tel:${phone}`}
                className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                <Phone size={14} />
                {phone}
              </a>
            )}

            <Link
              href="/contact"
              className="bg-brand-900 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition"
            >
              <Calendar size={14} />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            {phone && (
              <a
                href={`tel:${phone}`}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100"
              >
                <Phone size={16} />
              </a>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 text-white"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[90] transition ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/20 transition ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-lg transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col h-full">

            {/* Nav */}
            <div className="flex-1 space-y-4">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.url || '#'}
                  className={`block text-base font-medium ${
                    pathname === item.url
                      ? 'text-brand-900'
                      : 'text-slate-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/contact"
                className="block w-full bg-brand-900 text-white py-3 rounded-lg text-center font-medium"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}