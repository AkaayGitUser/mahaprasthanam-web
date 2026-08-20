"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Header from "../../components/layout/header";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
        <audio
          ref={audioRef}
          src="/audio/om.mp3"
          preload="auto"
          loop
        />

      {/* ================= AUDIO BUTTON ================= */}
      <button
        type="button"
        onClick={toggleAudio}
        aria-label={isPlaying ? "Turn chanting off" : "Turn chanting on"}
        className="
          absolute
          top-[105px]
          left-[60px]
          z-50
          flex
          items-center
          gap-2
          rounded-full
          bg-white/90
          px-4
          py-2
          shadow-lg
          backdrop-blur-sm
          transition-all
          duration-300
          hover:bg-white
          hover:scale-105
        "
      >
        {isPlaying ? (
          <Volume2 size={20} className="text-orange-500" />
        ) : (
          <VolumeX size={20} className="text-gray-600" />
        )}
      </button>

      {/* ================= HERO ================= */}
      <section
        className="
          relative
          min-h-[90vh]
          md:min-h-screen
          bg-cover
          bg-center
          bg-fixed
        "
        style={{
          backgroundImage: "url('/images/hero/Section.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            justify-center
            h-150
            text-center
            px-6
            bg-gradient-to-b
            from-black/20
            to-transparent
          "
        >
          <h1
            className="
              font-plus-jakarta
              text-5xl
              md:text-5xl
              font-semibold
              text-white
              max-w-6xl
            "
          >
            A Sanctuary of Peace. A Legacy of Dignity.
          </h1>

          <p
            className="
              text-white
              font-manrope
              text-md
              mt-8
              max-w-4xl
            "
          >
            Thoughtfully envisioned by Phoenix Foundation, Vaikunta
            Mahaprasthanam offers serene spaces where families can gather,
            reflect, and honour the memories of their loved ones with
            dignity and peace.
          </p>

          <Link href="/Request">
            <button
              className="
                font-manrope
                mt-15
                bg-orange-400
                text-white
                px-10
                py-3
                rounded-full
                text-xl
                font-semibold
                h-13
                w-full
              "
            >
              Book Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}