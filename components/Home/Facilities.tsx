import React from "react";
import Image from "next/image";

interface Facility {
  name: string;
  iconPath: string;
}

export default function Facilities() {
  const facilities: Facility[] = [
    {
      name: "Spacious Pyres",
      iconPath: "/facilities/pyres.png",
    },
    {
      name: "Vehicle Transportation",
      iconPath: "/facilities/vehicle.png",
    },
    {
      name: "24/7 Security",
      iconPath: "/facilities/security.png",
    },
    {
      name: "Lockers",
      iconPath: "/facilities/lockers.png",
    },
    {
      name: "Cold Rooms",
      iconPath: "/facilities/cold-rooms.png",
    },
    {
      name: "WiFi + Live Streaming Set-up",
      iconPath: "/facilities/wifi.png",
    },
    {
      name: "Wash and Changing Rooms",
      iconPath: "/facilities/wash.png",
    },
    {
      name: "In-House Priests",
      iconPath: "/facilities/in-house .png",
    },
  ];

  return (
    <section className="bg-white pt-20 pb-4 overflow-hidden relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Badge */}
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F58220]" />
          <span className="text-lg font-semibold text-[#F58220] font-plus-jakarta tracking-wide">
            Facilities
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#1E293B] tracking-tight mb-8 font-plus-jakarta">
          State of the art facilities
        </h2>
      </div>

      {/* Scrolling Marquee Section */}
      <div className="relative w-full overflow-hidden select-none py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of facilities */}
          <div className="flex gap-6 shrink-0 items-center pr-6">
            {facilities.map((facility, index) => (
              <div
                key={`facility-1-${index}`}
                className="flex items-center h-[94px] py-[16px] px-[24px] gap-[24px] bg-white border border-[#ECECEC] rounded-full shadow-sm shrink-0"
              >
                <div className="w-[62px] h-[62px] shrink-0 relative">
                  <Image
                    src={facility.iconPath}
                    alt={facility.name}
                    fill
                    sizes="62px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[22px] font-semibold text-[#1E293B] tracking-wide">
                  {facility.name}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate set of facilities for infinite looping */}
          <div className="flex gap-6 shrink-0 items-center pr-6" aria-hidden="true">
            {facilities.map((facility, index) => (
              <div
                key={`facility-2-${index}`}
                className="flex items-center h-[94px] py-[16px] px-[24px] gap-[24px] bg-white border border-[#ECECEC] rounded-full shadow-sm shrink-0"
              >
                <div className="w-[62px] h-[62px] shrink-0 relative">
                  <Image
                    src={facility.iconPath}
                    alt={facility.name}
                    fill
                    sizes="62px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[22px] font-semibold text-[#1E293B] tracking-wide">
                  {facility.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


