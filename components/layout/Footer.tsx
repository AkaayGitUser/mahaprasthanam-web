"use client";

import Image from "next/image";

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
    <footer className="bg-[#0E2B3E] text-white pt-10 sm:pt-12">
      {/* Contact Section Overlay Container */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Floating Top Contact Card */}
        <div className="relative -top-12 sm:-top-14 md:-top-16 bg-[#0E2B3E] shadow-xl border border-[#123C56] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#123C56]">
            
            {/* Call */}
            <div className="flex items-center gap-4 sm:gap-6 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
              <Image
                src="/images/hero/p.png"
                alt="Call"
                width={25}
                height={25}
                className="shrink-0"
              />
              <div>
                <h3 className="text-[#F78B1F] text-base font-semibold font-plus-jakarta">
                  Give Us A Call
                </h3>
                <p className="text-xs sm:text-sm mt-1 text-gray-300 font-manrope">
                  (+91) 9703153111
                </p>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-center gap-4 sm:gap-6 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
              <Image
                src="/images/hero/mail.png"
                alt="Mail"
                width={25}
                height={25}
                className="shrink-0"
              />
              <div>
                <h3 className="text-[#F78B1F] text-base font-semibold font-plus-jakarta">
                  Send Us A Message
                </h3>
                <p className="text-xs sm:text-sm mt-1 text-gray-300 font-manrope break-all sm:break-normal">
                  info@mahaprasthanam.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div
              onClick={() => handleLocationClick("jubilee")}
              className="flex items-center gap-4 sm:gap-6 px-6 sm:px-8 lg:px-10 py-6 sm:py-8 cursor-pointer hover:bg-[#123C56]/40 transition-colors"
            >
              <Image
                src="/images/hero/m.png"
                alt="Location"
                width={25}
                height={25}
                className="shrink-0"
              />
              <div>
                <h3 className="text-[#F78B1F] text-base font-semibold font-plus-jakarta">
                  Office Location
                </h3>
                <p className="text-xs sm:text-sm mt-1 text-gray-300 font-manrope">
                  JL. Raya Puputan No 142
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 pt-2 sm:pt-4 pb-10">
          
          {/* Logo & Social Links */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/hero/vaikunta.png"
              alt="Logo"
              width={300}
              height={150}
              className="w-[200px] sm:w-[250px] lg:w-[300px] h-auto object-contain"
            />

            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-10">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F78B1F] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                <Image src="/images/hero/f.png" alt="Facebook" width={24} height={24} />
              </div>

              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F78B1F] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                <Image src="/images/hero/t.png" alt="Twitter" width={24} height={24} />
              </div>

              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F78B1F] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                <Image src="/images/hero/i.png" alt="Instagram" width={24} height={24} />
              </div>

              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F78B1F] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                <Image src="/images/hero/l.png" alt="LinkedIn" width={24} height={24} />
              </div>
            </div>
          </div>

          {/* Location 1: Jubilee Hills */}
          <div>
            <h2 className="text-[#F78B1F] text-lg sm:text-xl font-semibold mb-3 font-plus-jakarta">
              Our Locations
            </h2>

            <div
              onClick={() => handleLocationClick("jubilee")}
              className={`cursor-pointer group p-2.5 rounded-lg transition-all duration-200 ${
                activeLocationId === "jubilee"
                  ? "bg-[#123C56] ring-1 ring-[#F78B1F]"
                  : "hover:bg-[#123C56]/50"
              }`}
            >
              <h3 className="text-[#F78B1F] text-sm font-medium mb-2 font-plus-jakarta group-hover:underline">
                Jubilee Hills
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-manrope leading-relaxed">
                Near Whisper Valley, Film Nagar, Jubilee Hills, Shaikpet, Hyderabad, Telangana 500104
              </p>
            </div>
          </div>

          {/* Location 2: Punjagutta */}
          <div className="lg:pt-10">
            <div
              onClick={() => handleLocationClick("punjagutta")}
              className={`cursor-pointer group p-2.5 rounded-lg transition-all duration-200 ${
                activeLocationId === "punjagutta"
                  ? "bg-[#123C56] ring-1 ring-[#F78B1F]"
                  : "hover:bg-[#123C56]/50"
              }`}
            >
              <h3 className="text-[#F78B1F] text-sm font-medium mb-2 font-plus-jakarta group-hover:underline">
                Punjagutta
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-manrope leading-relaxed">
                CCFW+W7M, Nagarjuna Circle Road, Dwarakapuri, Punjagutta, Hyderabad, Telangana 500082
              </p>
            </div>
          </div>

          {/* Location 3: Begumpet */}
          <div className="lg:pt-10">
            <div
              onClick={() => handleLocationClick("begumpet")}
              className={`cursor-pointer group p-2.5 rounded-lg transition-all duration-200 ${
                activeLocationId === "begumpet"
                  ? "bg-[#123C56] ring-1 ring-[#F78B1F]"
                  : "hover:bg-[#123C56]/50"
              }`}
            >
              <h3 className="text-[#F78B1F] text-sm font-medium mb-2 font-plus-jakarta group-hover:underline">
                Begumpet
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-manrope leading-relaxed">
                Begumpet, Hyderabad, Telangana 500018
              </p>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="col-span-full border-t border-gray-800/80 pt-6 mt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              Copyright © Vaikunta Mahaprasthanam Crematorium.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm md:text-right">
              Copyright © 2021. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}