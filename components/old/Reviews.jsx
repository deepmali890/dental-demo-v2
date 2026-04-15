"use client";

import {Star, Quote} from "lucide-react";
import clinicData from "@/config/clinicData";

// Duplicate reviews for infinite feel
const reviews = [...clinicData.reviews, ...clinicData.reviews];

function ReviewCard({review}) {
    return (
        <div className="bg-white border border-gray-200 rounded-sm p-5">

            {/* Stars */}
            <div className="flex gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#ef1f38" color="#ef1f38"/>
                ))}
            </div>

            {/* Text */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {review.text}     </p>

            {/* User */}
            <div className="flex items-center gap-3">
                <div
                    className="w-9 h-9 rounded-full bg-[#ef1f38] flex items-center justify-center text-white text-xs font-semibold">
                    {review.avatar}
                </div>

                <div>
                    <p className="text-sm font-semibold text-gray-900">
                        {review.name}
                    </p>
                    <p className="text-xs text-gray-400">
                        {review.location}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Reviews() {
    return (
        <section id="reviews" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <div>
                        <span
                            className="inline-block text-xs font-semibold uppercase tracking-widest bg-[#ef1f38] text-white px-4 py-1 rounded-full mb-4">
                            Testimonials
                        </span>

                        <h2 className="heading-lg font-light text-gray-900 mb-6 leading-tight">
                            What our patients <br/>
                            <span className="text-[#ef1f38] ">say about us</span>
                        </h2>

                        <p className="text-gray-500 mb-8 max-w-md">
                            Real experiences from our happy patients. We focus on comfort,
                            quality, and long-term dental health.
                        </p>

                        <div className="flex items-center gap-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="#ef1f38" color="#ef1f38"/>
                            ))}
                            <span className="ml-2 text-gray-700 font-semibold">
                                5.0 Rating
                            </span>
                        </div>
                    </div>

                    {/* RIGHT - AUTO SCROLL */}
                    <div className="relative h-[420px] overflow-hidden">

                        <div className="absolute w-full animate-scroll-y space-y-4">
                            {reviews.map((review, i) => (
                                <ReviewCard key={i} review={review}/>
                            ))}
                        </div>

                    </div>

                </div>

            </div>

            {/* Animation */}
            <style jsx>{`
                .animate-scroll-y {
                    animation: scrollY 20s linear infinite;
                }

                @keyframes scrollY {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-50%);
                    }
                }
            `}</style>
        </section>
    );
}