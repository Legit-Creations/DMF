"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { DynamicMotionDiv as MotionDiv } from '@/components/motion/DynamicMotion';
import { Camera } from 'lucide-react';
import NextImage from "next/image";

interface GalleryItem {
  id: number;
  src: string;
  type?: 'hero' | 'normal' | 'wide' | 'standard';
}

const galleryData: GalleryItem[] = [
  { id: 1, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s.png', type: 'hero' },
  { id: 2, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s.jpg', type: 'standard' },
  { id: 3, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (1).png', type: 'standard' },
  { id: 4, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (1).jpg', type: 'standard' },
  { id: 5, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (2).jpg', type: 'standard' },
  { id: 6, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (2).png', type: 'normal' },
  { id: 7, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (3).png', type: 'standard' },
  { id: 8, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (3).jpg', type: 'standard' },
  { id: 9, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (4).png', type: 'standard' },
  { id: 10, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (5).png', type: 'wide' },
  { id: 11, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (6).png', type: 'standard' },
  { id: 12, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (7).png', type: 'standard' },
  { id: 13, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (8).png', type: 'standard' },
  { id: 14, src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps/frame-0.00s (3).jpg', type: 'standard' },
];

export default function ExecutiveGallery() {
  const getSpan = (type?: string) => {
    switch (type) {
      case 'hero':
        return 'col-span-2 md:col-span-3 row-span-2 md:row-span-3';
      case 'normal':
        return 'col-span-2 md:col-span-2 row-span-2 md:row-span-2';
      case 'wide':
        return 'col-span-2 md:col-span-3 row-span-1 md:row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section id="dmfgallery" className="bg-bone py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Gallery Header */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <Camera className="text-gold w-4 h-4" />
            <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">
              Julio Ponder's Gallery
            </span>
          </div>

          <h1 className="text-4xl font-light text-obsidian mb-4 tracking-tight">
            Julio Ponder Seneres
          </h1>
          <p className="text-[12px] uppercase tracking-[0.3em] text-gold/80 mb-12 font-medium">
            Chief Administrative Officer
          </p>

          <div className="space-y-6 text-lg font-light leading-relaxed mb-8 text-ash text-justify" lang="en">
            <p>
              As Chief Administrative Officer, Julio Ponder Seneres manages the company's internal operations, office spaces, and everyday business systems. His role is to keep the workplace organized so that every team has the support and resources they need to succeed.
            </p>
            <p>
              This archive is a visual record of his time in the role, capturing the workspaces, team environments, and projects shaped under his leadership.
            </p>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[150px] md:auto-rows-[180px] grid-flow-dense gap-2 md:gap-1.5 overflow-hidden">
          {galleryData.map((item, idx) => (
            <MotionDiv
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`group relative overflow-hidden bg-obsidian/5 ${getSpan(item.type)}`}
            >
              {/* Image with hover scaling */}
              <NextImage
                src={item.src}
                alt={`Executive Archive Photo ${item.id}`}
                fill
                priority={idx < 4}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                className={`object-cover transition-transform duration-700 ease-out group-hover:scale-110 
                ${item.type === 'wide' ? 'object-top' : 'object-center'}`}
              />

              {/* Ref label appearing on hover */}
              <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[10px] font-mono text-white tracking-[0.3em] uppercase">
                  Ref: {item.id.toString().padStart(2, '0')}
                </span>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
