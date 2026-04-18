import PageHero from '@/components/ui/PageHero'
import {
  getAllDoctors,
  getAllServices,
  getAppointmentSettings,
  getClinicInfo,
} from '@/sanity/lib/fetchData'

import ContactInfo from '@/components/contact/ContactInfo'
import ContactHours from '@/components/contact/ContactHours'
import ContactEmergency from '@/components/contact/ContactEmergency'
import ContactFormSection from '@/components/contact/ContactFormSection'
import ContactMap from '@/components/contact/ContactMap'

export const revalidate = 3600

export default async function ContactPage() {
  const [clinicInfo, apptSettings, doctors, services] =
    await Promise.all([
      getClinicInfo(),
      getAppointmentSettings(),
      getAllDoctors(),
      getAllServices(),
    ])

  return (
    <>
      <PageHero
        title="Book Appointment"
        subtitle="Schedule your visit with our dental experts — quick, easy, and hassle-free"
        badge="📅 Contact & Appointments"
      />

      {/* MAIN SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

            {/* LEFT SIDEBAR */}
            <div className="space-y-6 lg:sticky lg:top-24 h-fit">

              <ContactInfo
                contact={clinicInfo?.contact}
                address={clinicInfo?.address}
              />

              <ContactHours
                hours={clinicInfo?.openingHours}
                holidayNote={clinicInfo?.holidayNote}
              />

              <ContactEmergency
                emergency={apptSettings?.emergencyBooking}
              />

            </div>

            {/* RIGHT MAIN FORM */}
            <div className="lg:col-span-2">

              <ContactFormSection
                apptSettings={apptSettings}
                services={services}
                doctors={doctors}
              />

            </div>

          </div>
        </div>
      </section>

      {/* MAP (SEPARATE SECTION FOR FLOW) */}
      {clinicInfo?.address?.embedMapUrl && (
        <section className="pb-16 md:pb-20 bg-white">
          <div className="container mx-auto px-4">
            <ContactMap mapUrl={clinicInfo.address.embedMapUrl} />
          </div>
        </section>
      )}
    </>
  )
}