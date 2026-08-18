'use client';

import { useEffect, useState } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import NextImage from 'next/image';

import {
  DynamicMotionDiv as MotionDiv,
} from '@/components/motion/DynamicMotion';

interface GalleryItem {
  id: number;
  src: string;
  type?: 'hero' | 'normal' | 'wide' | 'standard';
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s.png',
    type: 'hero',
  },
  {
    id: 2,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s.jpg',
    type: 'standard',
  },
  {
    id: 3,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%281%29.png',
    type: 'standard',
  },
  {
    id: 4,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%281%29.jpg',
    type: 'standard',
  },
  {
    id: 5,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%282%29.jpg',
    type: 'standard',
  },
  {
    id: 6,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%282%29.png',
    type: 'normal',
  },
  {
    id: 7,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%283%29.png',
    type: 'standard',
  },
  {
    id: 8,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%283%29.jpg',
    type: 'standard',
  },
  {
    id: 9,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%284%29.png',
    type: 'standard',
  },
  {
    id: 10,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%285%29.png',
    type: 'wide',
  },
  {
    id: 11,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%286%29.png',
    type: 'standard',
  },
  {
    id: 12,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%287%29.png',
    type: 'standard',
  },
  {
    id: 13,
    src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s%20%288%29.png',
    type: 'standard',
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
   * Keyboard controls for the image viewer.
   */
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          closeImage();
          break;

        case 'ArrowLeft':
          showPrevious();
          break;

        case 'ArrowRight':
          showNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    /*
     * Prevent the document from scrolling behind the viewer.
     */
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [ selectedIndex ]);

  const getSpan = (type?: GalleryItem[ 'type' ]) => {
    switch (type) {
      case 'hero':
        return 'col-span-2 md:col-span-3 row-span-2 md:row-span-3';

      case 'normal':
        return 'col-span-2 md:col-span-2 row-span-2';

      case 'wide':
        return 'col-span-2 md:col-span-3 row-span-1 md:row-span-2';

      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <>
      <section
        id="dmfgallery"
        className="w-full bg-bone text-obsidian"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-36 lg:px-12">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <header className="max-w-4xl">

            <div className="mb-10 flex items-center gap-4">
              <Camera
                aria-hidden="true"
                className="h-4 w-4 text-ash"
              />

              <span className="text-[9px] font-medium uppercase tracking-[0.45em] text-ash">
                Gallery
              </span>
            </div>

            <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
              Julio Ponder
              <br />
              Seneres
            </h1>

            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.38em] text-ash">
              Chief Administrative Officer
            </p>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-ash sm:text-lg sm:leading-9">
              <p>
                As Chief Administrative Officer, Julio Ponder Seneres
                manages the company&apos;s internal operations, office
                spaces, and everyday business systems. His role is to
                keep the workplace organized so that every team has the
                support and resources they need to succeed.
              </p>

              <p>
                This archive is a visual record of his time in the role,
                capturing the workspaces, team environments, and projects
                shaped under his leadership.
              </p>
            </div>
          </header>

          {/* =====================================================
              GALLERY
          ====================================================== */}

          <div
            className="
              mt-16
              grid
              grid-cols-2
              auto-rows-[150px]
              grid-flow-dense
              gap-2
              sm:auto-rows-[180px]
              md:mt-24
              md:grid-cols-6
              md:auto-rows-[180px]
              md:gap-1.5
            "
          >
            {galleryData.map((item, index) => (
              <MotionDiv
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-80px',
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.035, 0.25),
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  bg-obsidian/5
                  ${getSpan(item.type)}
                `}
              >
                <button
                  type="button"
                  onClick={() => openImage(index)}
                  aria-label={`Open gallery image ${item.id}`}
                  className="
                    absolute
                    inset-0
                    z-10
                    h-full
                    w-full
                    cursor-zoom-in
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-obsidian
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-bone
                  "
                />

                <NextImage
                  src={item.src}
                  alt={`Julio Ponder Seneres — gallery image ${item.id}`}
                  fill
                  priority={index < 2}
                  sizes="
                    (max-width: 640px) 50vw,
                    (max-width: 768px) 50vw,
                    (max-width: 1200px) 33vw,
                    16vw
                  "
                  className={`
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                    ${item.type === 'wide'
                      ? 'object-top'
                      : 'object-center'
                    }
                  `}
                />

                {/* Quiet hover treatment */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-obsidian/0
                    transition-colors
                    duration-500
                    group-hover:bg-obsidian/10
                  "
                />

                {/* Minimal archive number */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-3
                    left-3
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <span className="font-mono text-[8px] tracking-[0.25em] text-white/80">
                    {String(item.id).padStart(2, '0')}
                  </span>
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* =====================================================
              FOOTNOTE
          ====================================================== */}

          <div className="mt-10 flex items-center justify-between border-t border-obsidian/10 pt-5">
            <p className="text-[8px] uppercase tracking-[0.35em] text-ash">
              Visual Archive
            </p>

            <p className="font-mono text-[8px] tracking-[0.2em] text-ash">
              {String(galleryData.length).padStart(2, '0')} Images
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
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-obsidian/95
            p-5
            sm:p-8
          "
          onClick={closeImage}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image viewer"
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-white/15
              text-white/70
              transition-colors
              hover:border-white/40
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
            "
          >
            <X className="h-4 w-4" />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="
              absolute
              left-3
              top-1/2
              z-20
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              border
              border-white/10
              bg-obsidian/40
              text-white/60
              transition-colors
              hover:border-white/30
              hover:text-white
              sm:left-6
            "
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
            className="
              absolute
              right-3
              top-1/2
              z-20
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              border
              border-white/10
              bg-obsidian/40
              text-white/60
              transition-colors
              hover:border-white/30
              hover:text-white
              sm:right-6
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Image */}
          <div
            className="
              relative
              h-[82vh]
              w-full
              max-w-6xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            <NextImage
              src={selectedImage.src}
              alt={`Julio Ponder Seneres — gallery image ${selectedImage.id}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
            <p className="font-mono text-[8px] tracking-[0.3em] text-white/50">
              {String(selectedIndex + 1).padStart(2, '0')}
              {' / '}
              {String(galleryData.length).padStart(2, '0')}
            </p>
          </div>
        </div>
      )}
    </>
  );
}