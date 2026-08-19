"use client";

import Image from "next/image";
import { RevealContainer, RevealLine } from "@/components/motion/Reveal";

export default function Hero() {
  const imageSrc = "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/bf.jpeg";

  const placeholderUrl =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmOGY5ZmEiLz48L3N2Zz4=";

  return (
    <section
      id="hero"
      aria-label="Julio Ponder Seneres — professional portfolio"
      className="relative w-full min-h-[calc(100svh-var(--header-height,0px))] overflow-hidden bg-[#F8F7F3] text-obsidian"
      style={{
        marginTop: "var(--header-height, 0px)",
      }}
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={placeholderUrl}
          className="
            object-cover
            object-center
            opacity-[0.38]
            scale-[1.02]
            transition-transform
            duration-[2000ms]
          "
        />

        {/* Soft tonal veil — keeps typography readable */}
        <div className="absolute inset-0 bg-[#F8F7F3]/25" />

        {/* Subtle bottom fade for transition into the next section */}
        <div
          className="
            absolute inset-x-0 bottom-0 h-32
            bg-gradient-to-t
            from-[#F8F7F3]
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div
        className="
          relative z-10
          mx-auto flex w-full max-w-7xl
          min-h-[calc(100svh-var(--header-height,0px))]
          flex-col justify-between
          px-6 py-10
          sm:px-8 sm:py-12
          md:px-12 md:py-16
          lg:px-16
        "
      >
        <RevealContainer
          className="flex flex-1 flex-col justify-between"
          staggerDelay={0.1}
        >
          {/* =====================================================
              TOP — IDENTITY
          ===================================================== */}
          <div className="pt-2">
            <RevealLine>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-gold sm:w-10" />

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.38em]
                    text-obsidian/65
                    sm:text-[10px]
                    sm:tracking-[0.45em]
                  "
                >
                  Professional Portfolio
                </span>
              </div>
            </RevealLine>
          </div>

          {/* =====================================================
              CENTER — HERO MESSAGE
          ===================================================== */}
          <div
            className="
              flex w-full flex-1
              items-center
              py-16
              sm:py-20
              md:py-24
            "
          >
            <div className="max-w-5xl">
              <h1
                className="
                  font-serif
                  text-[3.25rem]               
                  leading-[1.05]
                  tracking-[-0.055em]
                  text-obsidian
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[6.8rem]
                  xl:text-[7.5rem]
                "
              >
                <RevealLine>
                  Technology,
                </RevealLine>

                <RevealLine className="mt-1">
                  <span className="italic text-obsidian/65">
                    Operations
                  </span>
                  {" & "}
                </RevealLine>

                <RevealLine className="mt-1">
                  Digital Infrastructure
                </RevealLine>
              </h1>

              <RevealLine
                as="p"
                className="
                  mt-8
                  max-w-2xl
                  text-sm
                  font-light
                  leading-7
                  text-obsidian/70
                  sm:mt-10
                  sm:text-base
                  sm:leading-8
                  md:text-lg
                  md:leading-9
                "
              >
                The professional portfolio of{" "}
                <strong className="font-medium text-obsidian">
                  Julio P. Seneres
                </strong>
                . Working across technology, administration, digital
                infrastructure, and business systems to build more
                capable organizations.
              </RevealLine>
            </div>
          </div>

          {/* =====================================================
              BOTTOM — NAVIGATION / CONTEXT
          ===================================================== */}
          <div className="flex w-full items-end justify-between gap-8">
            <RevealLine>
              <a
                href="#profile"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  bg-obsidian
                  px-7
                  py-3.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-gold
                  hover:text-obsidian
                  sm:px-9
                  sm:py-4
                "
              >
                <span>View Portfolio</span>

                <span
                  className="
                    h-px
                    w-5
                    bg-white/50
                    transition-all
                    duration-300
                    group-hover:w-8
                    group-hover:bg-obsidian
                  "
                />
              </a>
            </RevealLine>

            {/* Quiet contextual marker */}
            <RevealLine>
              <div className="hidden text-right sm:block">
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.35em]
                    text-obsidian/40
                  "
                >
                  Technology · Administration
                </p>

                <p
                  className="
                    mt-2
                    text-[8px]
                    uppercase
                    tracking-[0.35em]
                    text-obsidian/30
                  "
                >
                  Business Systems
                </p>
              </div>
            </RevealLine>
          </div>
        </RevealContainer>
      </div>
    </section>
  );
}