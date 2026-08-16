"use client";

import {
  motion
} from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const imageSrc = "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/smal%20screen%20background";
  const placeholderUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmOGY5ZmEiLz48L3N2Zz4=";

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-cream-50"
      style={ {
        marginTop: "var(--header-height, 0px)",
        minHeight: "calc(100vh - var(--header-height, 0px))",
      }}
      >
      {/* 1. Refined Background Layer: Slower zoom for classical elegance */}
      <motion.div
        initial={ { scale: 1.05 }}
        animate={ { scale: 1 }}
        transition={ { duration: 2.5, ease: [0.22, 1, 0.36, 1] }} // Elegant, slow ease
        className="absolute inset-0 -z-10"
        >
        <Image
          src={imageSrc}
          alt="Classical architecture background"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL={placeholderUrl} // Keep UI stable while loading
          className="object-cover opacity-80 mix-blend-multiply" // Blends texture with background color
          />
      </motion.div>

      {/* 2. Content Layer */}
      <div className="relative z-10 flex items-center min-h-screen pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={ { opacity: 0, y: 15 }} // Fade in + gentle slide up
            animate={ { opacity: 1, y: 0 }}
            transition={ { duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl" // Wider container for the classical title
            >
            {/* 2a. Classical Label - Updated Color */}
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.45em] text-gold-600 font-semibold border-l border-gold-400 pl-5 py-1.5">
                Institutional Mandate
              </span>
            </div>

            {/* 2b. Redesigned Headline: New hierarchy (Serif is primary, Sans-serif is secondary) */}
            <h1 className="font-serif font-light text-6xl md:text-8xl text-stone-800 leading-[1.05] mb-10 tracking-tighter">
              Financial <span className="font-sans font-extralight tracking-tight text-stone-700 ital">Infrastructure</span>
              <br />
            <span className="block mt-1">for Modern Institutions</span>
          </div>

          {/* 2c. Corrected Subtext: Updated Name & CTA Alignment */}
          <p className="max-w-2xl text-stone-700 md:text-lg leading-relaxed mb-16 font-light text-justify hyphens-auto">
            The professional portfolio of{" "}
            <span className="font-semibold text-stone-900 border-b border-gold-300">
              Julio P. Senderes
            </span>
            . Architecting institutional-grade digital governance and fintech
            solutions for the global stage.
          </div>

          {/* 2d. The Redesigned CTA: Ghost-style button */}
          <div className="flex flex-col items-center gap-10 mt-20">
            <motion.button
              whileHover={ { y: -3, transition: { duration: 0.2 } }}
              whileTap={ { scale: 0.99 }}
              className="group relative px-10 py-4 border border-stone-800 text-stone-900 text-xs font-semibold tracking-[0.25em] uppercase overflow-hidden transition-colors"
              >
              {/* Text remains visible */}
              <span className="relative z-10">View the Portfolio</span>

              {/* Subtle Hover background fill animation */}
              <div className="absolute inset-x-0 top-0 h-full bg-stone-900 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top" />
              {/* Change text color on hover */}
              <span className="absolute inset-0 z-20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-xs tracking-[0.25em] uppercase">
                View the Portfolio
              </span>
            </motion.button>

            {/* 2e. Subtle Scroll Indicator (as requested by the visual hint) */}
            <motion.div
              animate={ { y: [0, 8, 0] }}
              transition={ { duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-10 bg-gold-400 opacity-60"
              />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
}