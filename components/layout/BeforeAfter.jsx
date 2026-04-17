"use client";
import { useState } from "react";
import clinicData from "@/config/clinicData";
import Image from "next/image";

function BeforeAfterCard({ item }) {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    function handleMove(clientX, rect) {
        const x = ((clientX - rect.left) / rect.width) * 100;
        setSliderPos(Math.min(95, Math.max(5, x)));
    }

    function onMouseMove(e) {
        if (!isDragging) return;
        handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
    }

    function onTouchMove(e) {
        handleMove(
            e.touches[0].clientX,
            e.currentTarget.getBoundingClientRect()
        );
    }

    return (
        <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">

            {/* IMAGE SLIDER */}
            <div
                className="relative h-56 sm:h-60 cursor-ew-resize select-none"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={onMouseMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={onTouchMove}
            >

                {/* AFTER IMAGE */}
                <Image
                    src={item.image2}
                    alt="After"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                />

                {/* BEFORE IMAGE */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPos}%` }}
                >
                    <Image
                        src={item.image1}
                        alt="Before"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>

                {/* DIVIDER */}
                <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
                    style={{ left: `${sliderPos}%` }}
                >
                    {/* HANDLE */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                        <div
                            className="w-8 h-8 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="2.5"
                            >
                                <path d="M8 3L3 8l5 5M16 3l5 5-5 5" />
                            </svg>
                        </div>

                    </div>
                </div>

                {/* LABELS */}
                <span
                    className="absolute top-3 left-3 text-[10px] font-medium bg-black/40 text-white px-2 py-0.5 rounded-sm">
                    Before
                </span>

                <span
                    className="absolute top-3 right-3 text-[10px] font-medium bg-[#ef1f38] text-white px-2 py-0.5 rounded-sm">
                    After
                </span>
            </div>

            {/* INFO */}
            <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {item.label}
                </h3>

                <p className="text-sm text-gray-600">
                    {item.description}
                </p>

                <p className="text-xs text-[#ef1f38] mt-2">
                    Drag to compare →
                </p>
            </div>
        </div>
    );
}

export default function BeforeAfter() {
    return (
        <section id="before-after" className="py-20 bg-linear-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p className="text-xs uppercase tracking-widest text-[#ef1f38] mb-2">
                        Real Results
                    </p>

                    <h2 className="heading-lg md:text-4xl font-semibold text-gray-900">
                        Before & After
                    </h2>

                    <p className="text-gray-500 text-sm mt-3">
                        See real transformations from our treatments
                    </p>
                </div>

                {/* GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {clinicData.beforeAfter.map((item) => (
                        <BeforeAfterCard key={item.label} item={item} />
                    ))}
                </div>

                {/* FOOTER */}
                <p className="text-center text-gray-400 text-xs mt-8">
                    * Results may vary. Treatments performed at {clinicData.clinicName}.
                </p>

            </div>
        </section>
    );
}