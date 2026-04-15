import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react'

const Item = ({ icon: Icon, title, children, color = 'brand' }) => {
  const colorStyles = {
    brand: 'bg-brand-50 text-brand-600',
    green: 'bg-green-50 text-green-600',
  }

  return (
    <div className="flex items-start gap-4 p-3 rounded-xl transition hover:bg-gray-50">
      
      {/* Icon */}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colorStyles[color]}`}>
        <Icon size={16} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
          {title}
        </p>
        <div className="text-sm text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>

    </div>
  )
}

export default function ContactInfo({ contact, address }) {
  if (!contact && !address) return null

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">

      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Contact Information
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Reach out to us for appointments or queries
        </p>
      </div>

      <div className="space-y-2">

        {/* Address */}
        {address?.street && (
          <Item icon={MapPin} title="Address">
            {address.street}
            {address.landmark && `, Near ${address.landmark}`} <br />
            {address.city}, {address.state} — {address.pincode}
          </Item>
        )}

        {/* Phone */}
        {contact?.primaryPhone && (
          <Item icon={Phone} title="Phone">
            <a
              href={`tel:${contact.primaryPhone}`}
              className="hover:text-brand-600 transition-colors"
            >
              {contact.primaryPhone}
            </a>
          </Item>
        )}

        {/* WhatsApp */}
        {contact?.whatsapp && (
          <Item icon={MessageCircle} title="WhatsApp" color="green">
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors"
            >
              {contact.whatsapp}
            </a>
          </Item>
        )}

        {/* Email */}
        {contact?.email && (
          <Item icon={Mail} title="Email">
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-brand-600 transition-colors"
            >
              {contact.email}
            </a>
          </Item>
        )}

      </div>
    </div>
  )
}