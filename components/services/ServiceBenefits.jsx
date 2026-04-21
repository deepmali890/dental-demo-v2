import React from 'react'

const ServiceBenefits = ({ service }) => {
  if (!service.benefits?.length) return null

  return (
    <section className="space-y-6 sm:space-y-8">

      {/* Heading */}
      <div>
        <h2 className="
          text-xl sm:text-2xl md:text-3xl 
          font-semibold text-gray-900 
          tracking-tight
        ">
          Key Benefits
        </h2>
      </div>

      {/* Grid */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-2
        gap-4 sm:gap-5
      ">

        {service.benefits.map((b, idx) => (
          <div
            key={idx}
            className="
              flex items-start gap-3 sm:gap-4
              p-4 sm:p-5
              rounded-xl sm:rounded-2xl
              border border-gray-100 
              bg-blue-50/40
              transition
              hover:border-gray-200
              hover:bg-blue-50/60
            "
          >

            {/* Icon */}
            {b.icon && (
              <div className="
                text-lg sm:text-xl 
                leading-none 
                mt-0.5
                flex-shrink-0
              ">
                {b.icon}
              </div>
            )}

            {/* Content */}
            <div className="min-w-0">

              <h3 className="
                text-sm sm:text-base 
                font-semibold text-gray-900 
                leading-tight
              ">
                {b.title}
              </h3>

              {b.description && (
                <p className="
                  text-xs sm:text-sm 
                  text-gray-600 
                  mt-1 
                  leading-relaxed
                ">
                  {b.description}
                </p>
              )}

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default ServiceBenefits