import { Check, Sparkles } from "lucide-react";
import clinicData from "@/config/clinicData";



const treatmentPrices = [
    { name: "Root Canal Treatment (RCT)", price: "₹3,500 – ₹6,000" },
    { name: "Invisalign / Clear Aligners", price: "₹65,000 – ₹1,20,000" },
    { name: "Metal Braces", price: "₹18,000 – ₹30,000" },
    { name: "Ceramic Braces", price: "₹28,000 – ₹45,000" },
    { name: "Tooth Extraction (simple)", price: "₹500 – ₹1,500" },
    { name: "Surgical Extraction / Wisdom Tooth", price: "₹2,500 – ₹5,000" },
    { name: "Dental Crown (ceramic)", price: "₹4,000 – ₹8,000" },
    { name: "Teeth Whitening (in-clinic)", price: "₹4,999 – ₹7,999" },
];

export default function Pricing() {
    return (
        <section id="pricings" className="py-20 bg-linear-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p className="text-xs uppercase tracking-widest text-[#ef1f38] mb-2">
                        Pricing
                    </p>

                    <h2 className="heading-lg md:text-4xl font-semibold text-gray-900">
                        No Hidden Costs
                    </h2>

                    <p className="text-gray-500 text-sm mt-3">
                        Transparent pricing with no surprises
                    </p>
                </div>

                {/* TABLE */}
                <div className="border border-gray-200 rounded-sm p-4 sm:p-6 bg-white">

                    {/* HEADER */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">

                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                Treatment Prices
                            </h3>
                            <p className="text-xs text-gray-500">
                                Approximate pricing
                            </p>
                        </div>

                        <a
                            href={`tel:${clinicData.phone}`}
                            className="text-sm text-[#ef1f38] sm:whitespace-nowrap"
                        >
                            Call for exact quote
                        </a>

                    </div>

                    {/* LIST */}
                    <div className="grid gap-2 sm:grid-cols-2">

                        {treatmentPrices.map((item) => (
                            <div
                                key={item.name}
                                className="border border-gray-100 rounded-sm px-3 py-3 sm:px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                            >
                                {/* NAME */}
                                <span className="text-sm text-gray-600 leading-snug">
          {item.name}
        </span>

                                {/* PRICE */}
                                <span className="text-sm font-medium text-[#ef1f38] sm:ml-4 shrink-0">
          {item.price}
        </span>
                            </div>
                        ))}

                    </div>

                    {/* FOOTER */}
                    <p className="text-xs text-gray-400 text-center mt-5 leading-relaxed">
                        * Prices may vary. Contact for exact estimate.
                    </p>

                </div>

            </div>
        </section>
    );
}