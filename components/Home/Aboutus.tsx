import React from "react";
import Image from "next/image"; // Or standard <img> tags if using external URLs directly

interface AboutUsProps {
  /** URL for the back/left offset image frame */
  bgImageUrl?: string;
  /** URL for the front/right foreground image frame */
  mainImageUrl?: string;
  /** URL destination for the Explore More button */
  exploreMoreHref?: string;
}

export const AboutUsSection: React.FC<AboutUsProps> = ({
  bgImageUrl = "/images/hero/About Us/Ab1.png",
  mainImageUrl = "/images/hero/About Us/Ab2.png",
  exploreMoreHref = "#",
}) => {
  return (
    <section className="bg-[#F8F6F3] px-6 py-8 md:px-16 lg:px-24 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          {/* Badge / Tagline */}
          <div className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F38120]" />
            <span className="text-[#F38120] font-bold text-base tracking-wide">
              About Us
            </span>
          </div>

          {/* Main Heading */}
          <h3 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-[#1E293B] leading-[1.15] font-plusjakartasans">
            Every Life Deserves<br />
            A Dignified Farewell
          </h3>

          {/* Description */}
          <p className="text-manrope text-base md:text-lg leading-relaxed max-w-xl text-slate-600">
            Every farewell at Vaikunta Mahaprasthanam is guided by compassion and reverence. 
            Our memorial spaces blend sacred rituals with modern amenities, creating an 
            environment where families can reflect, remember and celebrate life in peace.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href={exploreMoreHref}
              className="inline-flex items-center gap-3 bg-[#F38120] hover:bg-[#e07213] text-white font-medium text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm"
            >
              Explore More <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Layered Images Frame */}
        <div className="relative w-full max-w-[540px] mx-auto lg:max-w-none h-[480px]">
          
          {/* Right Frame Image (Background / Higher position) */}
          <div className="absolute right-0 top-0 w-[60%] h-[82%] z-10">
            <div className="relative w-full h-full overflow-hidden bg-slate-200">
              <img
                src={mainImageUrl}
                alt="Memorial flower detail foreground"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left Frame Image (Foreground / Lower position with White Mat Border) */}
          <div className="absolute left-[8%] top-[10%] w-[43%] h-[62%] bg-white  shadow-md rounded-sm z-15 ">
            <div className="relative w-full h-full overflow-hidden bg-slate-200">
              <img
                src={bgImageUrl}
                alt="Memorial space architecture background"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 10+ Years Of Experiences Counter (Aligned under Left Image) */}
          <div className="absolute left-[8%] bottom-2 z-20 space-y-0.5 mb-10">
            <div className="text-2xl md:text-3xl font-bold text-[#F38120]">
              10+
            </div>
            <div className="text-xs md:text-xs font-sm text-slate-500 leading-snug">
              Years Of<br />Experiences
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;