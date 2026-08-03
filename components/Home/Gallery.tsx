"use client";

import React from "react";
import Image from "next/image";

export default function Gallery() {
    const images = [
        "/gallery/gallery-01.jpg",
        "/gallery/gallery-02.jpg",
        "/gallery/gallery-03.jpg",
        "/gallery/gallery-04.jpg",
        "/gallery/gallery-05.jpg",
        "/gallery/gallery-06.jpg",
        "/gallery/gallery-07.jpg",
        "/gallery/gallery-08.jpg",
        "/gallery/gallery-10.jpg",
        "/gallery/gallery-11.jpg",
        "/gallery/vaikuntamahaprasthanam-7th-anniversary.jpg"
    ];

    return (
        <section className="bg-white pt-8 pb-20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Category Badge */}
                <div className="flex items-center justify-center gap-2.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F58220]" />
                    <span className="text-lg font-semibold text-[#F58220] tracking-wider uppercase font-plus-jakarta">
                        Gallery
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#1E293B] tracking-tight mb-6 font-plus-jakarta">
                    A Place That Speaks Through Its Spaces
                </h2>
            </div>

            {/* Curved/Warped Scrolling Container */}
            <div
                className="relative w-full overflow-hidden h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px]"
                style={{ clipPath: "url(#gallery-clip)" }}
            >
                <div className="flex animate-marquee h-full whitespace-nowrap">
                    {/* First set of images */}
                    <div className="flex gap-8 shrink-0 items-center h-full pr-8">
                        {images.map((src, index) => (
                            <div
                                key={`img-1-${index}`}
                                className="w-[21vw] min-w-[240px] max-w-[340px] h-full relative overflow-hidden rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer shrink-0"
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    sizes="340px"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for infinite looping */}
                    <div className="flex gap-8 shrink-0 items-center h-full pr-8" aria-hidden="true">
                        {images.map((src, index) => (
                            <div
                                key={`img-2-${index}`}
                                className="w-[21vw] min-w-[240px] max-w-[340px] h-full relative overflow-hidden rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer shrink-0"
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image duplicate ${index + 1}`}
                                    fill
                                    sizes="340px"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hidden SVG for ClipPath Definition */}
            <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                <defs>
                    <clipPath id="gallery-clip" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0 C 0.25,0.28 0.75,0.28 1,0 L 1,1 C 0.75,0.72 0.25,0.72 0,1 Z" />
                    </clipPath>
                </defs>
            </svg>
        </section>
    );
}

