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
    <section className="w-full bg-[#F8F6F3] py-8 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-10">
         
          {/* 1. Left Image */}
          <div className="relative w-full max-w-[380px] h-[280px] sm:h-[340px] md:h-[390px] shrink-0 overflow-hidden flex shadow-sm rounded-r-lg lg:rounded-none mx-auto lg:mx-0">
            <div className="w-[6px] sm:w-[8px] h-full bg-[#F47C20] shrink-0" />
            <div className="relative w-full h-full">
              <Image
                src={active.image}
                alt={active.author}
                fill
                quality={100}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* 2. Middle Content Section */}
          <div className="flex-1 w-full max-w-2xl text-center lg:text-left pt-0 lg:pt-3">
            {/* Tag / Category Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 sm:mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F47C20] inline-block" />
              <span className="text-[#F47C20] tracking-wide font-semibold text-sm sm:text-base">
                Testimonials
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium leading-snug tracking-tight text-[#222222]">
              Families Who Found Comfort
            </h2>

            {/* Quote */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed text-[#1E293B] font-manrope">
              "{active.quote}"
            </p>

            {/* Author */}
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-[24px] font-manrope font-medium text-[#1E293B]">
              - {active.author}
            </p>
          </div>

          {/* 3. Right Section: Small Images & Next Button */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-5 shrink-0 pt-2 lg:pt-[120px] w-full lg:w-auto justify-center lg:justify-start">
            
            {/* Thumbnails Container */}
            <div className="w-auto sm:w-[185px] overflow-hidden">
              <div className="flex gap-3 w-max">
                
                {/* 1st Small Image */}
                <div className="relative w-[90px] sm:w-[110px] h-[140px] sm:h-[170px] rounded overflow-hidden shrink-0">
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

                {/* 2nd Small Image */}
                <div className="relative w-[90px] sm:w-[110px] h-[140px] sm:h-[170px] rounded overflow-hidden shrink-0">
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

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-[140px] h-[48px] sm:h-[52px] rounded-full bg-[#F47C20] hover:bg-[#e06b15] text-white text-base sm:text-[18px] font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-95 cursor-pointer lg:mt-2"
            >
              Next <span className="text-base">→</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}