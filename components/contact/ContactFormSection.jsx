import ContactForm from '@/components/forms/ContactForm'

export default function ContactFormSection({
  apptSettings,
  services,
  doctors,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">

      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          {apptSettings?.formTitle || 'Book Your Appointment'}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Fill in your details and our team will contact you shortly
        </p>
      </div>

      {/* Form */}
      <div className="pt-2">
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