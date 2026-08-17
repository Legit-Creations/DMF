'use client';

interface DoctrineSection {
  heading: string;
  points: string[];
}

interface DoctrineProps {
  title: string;
  subtitle: string;
  content?: string[];
  sections?: DoctrineSection[];
  index?: number;
}

export default function ExecutiveDoctrine({
  title,
  subtitle,
  content,
  sections,
  index = 1,
}: DoctrineProps) {
  const doctrineNumber = String(index).padStart(2, '0');

  return (
    <article className="relative">
      <div className="grid gap-7 lg:grid-cols-[110px_minmax(0,1fr)]">
        {/* Desktop Doctrine Index */}
        <div className="hidden lg:block">
          <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-700">
            Doctrine
          </span>

          <div className="mt-3 font-display text-4xl leading-none text-neutral-800">
            {doctrineNumber}
          </div>
        </div>

        {/* Doctrine Content */}
        <div className="max-w-3xl">
          <header>
            {/* Mobile Index */}
            <div className="flex items-center gap-4 lg:hidden">
              <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">
                Doctrine {doctrineNumber}
              </span>

              <span className="h-px w-8 bg-neutral-800" />
            </div>

            <h2 className="mt-3 font-display text-2xl leading-tight tracking-[-0.015em] text-neutral-100 sm:text-3xl">
              {title}
            </h2>

            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-neutral-500 sm:text-xs sm:tracking-[0.2em]">
              {subtitle}
            </p>
          </header>

          {/* Public Edition */}
          {content && content.length > 0 && (
            <div className="mt-7 space-y-5 border-l border-neutral-900 pl-5 sm:pl-6">
              {content.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="text-sm leading-7 text-neutral-400 sm:text-[15px] sm:leading-7"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Investor / Board Edition */}
          {sections && sections.length > 0 && (
            <div className="mt-8 space-y-8">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-[9px] uppercase tracking-[0.35em] text-neutral-600">
                    {section.heading}
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex gap-3 text-sm leading-6 text-neutral-400"
                      >
                        <span className="mt-[2px] text-neutral-700">
                          —
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}