"use client";

import React, { useState } from "react";
import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Aboutus from "@/components/Home/Aboutus";
import Ourdesign from "@/components/Home/Ourdesign";
import Facilities from "@/components/Home/Facilities";
import Speakwithteam from "@/components/Home/speakwithteam";
import Gallery from "@/components/Home/Gallery";
import Testimonals from "@/components/Home/testimonals";
import Ourblogs from "@/components/Home/ourblogs";
import Footer from "@/components/layout/Footer";
import MapContainer from "@/components/Home/MapContainer";

export default function Home() {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);

  const handleSelectLocation = (id: string | null) => {
    setActiveLocationId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Aboutus />
        <Ourdesign/>
        <Facilities />
        <Speakwithteam />
        <Gallery />
        <Testimonals/>
        <Ourblogs/>
        <MapContainer
          activeLocationId={activeLocationId}
          onSelectLocation={handleSelectLocation}
        />
      </main>
      <Footer
        activeLocationId={activeLocationId}
        onSelectLocation={handleSelectLocation}
      />
    </div>
  );
}
