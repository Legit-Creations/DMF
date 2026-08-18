'use client';

import {
  Cpu,
  Database,
  Globe,
  Lock,
  Network,
  ShieldCheck,
} from 'lucide-react';

import {
  DynamicMotionDiv as MotionDiv,
} from '@/components/motion/DynamicMotion';

const technicalMandates = [
  {
    number: '01',
    code: 'CORE-01',
    title: 'Digital Infrastructure',
    subtitle: 'Financial Systems & Operational Resilience',
    icon: Cpu,
    description:
      'Digital infrastructure is treated as institutional infrastructure. Systems are designed around reliability, controlled scalability, service continuity, and the ability to support high-value financial and administrative operations without unnecessary technical dependency.',
    principles: [
      'Cloud-native architecture',
      'Service continuity',
      'Regional scalability',
      'Measured system performance',
    ],
  },
  {
    number: '02',
    code: 'SEC-02',
    title: 'Cybersecurity & Sovereignty',
    subtitle: 'Security Architecture & Controlled Access',
    icon: Lock,
    description:
      'Security is embedded into the architecture rather than added after deployment. Access, identity, encryption, system boundaries, and operational exposure are governed through controlled security protocols designed to preserve institutional autonomy.',
    principles: [
      'Zero-trust architecture',
      'Identity-based access',
      'Encryption by design',
      'Controlled operational exposure',
    ],
  },
  {
    number: '03',
    code: 'DATA-03',
    title: 'Data Intelligence',
    subtitle: 'Decision Infrastructure & Predictive Capability',
    icon: Database,
    description:
      'Data is structured as a strategic institutional asset. Information systems are designed to improve operational visibility, identify patterns, support executive decision-making, and convert distributed information into usable intelligence.',
    principles: [
      'Centralized data visibility',
      'Predictive analysis',
      'Decision support systems',
      'Institutional data integrity',
    ],
  },
];

const governancePrinciples = [
  {
    title: 'Human Authority',
    description:
      'Technology supports executive judgment. Material institutional decisions remain subject to appropriate human oversight.',
  },
  {
    title: 'System Accountability',
    description:
      'Critical systems must remain observable, auditable, and attributable throughout their operational lifecycle.',
  },
  {
    title: 'Digital Sovereignty',
    description:
      'Infrastructure decisions prioritize institutional control, resilience, privacy, and strategic independence.',
  },
];

const regions = [ 'Honduras', 'Spain', 'Guatemala' ];

