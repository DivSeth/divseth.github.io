"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center"
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,122,204,0.07)_0%,_transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-400 text-lg mb-14 leading-relaxed">
          Open to SWE &amp; ML opportunities, research collaborations, and
          interesting conversations.
        </p>

        {/* Contact links */}
        <div className="flex flex-col gap-4 mb-12">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:border-[#007acc]/50 hover:bg-white/8 transition-all duration-200 group"
            >
              <span className="text-sm text-gray-400 group-hover:text-[#007acc] transition-colors font-medium">
                {link.label}
              </span>
              <span className="text-white text-sm">{link.display}</span>
            </motion.a>
          ))}
        </div>

        {/* Resume CTA */}
        <motion.a
          href="/docs/Resume Final Aug 2025.pdf"
          download
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-block px-10 py-4 bg-[#007acc] text-white font-semibold rounded-full hover:bg-[#0090e8] active:scale-95 transition-all duration-200 text-lg"
        >
          Download Resume
        </motion.a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 text-gray-600 text-xs"
      >
        Divyaansh Seth · Amherst, MA
      </motion.p>
    </section>
  );
}
