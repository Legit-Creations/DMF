"use client";

import Image from "next/image";
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

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full min-h-[calc(100vh-var(--header-height,0px))] flex flex-col justify-between pt-12 pb-12 md:pt-16 md:pb-16">
        <RevealContainer className="w-full h-full flex flex-col justify-between flex-1" staggerDelay={0.1}>

          {/* 1. TOP ZONE: Glassmorphic Badge */}
          <div className="w-full">
            <RevealLine>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-stone-900 font-bold">
                  Institutional Mandate
                </span>
              </div>
            </RevealLine>
          </div>

          {/* 2. MIDDLE ZONE: Headline & Copy */}
          <div className="flex-1 flex flex-col justify-center my-auto py-8 max-w-4xl">
            <h1 className="font-serif font-light text-5xl md:text-8xl text-stone-900 leading-[1.05] mb-8 tracking-tighter">
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

            <RevealLine as="p" className="max-w-2xl text-stone-800 md:text-lg leading-relaxed font-light text-left hyphens-auto">
              The professional portfolio of{" "}
              <strong className="font-semibold text-stone-950 border-b border-stone-950">
                Julio P. Seneres
              </strong>
              . Architecting institutional-grade digital governance and fintech
              solutions for the global stage.
            </RevealLine>
          </div>

          {/* 3. BOTTOM ZONE: Visual Badge/Button Element */}
          <div className="w-full pt-6">
            <RevealLine>
              <div className="inline-block px-8 py-4 bg-stone-900 border border-gold-500/50 text-white text-[11px] font-bold tracking-[0.25em] uppercase rounded-sm shadow-md select-none">
                View the Portfolio
              </div>
            </RevealLine>
          </div>

        </RevealContainer>
      </div>
    </section>
  );
}
