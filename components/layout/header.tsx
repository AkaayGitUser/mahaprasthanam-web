import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-10 py-6">

        {/* Logo Button */}
        <Link href="/Front">
          <Image
            src="/images/hero/vaikunta.png"
            alt="Logo"
            width={180}
            height={60}
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation */}
        <nav className="mt-0">
          <ul className="flex gap-8  text-md ">
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">Facilities</Link></li>
            <li><Link href="/">Design Idea</Link></li>
            <li><Link href="/">Gallery</Link></li>
            <li><Link href="/">Contact</Link></li>
            <li><Link href="/">Media</Link></li>
          </ul>
        </nav>

        {/* Right Logo */}
        <Image
          src="/images/hero/ghmc.png"
          alt="GHMC"
          width={180}
          height={60}
        />
      </div>
    </header>
  );
}