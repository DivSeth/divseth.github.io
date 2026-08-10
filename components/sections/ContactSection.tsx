"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { resumeOptions } from "@/data/resumes";

const links = [
  {
    label: "Email",
    href: "mailto:divyaanshset@umass.edu",
    display: "divyaanshset@umass.edu",
  },
  {
    label: "GitHub",
    href: "https://github.com/DivSeth",
    display: "github.com/DivSeth",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/divyaanshseth",
    display: "linkedin.com/in/divyaanshseth",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="section-shell relative min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid w-full gap-12 md:grid-cols-12"
      >
        <div className="md:col-span-5">
          <p className="section-kicker mb-4">Contact / 05</p>
          <h2 className="section-title mb-8">Let&apos;s Connect</h2>
          <p className="section-copy">
            Open to SWE &amp; ML opportunities, research collaborations, and
            interesting conversations.
          </p>
          <div className="mt-8 border border-[var(--line)] bg-[rgba(42,42,41,0.45)] p-4">
            <div className="section-kicker">Resume Router</div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Pick the version that matches what you want to evaluate.
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
        <div className="mb-10 border-b border-[var(--line)]">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group grid gap-2 border-t border-[var(--line)] px-0 py-6 transition-colors duration-200 hover:bg-[rgba(42,42,41,0.45)] md:grid-cols-[8rem_1fr]"
            >
              <span className="mono text-xs uppercase text-[var(--dim)] transition-colors group-hover:text-[var(--accent)]">
                {String(i + 1).padStart(2, "0")} / {link.label}
              </span>
              <span className="break-all text-sm text-[var(--text)] md:text-right">
                {link.display}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="grid gap-3">
          {resumeOptions.map((resume, i) => (
            <motion.a
              key={resume.id}
              href={resume.href}
              download
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
              className="group border border-[var(--line)] p-4 transition-colors hover:border-[var(--accent)] hover:bg-[rgba(42,42,41,0.45)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="font-semibold text-[var(--text)]">{resume.label}</div>
                  <div className="mono mt-1 text-xs uppercase text-[var(--accent)]">{resume.focus}</div>
                </div>
                <span className="mono text-xs uppercase text-[var(--dim)] group-hover:text-[var(--accent)]">
                  Download →
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {resume.description}
              </p>
            </motion.a>
          ))}
        </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1 }}
        className="mono absolute bottom-8 left-5 text-xs uppercase text-[var(--dim)] md:left-16"
      >
        Divyaansh Seth · Amherst / New Delhi
      </motion.p>
    </section>
  );
}
