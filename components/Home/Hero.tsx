import Link from "next/link";
import Header from "../../components/layout/header";

export default function Hero() {
  return (
    <div>
      <Header />

      <section
        className=" relative min-h-[90vh] md:min-h-screen bg-cover bg-center bg-fixed  "
        style={{
          backgroundImage: "url('/images/hero/Section.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 "></div>

        {/* Content */}
        <div className="  relative z-10 flex flex-col items-center justify-center h-150 text-center px-6 bg-gradient-to-b from-black/20 to-transparent ">
          <h1 className=" font-plus-jakarta text-5xl md:text-5xl font-semibold text-white max-w-6xl">
            A Sanctuary of Peace. A Legacy of Dignity.
          </h1>

          <p className="text-white font-manrope text-md mt-8 max-w-4xl ">
            Thoughtfully envisioned by Phoenix Foundation, Vaikunta
            Mahaprasthanam offers serene spaces where families can gather,
            reflect, and honour the memories of their loved ones with dignity
            and peace.
          </p>

          <Link href="/Request">
            <button className=" font-manrope mt-15 bg-orange-400  text-white px-10 py-3 rounded-full text-xl font-semibold h-13 w-full">
              Book Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
