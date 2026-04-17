export default function Loading() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO SKELETON */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-950 to-brand-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">

          <div className="h-4 w-24 mx-auto rounded-full bg-white/20 shimmer" />

          <div className="h-10 md:h-12 w-2/3 mx-auto rounded-xl bg-white/20 shimmer" />

          <div className="h-4 w-1/2 mx-auto rounded-lg bg-white/10 shimmer" />

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-14">

        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="h-3 w-24 mx-auto bg-gray-200 rounded-full shimmer" />
          <div className="h-8 w-72 mx-auto bg-gray-200 rounded-xl shimmer" />
          <div className="h-4 w-96 max-w-full mx-auto bg-gray-100 rounded-lg shimmer" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="p-5 border border-gray-100 rounded-2xl space-y-4"
            >
              <div className="h-6 w-1/3 bg-gray-200 rounded shimmer" />
              <div className="h-4 w-full bg-gray-100 rounded shimmer" />
              <div className="h-4 w-2/3 bg-gray-100 rounded shimmer" />
              <div className="h-6 w-1/4 bg-brand-100 rounded shimmer" />
            </div>
          ))}
        </div>

        {/* DOCTOR CAROUSEL SKELETON */}
        <div className="space-y-6">
          <div className="h-6 w-40 bg-gray-200 rounded shimmer mx-auto" />

          <div className="flex gap-5 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="min-w-[70%] sm:min-w-[40%] md:min-w-[30%] lg:min-w-[22%]"
              >
                <div className="h-[300px] rounded-2xl bg-gray-200 shimmer relative">
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-white/70 backdrop-blur rounded-xl shimmer" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}