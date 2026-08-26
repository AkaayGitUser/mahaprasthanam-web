"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Header from "../../components/layout/header";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";

// Glassmorphic Custom Dropdown Component
function CustomGlassSelect({
  value,
  onChange,
  placeholder,
  options,
  widthClass = "w-full md:w-40",
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  options: string[];
  widthClass?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${widthClass}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-10 border border-white/30 bg-black/20 backdrop-blur-md rounded flex items-center justify-between px-2.5 text-[10px] text-white hover:bg-gray-500/20 transition-colors cursor-pointer"
      >
        <span className={value ? "text-white" : "text-white/70"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Transparent Glassmorphic Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-11 left-0 w-full z-[100] backdrop-blur-xl bg-black/30 border border-white/20 rounded-md shadow-2xl py-1 max-h-40 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className="px-2.5 py-2 text-[10px] text-white hover:bg-white/20 hover:text-orange-400 transition-colors cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // States for search filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [ticketType, setTicketType] = useState("");

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    }
  };

  return (
    <div className="relative">
      <Header />

      {/* ================= AUDIO ================= */}
      <audio ref={audioRef} src="/audio/om.mp3" preload="auto" autoPlay loop />

      {/* ================= AUDIO BUTTON ================= */}
      <button
        type="button"
        onClick={toggleAudio}
        aria-label={isPlaying ? "Turn chanting off" : "Turn chanting on"}
        className="absolute top-43 left-3 sm:top-26.25 sm:left-15 z-50 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-105"
      >
        {isPlaying ? (
          <Volume2 size={20} className="text-orange-500" />
        ) : (
          <VolumeX size={20} className="text-gray-600" />
        )}
      </button>

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen md:min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/hero/Section.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen max-sm:pt-10 md:min-h-screen text-center px-6 bg-gradient-to-b from-black/20 to-transparent">
          <h1 className="font-plus-jakarta text-3xl md:text-5xl font-semibold text-white max-w-6xl">
            A Sanctuary of Peace. A Legacy of Dignity.
          </h1>

          <p className="text-white font-manrope text-md mt-8 max-w-4xl">
            Thoughtfully envisioned by Phoenix Foundation, Vaikunta
            Mahaprasthanam offers serene spaces where families can gather,
            reflect, and honour the memories of their loved ones with dignity
            and peace.
          </p>

          {/* Glassmorphism Search Bar Container */}
          <div className="w-fit max-w-full mt-8 mx-auto">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl p-2.5 sm:p-3 rounded-lg inline-block">
              <div className="flex flex-col md:flex-row gap-2">
                
                {/* Branch Dropdown */}
                <CustomGlassSelect
                  placeholder="Select Branch"
                  value={category}
                  onChange={setCategory}
                  options={["Jubilee Hills", "Shaikpet", "Panjagutta"]}
                  widthClass="w-full md:w-40"
                />

                {/* Cremation Type Dropdown */}
                <CustomGlassSelect
                  placeholder="Select Cremation Type"
                  value={language}
                  onChange={setLanguage}
                  options={["Electric Pyre", "Wood Pyre", "Gas Pyre"]}
                  widthClass="w-full md:w-40"
                />

                {/* Ritual Service Dropdown */}
                <CustomGlassSelect
                  placeholder="Select Ritual Service"
                  value={ticketType}
                  onChange={setTicketType}
                  options={[
                    "Funeral / Last Rites",
                    "Pindam",
                    "Pooja Services",
                    "Post-Cremation Services",
                    "Pedda Karma Pooja",
                    "No Ritual Service",
                  ]}
                  widthClass="w-full md:w-40"
                />

                {/* Date Field */}
                <div className="relative border border-white/30 bg-black/20 backdrop-blur-md rounded h-10 flex items-center px-2.5 text-white focus-within:border-white/70 transition-colors w-full md:w-36 hover:bg-gray-500/20 cursor-pointer">
                  <input
                    type="date"
                    className="bg-transparent outline-none w-full text-[10px] text-white cursor-pointer [color-scheme:dark]"
                  />
                </div>

                {/* Required Assistance Dropdown */}
                <CustomGlassSelect
                  placeholder="Required Assistance"
                  value={search}
                  onChange={setSearch}
                  options={[
                    "No Assistance",
                    "Hearse Van",
                    "Mortuary Van",
                    "Cold Room / Storage",
                    "Funeral Arrangements",
                    "Documentation & Formalities",
                  ]}
                  widthClass="w-full md:w-44"
                />

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}