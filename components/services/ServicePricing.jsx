import React from 'react'

const ServicePricing = ({ service }) => {
  if (!service.pricing?.showPrice) return null

  const { priceRange, startingFrom, note } = service.pricing

  return (
    <div className="
      w-full
      rounded-xl sm:rounded-2xl 
      border border-gray-100 
      bg-white 
      p-4 sm:p-5 md:p-6 
      space-y-4 sm:space-y-5
    ">

      {/* Header */}
      <div>
        <h3 className="
          text-sm sm:text-base 
          font-semibold text-gray-900
        ">
          Treatment Cost
        </h3>

        <p className="
          text-[11px] sm:text-xs 
          text-gray-500 
          mt-1
        ">
          Transparent pricing with no hidden charges
        </p>
      </div>

      {/* Price */}
      <div className="space-y-1.5">
        {priceRange && (
          <p className="text-3xl font-semibold text-primary leading-tight">
            {priceRange}
          </p>
        )}

        {startingFrom && (
          <p className="text-xs sm:text-sm text-gray-600">
            Starting from{' '}
            <span className="font-semibold text-gray-900">
              ₹{startingFrom.toLocaleString()}
            </span>
          </p>
        )}

      </div>

      {/* Note */}
      {note && (
        <div className="
          pt-3 sm:pt-4 
          border-t border-gray-100
        ">
          <p className="
            text-[11px] sm:text-xs 
            text-gray-500 
            leading-relaxed
          ">
            {note}
          </p>
        </div>
      )}

    </div>
  )
}

export default ServicePricing