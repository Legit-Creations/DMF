"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const inquiryTypes = [
  "General Inquiry",
  "Business / Partnership",
  "Digital Integration",
  "Investment / Growth",
  "Other",
];

export default function ExecutiveContact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Temporary frontend-only submission.
    // No API, Resend, Formspree, or network request is made.
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#111111]">
      {/* Header */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-black/45">
              Contact
            </p>

            <h1 className="font-display text-6xl uppercase leading-[0.88] tracking-[-0.04em] sm:text-7xl lg:text-[9rem]">
              Let&apos;s
              <br />
              Talk.
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-black/55 sm:text-lg">
              For business inquiries, partnerships, digital projects,
              investment opportunities, or other matters concerning Contra
              Atlantis Group, use the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Area */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Information */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.45em] text-black/40">
              Get in touch
            </p>

            <h2 className="mt-5 max-w-md font-display text-3xl uppercase leading-tight sm:text-4xl">
              A direct line for meaningful conversations.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-black/55">
              Tell us what you are working on, what you need, or what you
              would like to explore. Provide enough context for the right
              response.
            </p>

            <div className="mt-14 border-t border-black/10 pt-8">
              <p className="text-[9px] uppercase tracking-[0.4em] text-black/40">
                Areas of interest
              </p>

              <div className="mt-5 space-y-3 text-sm text-black/70">
                <p>Business &amp; Partnerships</p>
                <p>Digital Integration</p>
                <p>Investment &amp; Growth</p>
                <p>General Inquiries</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-black/10 bg-white p-8 sm:p-12">
                <CheckCircle2
                  size={28}
                  strokeWidth={1.5}
                  className="text-[#B08A32]"
                />

                <h2 className="mt-8 font-display text-3xl uppercase">
                  Message received.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
                  Thank you for reaching out. Your message has been received.
                  We appreciate you taking the time to contact Contra Atlantis
                  Group.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-2 border-b border-black pb-2 text-[10px] font-medium uppercase tracking-[0.3em] transition-opacity hover:opacity-50"
                >
                  Send another message
                  <ArrowUpRight size={13} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-black/10 bg-white p-7 sm:p-10 lg:p-12"
              >
                <div className="grid gap-8 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[9px] uppercase tracking-[0.35em] text-black/45"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-3 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-black/25 focus:border-[#B08A32]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[9px] uppercase tracking-[0.35em] text-black/45"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="mt-3 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-black/25 focus:border-[#B08A32]"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div className="mt-8">
                  <label
                    htmlFor="organization"
                    className="text-[9px] uppercase tracking-[0.35em] text-black/45"
                  >
                    Organization
                  </label>

                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Company or organization (optional)"
                    className="mt-3 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-black/25 focus:border-[#B08A32]"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="mt-8">
                  <label
                    htmlFor="inquiry"
                    className="text-[9px] uppercase tracking-[0.35em] text-black/45"
                  >
                    Reason for contacting
                  </label>

                  <select
                    id="inquiry"
                    name="inquiry"
                    defaultValue=""
                    required
                    className="mt-3 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#B08A32]"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mt-8">
                  <label
                    htmlFor="message"
                    className="text-[9px] uppercase tracking-[0.35em] text-black/45"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    maxLength={2000}
                    placeholder="Tell us what you would like to discuss..."
                    className="mt-3 w-full resize-none border border-black/10 bg-[#FAFAF8] p-4 text-sm leading-7 outline-none transition-colors placeholder:text-black/25 focus:border-[#B08A32]"
                  />
                </div>

                {/* Submit */}
                <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[10px] leading-5 text-black/35">
                    By submitting this form, you agree to be contacted
                    regarding your inquiry.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-[#111111] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#B08A32] hover:text-black"
                  >
                    Send Message

                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="text-[9px] uppercase tracking-[0.35em] text-black/35">
            Contra Atlantis Group
          </p>

          <p className="text-[9px] uppercase tracking-[0.3em] text-black/30">
            Contact &amp; Correspondence
          </p>
        </div>
      </footer>
    </main>
  );
}