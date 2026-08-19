"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import NextImage from "next/image";
import { AnimatePresence } from "framer-motion";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  {
    ssr: true,
  }
);

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  span: string;
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm1.jpeg",
    title: "A Place of Work",
    description:
      "A view into the environments where people, ideas, and daily responsibilities come together.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: 2,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm2.jpeg",
    title: "Working Environment",
    description:
      "The spaces surrounding the work are part of the culture that supports it.",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 3,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm3.jpeg",
    title: "People & Place",
    description:
      "An archive of the people and environments connected to the work.",
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    id: 4,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm4.jpeg",
    title: "The Everyday",
    description:
      "Not every important moment is formal. Some are simply part of the everyday.",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 5,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm5.jpeg",
    title: "Built Around People",
    description:
      "A closer look at the spaces and details that make an organisation feel lived in.",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    id: 6,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm6.jpeg",
    title: "Across the Day",
    description:
      "Different settings, one continuous rhythm of work and collaboration.",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 7,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm7.jpeg",
    title: "A Wider View",
    description:
      "The larger environment provides context for the work taking place within it.",
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    id: 8,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm8.jpeg",
    title: "Details",
    description:
      "Small visual moments preserved as part of the wider record.",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 9,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm9.jpeg",
    title: "Shared Spaces",
    description:
      "Spaces become meaningful through the people who use them.",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    id: 10,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm10.jpeg",
    title: "Movement",
    description:
      "A visual record of movement between people, places, and responsibilities.",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 11,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm11.jpeg",
    title: "Perspective",
    description:
      "Another perspective on the environments that shaped this chapter.",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 12,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm12.jpeg",
    title: "The Wider Story",
    description:
      "Individual photographs become part of a larger visual history.",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 13,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/pm13.jpeg",
    title: "Archive",
    description:
      "A final frame from a collection documenting a period of work, people, and place.",
    span: "lg:col-span-2 lg:row-span-2",
  },
];

function GalleryContent() {
  const [ selected, setSelected ] = useState<number | null>(null);

  const selectedImage =
    selected !== null
      ? images.find((image) => image.id === selected)
      : null;

  const showPrevious = () => {
    if (selected === null) return;

    const currentIndex = images.findIndex(
      (image) => image.id === selected
    );

    const previousIndex =
      currentIndex === 0 ? images.length - 1 : currentIndex - 1;

    setSelected(images[ previousIndex ].id);
  };

  const showNext = () => {
    if (selected === null) return;

    const currentIndex = images.findIndex(
      (image) => image.id === selected
    );

    const nextIndex =
      currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    setSelected(images[ nextIndex ].id);
  };

  return (
    <>
      <section
        id="caggallery"
        className="w-full overflow-hidden border-t border-obsidian/10 bg-bone"
      >
        <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">

          {/* ---------------------------------------------------------
              HEADER
          --------------------------------------------------------- */}

          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <Camera className="h-4 w-4 text-gold" />

                <span className="text-[9px] font-medium uppercase tracking-[0.45em] text-ash">
                  Visual Archive
                </span>
              </div>

              <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-obsidian md:text-6xl">
                People &amp;
                <br />
                <span className="font-bold uppercase">
                  moments
                </span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="text-sm leading-7 text-ash sm:text-base sm:leading-8">
                A photographic record of the environments, people, and
                moments connected to Julio Ponder Seneres and his work.
                Rather than presenting a catalogue of assets, this archive
                preserves the human and physical context behind them.
              </p>

              <div className="mt-8 flex items-center gap-5 border-t border-obsidian/10 pt-5">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-obsidian/50">
                  13 photographs
                </span>

                <span className="h-px w-8 bg-gold/60" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-obsidian/40">
                  Selected archive
                </span>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------
              GALLERY
          --------------------------------------------------------- */}

          <div className="mt-20 grid auto-rows-[220px] grid-cols-2 gap-2 sm:auto-rows-[260px] sm:gap-3 lg:auto-rows-[210px] lg:grid-cols-4 lg:gap-3">
            {images.map((image, index) => (
              <MotionDiv
                key={image.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.04, 0.25),
                }}
                className={`group relative overflow-hidden bg-obsidian ${image.span}`}
              >
                <button
                  type="button"
                  onClick={() => setSelected(image.id)}
                  aria-label={`Open ${image.title}`}
                  className="absolute inset-0 z-10 h-full w-full cursor-zoom-in text-left"
                />

                <NextImage
                  src={image.src}
                  alt={image.title}
                  fill
                  priority={index < 2}
                  sizes="
                    (max-width: 640px) 50vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                />

                {/* Quiet image treatment */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-70" />

                {/* Hover information */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <div className="translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-[8px] tracking-[0.3em] text-white/60">
                        {String(image.id).padStart(2, "0")}
                      </span>

                      <span className="h-px w-5 bg-gold/70" />

                      <Maximize2 className="h-3.5 w-3.5 text-white/60" />
                    </div>

                    <h3 className="font-display text-xl text-white sm:text-2xl">
                      {image.title}
                    </h3>

                    <p className="mt-2 max-w-md text-xs leading-5 text-white/60">
                      {image.description}
                    </p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* ---------------------------------------------------------
              FOOTER
          --------------------------------------------------------- */}

          <div className="mt-16 flex flex-col gap-6 border-t border-obsidian/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs leading-6 text-ash">
              The archive is intentionally selective — a collection of
              moments that help give context to the work rather than
              simply document it.
            </p>

            <span className="shrink-0 text-[9px] uppercase tracking-[0.35em] text-obsidian/40">
              Julio Ponder Seneres
            </span>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          LIGHTBOX
      ------------------------------------------------------------- */}

      <AnimatePresence>
        {selectedImage && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 p-4 sm:p-8"
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close image"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:text-white sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:text-white sm:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <MotionDiv
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative flex h-[82vh] w-full max-w-6xl flex-col"
            >
              <div className="relative min-h-0 flex-1">
                <NextImage
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-2 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.35em] text-white/40">
                    {String(selectedImage.id).padStart(2, "0")} /{" "}
                    {String(images.length).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">
                    {selectedImage.title}
                  </h3>
                </div>

                <p className="max-w-md text-xs leading-5 text-white/50">
                  {selectedImage.description}
                </p>
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
}

export default function ExecutiveGallery() {
  return <GalleryContent />;
}