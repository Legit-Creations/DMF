"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import {
  Cpu,
  ShieldCheck,
  Palette,
  Globe,
  ArrowUpRight,
  Fingerprint,
  Building2
} from 'lucide-react';
import NextImage from 'next/image';
import Link from 'next/link';

// Dynamically import motion components to prevent blocking the initial page load
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: true }
);
const MotionH2 = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.h2),
  { ssr: true }
);

const specializations = [
  {
    title: "Executive Sovereignty",
    desc: "In his institutional role serving as the Chief Administrative Officer to the Board at CONTRA ATLANTIS GROUP, Julio Ponder Seneres directs corporate governance and operational efficiency across the GROUP Holding Company framework. He orchestrates regional expansion by cultivating strategic investment partnerships, ensuring that the group’s administrative architecture supports long-term growth and institutional resilience.",
    icon: <ShieldCheck className="w-5 h-5" />,
    role: "Chief Administrative Officer",
    metric: "Operational Compliance",
    link: "/dossier/strategic-growth",
    cta: "View Full Dossier",
    tag: "CAG"
  },
  {
    title: "Digital Integration",
    desc: "Serving as the Chief Technology Officer of CONTRA BOBBLE BANK hn, a primary subsidiary of the Honduran financial group. Julio Ponder Seneres orchestrates the architecture of secure digital banking ecosystems. His mandate encompasses leading large-scale fintech transformations across the Banco Atlántida network, subsidiaries, and affiliates.",
    icon: <Cpu className="w-5 h-5" />,
    role: "Chief Technology Officer",
    metric: "Digital Sovereignty",
    link: "/dossier/digital-integration",
    cta: "View Full Dossier",
    tag: "Contra Bobble Bank"
  },
  {
    title: "Technology & Consulting",
    desc: "LEGIT CREATIONS LTD is a multidisciplinary enterprise legally registered to provide integrated Information and Digital solutions across three business sectors: TECHNOLOGY | COMMERCE | FINANCE.",
    icon: <Palette className="w-5 h-5" />,
    role: "Founder & Principal Architect",
    metric: "Aesthetic Innovation",
    link: "https://www.legitcreations.com.ng",
    cta: "Explore Legit Creations",
    texture: "https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&q=80",
    isDesign: true,
    tag: "legit creations"
  },
  {
    title: "Finance Diversification",
    desc: "Direct access to managed asset portfolios and global investment opportunities within the group's strategic growth network, prioritizing transparency and long-term capital appreciation.",
    icon: <Globe className="w-5 h-5" />,
    role: "Asset Advisory",
    metric: "Growth Network",
    link: "/dashboard",
    cta: "Access Opportunity",
    isHighlight: true,
    tag: "Finance"
  }
];

const EcosystemContent = () => {
  return (
    <section id="whatIDo" className="py-20 md:py-40 bg-obsidian text-bone overflow-hidden selection:bg-gold/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* EXECUTIVE HEADER: THE COMMAND CENTER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-32 gap-10">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <Building2 className="text-gold w-4 h-4 shrink-0" />
              <span className="text-gold-light font-bold tracking-[0.4em] text-[10px] uppercase">
                JULIO's Leadership Assets
              </span>
            </div>

            {/* FIXED: White color added so "Institutional" displays on obsidian background */}
            <MotionH2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter leading-[1.1] mb-8"
            >
              Institutional <br /> 
              <span className="not-italic text-gold font-bold uppercase">Ecosystems</span>
            </MotionH2>

            {/* FIXED: Removed text-justify to prevent dynamic inline word spacing gaps */}
            <p className="text-white/80 text-left text-base md:text-lg font-light leading-relaxed max-w-xl">
              Julio Ponder Seneres holds executive leadership and management authority across key institutional frameworks. He leads a comprehensive mandate driving <span className="text-white font-medium border-b border-gold/30">Digital Transformation</span> in banking and finance, alongside <span className="text-white font-medium border-b border-gold/30">Design Innovation</span> within commerce ecosystems—achieving significant strategic growth across the GFA / EBN Group.
            </p>
          </MotionDiv>

          <div className="flex flex-col items-start lg:items-end border-l lg:border-l-0 lg:border-r border-gold/20 pl-6 lg:pl-0 lg:pr-6 py-2">
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="group relative p-8 md:p-16 bg-obsidian flex flex-col justify-between min-h-[480px] md:min-h-[580px] transition-all duration-700 hover:bg-white/[0.02]"
            >
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

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12 md:mb-16">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/10 text-gold bg-white/5 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-obsidian">
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

                <h3 className={`text-2xl md:text-4xl font-display mb-6 uppercase tracking-tighter leading-none transition-transform duration-500 group-hover:translate-x-2
                  ${item.isDesign ? "font-serif italic text-white" : "text-white"}`}>
                  {item.title}
                </h3>

                {/* FIXED: Removed text-justify from description cards */}
                <p className="text-sm md:text-base text-left text-white/70 font-light leading-relaxed mb-8 max-w-sm group-hover:text-white transition-colors">
                  {item.desc}
                </p>
              </div>

              <div className="relative z-10 space-y-8 md:space-y-10">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-black mb-2">
                    Functional Mandate
                  </span>
                  <span className="text-lg md:text-xl font-medium tracking-wide text-white border-l-2 border-gold/40 pl-4">
                    {item.role}
                  </span>
                </div>

                <div>
                  <Link
                    href={item.link}
                    className={`inline-flex items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black transition-all duration-500 group/btn
                    ${item.isHighlight
                      ? "bg-gold text-obsidian px-8 py-4 shadow-2xl shadow-gold/10 hover:shadow-gold/30"
                      : "text-white hover:text-gold"}`}
                  >
                    {item.cta}
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* SYSTEM STATUS FOOTER */}
        <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-white/5 pt-10 gap-8">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 mb-1 font-bold">
                Security Protocols
              </span>
              <span className="text-[11px] font-mono text-gold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                Unified Command Active
              </span>
            </div>
            <div className="hidden md:block w-[1px] h-8 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 mb-1 font-bold">
                Philosophical Core
              </span>
              <span className="text-[11px] font-mono text-white italic">
                Architectural Essentialism
              </span>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-1">
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

export default dynamic(() => Promise.resolve(EcosystemContent), {
  ssr: false,
  loading: () => <div className="h-[800px] w-full bg-obsidian animate-pulse" />
});
