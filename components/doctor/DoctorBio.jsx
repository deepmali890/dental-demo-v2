import PortableTextRenderer from '@/components/PortableTextRenderer'

export default function DoctorBio({ doctor }) {
  if (!doctor.fullBio && !doctor.shortBio) return null

  return (
    <div className='md:px-6'>
      {doctor.fullBio ? (
        <PortableTextRenderer value={doctor.fullBio} />
      ) : (
        <p className="text-gray-600">{doctor.shortBio}</p>
      )}
    </div>
  )
}