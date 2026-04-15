import { CheckCircle2, XCircle, Sparkles } from "lucide-react"
import CTAButton from "../ui/CTAButton"
import Link from "next/link"

export default function PlanCard({ plan }) {
  const isFeatured = plan.isPopular
  const isPromo = plan.status === 'promotional'

  const discount =
    plan.originalPrice && plan.price
      ? Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)
      : null

  return (
    <div
      className={`relative flex flex-col h-full rounded-2xl border transition ${
        isFeatured
          ? 'border-brand-600 bg-white'
          : 'border-gray-100 bg-white'
      }`}
    >

      {/* TOP BADGES */}
      {(isFeatured || (isPromo && discount)) && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2">

          {isFeatured && (
            <span className="text-[10px] font-semibold bg-brand-900 text-white px-3 py-1 rounded-full flex items-center gap-1">
              <Sparkles size={12} />
              Popular
            </span>
          )}

          {isPromo && discount && (
            <span className="text-[10px] font-semibold bg-green-600 text-white px-3 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}

        </div>
      )}

      <div className="p-6 flex flex-col flex-1">

        {/* HEADER */}
        <div className="mb-5">

          <p className="text-[11px] uppercase tracking-wide text-brand-600 font-semibold">
            {plan.planType === 'package'
              ? 'Package Plan'
              : plan.planType === 'membership'
              ? 'Membership Plan'
              : 'Treatment Plan'}
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-1">
            {plan.title}
          </h3>

          {plan.description && (
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              {plan.description}
            </p>
          )}
        </div>

        {/* PRICE */}
        <div className="mb-6">

          {plan.priceLabel ? (
            <p className="text-2xl font-semibold text-brand-600">
              {plan.priceLabel}
            </p>
          ) : plan.price ? (
            <div>

              {plan.originalPrice && (
                <p className="text-xs text-gray-400 line-through">
                  {plan.currency}
                  {plan.originalPrice.toLocaleString()}
                </p>
              )}

              <p className="text-3xl font-semibold text-gray-900">
                {plan.currency}
                {plan.price.toLocaleString()}

                {plan.priceUnit && (
                  <span className="text-sm text-gray-400 ml-1">
                    /{plan.priceUnit}
                  </span>
                )}
              </p>

            </div>
          ) : (
            <p className="text-lg font-medium text-gray-500">
              Contact for Pricing
            </p>
          )}

          {plan.validityDays > 0 && (
            <p className="text-xs text-gray-400 mt-1">
              Valid for {plan.validityDays} days
            </p>
          )}
        </div>

        {/* FEATURES */}
        {plan.includedItems?.length > 0 && (
          <ul className="space-y-2.5 mb-6 flex-1">

            {plan.includedItems.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-2 text-sm ${
                  item.isHighlighted
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-600'
                }`}
              >
                <CheckCircle2
                  size={16}
                  className="text-brand-600 mt-0.5 shrink-0"
                />
                {item.item}
              </li>
            ))}

            {plan.notIncluded?.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-gray-400"
              >
                <XCircle
                  size={16}
                  className="text-gray-300 mt-0.5 shrink-0"
                />
                {item}
              </li>
            ))}

          </ul>
        )}

        {/* CTA */}
        <div className="mt-auto pt-4 border-t border-gray-100">

          {plan.cta ? (
            <CTAButton
              data={plan.cta}
              className={`w-full justify-center ${
                isFeatured ? 'btn-primary' : 'btn-secondary'
              }`}
            />
          ) : (
            <Link
              href="/contact"
              className={`btn w-full justify-center ${
                isFeatured ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Choose Plan
            </Link>
          )}

        </div>

      </div>
    </div>
  )
}