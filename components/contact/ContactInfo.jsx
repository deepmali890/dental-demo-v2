import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react'

const Item = ({ icon: Icon, title, children, color = 'brand' }) => {
  const colorStyles = {
    brand: 'bg-brand-50 text-brand-600',
    green: 'bg-green-50 text-green-600',
  }

  return (
    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition hover:bg-gray-50">

      {/* Icon */}
      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${colorStyles[color]}`}>
        <Icon size={16} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
          {title}
        </p>

        <div className="text-sm text-gray-700 leading-relaxed break-words">
          {children}
        </div>
      </div>

    </div>
  )
}

export default function ContactInfo({ contact, address }) {
  if (!contact && !address) return null

  return (
    <div className="
      bg-white border border-gray-100 
      rounded-xl sm:rounded-2xl 
      p-4 sm:p-6
    ">

      {/* Header */}
      <div className="mb-4 sm:mb-5">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">
          Contact Information
        </h2>

        <p className="text-[11px] sm:text-xs text-gray-400 mt-1">
          Reach out to us for appointments or queries
        </p>
      </div>

      {/* LIST */}
      <div className="divide-y divide-gray-100 sm:space-y-2">

        {/* Address */}
        {address?.street && (
          <div className="py-3 sm:py-0">
            <Item icon={MapPin} title="Address">
              {address.street}
              {address.landmark && `, Near ${address.landmark}`} <br />
              {address.city}, {address.state} — {address.pincode}
            </Item>
          </div>
        )}

        {/* Phone */}
        {contact?.primaryPhone && (
          <div className="py-3 sm:py-0">
            <Item icon={Phone} title="Phone">
              <a
                href={`tel:${contact.primaryPhone}`}
                className="hover:text-brand-600 transition-colors"
              >
                {contact.primaryPhone}
              </a>
            </Item>
          </div>
        )}

        {/* WhatsApp */}
        {contact?.whatsapp && (
          <div className="py-3 sm:py-0">
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
          </div>
        )}

        {/* Email */}
        {contact?.email && (
          <div className="py-3 sm:py-0">
            <Item icon={Mail} title="Email">
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-brand-600 transition-colors break-all"
              >
                {contact.email}
              </a>
            </Item>
          </div>
        )}

      </div>
    </div>
  )
}