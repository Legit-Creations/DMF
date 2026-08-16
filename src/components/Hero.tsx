"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealContainer, RevealLine } from "@/components/motion/Reveal";

export default function Hero() {
  const imageSrc =
    "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/smal%20screen%20background";
  const placeholderUrl =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmOGY5ZmEiLz48L3N2Zz4=";

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative w-full overflow-hidden bg-cream-50 py-20 md:py-32"
      style={{
        marginTop: "var(--header-height, 0px)",
        minHeight: "calc(100vh - var(--header-height, 0px))",
      }}
    >
      {/* 1. Background Layer */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL={placeholderUrl}
          className="object-cover opacity-80 mix-blend-multiply"
        />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <RevealContainer className="max-w-4xl" staggerDelay={0.1}>
            {/* Label */}
            <div className="mb-10">
              <RevealLine>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.45em] text-gold-600 font-semibold border-l border-gold-400 pl-5 py-1.5">
                  Institutional Mandate
                </span>
              </RevealLine>
            </div>

            {/* Semantic H1 Headline */}
            <h1 className="font-serif font-light text-6xl md:text-8xl text-stone-800 leading-[1.05] mb-10 tracking-tighter">
              <RevealLine>
                Financial{" "}
                <span className="font-sans font-extralight tracking-tight text-stone-700 italic">
                  Infrastructure
                </span>
              </RevealLine>
              <RevealLine className="mt-1">
                for Modern Institutions
              </RevealLine>
            </h1>

            {/* Subtext */}
            <div className="mb-16">
              <RevealLine as="p" className="max-w-2xl text-stone-700 md:text-lg leading-relaxed font-light text-justify hyphens-auto">
                The professional portfolio of{" "}
                <strong className="font-semibold text-stone-900 border-b border-gold-300">
                  Julio P. Senderes
                </strong>
                . Architecting institutional-grade digital governance and fintech
                solutions for the global stage.
              </RevealLine>
            </div>

            {/* CTA & Scroll Indicator */}
            <div className="mt-20">
              <RevealLine>
                <div className="flex flex-col items-center gap-10">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    type="button"
                    aria-label="View the Portfolio"
                    className="group relative px-10 py-4 border border-stone-800 text-stone-900 text-xs font-semibold tracking-[0.25em] uppercase overflow-hidden transition-colors"
                  >
                    <span className="relative z-10">View the Portfolio</span>
                    <div className="absolute inset-x-0 top-0 h-full bg-stone-900 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top" />
                    <span className="absolute inset-0 z-20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-xs tracking-[0.25em] uppercase">
                      View the Portfolio
                    </span>
                  </motion.button>

                  <div
                    aria-hidden="true"
                    className="w-[1px] h-10 bg-gold-400 opacity-60 animate-pulse"
                  />
                </div>
              </RevealLine>
            </div>
          </RevealContainer>
        </div>
      </div>
    </section>
  );
}
