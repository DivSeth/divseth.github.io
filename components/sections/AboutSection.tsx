"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Education", value: "UMass Amherst", sub: "BS CS & Math · Business Minor" },
  { label: "Experience", value: "Siemens · Deloitte · NIC", sub: "Software · AI Systems · Retrieval" },
  { label: "Projects", value: "Systems + AI", sub: "Matching engines · AutoApply · Backtesting" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="section-shell min-h-screen"
    >
      <div className="grid w-full gap-12 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-5"
        >
          <div className="technical-card p-3">
            <Image
              src="/images/profile2.jpg"
              alt="Divyaansh Seth"
              width={640}
              height={760}
              className="aspect-[4/5] w-full object-cover grayscale"
              priority
            />
            <div className="mt-3 grid grid-cols-2 border-t border-[var(--line)] pt-3">
              <span className="mono text-xs uppercase text-[var(--dim)]">
                Based
              </span>
              <span className="text-right text-sm text-[var(--text)]">
                Amherst / New Delhi
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="md:col-span-7"
        >
          <p className="section-kicker mb-4">Profile / 01</p>
          <h2 className="section-title mb-8">About Me</h2>
          <p className="section-copy mb-10">
            I&apos;m <strong className="text-[var(--text)]">Divyaansh Seth</strong>,
            a Computer Science and Mathematics student at UMass Amherst
            interested in software that sits close to difficult technical
            problems: distributed AI systems, agentic tooling, and
            performance-sensitive systems. I like understanding why systems
            behave the way they do, then making them better.
          </p>

          <div className="grid grid-cols-1">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="grid grid-cols-[3rem_1fr] border-t border-[var(--line)] py-5 last:border-b md:grid-cols-[4rem_1fr]"
              >
                <div className="mono text-xs text-[var(--dim)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="section-kicker mb-2">
                    {s.label}
                  </div>
                  <div className="text-xl font-semibold text-[var(--text)]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="mailto:divyaanshset@umass.edu"
              className="button-secondary px-5 py-3"
            >
              Email
            </a>
            <a
              href="https://github.com/DivSeth"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary px-5 py-3"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/divyaanshseth"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary px-5 py-3"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
