"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

const positions = [
  {
    role: "Chief Administration Officer",
    url: "#",
    company: "Contra Atlantis Group",
    tag: "Administration & Operations",
    description:
      "Overseeing administrative operations, internal coordination, and the systems that support the group's day-to-day work.",
  },
  {
    role: "Chief Technology Officer",
    url: "#",
    company: "Contra Bobble Bank",
    tag: "Technology & Digital Infrastructure",
    description:
      "Leading technology direction, digital infrastructure, and the development of systems that support modern financial operations.",
  },
  {
    role: "Founder & Creative Lead",
    url: "https://legitcreations.com.ng",
    company: "LEGIT CREATIONS LTD",
    tag: "Technology & Creative Practice",
    description:
      "Building digital products, creative systems, and technology-led experiences through an independent technology and consulting company.",
  },
];

export default function ExecutiveProfile() {
  return (
    <section
      id="profile"
      className="relative overflow-hidden border-t border-obsidian/10 bg-[#FBFBF9] py-24 text-obsidian sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:items-end">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <BriefcaseBusiness className="h-4 w-4 text-gold" />

              <span className="text-[9px] font-medium uppercase tracking-[0.45em] text-ash">
                Professional Profile
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl font-display text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
            >
              Work,
              <br />
              <span className="italic text-ash">
                technology &amp; direction.
              </span>
            </motion.h2>
          </div>

          <div className="border-l border-obsidian/10 pl-6 lg:pb-2">
            <p className="text-xs leading-6 text-ash">
              A multidisciplinary professional profile spanning
              administration, technology, entrepreneurship, and creative
              practice.
            </p>

            <p className="mt-6 text-[9px] uppercase tracking-[0.35em] text-obsidian/40">
              Julio Ponder Seneres
            </p>
          </div>
        </div>

        {/* =========================================================
            POSITIONS
        ========================================================= */}

        <div className="mt-20 border-t border-obsidian/15">
          {positions.map((position, index) => (
            <motion.a
              key={position.role}
              href={position.url}
              target={position.url.startsWith("http") ? "_blank" : undefined}
              rel={
                position.url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group grid gap-8 border-b border-obsidian/10 px-2 py-10 transition-colors duration-500 hover:bg-white sm:px-6 sm:py-12 lg:grid-cols-[90px_minmax(0,1fr)_260px] lg:items-center"
            >
              {/* Number */}

              <span className="font-mono text-[9px] tracking-[0.3em] text-obsidian/30 transition-colors group-hover:text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Main */}

              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.4em] text-gold">
                  {position.tag}
                </p>

                <h3 className="font-display text-2xl tracking-tight sm:text-3xl lg:text-4xl">
                  {position.role}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-ash">
                  {position.description}
                </p>
              </div>

              {/* Company */}

              <div className="flex items-center justify-between gap-5 border-t border-obsidian/10 pt-5 lg:border-t-0 lg:pt-0">
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-obsidian/50 transition-colors group-hover:text-obsidian">
                  {position.company}
                </span>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-obsidian/15 transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
                  <ArrowUpRight
                    size={15}
                    className="text-obsidian/50 transition-colors group-hover:text-white"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* =========================================================
            PROFESSIONAL APPROACH
        ========================================================= */}

        <div className="mt-24 grid gap-12 border-t border-obsidian/10 pt-12 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-[9px] uppercase tracking-[0.45em] text-gold">
              Approach
            </p>
          </div>

          <div className="max-w-5xl">
            <h3 className="max-w-4xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Building better systems by bringing technology,
              organisation, and creative thinking together.
            </h3>

            <div className="mt-10 grid gap-8 text-sm leading-8 text-ash sm:grid-cols-2 sm:text-base">
              <p>
                His work sits across several disciplines, but the underlying
                approach remains consistent: understand how a system works,
                identify where friction exists, and build practical ways to
                make it better.
              </p>

              <p>
                In administration, that means creating structure around
                people, operations, and resources. In technology, it means
                building reliable digital systems that can support real
                organisations and the people who depend on them.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            PERSONAL STATEMENT
        ========================================================= */}

        <div className="mt-24 grid gap-12 border-t border-obsidian/10 pt-12 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-[9px] uppercase tracking-[0.45em] text-gold">
              Perspective
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-obsidian/35">
              From his words
            </p>
          </div>

          <div className="max-w-4xl">
            <blockquote className="font-display text-2xl leading-relaxed text-obsidian sm:text-3xl lg:text-4xl">
              “Technology should make an organisation clearer, more capable,
              and easier to operate — not simply more complicated.”
            </blockquote>

            <div className="mt-10 space-y-6 text-sm leading-8 text-ash sm:text-base">
              <p>
                The goal is not to adopt technology for its own sake. It is to
                understand where technology can improve the way people work,
                how information moves, and how decisions are made.
              </p>

              <p>
                That same principle extends to creative work and physical
                environments. Good design removes unnecessary complexity and
                gives the important things room to speak for themselves.
              </p>

              <p>
                The long-term objective is simple: build organisations,
                products, and environments that are useful today and still
                make sense years from now.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            FOOTER NOTE
        ========================================================= */}

        <div className="mt-20 flex flex-col gap-4 border-t border-obsidian/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] uppercase tracking-[0.3em] text-obsidian/35">
            Administration · Technology · Entrepreneurship · Design
          </p>

          <p className="text-[9px] uppercase tracking-[0.3em] text-obsidian/35">
            Julio Ponder Seneres
          </p>
        </div>
      </div>
    </section>
  );
}