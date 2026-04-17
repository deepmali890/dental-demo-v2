"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
    "/gallery/Gallery_1.jpg",
    "/gallery/Gallery_3.jpg",
    "/gallery/Gallery_6.jpg",
    "/gallery/Gallery_7.jpg",
    "/gallery/Gallery_8.jpg",
    "/gallery/Gallery_9.jpg",
    "/gallery/Gallery_11.jpg",
    "/gallery/Gallery_12.jpg",
    "/gallery/Gallery_13.jpg",
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <p className="text-xs uppercase tracking-widest text-[#ef1f38] mb-2">
                        Our Gallery
                    </p>
                    <h2 className="heading-lg font-semibold text-gray-900">
                        Smile Transformations
                    </h2>
                    <p className="text-gray-500 text-sm mt-2">
                        Real results from our happy patients
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    {images.map((src, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(src)}
                            className="relative cursor-pointer overflow-hidden rounded-lg group"
                        >
                            <Image
                                src={src}
                                alt="gallery"
                                width={400}
                                height={400}
                                className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                        </div>
                    ))}

                </div>

            </div>

            {/* MODAL PREVIEW */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-3xl w-full px-4">
                        <Image
                            src={selectedImage}
                            alt="preview"
                            width={800}
                            height={800}
                            className="rounded-lg object-contain w-full h-auto"
                        />

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}