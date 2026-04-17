'use client'

import DoctorCard from '@/components/common/DoctorCard'

export default function OurTeamSection({ data, fallbackDoctors }) {
  const doctors =
    data?.displayMode === 'manual'
      ? data?.teamMembers || []
      : fallbackDoctors || []

  if (!doctors.length) return null

  console.log('OurTeamSection doctors:', doctors)

  return (
    <section className="section bg-white" id="team">
      <div className="max-w-7xl mx-auto mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">
            Our Experts
          </span>

          <h2 className="section-title">
            {data?.sectionTitle || 'Meet Our Team'}
          </h2>

          {data?.sectionSubtitle && (
            <p className="text-muted mt-3">
              {data.sectionSubtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <DoctorCard key={doc._id} doctor={doc} />
          ))}
        </div>

      </div>
    </section>
  )
}