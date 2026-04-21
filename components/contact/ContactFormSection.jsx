import ContactForm from '@/components/forms/ContactForm'

export default function ContactFormSection({
  apptSettings,
  services,
  doctors,
}) {
  return (
    <div className="
      bg-white border border-gray-100 
      rounded-xl sm:rounded-2xl 
      p-4 sm:p-6 md:p-8
    ">

      {/* Header */}
      <div className="mb-5 sm:mb-6 md:mb-8">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
          {apptSettings?.formTitle || 'Book Your Appointment'}
        </h2>

        <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 leading-relaxed">
          Fill in your details and our team will contact you shortly
        </p>

      </div>

      {/* Divider (subtle, app feel) */}
      <div className="border-t border-gray-100 mb-4 sm:mb-6" />

      {/* Form */}
      <div className="w-full">
        <ContactForm
          services={services}
          doctors={doctors}
          slots={apptSettings?.availableSlots}
          successMessage={apptSettings?.formSuccessMessage}
          recipientEmail={apptSettings?.formRecipientEmail}
        />
      </div>

    </div>
  )
}