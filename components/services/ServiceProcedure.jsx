import React from 'react'

const ServiceProcedure = ({ service }) => {
  if (!service.procedure?.length) return null

  return (
    <section className="space-y-8">

      {/* Header */}
      <div>
        <p className="text-xs uppercase tracking-widest text-brand-600 font-semibold mb-2">
          How it works
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
          Treatment Process
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-5 top-6 bottom-6 w-px bg-gray-200" />

        <div className="space-y-5">
          {service.procedure.map((step, idx) => {
            const stepNumber = step.stepNumber || idx + 1

            return (
              <div key={idx} className="flex gap-5 relative">

                {/* Step Circle */}
                <div className="w-10 h-10 rounded-full bg-white border border-brand-900 
                  flex items-center justify-center text-sm font-semibold text-gray-900 
                  flex-shrink-0 z-10">
                  {String(stepNumber).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="flex-1 border border-gray-100 rounded-2xl px-5 py-4 bg-blue-50/40 transition hover:border-gray-200">

                  <h3 className="text-[15px] font-medium text-gray-900 leading-snug">
                    {step.title}
                  </h3>

                  {step.description && (
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">
                      {step.description}
                    </p>
                  )}

                </div>

              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

export default ServiceProcedure