export default function CTODossier() {
  return (
    <main className="w-full overflow-hidden bg-neutral-950 text-neutral-200">

      {/* =========================================================
          01 — DIGITAL INTEGRATION
      ========================================================= */}

      <section className="border-b border-neutral-800">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">

            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-neutral-500" />

                <p className="text-[9px] font-medium uppercase tracking-[0.5em] text-neutral-500">
                  Technology · Infrastructure · Systems
                </p>
              </div>

              <h1 className="max-w-4xl font-display text-5xl leading-[0.88] tracking-[-0.04em] text-neutral-100 sm:text-7xl lg:text-[7rem]">
                Digital
                <br />
                <span className="italic text-neutral-400">
                  Integration
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg sm:leading-9">
                The technological mandate responsible for the architecture,
                security, intelligence, and operational resilience of the
                institution&apos;s digital infrastructure.
              </p>
            </div>

            <div className="border-l border-neutral-800 pl-5">
              <p className="text-[9px] uppercase tracking-[0.45em] text-neutral-600">
                Technology Mandate
              </p>

              <p className="mt-4 text-xs leading-6 text-neutral-500">
                Infrastructure,
                <br />
                cybersecurity,
                <br />
                data intelligence,
                <br />
                digital systems.
              </p>
            </div>

          </div>

          {/* Metadata */}

          <div className="mt-14 grid gap-5 border-t border-neutral-800 pt-8 sm:grid-cols-3">

            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-neutral-500" />

              <div>
                <p className="text-[8px] uppercase tracking-[0.4em] text-neutral-600">
                  Function
                </p>

                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  Chief Technology Officer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-neutral-500" />

              <div>
                <p className="text-[8px] uppercase tracking-[0.4em] text-neutral-600">
                  Regional Scope
                </p>

                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  HND · ES · GT
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Network className="h-4 w-4 text-neutral-500" />

              <div>
                <p className="text-[8px] uppercase tracking-[0.4em] text-neutral-600">
                  Infrastructure
                </p>

                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  Integrated Systems
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          02 — POSITION
      ========================================================= */}

      <section className="border-b border-neutral-800">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)]">

            <div>
              <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-600">
                01
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-neutral-500">
                Position
              </p>
            </div>

            <div className="max-w-4xl">

              <h2 className="font-display text-3xl leading-tight text-neutral-100 sm:text-5xl">
                Technology as institutional infrastructure.
              </h2>

              <p className="mt-7 max-w-3xl text-sm leading-8 text-neutral-400 sm:text-base sm:leading-9">
                The Chief Technology Officer mandate is not limited to
                software delivery. It governs the digital systems through
                which the institution operates, communicates, protects
                information, and converts data into strategic capability.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-neutral-500 sm:text-base sm:leading-9">
                The objective is controlled technological integration:
                systems that remain resilient under operational pressure,
                secure across jurisdictions, and sufficiently observable
                for appropriate oversight.
              </p>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          03 — TECHNICAL MANDATES
      ========================================================= */}

      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)]">

            <div>
              <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-600">
                02
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-neutral-500">
                Technical Mandates
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-neutral-100 sm:text-5xl">
                The digital operating architecture.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-500">
                Three technical domains form the core of the technology
                mandate: infrastructure, security, and intelligence.
              </p>
            </div>

          </div>


          <div className="mt-12 border-y border-neutral-800">

            {technicalMandates.map((item, index) => {
              const Icon = item.icon;

              return (
                <MotionDiv
                  key={item.code}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: '-80px',
                  }}
                  transition={{
                    duration: 0.55,
                    delay: Math.min(index * 0.08, 0.2),
                  }}
                  className="group border-b border-neutral-800 py-12 last:border-b-0 sm:py-16"
                >

                  <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)_220px]">

                    {/* Index */}

                    <div className="flex items-start gap-4">

                      <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-500">
                        {item.number}
                      </span>

                      <div className="h-5 w-px bg-neutral-800" />

                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-700">
                        {item.code}
                      </span>

                    </div>


                    {/* Main content */}

                    <div>

                      <div className="mb-6 flex items-center gap-4">

                        <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 text-neutral-400 transition-colors duration-500 group-hover:border-neutral-500 group-hover:bg-neutral-800 group-hover:text-neutral-200">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div>

                          <h3 className="font-display text-2xl leading-tight text-neutral-100 sm:text-3xl">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-neutral-600">
                            {item.subtitle}
                          </p>

                        </div>

                      </div>

                      <p className="max-w-2xl text-sm leading-8 text-neutral-400 sm:text-base sm:leading-9">
                        {item.description}
                      </p>

                    </div>


                    {/* Principles */}

                    <div className="border-t border-neutral-800 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">

                      <p className="text-[8px] uppercase tracking-[0.45em] text-neutral-600">
                        Operating Principles
                      </p>

                      <ul className="mt-5 space-y-3">

                        {item.principles.map((principle) => (
                          <li
                            key={principle}
                            className="flex gap-3 text-[10px] uppercase leading-5 tracking-[0.12em] text-neutral-500"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />

                            {principle}
                          </li>
                        ))}

                      </ul>

                    </div>

                  </div>

                </MotionDiv>
              );
            })}

          </div>

        </div>
      </section>


      {/* =========================================================
          04 — DIGITAL GOVERNANCE
      ========================================================= */}

      <section className="border-t border-neutral-800">

        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)]">

            <div>
              <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-600">
                03
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-neutral-500">
                Digital Governance
              </p>
            </div>

            <div>

              <h2 className="font-display text-3xl text-neutral-100 sm:text-5xl">
                Technology remains accountable to the institution.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-500">
                Digital capability is valuable only when it remains
                governed, observable, and aligned with institutional
                objectives.
              </p>


              <div className="mt-12 grid border-y border-neutral-800 sm:grid-cols-3">

                {governancePrinciples.map((principle, index) => (
                  <MotionDiv
                    key={principle.title}
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
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="border-b border-neutral-800 py-10 last:border-b-0 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
                  >

                    <ShieldCheck className="h-4 w-4 text-neutral-500" />

                    <h3 className="mt-6 font-display text-xl text-neutral-200">
                      {principle.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-neutral-500">
                      {principle.description}
                    </p>

                  </MotionDiv>
                ))}

              </div>

            </div>
          </div>

        </div>

      </section>


      {/* =========================================================
          05 — REGIONAL DIGITAL SCOPE
      ========================================================= */}

      <section className="border-t border-neutral-800">

        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)]">

            <div>
              <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-600">
                04
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-neutral-500">
                Regional Scope
              </p>
            </div>


            <div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">

                {regions.map((region, index) => (
                  <div
                    key={region}
                    className="flex items-center gap-5"
                  >

                    <span className="font-display text-2xl text-neutral-200 sm:text-3xl">
                      {region}
                    </span>

                    {index < regions.length - 1 && (
                      <span className="text-neutral-600">
                        /
                      </span>
                    )}

                  </div>
                ))}

              </div>


              <p className="mt-8 max-w-3xl text-sm leading-8 text-neutral-500 sm:text-base sm:leading-9">
                Digital systems are designed to operate across
                jurisdictions while maintaining consistent security,
                governance, and operational standards. Regional
                infrastructure is therefore treated as a connected
                institutional network rather than a collection of isolated
                deployments.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-neutral-800">

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">

          <div>

            <p className="text-[8px] uppercase tracking-[0.45em] text-neutral-600">
              Chief Technology Officer
            </p>

            <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-neutral-700">
              Digital Integration · Strategic Infrastructure
            </p>

          </div>

          <p className="text-[8px] uppercase tracking-[0.35em] text-neutral-700">
            Contra Atlantis Group
          </p>

        </div>

      </footer>

    </main>
  );
}