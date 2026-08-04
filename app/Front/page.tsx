"use client";

import Footer from "@/components/layout/Footer";
import Hero from "../../components/Home/Hero";
import Ourblogs from "@/components/Home/ourblogs";
import Testimonals from "@/components/Home/testimonals";
import Gallery from "@/components/Home/Gallery";
import Facilities from "@/components/Home/Facilities";
import Ourdesign from "@/components/Home/Ourdesign";
import Aboutus from "@/components/Home/Aboutus";
import Speakwithteam from "@/components/Home/speakwithteam";
import MapContainer from "@/components/Home/MapContainer";
import { useState } from "react";

export default function Home() {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);

  return (
    <>
      <main>
        <Hero />
        <Aboutus />
        <Ourdesign />
        <Facilities />
        <Speakwithteam />
        <Gallery />
        <Testimonals />
        <Ourblogs />
      </main>

      <MapContainer
        activeLocationId={activeLocationId}
        onSelectLocation={setActiveLocationId}
      />

      <Footer />
    </>
  );
}