'use client';

import {
  useEffect,
  useState
} from 'react';
import dynamic from 'next/dynamic';

import {
  DynamicMotionMain as MotionMain,
  DynamicMotionDiv as MotionDiv,
} from '@/components/motion/DynamicMotion';

import ExecutiveDoctrine from '@/components/ExecutiveDoctrine';
import {
  doctrines
} from '@/data/doctrines.public';

const Timeline = dynamic(
  () => import('@/components/ExecutiveTimeline'),
  {
    ssr: false,
    loading: () => (
      <div className="h-48 w-full animate-pulse border border-neutral-900/10" />
    ),
  }
);

export default function CAODossier() {
  const [year,
    setYear] = useState < number | null > (null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <MotionMain
      initial={ { opacity: 0, y: 16 }}
      animate={ { opacity: 1, y: 0 }}
      transition={ {
        duration: 0.7,
        ease: 'easeOut',
      }}
      className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20"
      id="dossier"
      >
      {/* =========================================================
          01 — EXECUTIVE IDENTITY
      ========================================================= */}

      <header className="border-b border-neutral-800 pb-10 sm:pb-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_220px] lg:items-end">
          <div>
            <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.55em] text-neutral-500">
              Public Institutional Edition
            </p>

            <h1 className="max-w-4xl font-display text-5xl uppercase leading-[0.9] tracking-[-0.035em] text-neutral-100 sm:text-6xl lg:text-8xl">
              Julio Ponder
              <br />
            Seneres
          </h1>

          <p className="mt-6 text-[10px] uppercase tracking-[0.38em] text-neutral-400 sm:text-xs">
            Chief Administrative Officer
          </p>
        </div>

        <div className="border-l border-neutral-800 pl-5">
          <p className="text-[9px] uppercase tracking-[0.35em] text-neutral-600">
            Executive Dossier
          </p>

          <p className="mt-3 text-xs leading-6 text-neutral-400">
            Institutional governance, strategic risk, investment
            coordination and digital oversight.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-2xl border-l border-neutral-800 pl-5">
        <p className="text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
          An institutional profile documenting the governance
          principles, strategic investment doctrine, and digital
          oversight framework of the Office of the Chief
          Administrative Officer.
        </p>
      </div>
    </header>

    {/* =========================================================
          02 — EXECUTIVE POSITION
      ========================================================= */}

    <section className="border-b border-neutral-900 py-14 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
        <div>
          <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-600">
            01
          </p>

          <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-neutral-500">
            Executive Position
          </p>
        </div>

        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight text-neutral-100 sm:text-4xl">
            Administrative governance as strategic infrastructure.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
            The Office of the Chief Administrative Officer operates
            across risk governance, institutional coordination,
            strategic investment, operational discipline and
            technology oversight.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
            The mandate is designed to preserve institutional
            continuity while enabling disciplined expansion across
            jurisdictions, sectors and emerging technologies.
          </p>
        </div>
      </div>
    </section>

    {/* =========================================================
          03 — STRATEGIC DOCTRINES
      ========================================================= */}

    <section className="py-14 sm:py-16">
      <div className="mb-10 grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)] sm:mb-12">
        <div>
          <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-600">
            02
          </p>

          <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-neutral-500">
            Strategic Doctrines
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl text-neutral-100 sm:text-4xl">
            Governance principles
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
            Core operating doctrines governing risk, capital,
            international expansion and technological integration.
          </p>
        </div>
      </div>

      <div className="border-y border-neutral-900">
        {doctrines.map((doctrine, index) => (
          <MotionDiv
            key={doctrine.title}
            initial={ { opacity: 0, y: 12 }}
            whileInView={ { opacity: 1, y: 0 }}
            viewport={ {
              once: true,
              margin: '-80px',
            }}
            transition={ {
              duration: 0.5,
              delay: Math.min(index * 0.08, 0.2),
            }}
            className="border-b border-neutral-900 py-10 last:border-b-0 sm:py-14"
            >
            <ExecutiveDoctrine
              {...doctrine}
              index={index + 1}
              />
          </MotionDiv>
        ))}
      </div>
    </section>

    {/* =========================================================
          04 — STRATEGIC TIMELINE
      ========================================================= */}

    <section className="border-t border-neutral-900 py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)]">
        <div>
          <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-600">
            03
          </p>

          <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-neutral-500">
            Evolutionary Timeline
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl text-neutral-100 sm:text-4xl">
            Strategic timeline
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
            Institutional milestones reflecting the evolution of
            administrative, geographic and technological capability.
          </p>

          <div className="mt-8 sm:mt-10">
            <Timeline />
          </div>
        </div>
      </div>
    </section>

    {/* =========================================================
          05 — INSTITUTIONAL POSITION
      ========================================================= */}

    <section className="border-t border-neutral-900 py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)]">
        <div>
          <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-600">
            04
          </p>

          <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-neutral-500">
            Institutional Position
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">
              Office
            </p>

            <p className="mt-3 max-w-[220px] text-xs uppercase leading-6 tracking-[0.16em] text-neutral-300">
              Office of the Chief Administrative Officer
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">
              Strategic Alignment
            </p>

            <div className="mt-3 flex max-w-sm flex-wrap gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
              <span>Digital Integration</span>
              <span className="text-neutral-700">/</span>

              <span>Investment Partnerships</span>
              <span className="text-neutral-700">/</span>

              <span>Sustainability</span>
              <span className="text-neutral-700">/</span>

              <span>Design Culture</span>
            </div>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">
              Global Presence
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-300">
              Madrid
              <span className="mx-2 text-neutral-700">·</span>
              San Salvador
              <span className="mx-2 text-neutral-700">·</span>
              Tegucigalpa
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* =========================================================
          FOOTER
      ========================================================= */}

    <footer className="border-t border-neutral-800 pt-8 pb-12 sm:pt-10 sm:pb-16">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[8px] uppercase tracking-[0.45em] text-neutral-600">
          Strategic Growth Network
          <span className="mx-2 text-neutral-800">·</span>
          Proprietary & Confidential
        </p>

        <p className="text-[8px] uppercase tracking-[0.35em] text-neutral-700">
          © {year ?? '2026'} Contra Atlantis Group
        </p>
      </div>
    </footer>
  </MotionMain>
);
}