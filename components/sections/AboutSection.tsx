"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Education", value: "UMass Amherst", sub: "BS CS & Math · Business Minor" },
  { label: "Experience", value: "NIC · Deloitte · GT", sub: "AI · Analytics · Product" },
  { label: "Projects", value: "4+", sub: "RAG · Quant · Finance" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center px-6 py-24 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-[#007acc]/20 blur-2xl" />
            <Image
              src="/images/profile2.jpg"
              alt="Divyaansh Seth"
              width={280}
              height={280}
              className="relative rounded-full object-cover border-4 border-[#007acc]/30 shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I&apos;m <strong className="text-white">Divyaansh Seth</strong>, an
            aspiring technologist with a deep interest in AI, data science, and
            full-stack systems. I&apos;m currently a junior at UMass Amherst,
            double majoring in Computer Science and Mathematics, with a minor in
            Business. I enjoy building impactful software projects, exploring
            algorithmic finance, and contributing to research at the
            intersection of AI and public policy.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div>
                  <div className="text-xs text-[#007acc] uppercase tracking-widest font-medium mb-1">
                    {s.label}
                  </div>
                  <div className="text-white font-semibold">{s.value}</div>
                  <div className="text-gray-400 text-sm">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="mailto:divyaanshset@umass.edu"
              className="px-5 py-2 rounded-full border border-white/20 text-sm text-gray-300 hover:text-white hover:border-white/50 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/DivSeth"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-white/20 text-sm text-gray-300 hover:text-white hover:border-white/50 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/divyaanshseth"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-white/20 text-sm text-gray-300 hover:text-white hover:border-white/50 transition-colors"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
