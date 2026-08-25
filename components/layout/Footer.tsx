"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const HyderabadMap = dynamic(() => import("@/components/Home/HyderabadMap"), {
  ssr: false,
});

interface FooterProps {
  activeLocationId?: string | null;
  onSelectLocation?: (id: string | null) => void;
}

export default function Footer({ activeLocationId, onSelectLocation }: FooterProps) {
  const handleLocationClick = (locationId: string) => {
    onSelectLocation?.(locationId);
    const mapElement = document.getElementById("map-section");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <footer className="bg-[#0E2B3E] text-white pt-4 sm:pt-6 pb-0 overflow-hidden">
      {/* Contact Section Overlay Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Floating Top Contact Card */}
        <div className="relative z-30 -top-4 sm:-top-5 md:-top-6 bg-[#0E2B3E] shadow-xl border border-[#123C56] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#123C56]">

            {/* Call */}
            <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4">
              <Image
                src="/images/hero/p.png"
                alt="Call"
                width={22}
                height={22}
                className="shrink-0"
              />
              <div>
                <h3 className="text-[#F78B1F] text-sm sm:text-base font-semibold font-plus-jakarta">
                  Give Us A Call
                </h3>
                <p className="text-xs sm:text-sm mt-0.5 text-gray-300 font-manrope">
                  (+91) 9703153111
                </p>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4">
              <Image
                src="/images/hero/mail.png"
                alt="Mail"
                width={22}
                height={22}
                className="shrink-0"
              />
              <div>
                <h3 className="text-[#F78B1F] text-sm sm:text-base font-semibold font-plus-jakarta">
                  Send Us A Message
                </h3>
                <p className="text-xs sm:text-sm mt-0.5 text-gray-300 font-manrope break-all sm:break-normal">
                  info@mahaprasthanam.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div
              className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#123C56]/40 transition-colors"
            >
              <Image
                src="/images/hero/m.png"
                alt="Location"
                width={22}
                height={22}
                className="shrink-0"
              />
              <div>
                <h3 className="text-[#F78B1F] text-sm sm:text-base font-semibold font-plus-jakarta">
                  Office Location
                </h3>
                <p className="text-xs sm:text-sm mt-0.5 text-gray-300 font-manrope">
                  JL. Raya Puputan No 142
                </p>
                {/* <a
                  href="https://www.google.com/maps/place/Vaikunta+Mahaprasthanam+Crematorium+(Jubilee+Hills)/@17.4173297,78.3925125,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb96a4e7078ee7:0x54c90c3d9f5e5e20!8m2!3d17.4173246!4d78.3950874!16s%2Fg%2F11bv2lngrg?entry=tts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#F78B1F] text-[11px] font-medium underline underline-offset-2 mt-0.5 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Get Direction
                </a> */}
              </div>
            </div>

          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center -mt-4 sm:-mt-6 pb-0">

          {/* Logo & Social Links */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center z-20 pl-4 sm:pl-5 lg:pl-6">
            <Image
              src="/images/hero/vaikunta.png"
              alt="Logo"
              width={300}
              height={150}
              className="w-[240px] sm:w-[280px] lg:w-[320px] h-auto object-contain"
            />

            <div className="flex gap-3 mt-4 sm:mt-5">
              <div className="w-8 h-8 rounded-full bg-[#F78B1F] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                <Image src="/images/hero/f.png" alt="Facebook" width={32} height={32} />
              </div>

              <div className="w-8 h-8 rounded-full bg-[#F78B1F] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                <Image src="/images/hero/t.png" alt="Twitter" width={32} height={32} />
              </div>

              <div className="w-8 h-8 rounded-full bg-[#F78B1F] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                <Image src="/images/hero/i.png" alt="Instagram" width={32} height={32} />
              </div>

              <div className="w-8 h-8 rounded-full bg-[#F78B1F] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                <Image src="/images/hero/l.png" alt="LinkedIn" width={32} height={32} />
              </div>
            </div>
          </div>

          {/* Hyderabad Map Vector Graphic */}
          <div className="lg:col-span-8 flex items-center justify-center lg:justify-center overflow-hidden">
            <HyderabadMap />
          </div>

          {/* Copyright Section */}
          <div className="col-span-full border-t border-gray-800/80 pt-1 mt-0 flex flex-col md:flex-row justify-between items-center gap-1 text-center md:text-left">
            <p className="text-gray-400 text-xs font-manrope">
              Copyright © Vaikunta Mahaprasthanam Crematorium.
            </p>
            <p className="text-gray-400 text-xs font-manrope md:text-right">
              Copyright © 2021. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}