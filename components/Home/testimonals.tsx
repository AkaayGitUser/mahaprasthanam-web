"use client";

import { useState } from "react";
import Image from "next/image";

type ChevronProps = {
  className?: string;
  strokeWidth?: number;
};

function ChevronLeft({ className, strokeWidth = 2.5 }: ChevronProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m15 18-6-6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

function ChevronRight({ className, strokeWidth = 2.5 }: ChevronProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m9 18 6-6-6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default function Testimonals() {
  const testimonials = [
    {
      image: "/design-images/family-member.jpg",
      title: "Families Who Found Comfort",
      paragraph:"The peaceful surroundings and compassionate support gave our family the strength to honour our loved one with dignity.",
      author: "Family member",
      link: "#",
    },
    {
      image: "/design-images/visitor.jpg",
      paragraph:
        "A beautifully maintained space that truly reflects compassion, serenity, and dignity.",
      author: "Visitor",
      link: "#",
    },
    {
      image: "/design-images/hyderabad.jpg",
      paragraph:
       "Every detail was handled with care and respect. The environment brought a sense of calm during an incredibly difficult time.",
      author: "Hyderabad",
      link: "#",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  /*
    Returns:
    0  = active card
    -1 = previous card
    1  = next card
  */
  const getPosition = (index: number) => {
    let difference = index - current;

    if (difference > testimonials.length / 2) {
      difference -= testimonials.length;
    }

    if (difference < -testimonials.length / 2) {
      difference += testimonials.length;
    }

    return difference;
  };

  const active = testimonials[current];

  return (
    <section
      className="
        relative
        w-full
        min-h-[620px]
        sm:min-h-[680px]
        md:min-h-[720px]
        lg:min-h-[760px]
        overflow-hidden
        bg-black
      "
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <div className="absolute inset-0">
        <Image
          key={active.image}
          src={active.image}
          alt=""
          fill
          priority
          quality={90}
          className="
            object-cover
            scale-105
            opacity-40
            transition-all
            duration-700
            ease-in-out
          "
        />

        <div className="absolute inset-0 bg-black/20" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/20
            via-black/30
            to-black/80
          "
        />
      </div>

      {/* =========================================================
          CAROUSEL AREA
      ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[620px]
          sm:min-h-[680px]
          md:min-h-[720px]
          lg:min-h-[760px]
          w-full
          max-w-[1500px]
          items-center
          justify-center
          px-4
          sm:px-8
          md:px-12
          lg:px-16
        "
      >
        <h2 className="absolute left-1/2 top-4 -translate-x-1/2 text-center text-3xl font-semibold tracking-wide text-[#F58220] font-plus-jakarta sm:top-6">
          Testimonials
        </h2>

        {/* ======================================================
            CARDS
        ====================================================== */}
        <div
          className="
            relative
            h-[520px]
            sm:h-[570px]
            md:h-[610px]
            lg:h-[640px]
            w-full
          "
        >
          {testimonials.map((testimonial, index) => {
            const position = getPosition(index);
            const isActive = position === 0;

            /*
              DESKTOP COVERFLOW POSITIONS
            */

            let desktopTransform = "";
            let mobileTransform = "";
            let opacity = "";
            let zIndex = "";

            if (position === 0) {
              desktopTransform =
                "lg:-translate-x-1/2 lg:-translate-y-1/2 lg:scale-100";

              mobileTransform = "-translate-x-1/2 -translate-y-1/2 scale-100";

              opacity = "opacity-100";
              zIndex = "z-30";
            } else if (position === -1) {
              desktopTransform =
                "lg:-translate-x-[calc(50%+108%)] lg:-translate-y-1/2 lg:scale-[0.72]";

              mobileTransform =
                "-translate-x-[calc(50%+108%)] -translate-y-1/2 scale-[0.72]";

              opacity = "opacity-70";
              zIndex = "z-10";
            } else if (position === 1) {
              desktopTransform =
                "lg:translate-x-[calc(108%-50%)] lg:-translate-y-1/2 lg:scale-[0.72]";

              mobileTransform =
                "translate-x-[calc(108%-50%)] -translate-y-1/2 scale-[0.72]";

              opacity = "opacity-70";
              zIndex = "z-10";
            } else {
              opacity = "opacity-0";
              zIndex = "z-0";
            }

            return (
              <article
                key={testimonial.author}
                onClick={() => {
                  if (!isActive) {
                    setCurrent(index);
                  }
                }}
                className={`
                  absolute
                  left-1/2
                  top-[44%]

                  w-[74%]
                  sm:w-[64%]
                  md:w-[56%]
                  lg:w-[48%]
                  xl:w-[44%]

                  max-w-[520px]

                  ${mobileTransform}
                  ${desktopTransform}
                  ${opacity}
                  ${zIndex}

                  transition-all
                  duration-[700ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${!isActive ? "cursor-pointer" : ""}
                `}
              >
                {/* ============================================
                    CARD
                ============================================ */}
                <div
                  className={`
                    bg-[#292929]
                    p-2
                    sm:p-2.5
                    md:p-3
                    lg:p-4
                    transition-all
                    duration-700
                  `}
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      w-full
                      h-[145px]
                      sm:h-[180px]
                      md:h-[215px]
                      lg:h-[250px]
                      border-4
                      border-black
                      overflow-hidden
                      bg-black
                    "
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.title ?? testimonial.paragraph ?? "Testimonial image"}
                      fill
                      quality={100}
                      sizes="
                        (max-width: 640px) 70vw,
                        (max-width: 1024px) 70vw,
                        650px
                      "
                      className={`
                        object-cover
                        transition-all
                        duration-700

                        ${
                          isActive
                            ? "scale-100 brightness-100"
                            : "scale-105 brightness-75"
                        }
                      `}
                    />

                    {/* side slide dark overlay */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/20" />
                    )}
                  </div>

                  {/* ============================================
                      CONTENT
                  ============================================ */}
                  <div
                    className={`
                      bg-[#292929]
                      flex
                      min-h-[180px]
                      sm:min-h-[205px]
                      md:min-h-[225px]
                      flex-col
                      px-2.5
                      pb-2.5
                      sm:px-3
                      sm:pb-3
                      md:px-4
                      md:pb-4
                      pt-8
                      sm:pt-10
                      ${
                        isActive
                          ? "shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                          : "shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                      }
                    `}
                  >
                    <p
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        text-center
                        text-base
                        sm:text-lg
                        md:text-xl

                        leading-relaxed
                        font-normal
                        font-manrope
                        text-[#eeeeee]

                        transition-all
                        duration-500
                      "
                    >
                      {testimonial.paragraph}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}

          {/* ======================================================
              LEFT ARROW
          ====================================================== */}
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous slide"
            className="
              absolute
              left-[12%]
              sm:left-[17%]
              md:left-[21%]
              lg:left-[25%]
              xl:left-[27%]

              top-1/2
              -translate-x-1/2
              -translate-y-1/2

              z-50

              flex
              h-[48px]
              w-[48px]

              sm:h-[54px]
              sm:w-[54px]

              md:h-[60px]
              md:w-[60px]

              items-center
              justify-center

              rounded-full

              border
              border-white/40

              bg-[#252525]/80

              text-white

              backdrop-blur-md

              transition-all
              duration-300

              hover:text-[#F58220]

              active:scale-90
              active:text-[#D96D12]
            "
          >
            <ChevronLeft
              strokeWidth={2}
              className="h-7 w-7 md:h-8 md:w-8"
            />
          </button>

          {/* ======================================================
              RIGHT ARROW
          ====================================================== */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="
              absolute
              right-[12%]
              sm:right-[17%]
              md:right-[21%]
              lg:right-[25%]
              xl:right-[27%]

              top-1/2
              translate-x-1/2
              -translate-y-1/2

              z-50

              flex
              h-[48px]
              w-[48px]

              sm:h-[54px]
              sm:w-[54px]

              md:h-[60px]
              md:w-[60px]

              items-center
              justify-center

              rounded-full

              border
              border-white/40

              bg-[#252525]/80

              text-white

              backdrop-blur-md

              transition-all
              duration-300

              hover:text-[#F58220]

              active:scale-90
              active:text-[#D96D12]
            "
          >
            <ChevronRight
              strokeWidth={2}
              className="h-7 w-7 md:h-8 md:w-8"
            />
          </button>
        </div>

        {/* =========================================================
            DOTS
        ========================================================= */}
        <div
          className="
            absolute
            bottom-5
            sm:bottom-7

            left-1/2
            -translate-x-1/2

            flex
            items-center
            gap-2
          "
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-[6px]
                rounded-full
                transition-all
                duration-500

                ${
                  current === index
                    ? "w-[28px] bg-white"
                    : "w-[6px] bg-white/40 hover:bg-white/70"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}