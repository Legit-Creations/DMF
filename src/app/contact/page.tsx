"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { DynamicMotionDiv as MotionDiv } from "@/components/motion/DynamicMotion";

import type { Variants } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  Fingerprint,
  Globe,
  Landmark,
  Lock,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* MOTION                                                                     */
/* -------------------------------------------------------------------------- */

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVars: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

export default function ExecutiveContact() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState("");

  const maxChars = 1200;

  const charCount = message.length;

  /* ------------------------------------------------------------------------ */
  /* FORMSPREE                                                                */
  /* ------------------------------------------------------------------------ */

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!message.trim()) {
      setError("Please provide a briefing before transmitting.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "https://formspree.io/f/xojnqyjg",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: new FormData(form),
        }
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        console.error("Formspree submission failed:", {
          status: response.status,
          statusText: response.statusText,
          data,
        });

        const formspreeErrors = data?.errors
          ?.map((item: { message?: string }) => item.message)
          .filter(Boolean)
          .join(", ");

        setError(
          formspreeErrors ||
            data?.error ||
            `Transmission could not be completed (${response.status}).`
        );

        return;
      }

      /* Successful transmission */
      setSucceeded(true);
      setMessage("");
      form.reset();
    } catch (err) {
      console.error("Formspree network error:", err);

      setError(
        "The transmission service could not be reached. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /* ------------------------------------------------------------------------ */
  /* RENDER                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#C59D48]/30">
      {/* ==================================================================== */}
      {/* HERO                                                                 */}
      {/* ==================================================================== */}

      <section className="relative overflow-hidden bg-[#070808]">
        {/* Technical background — deliberately restrained */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.035]"
        >
          <div
            className="
              absolute inset-0
              bg-[linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.8)_1px,transparent_1px)]
              bg-[size:72px_72px]
            "
          />
        </div>

        {/* Gold atmospheric glow */}
        <div
          aria-hidden="true"
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#C59D48]/[0.08]
            blur-[120px]
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
          <MotionDiv
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="min-h-[68vh] md:min-h-[72vh] flex flex-col justify-center py-28 md:py-32"
          >
            {/* Classification */}
            <MotionDiv
              variants={itemVars}
              className="flex items-center gap-4 mb-10"
            >
              <div className="flex items-center justify-center w-8 h-8 border border-[#C59D48]/30">
                <Fingerprint
                  size={15}
                  className="text-[#C59D48]"
                />
              </div>

              <span className="text-[#C59D48] text-[9px] md:text-[10px] font-black tracking-[0.48em] uppercase">
                Executive Channel // Strategic Access
              </span>
            </MotionDiv>

            {/* Main composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-end">
              {/* Title */}
              <MotionDiv
                variants={itemVars}
                className="lg:col-span-8"
              >
                <div className="flex items-start gap-5">
                  <span className="hidden md:block text-[9px] font-mono tracking-[0.3em] text-white/20 pt-3">
                    01
                  </span>

                  <h1 className="font-display uppercase tracking-[-0.045em] leading-[0.88] text-[clamp(4rem,13vw,9.5rem)]">
                    Strategic
                    <br />
                    <span className="font-serif italic font-light text-[#C59D48]">
                      Inquiry
                    </span>
                  </h1>
                </div>
              </MotionDiv>

              {/* Executive descriptor */}
              <MotionDiv
                variants={itemVars}
                className="lg:col-span-4 lg:pb-2"
              >
                <div className="border-l border-[#C59D48]/40 pl-6">
                  <p className="text-sm md:text-base leading-7 text-white/65 font-light max-w-sm">
                    A direct channel for institutional discussions involving
                    strategic growth, capital infrastructure and digital
                    integration.
                  </p>
                </div>
              </MotionDiv>
            </div>

            {/* Bottom dossier metadata */}
            <MotionDiv
              variants={itemVars}
              className="mt-16 md:mt-24 border-t border-white/10 pt-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="block text-[8px] uppercase tracking-[0.35em] text-white/30 mb-2">
                    Access
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                    Executive
                  </span>
                </div>

                <div>
                  <span className="block text-[8px] uppercase tracking-[0.35em] text-white/30 mb-2">
                    Scope
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                    Institutional
                  </span>
                </div>

                <div className="sm:text-right">
                  <span className="block text-[8px] uppercase tracking-[0.35em] text-white/30 mb-2">
                    Region
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C59D48]">
                    HND — ES — GT
                  </span>
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* BRIEFING AREA                                                         */}
      {/* ==================================================================== */}

      <section className="bg-[#F7F6F2] text-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* LEFT — CONTEXT */}
            <MotionDiv
              variants={containerVars}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-4"
            >
              <MotionDiv variants={itemVars}>
                <span className="text-[9px] font-black uppercase tracking-[0.45em] text-[#9A762D]">
                  Strategic Intent
                </span>

                <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[0.95] tracking-tight">
                  Begin the
                  <br />
                  <span className="italic text-[#9A762D]">
                    conversation.
                  </span>
                </h2>

                <p className="mt-8 text-sm leading-7 text-black/55 max-w-sm">
                  Provide the context, objective and scope of your inquiry.
                  Relevant executive engagements will be reviewed directly.
                </p>
              </MotionDiv>

              {/* Engagement pillars */}
              <div className="mt-14 space-y-9">
                <MotionDiv
                  variants={itemVars}
                  className="flex gap-5"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-black/10">
                    <Landmark
                      size={16}
                      className="text-[#9A762D]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.25em]">
                      Wealth Acceleration
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-black/45">
                      Institutional growth, capital strategy and
                      infrastructure.
                    </p>
                  </div>
                </MotionDiv>

                <MotionDiv
                  variants={itemVars}
                  className="flex gap-5"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-black/10">
                    <Zap
                      size={16}
                      className="text-[#9A762D]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.25em]">
                      Digital Integration
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-black/45">
                      Technology modernization, digital infrastructure and
                      integration.
                    </p>
                  </div>
                </MotionDiv>

                <MotionDiv
                  variants={itemVars}
                  className="flex gap-5"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-black/10">
                    <Globe
                      size={16}
                      className="text-[#9A762D]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.25em]">
                      Regional Strategy
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-black/45">
                      Cross-jurisdictional institutional opportunities across
                      the region.
                    </p>
                  </div>
                </MotionDiv>
              </div>
            </MotionDiv>

            {/* RIGHT — FORM */}
            <MotionDiv
              variants={containerVars}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-8"
            >
              <div className="bg-white border border-black/8 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.25)]">
                {/* Form header */}
                <div className="px-7 md:px-12 py-7 border-b border-black/8 flex items-center justify-between">
                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.4em] text-black/35">
                      Executive Dossier
                    </span>

                    <h3 className="mt-2 text-sm font-black uppercase tracking-[0.25em]">
                      Briefing Transmission
                    </h3>
                  </div>

                  <Lock
                    size={17}
                    className="text-[#9A762D]"
                  />
                </div>

                <AnimatePresence mode="wait">
                  {succeeded ? (
                    /* ====================================================== */
                    /* SUCCESS STATE                                          */
                    /* ====================================================== */

                    <MotionDiv
                      key="success"
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="px-7 md:px-12 py-20 text-center"
                      aria-live="polite"
                    >
                      <div className="w-16 h-16 mx-auto flex items-center justify-center border border-[#9A762D]/30">
                        <CheckCircle2
                          size={30}
                          className="text-[#9A762D]"
                        />
                      </div>

                      <h4 className="mt-8 font-serif text-3xl md:text-4xl">
                        Transmission received.
                      </h4>

                      <p className="mt-4 text-xs uppercase tracking-[0.25em] text-black/45">
                        Your briefing has been submitted successfully.
                      </p>

                      <button
                        type="button"
                        onClick={() => {
                          setSucceeded(false);
                          setError("");
                        }}
                        className="
                          mt-10
                          inline-flex
                          items-center
                          gap-3
                          bg-[#080808]
                          text-white
                          px-6
                          py-3
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.3em]
                          hover:bg-[#9A762D]
                          transition-colors
                        "
                      >
                        New Inquiry
                        <ArrowRight size={13} />
                      </button>
                    </MotionDiv>
                  ) : (
                    /* ====================================================== */
                    /* FORM                                                   */
                    /* ====================================================== */

                    <MotionDiv
                      key="form"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="px-7 md:px-12 py-10 md:py-12"
                    >
                      <form
                        onSubmit={submitForm}
                        autoComplete="on"
                        className="space-y-9"
                        aria-label="Executive briefing form"
                      >
                        {/* Identity + Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-[8px] font-black uppercase tracking-[0.35em] text-black/45"
                            >
                              Identity
                            </label>

                            <input
                              id="name"
                              type="text"
                              name="name"
                              placeholder="Principal Name"
                              required
                              className="
                                mt-3
                                w-full
                                bg-transparent
                                border-0
                                border-b
                                border-black/12
                                py-3
                                text-sm
                                text-black
                                outline-none
                                placeholder:text-black/25
                                focus:border-[#9A762D]
                                transition-colors
                              "
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-[8px] font-black uppercase tracking-[0.35em] text-black/45"
                            >
                              Secure Email
                            </label>

                            <input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="official@domain.com"
                              required
                              className="
                                mt-3
                                w-full
                                bg-transparent
                                border-0
                                border-b
                                border-black/12
                                py-3
                                text-sm
                                text-black
                                outline-none
                                placeholder:text-black/25
                                focus:border-[#9A762D]
                                transition-colors
                              "
                            />
                          </div>
                        </div>

                        {/* Intent */}
         