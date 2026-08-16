"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import {
  Cpu,
  ShieldCheck,
  Palette,
  Globe,
  ArrowUpRight,
  Fingerprint
} from 'lucide-react';
import NextImage from 'next/image';
import Link from 'next/link';

// Dynamically import motion components to prevent blocking the initial page load
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  {
    ssr: true
  }
);
const MotionH2 = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.h2),
  {
    ssr: true
  }
);

const specializations = [{
  title: "Executive Sovereignty",
  desc: "In his institutional role serving as the Chief Administrative Officer To the Board, CONTRA ATLANTIS GROUP. Julio Ponder Seneres daily operation encompass him to directs corporate governance and operational efficiency across the GROUP Holding Company framework. He orchestrates regional expansion by cultivating strategic investment partnerships, ensuring that the group’s administrative architecture supports long-term growth and institutional resilience",
  icon: <ShieldCheck className="w-5 h-5" />,
  role: "Chief Administrative Officer",
  metric: "Operational Compliance",
  link: "/dossier/strategic-growth",
  cta: "View Full Dossier",
  tag: "CAG"
},
  {
    title: "Digital Integration",
    desc: "Serving as the Chief Technology Officer of a primary subsidiary of the Honduran giant financial group, Incorporated as CONTRA BOBBLE BANK hn. This subsidiary company. Since her incorporation, has had it, undoubtedly become the core integration for the group holding company. Julio Ponder Seneres orchestrates the architecture of secure digital banking ecosystems. His mandate encompasses leading large-scale fintech transformations across the Banco Atlántida network, subsidiaries, and affiliates. By prioritizing digital integration and institutional sustainability, he ensures a seamless,future-ready experience for both the bank and its global consumer base.",
    icon: <Cpu className="w-5 h-5" />,
    role: "Chief Technology Officer",
    metric: "Digital Sovereignty",
    link: "/dossier/digital-integration",
    cta: "View Full Dossier",
    tag: "Contra Bobble Bank"
  },
  {
    title: "Technology & Consultant",
    desc: "From Earth's enormous and growing new-age technology exploration, with modern advancement to innovation and use-case for every existing entrepreneurship sector that serves the human economic ecosystem. Southside West-Africa Organization, incorporated as LEGIT CREATIONS LTD., Legally registered and licensed to exist and operate as a multidisciplinary enterprise providing integrated Information, and Digital solutions across 3 'three' Business Sectors: TECHNOLOGY | COMMERCE | FINANCE",
    icon: <Palette className="w-5 h-5" />,
    role: "Founder & Principal Architect",
    metric: "Aesthetic Innovation",
    link: "https://www.legitcreations.com.ng",
    cta: "Explore Legit Creations",
    // Premium marble texture to reflect high-end design
    texture: "https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&q=80",
    isDesign: true,
    tag: "legit creations"
  },
  {
    title: "Finance Diversifications",
    desc: "Understand ad Bargain more with Direct access to managed asset portfolios and global stocks / investment opportunities within the Group strategic growth network, prioritizing transparency and long-term capital appreciation.",
    icon: <Globe className="w-5 h-5" />,
    role: "Asset Advisory",
    metric: "Growth Network",
    link: "/dashboard",
    cta: "Access Opportunity",
    isHighlight: true,
    tag: "Finance"
  }];

