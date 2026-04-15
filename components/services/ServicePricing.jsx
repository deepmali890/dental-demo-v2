import React from 'react'

const ServicePricing = ({ service }) => {
  if (!service.pricing?.showPrice) return null

  const { priceRange, startingFrom, note } = service.pricing

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-5">

      {/* Header */}
      <div>
        <h3 className="text-base font-semibold text-gray-900">
          Treatment Cost
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Transparent pricing with no hidden charges
        </p>
      </div>

      {/* Price */}
      <div className="space-y-1">

        {priceRange && (
          <p className="text-3xl font-semibold text-primary leading-tight">
            {priceRange}
          </p>
        )}

        {startingFrom && (
          <p className="text-sm text-gray-600">
            Starting from{' '}
            <span className="font-medium text-gray-900">
              ₹{startingFrom.toLocaleString()}
            </span>
          </p>
        )}

      </div>

      {/* Note */}
      {note && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 leading-relaxed">
            {note}
          </p>
        </div>
      )}

    </div>
  )
}

export default ServicePricing