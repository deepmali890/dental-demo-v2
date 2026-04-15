export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Hero skeleton */}
      <div className="h-80 bg-gray-200" />
      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
        <div className="h-8 bg-gray-200 rounded-xl w-1/3 mx-auto" />
        <div className="grid grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="h-64 bg-gray-200 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  )
}