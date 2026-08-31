"use client";

import React, { useState } from "react";

import Link from "next/link";
import Hero from "@/components/Home/Hero";
import Aboutus from "@/components/Home/Aboutus";
import Ourdesign from "@/components/Home/Ourdesign";
import Facilities from "@/components/Home/Facilities";
import Speakwithteam from "@/components/Home/speakwithteam";
import Gallery from "@/components/Home/Gallery";
import Testimonals from "@/components/Home/testimonals";
import Ourblogs from "@/components/Home/ourblogs";
import Faq from "@/components/layout/Faq";
import Footer from "@/components/layout/Footer";


export default function Home() {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(
    null
  );

  const handleSelectLocation = (id: string | null) => {
    setActiveLocationId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">

        {/* ================= HERO ================= */}
        <Hero />

        {/* =====================================================
            EVERYTHING AFTER HERO
        ===================================================== */}
        <div className="relative">

          {/* =================================================
              CONTENT FROM ABOUT US TO FOOTER
          ================================================= */}
          <div className="relative">

            {/* =================================================
                ENQUIRY US
            ================================================= */}
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                z-[999]
                pointer-events-none
              "
            >
              <div
                className="
                  sticky
                  top-[50%]
                  pointer-events-auto
                "
              >
                <Link
                  href="/Request"
                  className="
                    inline-block
                    bg-orange-400
                    text-white
                    px-5
                    py-1.5
                    rounded-r-md
                    font-titillium
                    font-semibold
                    text-[15px]
                    tracking-[2px]
                    writing-mode-vertical
                   
                    transition-colors
                    duration-300
                    cursor-pointer
                  "
                >
                  ENQUIRY US
                </Link>
              </div>
            </div>

            {/* ================= ABOUT US ================= */}
            <Aboutus />

            {/* ================= OUR DESIGN ================= */}
            <Ourdesign />

            {/* ================= FACILITIES ================= */}
            <Facilities />

            {/* ================= SPEAK WITH TEAM ================= */}
            <Speakwithteam />

            {/* ================= GALLERY ================= */}
            <Gallery />

            {/* ================= TESTIMONIALS ================= */}
            <Testimonals />

            {/* ================= OUR BLOGS ================= */}
            <Ourblogs />

            {/* ================= FOOTER ================= */}
            <Footer
              activeLocationId={activeLocationId}
              onSelectLocation={handleSelectLocation}
            />

          </div>
        </div>

      </main>
    </div>
  );
}