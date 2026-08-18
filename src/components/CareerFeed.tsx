"use client";

import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Newspaper,
  X,
} from "lucide-react";

interface NewsItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  image: string;
  date: string;
  tag: string;
}

const newsItems = [
  {
    id: "01",
    category: "Infrastructure",
    title: "Building the Infrastructure Behind Modern Operations",
    desc: "Modern organizations require more than individual tools. They require dependable digital infrastructure that connects people, processes, information, and decision-making into a coherent operating environment.",
    image:
      "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/cf1",
    date: "AUG 18, 2026",
    tag: "Infrastructure",
  },
  {
    id: "02",
    category: "M&A",
    title: "Growth Through Strategic Alignment",
    desc: "Sustainable growth is built through deliberate alignment. Our approach to partnerships, investments, and strategic opportunities focuses on creating stronger capabilities and long-term value.",
    image:
      "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/cf2",
    date: "AUG 18, 2026",
    tag: "M&A",
  },
  {
    id: "03",
    category: "Press Room",
    title: "Company Updates & Announcements",
    desc: "A central place for company news, developments, announcements, and other updates that provide a clearer view of our work, direction, and ongoing initiatives.",
    image:
      "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/cf3",
    date: "AUG 18, 2026",
    tag: "Press Room",
  },
];

export default function CompanyUpdates() {
  const [ selectedArticle, setSelectedArticle ] =
    useState<NewsItem | null>(null);

  useEffect(() => {
    if (!selectedArticle) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedArticle(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ selectedArticle ]);

  return (
    <>
      <section
        id="updates"
        className="overflow-hidden bg-[#F6F6F3] px-6 py-24 text-obsidian md:py-36"
      >
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="mb-20 grid grid-cols-1 gap-10 border-b border-obsidian/10 pb-12 lg:grid-cols-12 lg:items-end lg:gap-16">

            <div className="lg:col-span-7">
              <div className="mb-8 flex items-center gap-3">
                <Newspaper className="h-4 w-4 text-gold" />

                <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                  News & Updates
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl"
              >
                Company
                <br />
                <span className="font-bold uppercase">
                  Updates
                </span>
              </motion.h2>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-lg text-sm font-light leading-7 text-ash md:text-base md:leading-8">
                Recent developments, company stories, leadership
                updates, and notable moments from across the
                organization.
              </p>

              <p className="mt-4 max-w-lg text-xs leading-6 text-obsidian/45">
                Select an update to preview the full story.
              </p>
            </div>
          </div>

          {/* NEWS GRID */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: [ 0.22, 1, 0.36, 1 ],
                }}
                onClick={() => setSelectedArticle(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    setSelectedArticle(item);
                  }
                }}
                className="group flex h-full cursor-pointer flex-col border border-obsidian/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-obsidian/5 focus:outline-none focus:ring-1 focus:ring-gold"
              >

                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden bg-obsidian">
                  <NextImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Simple category label — no image overlay */}
                  <div className="absolute left-5 top-5">
                    <span className="border border-white/30 bg-obsidian/75 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-7 md:p-8">

                  {/* META */}
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-gold">
                      {item.id}
                    </span>

                    <div className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.16em] text-obsidian/40">
                      <Clock className="h-3 w-3" />
                      {item.date}
                    </div>
                  </div>

                  {/* CATEGORY */}
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-gold">
                    {item.category}
                  </p>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold leading-[1.2] tracking-tight md:text-2xl">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 line-clamp-4 text-sm font-light leading-7 text-ash">
                    {item.desc}
                  </p>

                  {/* ACTION */}
                  <div className="mt-auto pt-8">
                    <div className="border-t border-obsidian/10 pt-5">
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.28em]">
                        <span>
                          Open Article
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center border border-obsidian/15 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* FOOTNOTE */}
          <div className="mt-16 flex flex-col gap-4 border-t border-obsidian/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-[10px] uppercase leading-5 tracking-[0.18em] text-obsidian/35">
              Company news, developments, and public updates.
            </p>

            <span className="text-[9px] uppercase tracking-[0.25em] text-obsidian/30">
              News & Information
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE PLACEHOLDER MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/70 px-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg border border-obsidian/10 bg-[#F6F6F3] p-8 shadow-2xl md:p-10"
            >

              {/* CLOSE */}
              <button
                type="button"
                aria-label="Close article preview"
                onClick={() => setSelectedArticle(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-obsidian/10 text-obsidian/50 transition-colors hover:border-gold hover:text-gold"
              >
                <X className="h-4 w-4" />
              </button>

              {/* LABEL */}
              <div className="mb-8 flex items-center gap-3">
                <Newspaper className="h-4 w-4 text-gold" />

                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-gold">
                  Article Preview
                </span>
              </div>

              {/* TITLE */}
              <h3 className="max-w-md pr-8 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
                {selectedArticle.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-6 text-sm font-light leading-7 text-ash">
                {selectedArticle.desc}
              </p>

              {/* PLACEHOLDER */}
              <div className="mt-8 border-t border-obsidian/10 pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                  Placeholder
                </p>

                <p className="mt-3 text-sm leading-6 text-obsidian/55">
                  The full article is not available on this website
                  yet. This section is currently being prepared.
                </p>
              </div>

              {/* CLOSE ACTION */}
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="mt-8 w-full border border-obsidian bg-obsidian px-6 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-colors hover:bg-gold hover:text-obsidian"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}