import {
    ShieldCheck,
    Clock,
    Microscope,
    HeartHandshake,
    Banknote,
    Award,
} from "lucide-react";
import clinicData from "@/config/clinicData";

/* SAME DATA (UNCHANGED) */
const reasons = [
    {
        icon: ShieldCheck,
        title: "Pain-Free Guarantee",
        description:
            "We use the latest anaesthesia techniques and anxiety management tools.",
        stat: "100%",
        statLabel: "Painless promise",
    },
    {
        icon: Microscope,
        title: "Latest Technology",
        description:
            "Digital X-rays, 3D scanning, rotary endodontics, laser dentistry.",
        stat: "3D",
        statLabel: "Digital scanning",
    },
    {
        icon: Clock,
        title: "Minimal Waiting Time",
        description:
            "We respect your schedule with punctual doctors and fast processes.",
        stat: "<10",
        statLabel: "Min wait",
    },
    {
        icon: HeartHandshake,
        title: "Patient-First Culture",
        description:
            "Warm, honest care — no upselling, no pressure.",
        stat: "5★",
        statLabel: "Rating",
    },
    {
        icon: Banknote,
        title: "Transparent Pricing",
        description:
            "No hidden charges. EMI options available.",
        stat: "0",
        statLabel: "Hidden fees",
    },
    {
        icon: Award,
        title: "Certified Specialists",
        description: `${clinicData.doctor.name} and team are highly certified.`,
        stat: "10+",
        statLabel: "Years exp",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-linear-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase  text-[#ef1f38] px-4 py-1 rounded-full mb-4">
            Why Choose Us
          </span>

                    <h2 className="heading-lg md:text-5xl font-light text-gray-900 mb-4">
                        Not just a clinic — <span className="text-[#ef1f38]">a promise</span>
                    </h2>

                    <p className="text-gray-500">
                        Trusted by {clinicData.stats[0].value} patients in {clinicData.city}.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason) => {
                        const Icon = reason.icon;

                        return (
                            <div
                                key={reason.title}
                                className="group bg-white border border-gray-200 rounded-sm p-6 "
                            >
                                {/* ICON + STAT */}
                                <div className="flex justify-between items-start mb-5">

                                    <div
                                        className="w-12 h-12 rounded-sm bg-[#ef1f38] flex items-center justify-center text-white group-hover:bg-blue-500 group-hover:text-white border-gray-200 transition">
                                        <Icon size={22}/>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xl font-semibold text-[#ef1f38]">
                                            {reason.stat}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {reason.statLabel}
                                        </p>
                                    </div>

                                </div>

                                {/* TEXT */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {reason.title}
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {reason.description}
                                </p>

                            </div>
                        );
                    })}
                </div>

                {/* BOTTOM TRUST STRIP */}
                <div
                    className="mt-14 border border-blue-200 rounded-sm p-5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-blue-50">

                    <div>
                        <p className="text-sm font-medium text-gray-900">
                            Trusted Dental Care You Can Rely On
                        </p>
                        <p className="text-xs text-gray-500">
                            Free consultation · No hidden charges
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="bg-[#ef1f38] text-white px-4 py-2 text-sm rounded-sm hover:bg-[#ef1f38]/90 transition"
                    >
                        Book Appointment
                    </a>

                </div>


            </div>
        </section>
    );
}