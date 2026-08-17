"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { DynamicMotionDiv as MotionDiv } from "@/components/motion/DynamicMotion";
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

const MAX_CHARS = 1200;

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVars = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ExecutiveContact() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState("");

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) {
      setError("Please provide a briefing before transmitting.");
      return;
    }

    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xojnqyjg",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Transmission failed.");
      }

      setSucceeded(true);
      setMessage("");
      form.reset();
    } catch (err) {
      console.error("Formspree submission error:", err);
      setError(
        "Transmission failed. Please verify your details and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-gold/30">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(197,157,72,0.14),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-40">
          <MotionDiv
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="grid gap-16 lg:grid-cols-[1fr_280px] lg:items-end"
          >
            <MotionDiv variants={itemVars}>
              <div className="mb-7 flex items-center gap-3">
                <Fingerprint className="h-4 w-4 text-gold" />

                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-gold">
                  Executive Communications
                </span>
              </div>

              <h1 className="max-w-4xl font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                Strategic
                <br />
                <span className="font-serif font-light italic text-gold">
                  Inquiry
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                A direct channel for institutional, strategic growth,
                technology and executive-level engagements.
              </p>
            </MotionDiv>

            <MotionDiv
              variants={itemVars}
              className="border-l border-white/10 pl-6 lg:pb-2"
            >
              <p className="text-[9px] uppercase tracking-[0.45em] text-white/30">
                Executive Office
              </p>

              <p className="mt-4 text-xs uppercase leading-6 tracking-[0.18em] text-white/60">
                Administrative Governance
                <br />
                Digital Integration
                <br />
                Strategic Growth
              </p>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="bg-[#F8F8F6] text-obsidian">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-12 lg:px-12 lg:py-28">

          {/* LEFT */}
          <MotionDiv
            variants={containerVars}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12 lg:col-span-4"
          >
            <MotionDiv variants={itemVars}>
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center border border-obsidian/15 text-gold-dark">
                  <Landmark size={17} />
                </div>

                <h2 className="font-display text-xl uppercase">
                  Strategic Growth
                </h2>
              </div>

              <p className="border-l border-gold-dark pl-5 text-sm leading-7 text-ash">
                Institutional coordination, investment strategy and
                executive administration.
              </p>
            </MotionDiv>

            <MotionDiv variants={itemVars}>
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center border border-obsidian/15 text-gold-dark">
                  <Zap size={17} />
                </div>

                <h2 className="font-display text-xl uppercase">
                  Digital Integration
                </h2>
              </div>

              <p className="border-l border-gold-dark pl-5 text-sm leading-7 text-ash">
                Technology infrastructure, digital systems and
                institutional modernization.
              </p>
            </MotionDiv>

            <MotionDiv
              variants={itemVars}
              className="flex items-center gap-3 pt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-ash"
            >
              <Globe size={14} className="text-gold-dark" />
              Madrid · San Salvador · Tegucigalpa
            </MotionDiv>
          </MotionDiv>

          {/* FORM */}
          <MotionDiv
            variants={containerVars}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="relative overflow-hidden border border-obsidian/10 bg-white p-7 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.3)] sm:p-10 lg:p-12">

              <Lock className="absolute right-8 top-8 h-20 w-20 text-obsidian/[0.025]" />

              <div className="relative z-10 mb-10 flex items-center justify-between border-b border-obsidian/10 pb-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.45em] text-gold-dark">
                    Executive Briefing
                  </p>

                  <p className="mt-2 text-xs text-ash">
                    Submit an inquiry for review.
                  </p>
                </div>

                <ShieldCheck className="h-5 w-5 text-gold-dark" />
              </div>

              <AnimatePresence mode="wait">

                {/* SUCCESS */}
                {succeeded ? (
                  <MotionDiv
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 py-16 text-center"
                  >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                      <CheckCircle2
                        size={34}
                        className="text-gold-dark"
                      />
                    </div>

                    <h3 className="font-display text-2xl uppercase">
                      Transmission Successful
                    </h3>

                    <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-ash">
                      Your inquiry has been received and submitted
                      for executive review.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setSucceeded(false);
                        setError("");
                      }}
                      className="mt-8 inline-flex items-center gap-2 bg-obsidian px-5 py-3 text-[9px] font-bold uppercase tracking-[0.3em] text-white transition hover:bg-gold hover:text-obsidian"
                    >
                      New Inquiry
                      <ArrowRight size={13} />
                    </button>
                  </MotionDiv>
                ) : (

                  /* FORM */
                  <MotionDiv
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <form
                      onSubmit={submitForm}
                      className="relative z-10 space-y-7"
                    >

                      {/* NAME + EMAIL */}
                      <div className="grid gap-7 sm:grid-cols-2">

                        <div>
                          <label
                            htmlFor="name"
                            className="text-[9px] font-bold uppercase tracking-[0.35em] text-ash"
                          >
                            Identity
                          </label>

                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Principal Name"
                            className="mt-2 w-full border-b border-obsidian/10 bg-transparent py-3 text-sm outline-none placeholder:text-obsidian/25 focus:border-gold-dark"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="text-[9px] font-bold uppercase tracking-[0.35em] text-ash"
                          >
                            Email
                          </label>

                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="official@domain.com"
                            className="mt-2 w-full border-b border-obsidian/10 bg-transparent py-3 text-sm outline-none placeholder:text-obsidian/25 focus:border-gold-dark"
                          />
                        </div>

                      </div>

                      {/* INTENT */}
                      <div>
                        <label
                          htmlFor="intent"
                          className="text-[9px] font-bold uppercase tracking-[0.35em] text-ash"
                        >
                          Strategic Intent
                        </label>

                        <select
                          id="intent"
                          name="intent"
                          defaultValue="Executive Protocol Consultation"
                          className="mt-2 w-full border-b border-obsidian/10 bg-transparent py-3 text-sm outline-none focus:border-gold-dark"
                        >
                          <option>
                            Wealth Acceleration Opportunity
                          </option>

                          <option>
                            Strategic Growth Network Inquiry
                          </option>

                          <option>
                            Digital Integration Partnership
                          </option>

                          <option>
                            Executive Protocol Consultation
                          </option>
                        </select>
                      </div>

                      {/* MESSAGE */}
                      <div>
                        <label
                          htmlFor="message"
                          className="text-[9px] font-bold uppercase tracking-[0.35em] text-ash"
                        >
                          Detailed Briefing
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          maxLength={MAX_CHARS}
                          required
                          rows={6}
                          placeholder="Define objectives and scope..."
                          className="mt-2 w-full resize-none border border-obsidian/10 bg-transparent p-4 text-sm leading-6 outline-none placeholder:text-obsidian/25 focus:border-gold-dark"
                        />

                        <div className="mt-2 flex justify-end text-[9px] tracking-widest text-ash">
                          {message.length}/{MAX_CHARS}
                        </div>
                      </div>

                      {/* ERROR */}
                      {error && (
                        <p
                          role="alert"
                          className="border-l-2 border-red-500 bg-red-50 px-4 py-3 text-xs text-red-700"
                        >
                          {error}
                        </p>
                      )}

                      {/* SUBMIT */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex w-full items-center justify-center gap-3 bg-obsidian py-4 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition hover:bg-gold hover:text-obsidian disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {submitting
                          ? "TRANSMITTING..."
                          : "SEND INQUIRY"}

                        <Send size={14} />
                      </button>

                    </form>
                  </MotionDiv>
                )}

              </AnimatePresence>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="border-t border-white/10 bg-[#050505] py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          <p className="text-[8px] uppercase tracking-[0.4em] text-white/30">
            Feedback and Communications
          </p>

          <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
            Contra Atlantis Group
          </p>
        </div>
      </footer>

    </main>
  );
}