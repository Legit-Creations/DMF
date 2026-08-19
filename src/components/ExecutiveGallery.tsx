"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import {
  DynamicMotionDiv as MotionDiv,
} from "@/components/motion/DynamicMotion";

interface GalleryItem {
  id: number;
  src: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s.png",
  },
  {
    id: 2,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s.jpg",
  },
  {
    id: 3,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%281%29.png",
  },
  {
    id: 4,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%281%29.jpg",
  },
  {
    id: 5,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%282%29.jpg",
  },
  {
    id: 6,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%282%29.png",
  },
  {
    id: 7,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%283%29.png",
  },
  {
    id: 8,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%283%29.jpg",
  },
  {
    id: 9,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%284%29.png",
  },
  {
    id: 10,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%285%29.png",
  },
  {
    id: 11,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%286%29.png",
  },
  {
    id: 12,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%287%29.png",
  },
  {
    id: 13,
    src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%288%29.png",
  },
];

export default function ExecutiveGallery() {
  const [ selectedIndex, setSelectedIndex ] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null ? galleryData[ selectedIndex ] : null;

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? galleryData.length - 1
        : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === galleryData.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  /*
   * Keyboard navigation
   */
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          closeImage();
          break;

        case "ArrowLeft":
          showPrevious();
          break;

        case "ArrowRight":
          showNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    /*
     * Prevent the page underneath the lightbox
     * from scrolling.
     */
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [ selectedIndex ]);

  return (
    <>
      {/* =========================================================
          GALLERY
      ========================================================== */}
      <section
        id="dmfgallery"
        aria-labelledby="gallery-title"
        className="w-full overflow-hidden bg-bone text-obsidian"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-36">

          {/* =====================================================
              HEADER
          ====================================================== */}
          <header className="max-w-3xl">
            <div className="mb-10 flex items-center gap-4">
              <Camera
                aria-hidden="true"
                className="h-4 w-4 text-gold"
              />

              <span className="text-[9px] font-medium uppercase tracking-[0.45em] text-ash">
                Photography
              </span>
            </div>

            <h1
              id="gallery-title"
              className="font-display text-5xl leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl"
            >
              Julio Ponder
              <br />
              Seneres
            </h1>

            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.38em] text-ash">
              Chief Administrative Officer
            </p>

            <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-ash sm:text-lg sm:leading-9">
              <p>
                A visual collection documenting the spaces, environments,
                and moments surrounding Julio Ponder Seneres&apos; work
                across administration, technology, and business.
              </p>

              <p>
                Presented as a straightforward photographic collection,
                the gallery focuses on the people, places, and details
                behind the work.
              </p>
            </div>
          </header>

          {/* =====================================================
              EDITORIAL GALLERY
              One image per row.
              Images retain their native 16:9 ratio.
          ====================================================== */}
          <div className="mt-20 md:mt-28">

            {/* Gallery information bar */}
            <div className="flex items-center justify-between border-b border-obsidian/10 pb-5">
              <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-ash">
                Visual Collection
              </span>

              <span className="font-mono text-[9px] tracking-[0.2em] text-ash">
                {String(galleryData.length).padStart(2, "0")} Images
              </span>
            </div>

            {/* Images */}
            <div className="mt-10 md:mt-16">
              {galleryData.map((item, index) => (
                <MotionDiv
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.7,
                    delay: Math.min(index * 0.03, 0.15),
                  }}
                  className="group border-b border-obsidian/10 py-10 first:pt-0 md:py-16"
                >
                  {/* ===========================================
                      IMAGE

                      1280 × 720
                      Native 16:9 ratio
                      No artificial height
                      No object-contain
                      No card
                  ============================================ */}
                  <button
                    type="button"
                    onClick={() => openImage(index)}
                    aria-label={`Open gallery image ${item.id}`}
                    className="block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-obsidian focus-visible:ring-offset-4"
                  >
                    <div className="relative w-full overflow-hidden">
                      <NextImage
                        src={item.src}
                        alt={`Julio Ponder Seneres — gallery image ${item.id}`}
                        width={1280}
                        height={720}
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, 1152px"
                        className="block h-auto w-full transition-transform duration-1000 ease-out group-hover:scale-[1.012]"
                      />
                    </div>
                  </button>

                  {/* ===========================================
                      MINIMAL IMAGE INFORMATION
                  ============================================ */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.25em] text-ash">
                      {String(item.id).padStart(2, "0")}
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-ash/50 transition-colors duration-300 group-hover:text-obsidian">
                      View
                    </span>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* =====================================================
              FOOTER
          ====================================================== */}
          <div className="mt-16 flex items-center justify-between border-t border-obsidian/10 pt-6 md:mt-24">
            <p className="text-[8px] uppercase tracking-[0.35em] text-ash">
              Photography
            </p>

            <p className="font-mono text-[8px] tracking-[0.2em] text-ash">
              1280 × 720 · {String(galleryData.length).padStart(2, "0")} Images
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          LIGHTBOX
      ========================================================== */}
      {selectedImage && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-obsidian/95 p-4 backdrop-blur-md sm:p-8"
          onClick={closeImage}
        >
          {/* =====================================================
              LIGHTBOX TOP BAR
          ====================================================== */}
          <div className="flex w-full max-w-7xl items-center justify-between">
            <p className="font-mono text-[10px] tracking-[0.3em] text-white/60">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(galleryData.length).padStart(2, "0")}
            </p>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closeImage();
              }}
              aria-label="Close image viewer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-white/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* =====================================================
              MAIN IMAGE STAGE
          ====================================================== */}
          <div
            className="relative my-auto flex h-[72vh] w-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Previous */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-obsidian/50 text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-obsidian/80 hover:text-white sm:-left-14"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-obsidian/50 text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-obsidian/80 hover:text-white sm:-right-14"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image */}
            <NextImage
              src={selectedImage.src}
              alt={`Julio Ponder Seneres — gallery image ${selectedImage.id}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* =====================================================
              THUMBNAIL NAVIGATION
          ====================================================== */}
          <div
            className="hidden max-w-full gap-2 overflow-x-auto p-2 sm:flex"
            onClick={(event) => event.stopPropagation()}
          >
            {galleryData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View image ${item.id}`}
                aria-current={
                  selectedIndex === index ? "true" : undefined
                }
                className={`relative h-14 w-24 flex-shrink-0 overflow-hidden border transition-all duration-300 ${selectedIndex === index
                  ? "scale-105 border-white opacity-100"
                  : "border-white/20 opacity-40 hover:opacity-80"
                  }`}
              >
                <NextImage
                  src={item.src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}