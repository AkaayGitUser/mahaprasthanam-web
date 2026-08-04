import Image from "next/image";

interface Pillar {
  id: string;
  title: string;
  imageSrc: string;
  iconSrc: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    id: "embrace",
    title: "Embrace",
    imageSrc: "/design-images/embrace.jpg",
    iconSrc: "/design-images/icon1.png",
    description:
      "Support to the living as they come \nto terms with loss and grief.",
  },
  {
    id: "honour",
    title: "Honour",
    imageSrc: "/design-images/honour.jpg",
    iconSrc: "/design-images/icon2.png",
    description:
      "Respectfully bowing to the \ndeparted while celebrating their life.",
  },
  {
    id: "farewell",
    title: "Farewell",
    imageSrc: "/design-images/farewell.jpg",
    iconSrc: "/design-images/icon3.png",
    description:
      "Praying for a smooth passage, while bidding the furthest goodbyes.",
  },
];

export default function Ourdesign() {
  return (
   <section
  className="w-full min-h-screen py-20 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/design-images/design-bg.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "950px 900px",
    backgroundPosition: "center 35px",
  }}
>
      <div className="max-w-[1380px] mx-auto px-8">

        <div className="text-center mb-14">
          <p className="text-[#F58220] font-bold text-lg">
            • Our Design
          </p>

          <h2 className="text-5xl font-bold text-gray-800 mt-2">
            The Three Pillars
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {pillars.map((pillar) => (
 <div
  key={pillar.id}
  className="group relative h-[490px] overflow-hidden rounded-[15px] cursor-pointer transition-all duration-500 hover:scale-[0.96]"
>

    {/* Background Image */}
    <div className="absolute inset-0 overflow-hidden">

  <Image
    src={pillar.imageSrc}
    alt={pillar.title}
    fill
    className="
      object-cover
      transition-transform
      duration-700
      ease-in-out
      group-hover:scale-125
    "
  />

</div>

    {/* Bottom Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

    {/* Default Title */}
    <div className="absolute bottom-6 left-7 z-20 transition-all duration-500 group-hover:opacity-0">
      <h3 className="text-white text-[24px] font-semibold">
        {pillar.title}
      </h3>
    </div>

    {/* Hover Layer */}
    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">

      {/* Dark Box */}
      <div
  className="absolute
  top-12
  left-6
  right-6
  bottom-6
  bg-[#0B1D2A]/60
  rounded-sm"
>

        {/* Icon */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">

          <div className=" w-20 h-20 rounded-full bg-[#F58220] flex items-center justify-center shadow-xl">

            <Image
              src={pillar.iconSrc}
              alt={pillar.title}
              width={100}
              height={42}
            />

          </div>

        </div>

        {/* Text */}
        <div
  style={{
    position: "absolute",
    top: "200px",
    left: "24px",
    right: "24px",
  }}
>

          <h3 className="text-white text-[26px] font-plus jakarta sans mb-3 ">
            {pillar.title}
          </h3>
<p className="text-white text-[18px] leading-9 font-manrope whitespace-pre-line">
  {pillar.description}
</p>

        </div>

      </div>

    </div>
  </div>
))}

        </div>

      </div>
    </section>
  );
}