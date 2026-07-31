import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Aboutus from "@/components/Home/Aboutus";
import Ourdesign from "@/components/Home/Ourdesign";
import Facilities from "@/components/Home/Facilities"
import Gallery from "@/components/Home/Gallery"
import Testimonals from "@/components/Home/testimonals"
import Ourblogs from "@/components/Home/ourblogs"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Aboutus />
        <Ourdesign/>
        <Facilities />
        <Gallery />
        <Testimonals/>
        <Ourblogs/>
      </main>
      <Footer />
    </div>
  );
}
