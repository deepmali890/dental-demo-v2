
const steps = [
    {
        number: "01",
        title: "Initial Visit",
        description:
            "Visit us for a full exam and consultation so we understand your smile goals.",
    },
    {
        number: "02",
        title: "Personalised Plan",
        description:
            "We create a tailored treatment plan designed specifically for your needs.",
    },
    {
        number: "03",
        title: "Gentle Treatment",
        description:
            "Experience pain-free, comfortable care using modern dental technology.",
    },
    {
        number: "04",
        title: "Ongoing Support",
        description:
            "Regular check-ups ensure your smile stays healthy and perfect.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-linear-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase  text-[#ef1f38] px-4 py-1 rounded-full mb-4">
            How It Works
          </span>

                    <h2 className="heading-lg md:text-5xl font-light text-gray-900 mb-4">
                        Your Smile Journey <span className="text-[#ef1f38]">Simplified</span>
                    </h2>

                    <p className="text-gray-500 text-lg">
                        From consultation to care — we guide you at every step.
                    </p>
                </div>

                {/* STEPS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, idx) => (
                        <div
                            key={step.number}
                            className="relative group bg-white border border-gray-200 rounded-sm p-6 "
                        >

                            {/* NUMBER */}
                            <span className="absolute top-4 right-5 text-5xl font-bold text-blue-50">
                {step.number}
              </span>

                            {/* ICON */}
                            <div className="w-12 h-12 rounded-xl bg-[#ef1f38] flex items-center justify-center mb-5 text-white font-bold">
                                {step.number}
                            </div>

                            {/* CONTENT */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {step.title}
                            </h3>

                            <p className="text-sm text-gray-500 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}