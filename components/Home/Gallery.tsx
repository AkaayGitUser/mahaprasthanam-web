"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        <section id="gallery" className="bg-[#F8F6F3] pt-8 pb-20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Category Badge */}
                <div className="flex items-center justify-center gap-2.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F58220]" />
                    <span className="text-lg font-semibold text-[#F58220] font-plus-jakarta tracking-wide">
                        Gallery
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-medium text-center text-[#1E293B] tracking-tight mb-6 font-plus-jakarta">
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
                                className={`w-[21vw] min-w-[240px] max-w-[340px] h-full relative overflow-hidden rounded-3xl border-4 border-white shadow-sm transition-all duration-500 hover:z-10 hover:scale-[1.04] hover:shadow-lg cursor-pointer shrink-0 select-none ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    sizes="340px"
                                    className="object-cover saturate-90 transition-transform duration-700 hover:scale-110 hover:saturate-125"
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for infinite looping */}
                    <div className="flex gap-8 shrink-0 items-center h-full pr-8" aria-hidden="true">
                        {images.map((src, index) => (
                            <div
                                key={`img-2-${index}`}
                                className={`w-[21vw] min-w-[240px] max-w-[340px] h-full relative overflow-hidden rounded-3xl border-4 border-white shadow-sm transition-all duration-500 hover:z-10 hover:scale-[1.04] hover:shadow-lg cursor-pointer shrink-0 select-none ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image duplicate ${index + 1}`}
                                    fill
                                    sizes="340px"
                                    className="object-cover saturate-90 transition-transform duration-700 hover:scale-110 hover:saturate-125"
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <Link
                    href="/Front#gallery"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F58220] px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#d96d12] focus:outline-none focus:ring-2 focus:ring-[#F58220] focus:ring-offset-2"
                >
                    View All
                    <span aria-hidden="true">&rarr;</span>
                </Link>
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

