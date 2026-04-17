"use client";

import { useState } from "react";
import Select from "react-select";
import { Phone, CheckCircle } from "lucide-react";
import clinicData from "@/config/clinicData";

const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
    "11:30 AM", "12:00 PM", "2:00 PM", "2:30 PM", "3:00 PM",
    "4:00 PM", "5:00 PM", "6:00 PM", "6:30 PM", "7:00 PM",
];

export default function Appointment() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        service: null,
        date: "",
        time: null,
        notes: "",
    });

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    const serviceOptions = clinicData.services.map((s) => ({
        value: s.title,
        label: s.title,
    }));

    const timeOptions = timeSlots.map((t) => ({
        value: t,
        label: t,
    }));

    const selectStyles = {
        control: (base) => ({
            ...base,
            borderRadius: "4px",
            borderColor: "#e5e7eb",
            minHeight: "40px",
            boxShadow: "none",
            fontSize: "14px",
            "&:hover": { borderColor: "#2563eb" },
        }),
        menu: (base) => ({
            ...base,
            borderRadius: "4px",
        }),
    };

    return (
        <section id="contact" className="py-20 bg-linear-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <p className="text-xs uppercase tracking-widest text-[#ef1f38] mb-2">
                        Appointment
                    </p>

                    <h2 className="heading-lg md:text-4xl font-semibold text-gray-900">
                        Book Your Visit
                    </h2>

                    <p className="text-gray-500 text-sm mt-3">
                        Quick and easy appointment booking
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* LEFT */}
                    <div className="space-y-4">

                        {/* CALL */}
                        <a
                            href={`tel:${clinicData.phone}`}
                            className="flex items-center gap-3 border border-gray-200 rounded-sm p-4 bg-white"
                        >
                            <div className="w-8 h-8 bg-[#ef1f38] text-white flex items-center justify-center rounded-sm">
                                <Phone size={14} />
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">Call</p>
                                <p className="text-sm font-medium text-gray-900">
                                    {clinicData.phoneDisplay}
                                </p>
                            </div>
                        </a>

                        {/* WHATSAPP */}
                        <a
                            href={`https://wa.me/${clinicData.whatsapp.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 border border-gray-200 rounded-sm p-4 bg-white"
                        >
                            <div
                                className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.430.05-.197-.1-.836-.308-1.592-.985-.590-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.330.065-.134.034-.248-.015-.347-.050-.099-.445-1.076-.612-1.470-.160-.389-.323-.335-.445-.340-.114-.007-.247-.007-.380-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.710 1.916.810 2.049c.098.133 1.394 2.132 3.383 2.992.470.205.840.326 1.129.418.475.152.904.129 1.246.080.380-.058 1.171-.480 1.338-.943.164-.464.164-.860.114-.943-.049-.084-.182-.133-.380-.232" />
                                </svg>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">WhatsApp</p>
                                <p className="text-sm font-medium text-gray-900">
                                    Chat Now
                                </p>
                            </div>
                        </a>

                        {/* HOURS */}
                        <div className="border border-gray-200 rounded-sm p-5 bg-white">
                            <h3 className="text-xs uppercase text-gray-400 mb-3">
                                Clinic Hours
                            </h3>

                            {clinicData.hours.map((h) => (
                                <div key={h.day} className="flex justify-between text-sm py-1">
                                    <span className="text-gray-500">{h.day}</span>
                                    <span className="text-gray-900 font-medium">
                                        {h.time}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* RIGHT FORM */}
                    <div className="border border-gray-200 rounded-sm p-6 bg-white">

                        {submitted ? (
                            <div className="text-center py-10">
                                <CheckCircle className="w-10 h-10 text-[#ef1f38] mx-auto mb-3" />
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Appointment Confirmed
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    We will contact you soon
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">

                                <div className="grid sm:grid-cols-2 gap-3">
                                    <input
                                        name="name"
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                        className="input-modern rounded-sm"
                                    />
                                    <input
                                        name="phone"
                                        placeholder="Phone"
                                        onChange={handleChange}
                                        className="input-modern rounded-sm"
                                    />
                                </div>

                                <Select
                                    instanceId="service-select"
                                    options={serviceOptions}
                                    placeholder="Select Service"
                                    styles={selectStyles}
                                    onChange={(val) =>
                                        setForm((prev) => ({ ...prev, service: val?.value || null }))
                                    }
                                />

                                <div className="grid sm:grid-cols-2 gap-3">
                                    <input
                                        type="date"
                                        name="date"
                                        onChange={handleChange}
                                        className="input-modern rounded-sm"
                                    />

                                    <Select
                                        instanceId="time-select"
                                        options={timeOptions}
                                        placeholder="Select Time"
                                        styles={selectStyles}
                                        onChange={(val) =>
                                            setForm((prev) => ({ ...prev, time: val?.value || null }))
                                        }
                                    />
                                </div>

                                <textarea
                                    name="notes"
                                    rows={3}
                                    placeholder="Notes..."
                                    onChange={handleChange}
                                    className="input-modern rounded-sm"
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-[#ef1f38] hover:bg-[#ef1f38]/90 text-white py-2.5 rounded-sm text-sm font-medium transition">
                                    Book Appointment
                                </button>

                            </form>
                        )}

                    </div>

                </div>

            </div>
        </section>
    );
}