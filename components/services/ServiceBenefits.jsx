import React from 'react'

const ServiceBenefits = ({ service }) => {
  if (!service.benefits?.length) return null

  return (
    <section className="space-y-8">

      {/* Heading */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
          Key Benefits
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {service.benefits.map((b, idx) => (
          <div
            key={idx}
            className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-blue-50/40 transition hover:border-gray-200"
          >
            {/* Icon */}
            {b.icon && (
              <div className="text-xl leading-none mt-1">
                {b.icon}
              </div>
            )}

            {/* Content */}
            <div>
              <h3 className="font-medium text-gray-900">
                {b.title}
              </h3>

              {b.description && (
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
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