const EcosystemContent = () => {
  return (
    <section id="whatIDo" className="py-24 md:py-40 bg-obsidian text-bone overflow-hidden selection:bg-gold/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* EXECUTIVE HEADER: THE COMMAND CENTER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 md:mb-32 gap-12">
          <MotionDiv
            initial={ { opacity: 0, x: -30 }}
            whileInView={ { opacity: 1, x: 0 }}
            viewport={ { once: true }}
            transition={ { duration: 1 }}
            className="max-w-3xl"
            >
            <div className="flex items-center gap-4 mb-12">
              <Building2 className="text-gold w-4 h-4" />
              <span className="text-gold-light font-bold tracking-[0.6em] text-[10px] uppercase">
                JULIO's Leadership Assets
              </span>
            </div>

            <MotionH2
              initial={ { opacity: 0, y: 30 }}
              whileInView={ { opacity: 1, y: 0 }}
              transition={ { duration: 0.8 }}
              className="text-3xl md:text-6xl font-display italic font-serif tracking-tighter leading-none mb-12"
              >
              Institutional <br /> <span className="text-gold font-bold uppercase">Ecosystems</span>
          </MotionH2>

          <p className="text-white/80 text-justify text-base md:text-xl font-light leading-relaxed max-w-xl">
            Julio Ponder Seneres has Aquired and hold leadership authority from management control and in ownership power in his current career life. He has A comprehensive mandate driving <span className="text-white font-medium border-b border-gold/30">Digital Transfomation</span> in the banking and finance sector. And <span className="text-white font-medium border-b border-gold/30">Design Innovation</span> in the Luxury / E commerce sector. Having more significant achievements and strategic leadership majorly across the GFA / EBN Group
          </p>
        </MotionDiv>

        <div className="flex flex-col items-start lg:items-end border-l lg:border-l-0 lg:border-r border-gold/20 pl-6 lg:pl-0 lg:pr-6 pb-2">
          <span className="text-white font-bold tracking-[0.3em] text-sm mb-2 uppercase">
            Julio Ponder Seneres
          </span>
          <div className="flex items-center gap-3 text-gold-light text-[10px] font-mono tracking-widest uppercase">
            <Fingerprint size={12} /> CAO • CTO • FOUNDER
          </div>
        </div>
      </div>

      {/* THE ARCHITECTURAL MATRIX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
        {specializations.map((item, index) => (
          <MotionDiv
            key={index}
            initial={ { opacity: 0 }}
            whileInView={ { opacity: 1 }}
            viewport={ { once: true }}
            transition={ { delay: index * 0.1, duration: 1 }}
            className="group relative p-10 md:p-20 bg-obsidian flex flex-col justify-between min-h-[500px] md:min-h-[600px] transition-all duration-700 hover:bg-white/[0.02]"
            >
            {/* MATERIAL TEXTURE OVERLAY (Specific for Koncepto/Design) */}
            {item.texture && (
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none grayscale">
                <NextImage
                  src={item.texture}
                  alt="Material Texture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  />
              </div>
            )}

            {/* CARD TOP: BRANDING & METRICS */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-20">
                <div className="w-14 h-14 flex items-center justify-center border border-white/10 text-gold bg-white/5 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-obsidian">
                  {item.icon}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-black mb-1">
                    {item.metric}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-white/60 font-mono">
                    {item.tag}
                  </span>
                </div>
              </div>

              <h3 className={`text-2xl md:text-4xl font-display mb-8 uppercase tracking-tighter leading-none transition-transform duration-500 group-hover:translate-x-2
                ${item.isDesign ? "font-serif italic text-white": "text-white"}`}>
                {item.title}
              </h3>

              {/* ACCESSIBILITY: High Contrast descriptions */}
              <p className="text-base text-justify md:text-lg text-white/70 font-light leading-relaxed mb-10 max-w-sm group-hover:text-white transition-colors">
                {item.desc}
              </p>
            </div>

            {/* CARD BOTTOM: ROLE & ACTION */}
            <div className="relative z-10 space-y-12">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-black mb-4">
                  Functional Mandate
                </span>
                <span className="text-xl font-medium tracking-wide text-white border-l-2 border-gold/40 pl-5">
                  {item.role}
                </span>
              </div>

              <Link
                href={item.link}
                className={`inline-flex items-center gap-6 text-[11px] uppercase tracking-[0.5em] font-black transition-all duration-500 group/btn
                ${item.isHighlight
                ? "bg-gold text-obsidian px-10 py-5 shadow-2xl shadow-gold/10 hover:shadow-gold/30": "text-white hover:text-gold"}`}
                >
                {item.cta}
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
              </Link>

            </div>
          </MotionDiv>
        ))}
      </div>

      {/* SYSTEM STATUS FOOTER */}
      <div className="mt-24 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-12 gap-10">
        <div className="flex items-center gap-10">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 mb-2 font-bold">
              Security Protocols
            </span>
            <span className="text-[11px] font-mono text-gold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              Unified Command Active
            </span>
          </div>
          <div className="hidden md:block w-[1px] h-10 bg-white/10" />
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 mb-2 font-bold">
              Philosophical Core
            </span>
            <span className="text-[11px] font-mono text-white italic">
              Architectural Essentialism
            </span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-1">
            Global Reach // NGA
          </p>
          <p className="text-[9px] uppercase tracking-[0.2em] text-gold">
            JPS 2026 Strategic Entrepreneurship
          </p>
        </div>
      </div>
    </div>
  </section>
);
};

// Export the component wrapped in Next.js dynamic loader
export default dynamic(() => Promise.resolve(EcosystemContent), {
ssr: false,
loading: () => <div className="h-[800px] w-full bg-obsidian animate-pulse" />
});