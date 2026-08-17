'use client';

import {
  DynamicMotionDiv as MotionDiv,
} from '@/components/motion/DynamicMotion';

import { timeline } from '@/data/timeline';

export default function ExecutiveTimeline() {
  return (
    <div className="w-full">
      <div className="border-y border-neutral-900">
        {timeline.map((item, index) => (
          <MotionDiv
            key={`${item.year}-${item.title}`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: 'easeOut',
            }}
            viewport={{
              once: true,
              margin: '-60px',
            }}
            className="group grid grid-cols-[70px_minmax(0,1fr)] gap-5 border-b border-neutral-900 py-7 last:border-b-0 sm:grid-cols-[90px_minmax(0,1fr)] sm:gap-8 sm:py-8"
          >
            {/* Year */}
            <div className="relative">
              <p className="text-[11px] font-medium tracking-[0.12em] text-neutral-500">
                {item.year}
              </p>

              {/* Timeline indicator */}
              <div className="absolute left-0 top-8 hidden h-px w-5 bg-neutral-800 sm:block" />
            </div>

            {/* Event */}
            <div className="max-w-2xl">
              <h3 className="font-display text-xl leading-tight text-neutral-100 sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500 sm:text-[15px] sm:leading-7">
                {item.description}
              </p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}