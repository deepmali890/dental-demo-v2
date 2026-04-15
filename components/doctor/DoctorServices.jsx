import ServicesSection from '@/components/sections/ServicesSection'

export default function DoctorServices({ doctor }) {
  if (!doctor.services?.length) return null

  console.log('DoctorServices rendered with services:', doctor.services)
  return (
    <div className="">
      {doctor.services?.length > 0 && (
        <div className="mt-16 pt-12 border-t border-gray-100">
          <ServicesSection
            data={{
              sectionTitle: `Services by ${doctor.name}`,
              sectionSubtitle: 'Treatments performed by this specialist',
              featuredServices: doctor.services,
              viewAllCta: null,
            }}
            fallbackServices={doctor.services}
          />
        </div>
      )}
    </div>
  )
}