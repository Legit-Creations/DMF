"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Cpu,
  ShieldCheck,
  Palette,
  Globe,
  ArrowUpRight,
  Building2,
} from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";

// Dynamically import motion components
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: true }
);

const MotionH2 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h2),
  { ssr: true }
);

const specializations = [
  {
    title: "Corporate Leadership",
    desc: "In his role as Chief Administrative Officer to the Board at CONTRA ATLANTIS GROUP, Julio Ponder Seneres contributes to corporate governance, operational coordination, and strategic development across the group's holding-company structure.",
    icon: <ShieldCheck className="w-5 h-5" />,
    role: "Chief Administrative Officer",
    metric: "Corporate Leadership",
    link: "/dossier/strategic-growth",
    cta: "View Profile",
    tag: "CAG",
  },
  {
    title: "Digital Transformation",
    desc: "As Chief Technology Officer of CONTRA BOBBLE BANK hn, Julio Ponder Seneres works across digital banking infrastructure, technology strategy, and the development of modern financial technology ecosystems.",
    icon: <Cpu className="w-5 h-5" />,
    role: "Chief Technology Officer",
    metric: "Technology",
    link: "/dossier/digital-integration",
    cta: "View Profile",
    tag: "Contra Bobble Bank",
  },
  {
    title: "Technology & Design",
    desc: "LEGIT CREATIONS LTD is a multidisciplinary enterprise providing integrated information and digital solutions across Technology, Commerce, and Finance.",
    icon: <Palette className="w-5 h-5" />,
    role: "Founder & Principal Architect",
    metric: "Technology",
    link: "https://www.legitcreations.com.ng",
    cta: "Explore Legit Creations",
    texture:
      "https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&q=80",
    tag: "LEGIT CREATIONS",
  },
  {
    title: "Investment & Growth",
    desc: "Strategic participation in investment and growth opportunities, with an emphasis on long-term value creation, responsible capital allocation, and sustainable development.",
    icon: <Globe className="w-5 h-5" />,
    role: "Asset Advisory",
    metric: "Finance",
    cta: "Learn More",
    isHighlight: true,
    tag: "Investment",
  },
];

