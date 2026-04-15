"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import clinicData from "@/config/clinicData";

const faqs = [
    {
        category: "Appointments",
        items: [
            {
                q: `How do I book an appointment at ${clinicData.clinicName}?`,
                a: `You can book in three ways — fill out our online appointment form on this page, call us directly at ${clinicData.phoneDisplay}, or send us a message on WhatsApp. We confirm all appointments within 1 hour during clinic hours.`,
            },
            {
                q: "Are same-day appointments available?",
                a: "Yes! We reserve slots every day for same-day and emergency cases...",
            },
            {
                q: "What should I bring for my first visit?",
                a: "Just yourself! If you have any previous dental X-rays...",
            },
        ],
    },
    {
        category: "Treatments",
        items: [
            {
                q: "Is teeth whitening safe? How long does it last?",
                a: "Absolutely. Our professional in-clinic whitening...",
            },
            {
                q: "How painful is a root canal treatment?",
                a: "Modern root canal therapy is no more painful...",
            },
            {
                q: "How long does a dental implant procedure take?",
                a: "The implant placement itself takes 45–90 minutes...",
            },
            {
                q: "Am I a good candidate for Invisalign?",
                a: "Invisalign works for most mild to moderate alignment...",
            },
        ],
    },
    {
        category: "Fees & Insurance",
        items: [
            {
                q: "Do you offer EMI or payment plans?",
                a: "Yes. For treatments above ₹10,000...",
            },
            {
                q: "Do you accept dental insurance?",
                a: "We work with most major insurance providers...",
            },
            {
                q: "Is the initial consultation free?",
                a: `Yes! For new patients, the first consultation at ${clinicData.clinicName} is completely free...`,
            },
        ],
    },
];

function FaqItem({ item, isOpen, onToggle }) {
    return (
        <div
            className={`border rounded-sm transition ${
                isOpen
                    ? "border-red-200 bg-red-50"
                    : "border-gray-200 bg-white"
            }`}
        >
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-start gap-4 px-5 py-4 text-left"
            >
        <span
            className={`text-sm font-medium leading-snug ${
                isOpen ? "text-[#ef1f38]" : "text-gray-900"
            }`}
        >
          {item.q}
        </span>

                <span
                    className={`w-7 h-7 flex items-center justify-center rounded-sm text-xs ${
                        isOpen
                            ? "bg-[#ef1f38] text-white"
                            : "bg-gray-100 text-gray-500"
                    }`}
                >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
            </button>

            <div
                className={`px-5 transition-all duration-200 ${
                    isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
                <p className="text-sm text-gray-600 leading-relaxed pt-2">
                    {item.a}
                </p>
            </div>
        </div>
    );
}

export default function FAQ() {
    const [openItem, setOpenItem] = useState("0-0");
    const [activeCategory, setActiveCategory] = useState(0);

    function toggle(key) {
        setOpenItem((prev) => (prev === key ? null : key));
    }

    return (
        <section id="faqs" className="py-20 bg-linear-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p className="text-xs uppercase tracking-widest text-[#ef1f38] mb-2">
                        FAQ
                    </p>

                    <h2 className="heading-lg md:text-4xl font-semibold text-gray-900">
                        Common Questions
                    </h2>

                    <p className="text-gray-500 text-sm mt-3">
                        Everything you need to know before visiting
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT */}
                    <div>

                        {/* CATEGORY */}
                        <div className="flex flex-col gap-2 mb-6">
                            {faqs.map((group, i) => (
                                <button
                                    key={group.category}
                                    onClick={() => {
                                        setActiveCategory(i);
                                        setOpenItem(null);
                                    }}
                                    className={`px-4 py-2.5 rounded-sm text-sm text-left transition ${
                                        activeCategory === i
                                            ? "bg-[#ef1f38] text-white"
                                            : "border border-gray-200 text-gray-600 hover:bg-[#ef1f38]/10"
                                    }`}
                                >
                                    {group.category}
                                </button>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="border border-gray-200 rounded-sm p-5">
                            <p className="text-sm font-medium text-gray-900 mb-1">
                                Still have questions?
                            </p>
                            <p className="text-xs text-gray-500 mb-3">
                                Chat with us instantly on WhatsApp.
                            </p>

                            <a
                                href={`https://wa.me/${clinicData.whatsapp}`}
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-[#ef1f38] text-white px-4 py-2 rounded-sm text-sm hover:bg-[#ef1f38]/90 transition"
                            >
                                Chat Now
                            </a>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-3">
                        {faqs[activeCategory].items.map((item, i) => {
                            const key = `${activeCategory}-${i}`;
                            return (
                                <FaqItem
                                    key={key}
                                    item={item}
                                    isOpen={openItem === key}
                                    onToggle={() => toggle(key)}
                                />
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}