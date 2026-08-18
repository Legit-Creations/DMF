"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Building2,
  Copyright,
  Mail,
  Send,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [ currentYear, setCurrentYear ] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] font-sans text-white/80"
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8 lg:gap-12">

          {/* Brand / Contact */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="max-w-xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-serif text-3xl tracking-tight text-white sm:text-4xl"
              >
                Julio Ponder Seneres
              </motion.h2>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9a24a]">
                CAO &amp; CTO // Contra Atlantis Group
              </p>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/45 sm:text-[15px]">
                For feedback, business inquiries, partnerships, technology
                projects, or matters concerning the institution, use the
                contact channel below.
              </p>

              <a
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-[#c9a24a]/50 hover:bg-[#c9a24a] hover:text-black"
              >
                Open Contact Channel

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Social Links */}
              <div className="mt-10 flex items-center gap-3">
                <SocialLink
                  href="https://youtube.com/@legitcreations_yt"
                  label="YouTube"
                  icon={<Youtube size={18} strokeWidth={1.7} />}
                />

                <SocialLink
                  href="mailto:operations@legitcreations.com.ng"
                  label="Email Operations"
                  icon={<Mail size={18} strokeWidth={1.7} />}
                />

                <SocialLink
                  href="https://t.me/legitcreations"
                  label="Telegram"
                  icon={<Send size={18} strokeWidth={1.7} />}
                />
              </div>
            </div>
          </div>

          {/* Ecosystem */}
          <FooterSection
            title="The Ecosystem"
            className="md:col-span-3 lg:col-span-2"
          >
            <FooterLink href="#">
              Contra Atlantis Group
            </FooterLink>

            <FooterLink href="#">
              Contra Bobble Bank
            </FooterLink>

            <FooterLink href="#">
              Wealth Acceleration
            </FooterLink>
          </FooterSection>

          {/* Governance */}
          <FooterSection
            title="Governance"
            className="md:col-span-3 lg:col-span-2"
          >
            <FooterLink href="#">
              Compliance
            </FooterLink>

            <FooterLink href="#">
              Digital Privacy
            </FooterLink>

            <FooterLink href="#">
              Investor Relations
            </FooterLink>

            <FooterLink href="#">
              Secure Access
            </FooterLink>
          </FooterSection>

          {/* Regional HQ */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.28em] text-white">
              Regional HQ
            </h3>

            <div className="mt-7 flex items-start gap-4">
              <Building2
                size={19}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#c9a24a]"
              />

              <address className="not-italic">
                <p className="text-sm leading-7 text-white/55">
                  Centro Corporativo
                  <br />
                  Tegucigalpa, Honduras
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-white/25">
                  Available 07:00 — 19:00 CAT
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.07] bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-6 py-8 sm:px-8 md:flex-row lg:px-12">

          <div className="flex flex-col items-center gap-2 text-center text-[10px] uppercase tracking-[0.14em] text-white/25 sm:flex-row sm:gap-5 md:text-left">
            <span className="flex items-center gap-1.5">
              <Copyright size={12} />
              {currentYear} JPS Institutional Portfolio
            </span>

            <span className="hidden text-white/10 sm:inline">
              /
            </span>

            <span>All Rights Reserved</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Return to top of page"
            className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/75 transition-colors duration-300 hover:text-[#c9a24a]"
          >
            Return to Top

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#c9a24a] group-hover:bg-[#c9a24a]/10">
              <ArrowUp
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------
   Footer Section
------------------------------------------------------- */

function FooterSection({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-[10px] font-bold uppercase tracking-[0.28em] text-white">
        {title}
      </h3>

      <ul className="mt-7 space-y-4">{children}</ul>
    </div>
  );
}

/* -------------------------------------------------------
   Footer Link
------------------------------------------------------- */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-2 text-sm text-white/45 transition-all duration-300 hover:translate-x-1 hover:text-white/85"
      >
        <span className="h-1 w-1 rounded-full bg-[#c9a24a] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <span>{children}</span>
      </a>
    </li>
  );
}

/* -------------------------------------------------------
   Social Link
------------------------------------------------------- */

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(isExternal
        ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
        : {})}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/75 transition-all duration-300 hover:border-[#c9a24a] hover:bg-[#c9a24a] hover:text-black"
    >
      {icon}
    </a>
  );
}