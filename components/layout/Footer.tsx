"use client";

import Image from "next/image";

interface FooterProps {
    activeLocationId?: string | null;
    onSelectLocation?: (id: string | null) => void;
}

export default function Footer({ activeLocationId, onSelectLocation }: FooterProps) {
    return (
        <>
            {/* Top Image */}
            {/* <div className="w-full">
        <Image
          src="/images/hero/map.png"
          alt="Map"
          width={1920}
          height={350}
          className="w-full h-[250px] object-cover"
        />
      </div> */}

            <footer className="bg-[#0E2B3E] text-white">
                {/* Contact Section */}
                <div className="max-w-[1100px] mx-auto  px-6">
                    <div className=" relative -top-13 bg-[#0E2B3E] shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {/* Call */}
                            <div className="flex items-center gap-6 px-10 py-8 border-r border-[#123C56]">
                                <Image
                                    src="/images/hero/p.png"
                                    alt="Call"
                                    width={25}
                                    height={25}
                                />

                                <div>
                                    <h3 className="text-[#F78B1F] text-md font-semibold ">
                                        Give Us A Call
                                    </h3>
                                    <p className="text-md mt-2 text-gray-300">(91+) 9703153111</p>
                                </div>
                            </div>

                            {/* Mail */}
                            <div className="flex items-center gap-6 px-10 py-8 border-r border-[#123C56]">
                                <Image
                                    src="/images/hero/mail.png"
                                    alt="Mail"
                                    width={25}
                                    height={25}
                                />

                                <div>
                                    <h3 className="text-[#F78B1F] text-md font-semibold">
                                        Send Us A Message
                                    </h3>
                                    <p className="text-md mt-2 text-gray-300">
                                        info@mahaprasthanam.com
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-6 px-10 py-8">
                                <Image
                                    src="/images/hero/m.png"
                                    alt="Location"
                                    width={25}
                                    height={25}
                                />

                                <div>
                                    <h3 className="text-[#F78B1F] text-md font-regular">
                                        Office Location
                                    </h3>
                                    <p className="text-md  mt-2 text-gray-300">
                                        Jl.Raya Puputan No 142
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Content */}
                    <div className="grid lg:grid-cols-4 gap-15 pb-16">
                        {/* Logo */}
                        <div>
                            <Image
                                src="/images/hero/vaikunta.png"
                                alt="Logo"
                                width={350}
                                height={150}
                            />

                            <div className="flex gap-5 mt-12">
                                <div className="w-14 h-10 rounded-full bg-[#F78B1F] flex items-center justify-center">
                                    <Image
                                        src="/images/hero/f.png"
                                        alt="Facebook"
                                        width={35}
                                        height={35}
                                    />
                                </div>

                                <div className="w-14 h-10 rounded-full bg-[#F78B1F] flex items-center justify-center">
                                    <Image
                                        src="/images/hero/t.png"
                                        alt="Twitter"
                                        width={35}
                                        height={35}
                                    />
                                </div>

                                <div className="w-14 h-10 rounded-full bg-[#F78B1F] flex items-center justify-center">
                                    <Image
                                        src="/images/hero/i.png"
                                        alt="Instagram"
                                        width={35}
                                        height={35}
                                    />
                                </div>

                                <div className="w-14 h-10 rounded-full bg-[#F78B1F] flex items-center justify-center">
                                    <Image
                                        src="/images/hero/l.png"
                                        alt="LinkedIn"
                                        width={35}
                                        height={35}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Locations */}
                        <div>
                            <h2 className="text-[#F78B1F] text-xl font-semibold mb-5">
                                Our Locations
                            </h2>

                            <div
                                onClick={() => onSelectLocation?.("jubilee")}
                                className={`cursor-pointer group p-3 rounded-2xl border transition-all duration-300 ${activeLocationId === "jubilee"
                                        ? "border-[#F78B1F] bg-[#0B3049]/50 shadow-md"
                                        : "border-transparent hover:bg-[#0B3049]/30"
                                    }`}
                            >
                                <h3 className={`text-md font-semibold mb-2 flex items-center justify-between ${activeLocationId === "jubilee" ? "text-white font-bold" : "text-[#F78B1F] group-hover:text-white"
                                    }`}>
                                    <span>Jubilee Hills</span>
                                    {activeLocationId === "jubilee" && <span className="w-2 h-2 rounded-full bg-[#F78B1F] animate-ping" />}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Near Whisper Valley,
                                    Film Nagar,
                                    Jubilee Hills,
                                    Shaikpet,
                                    Hyderabad,
                                    Telangana 500104
                                </p>
                            </div>
                        </div>

                        <div className="lg:pt-10">
                            <div
                                onClick={() => onSelectLocation?.("punjagutta")}
                                className={`cursor-pointer group p-3 rounded-2xl border transition-all duration-300 ${activeLocationId === "punjagutta"
                                        ? "border-[#F78B1F] bg-[#0B3049]/50 shadow-md"
                                        : "border-transparent hover:bg-[#0B3049]/30"
                                    }`}
                            >
                                <h3 className={`text-md font-semibold mb-2 flex items-center justify-between ${activeLocationId === "punjagutta" ? "text-white font-bold" : "text-[#F78B1F] group-hover:text-white"
                                    }`}>
                                    <span>Punjagutta</span>
                                    {activeLocationId === "punjagutta" && <span className="w-2 h-2 rounded-full bg-[#F78B1F] animate-ping" />}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    CCFW+W7M,
                                    Nagarjuna Circle Road,
                                    Dwarakapuri,
                                    Punjagutta,
                                    Hyderabad,
                                    Telangana 500082
                                </p>
                            </div>
                        </div>

                        <div className="lg:pt-10">
                            <div
                                onClick={() => onSelectLocation?.("begumpet")}
                                className={`cursor-pointer group p-3 rounded-2xl border transition-all duration-300 ${activeLocationId === "begumpet"
                                        ? "border-[#F78B1F] bg-[#0B3049]/50 shadow-md"
                                        : "border-transparent hover:bg-[#0B3049]/30"
                                    }`}
                            >
                                <h3 className={`text-md font-semibold mb-2 flex items-center justify-between ${activeLocationId === "begumpet" ? "text-white font-bold" : "text-[#F78B1F] group-hover:text-white"
                                    }`}>
                                    <span>Begumpet</span>
                                    {activeLocationId === "begumpet" && <span className="w-2 h-2 rounded-full bg-[#F78B1F] animate-ping" />}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Begumpet,
                                    Hyderabad,
                                    Telangana 500018
                                </p>
                            </div>
                        </div>

                        {/* Copyright Section */}
                        <div className="col-span-full border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-2">
                            <p className="text-gray-400 text-xs">
                                Copyright © Vaikunta Mahaprasthanam Crematorium.
                            </p>
                            <p className="text-gray-400 text-xs text-right">
                                Copyright © 2021 . All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}