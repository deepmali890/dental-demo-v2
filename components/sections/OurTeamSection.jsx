'use client'

import DoctorCard from '@/components/common/DoctorCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function OurTeamSection({ data, fallbackDoctors }) {
  const doctors =
    data?.displayMode === 'manual'
      ? data?.teamMembers || []
      : fallbackDoctors || []

  if (!doctors.length) return null

  return (
    <section className="section bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">Our Experts</span>

          <h2 className="section-title">
            {data?.sectionTitle || 'Meet Our Team'}
          </h2>

          {data?.sectionSubtitle && (
            <p className="text-gray-500 mt-3">
              {data.sectionSubtitle}
            </p>
          )}
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">

          <Carousel className="w-full">

            <CarouselContent className="ml-0">

              {doctors.map((doc) => (
                <CarouselItem
                  key={doc._id}
                  className="
                    pl-4
                    basis-full
                    sm:basis-1/2
                    md:basis-1/3
                    lg:basis-1/4
                  "
                >
                  <DoctorCard doctor={doc} />
                </CarouselItem>
              ))}

            </CarouselContent>

            <CarouselPrevious
              className="
                absolute -top-13 right-12 z-10
                h-9 w-9
                mt-4
                mb-4
                rounded-lg
                bg-white shadow-md
                hover:bg-brand-600 hover:text-white
                outline-none
                border-brand-600
                transition
                flex
              "
            />

            <CarouselNext
              className="
                absolute -top-13 right-0 z-10
                h-9 w-9
                mt-4
                mb-4
                rounded-lg
                bg-white shadow-md
                border-brand-600
                hover:bg-brand-600 hover:text-white
                outline-none
                transition
                flex
              "
            />

          </Carousel>

        </div>

      </div>
    </section>
  )
}