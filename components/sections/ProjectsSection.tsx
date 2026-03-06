"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen px-6 py-24 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Projects
        </h2>
        <p className="text-gray-400 mb-12">
          Hands-on work in algorithmic trading, generative AI, and fintech.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#007acc]/50 hover:bg-white/8 transition-all duration-300"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-[#007acc]/0 group-hover:bg-[#007acc]/5 transition-colors duration-300 pointer-events-none" />

            <h3 className="text-lg font-semibold text-white mb-2 pr-8">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-xs rounded-full bg-[#007acc]/15 text-[#007acc] border border-[#007acc]/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-sm text-[#007acc] hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub
                <span className="text-xs">→</span>
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-gray-500 text-sm mt-10"
      >
        More projects on{" "}
        <a
          href="https://github.com/DivSeth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#007acc] hover:underline"
        >
          GitHub
        </a>
      </motion.p>
    </section>
  );
}
