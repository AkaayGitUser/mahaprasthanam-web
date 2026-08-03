"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonals() {
  const testimonials = [
    {
      image: "/design-images/family-member.jpg",
      quote:
        "The peaceful surroundings and compassionate support gave our family the strength to honour our loved one with dignity.",
      author: "Family member",
    },
    {
      image: "/design-images/visitor.jpg",
      quote:
        "A beautifully maintained space that truly reflects compassion, serenity, and dignity.",
      author: "Visitor",
    },
    {
      image: "/design-images/hyderabad.jpg",
      quote:
        "Every detail was handled with care and respect. The environment brought a sense of calm during an incredibly difficult time.",
      author: "Hyderabad",
    },
  ];

  const [current, setCurrent] = useState(0);
  const active = testimonials[current];
  const preview1 = testimonials[(current + 1) % testimonials.length];
  const preview2 = testimonials[(current + 2) % testimonials.length];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="w-full bg-[#FAFAF8] py-20 ">
      <div className="max-w-full mx-auto pl-12">
        <div className="flex items-start justify-between gap-4">
          
          {/* 1. Left Featured Image with Integrated Orange Left Bar */}
          <div className="relative w-[450px] h-[390px] flex-shrink-0 overflow-hidden flex shadow-sm">
            <div className="w-[10px] h-full bg-[#F47C20] flex-shrink-0" />
            <div className="relative w-full h-full">
              <Image
                src={active.image}
                alt={active.author}
                fill
                quality={100}
                className="object-cover"
              />
            </div>
          </div>

          {/* 2. Middle Content Section */}
          <div className="flex-1 max-w-[560px] pt-3">
            {/* Tag / Category Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F47C20] inline-block" />
              <span className="text-[#F47C20] uppercase tracking-[0.15em] text-large font-plus jakarta sans font-semibold">
                TESTIMONIALS
              </span>
            </div>

            {/* Single Line Heading */}
            <h2 className="text-[48px] font-medium leading-tight tracking-tight text-[#222222] whitespace-nowrap">
  Families Who Found Comfort
</h2>

            {/* Quote */}
           <p className="mt-8 max-w-[470px] text-[22px] leading-[1.65] text-[#1E293B] font-manrope">
            "{active.quote}"
            </p>

            {/* Author */}
            <p className="mt-8 text-[22px] font-manrope text-[#1E293B]">
  - {active.author}
</p>
          </div>

          {/* 3. Right Section: Small Images & Next Button */}
          <div className="flex flex-col items-start gap-5 flex-shrink-0 pt-[100px]">
            
            {/* Container masked to crop 2nd preview image off screen */}
            <div className="w-[185px] overflow-hidden">
              <div className="flex gap-3 w-max">
                
                {/* 1st Small Image with FULL Orange Overlay */}
                <div className="relative w-[110px] h-[170px]  overflow-hidden flex-shrink-0">
                  <Image
                    src={preview1.image}
                    alt={preview1.author}
                    fill
                    quality={90}
                    className="object-cover"
                  />
                  {/* FULL COVER ORANGE OVERLAY TINT */}
                  <div className="absolute inset-0 bg-[#F47C20]/35 pointer-events-none" />
                </div>

                {/* 2nd Small Image (Cropped off edge) with FULL Orange Overlay */}
                <div className="relative w-[110px] h-[170px]  overflow-hidden flex-shrink-0">
                  <Image
                    src={preview2.image}
                    alt={preview2.author}
                    fill
                    quality={90}
                    className="object-cover"
                  />
                  {/* FULL COVER ORANGE OVERLAY TINT */}
                  <div className="absolute inset-0 bg-[#F47C20]/35 pointer-events-none" />
                </div>

              </div>
            </div>

            {/* Next Button left-aligned under thumbnails */}
            <button
              onClick={handleNext}
              className="w-[140px] h-[52px] rounded-full bg-[#F47C20] hover:bg-[#e06b15] text-white text-[18px] font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-95 cursor-pointer mt-4"
            >
              Next <span className="text-base">→</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}