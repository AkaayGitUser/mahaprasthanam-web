"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-10 py-4 sm:py-6">
        
        {/* Left Logo */}
        <Link href="/Front" className="shrink-0">
          <Image
            src="/images/hero/vaikunta.png"
            alt="Logo"
            width={180}
            height={60}
            className="cursor-pointer w-[130px] sm:w-[160px] md:w-[180px] h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 lg:gap-8 text-sm lg:text-md text-white font-medium">
            <li className="hover:text-orange-400 transition-colors"><Link href="/">About Us</Link></li>
            <li className="hover:text-orange-400 transition-colors"><Link href="/">Facilities</Link></li>
            <li className="hover:text-orange-400 transition-colors"><Link href="/">Design Idea</Link></li>
            <li className="hover:text-orange-400 transition-colors"><Link href="/">Gallery</Link></li>
            <li className="hover:text-orange-400 transition-colors"><Link href="/">Contact</Link></li>
            <li className="hover:text-orange-400 transition-colors"><Link href="/">Media</Link></li>
          </ul>
        </nav>

        {/* Right Section: Logo + Mobile Hamburger Button */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Image
            src="/images/hero/ghmc.png"
            alt="GHMC"
            width={180}
            height={60}
            className="w-[110px] sm:w-[140px] md:w-[180px] h-auto object-contain"
          />

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              /* Close Icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Menu Icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-black/90 backdrop-blur-md px-6 py-6 border-b border-white/10">
          <ul className="flex flex-col gap-4 text-white text-base font-medium">
            <li><Link href="/" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Facilities</Link></li>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Design Idea</Link></li>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Media</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}