import clinicData from "@/config/clinicData";

export default function Stats() {
  return (
    <section className="relative py-10 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#ef1f38] via-[#ef1f38] to-[#ef1f38]" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Glass Container */}
        <div className="stats-glass grid grid-cols-2 md:grid-cols-4">

          {clinicData.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-item text-center px-6 py-10 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >

              {/* Value */}
              <div className="font-display text-4xl md:text-5xl font-semibold text-white mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-blue-100 text-sm font-medium tracking-wide">
                {stat.label}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}