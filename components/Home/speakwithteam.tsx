"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Speakwithteam() {
    const sectionRef = useRef<HTMLElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (sectionRef.current) {
                        const rect = sectionRef.current.getBoundingClientRect();
                        const viewportHeight = window.innerHeight;
                        const elementHeight = rect.height;

                        if (rect.top < viewportHeight && rect.bottom > 0) {
                            // Calculate how far the section has scrolled through the viewport (0 to 1)
                            const scrollPercentage = (viewportHeight - rect.top) / (viewportHeight + elementHeight);

                            // Parallax factor of 0.35 gives a smooth transition
                            const parallaxFactor = 0.35;
                            const yOffset = (scrollPercentage - 0.5) * elementHeight * parallaxFactor;
                            setOffset(yOffset);
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Trigger initial calculation
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[380px] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.1)] z-10"
        >
            {/* Background Image Parallax Wrapper */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image
                    src="/facilities/speak.png"
                    alt="A Compassionate Hand Through Every Farewell"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover scale-[1.25] sm:scale-[1.35]"
                    style={{ transform: `translateY(${offset}px)`, objectPosition: "center 20%" }}
                />
            </div>

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/60 -z-10" />

            {/* Content Container */}
            <div
                className="relative z-10 max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col items-center"
                style={{ transform: `translateY(${-offset * 0.3}px)` }}
            >
                {/* Title */}
                <h2 className="text-2xl sm:text-2xl md:text-[36px] lg:text-[36px] font-medium text-white tracking-tight leading-snug sm:leading-tight font-plus-jakarta max-w-3xl mb-4 sm:mb-5">
                    A Compassionate Hand Through Every Farewell
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-[15px] text-gray-200/90 font-normal max-w-2xl leading-relaxed font-manrope mb-6 sm:mb-8">
                    Every family deserves guidance, understanding and peace of mind. Our dedicated team is here to provide thoughtful assistance and seamless support, helping you honour your loved one&apos;s final journey with dignity and care.
                </p>

                {/* CTA Button */}
                <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#FF8A00] hover:bg-[#e07b00] text-white font-medium text-sm sm:text-base rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer font-manrope">
                    Speak with our team
                </button>
            </div>
        </section>
    );
}