const EcosystemContent = () => {
  const [ showInvestmentNotice, setShowInvestmentNotice ] = useState(false);

  return (
    <>
      <section
        id="whatIDo"
        className="overflow-hidden bg-obsidian py-24 text-bone selection:bg-gold/30 md:py-40"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          {/* HEADER */}
          <div className="mb-16 flex flex-col gap-10 md:mb-28 lg:flex-row lg:items-end lg:justify-between">

            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="mb-8 flex items-center gap-3 md:mb-10">
                <Building2 className="h-4 w-4 shrink-0 text-gold" />

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold-light">
                  Leadership & Professional Focus
                </span>
              </div>

              <MotionH2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8 text-4xl font-serif italic leading-[1.05] tracking-tighter text-white md:text-6xl"
              >
                Professional{" "}
                <span className="not-italic font-bold uppercase text-gold">
                  Focus
                </span>
              </MotionH2>

              <p className="max-w-xl text-left text-base font-light leading-relaxed text-white/70 md:text-lg">
                Julio Ponder Seneres works across leadership, technology,
                commerce, and finance, with a focus on building and supporting
                organizations, digital systems, and long-term growth
                initiatives.
              </p>
            </MotionDiv>

            {/* IDENTITY */}
            <div className="border-l border-gold/20 pl-6 lg:border-l-0 lg:border-r lg:pl-0 lg:pr-6">
              <span className="block text-sm font-bold uppercase tracking-[0.25em] text-white">
                Julio Ponder Seneres
              </span>

              <span className="mt-2 block text-[10px] uppercase tracking-[0.25em] text-gold-light">
                CAO · CTO · Founder
              </span>
            </div>
          </div>

          {/* PROFESSIONAL AREAS */}
          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2">

            {specializations.map((item, index) => (
              <MotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                }}
                className="group relative flex min-h-[460px] flex-col justify-between overflow-hidden bg-obsidian p-8 transition-colors duration-500 hover:bg-white/[0.025] md:min-h-[540px] md:p-14"
              >

                {/* TEXTURE */}
                {item.texture && (
                  <div className="pointer-events-none absolute inset-0 z-0 opacity-0 grayscale transition-opacity duration-1000 group-hover:opacity-[0.06]">
                    <NextImage
                      src={item.texture}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}

                <div className="relative z-10">

                  {/* ICON + CATEGORY */}
                  <div className="mb-12 flex items-start justify-between md:mb-16">

                    <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.03] text-gold transition-all duration-500 group-hover:border-gold/60 group-hover:bg-gold group-hover:text-obsidian md:h-14 md:w-14">
                      {item.icon}
                    </div>

                    <div className="text-right">
                      <span className="block text-[9px] font-bold uppercase tracking-[0.35em] text-gold">
                        {item.metric}
                      </span>

                      <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-white/40">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-6 text-2xl font-display uppercase leading-none tracking-tighter text-white md:text-4xl">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="max-w-sm text-sm font-light leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white/80 md:text-base">
                    {item.desc}
                  </p>
                </div>

                {/* CARD FOOTER */}
                <div className="relative z-10 mt-12">

                  <div className="mb-8">
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
                      Role
                    </span>

                    <span className="border-l-2 border-gold/40 pl-4 text-base font-medium tracking-wide text-white md:text-lg">
                      {item.role}
                    </span>
                  </div>

                  {/* NORMAL LINKS */}
                  {!item.isHighlight ? (
                    <Link
                      href={item.link!} /* FIX APPLIED HERE: The exclamation mark satisfies TypeScript */
                      className="group/btn inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.35em] text-white transition-all duration-500 hover:text-gold md:text-[11px]"
                    >
                      {item.cta}

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                    </Link>
                  ) : (
                    /* INVESTMENT & GROWTH POPUP BUTTON */
                    <button
                      type="button"
                      onClick={() => setShowInvestmentNotice(true)}
                      className="group/btn inline-flex items-center gap-4 bg-gold px-7 py-4 text-[10px] font-black uppercase tracking-[0.35em] text-obsidian shadow-2xl shadow-gold/10 transition-all duration-500 hover:bg-gold-light hover:shadow-gold/30 md:text-[11px]"
                    >
                      {item.cta}

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                    </button>
                  )}
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* QUIET FOOTER */}
          <div className="mt-16 flex flex-col gap-6 border-t border-white/5 pt-8 md:mt-20 md:flex-row md:items-center md:justify-between">

            <p className="max-w-lg text-[11px] leading-relaxed text-white/40">
              Professional interests span technology, commerce, finance, and
              organizational development.
            </p>

            <div className="text-left md:text-right">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                Lagos · Nigeria
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-gold/80">
                JPS · 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT & GROWTH POPUP */}
      {showInvestmentNotice && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          onClick={() => setShowInvestmentNotice(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-md border border-white/10 bg-obsidian p-8 shadow-2xl md:p-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="investment-growth-title"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setShowInvestmentNotice(false)}
              className="absolute right-5 top-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-gold"
              aria-label="Close investment and growth notice"
            >
              Close
            </button>

            {/* LABEL */}
            <span className="mb-4 block text-[9px] font-bold uppercase tracking-[0.35em] text-gold">
              Investment & Growth
            </span>

            {/* TITLE */}
            <h2
              id="investment-growth-title"
              className="mb-5 pr-12 text-2xl font-serif italic tracking-tight text-white md:text-3xl"
            >
              This area is currently being developed.
            </h2>

            {/* MESSAGE */}
            <p className="text-sm font-light leading-relaxed text-white/60 md:text-base">
              Information relating to investment interests, strategic growth
              initiatives, and selected opportunities will be made available
              here in a future update.
            </p>

            {/* DIVIDER */}
            <div className="my-8 h-px w-full bg-white/10" />

            {/* SMALL NOTE */}
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Further information will be published as this area develops.
            </p>

            {/* ACTION */}
            <button
              type="button"
              onClick={() => setShowInvestmentNotice(false)}
              className="mt-8 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white transition-colors hover:text-gold"
            >
              Continue
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(EcosystemContent), {
  ssr: false,
  loading: () => (
    <div className="h-[800px] w-full animate-pulse bg-obsidian" />
  ),
});
