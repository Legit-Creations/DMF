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
      className="relative w-full overflow-hidden bg-cream-50"
      style={{
        marginTop: "var(--header-height, 0px)",
        minHeight: "calc(100vh - var(--header-height, 0px))",
      }}
    >
      {/* Background Layer */}
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

      {/* Main Container - Maps directly to your diagram */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full min-h-[calc(100vh-var(--header-height,0px))] flex flex-col justify-between pt-12 pb-12 md:pt-16 md:pb-16">
        <RevealContainer className="w-full h-full flex flex-col justify-between flex-1" staggerDelay={0.1}>
          
          {/* 1. TOP ZONE: Left-aligned label at padding boundary */}
          <div className="w-full">
            <RevealLine>
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.45em] text-gold-600 font-semibold border-l border-gold-400 pl-5 py-1.5">
                Institutional Mandate
              </span>
            </RevealLine>
          </div>

          {/* 2. MIDDLE ZONE: Vertically centered content block */}
          <div className="flex-1 flex flex-col justify-center my-auto py-8 max-w-4xl">
            <h1 className="font-serif font-light text-5xl md:text-8xl text-stone-800 leading-[1.05] mb-8 tracking-tighter">
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

            <RevealLine as="p" className="max-w-2xl text-stone-700 md:text-lg leading-relaxed font-light text-justify hyphens-auto">
              The professional portfolio of{" "}
              <strong className="font-semibold text-stone-900 border-b border-gold-300">
                Julio P. Senderes
              </strong>
              . Architecting institutional-grade digital governance and fintech
              solutions for the global stage.
            </RevealLine>
          </div>

          {/* 3. BOTTOM ZONE: Centered CTA pinned at the bottom padding */}
          <div className="w-full flex flex-col items-center">
            <RevealLine>
              <div className="flex flex-col items-center gap-6">
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
                  className="w-[1px] h-8 bg-gold-400 opacity-60 animate-pulse"
                />
              </div>
            </RevealLine>
          </div>

        </RevealContainer>
      </div>
    </section>
  );
}
