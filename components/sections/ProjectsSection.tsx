"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import OrderBookDemo from "@/components/visuals/OrderBookDemo";
import AutoApplyShowcase from "@/components/visuals/AutoApplyShowcase";
import BacktesterVisual from "@/components/visuals/BacktesterVisual";

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = projects.filter((project) => project.status === "featured");
  const secondary = projects.filter((project) => project.status === "secondary");

  return (
    <section
      ref={ref}
      id="projects"
      className="section-shell min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-14 grid gap-6 md:grid-cols-12"
      >
        <div className="md:col-span-7">
          <p className="section-kicker mb-4">Builds / 03</p>
          <h2 className="section-title">Projects</h2>
        </div>
        <p className="section-copy md:col-span-5 md:pt-12">
          Three project surfaces: one interactive systems visualization, one
          real product screenshot composition, and one generated quant chart.
        </p>
      </motion.div>

      <div className="space-y-8">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="technical-card group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
          >
            <div className="grid gap-6 p-6 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <div className="mono mb-8 flex items-center justify-between border-b border-[var(--line)] pb-4 text-xs text-[var(--dim)]">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span>{project.category}</span>
                </div>

                <h3 className="mb-5 text-3xl font-semibold leading-tight text-[var(--text)]">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="border border-[var(--line)] bg-[var(--surface-lowest)] p-3">
                        <div className="text-2xl font-bold text-[var(--text)]">{metric.value}</div>
                        <div className="section-kicker mt-1">{metric.label}</div>
                        {metric.note && <div className="mt-1 text-xs text-[var(--dim)]">{metric.note}</div>}
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="technical-chip px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono inline-flex items-center gap-2 border-b border-[var(--line)] pb-1 text-xs uppercase text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
                    >
                      Code →
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono inline-flex items-center gap-2 border-b border-[var(--line)] pb-1 text-xs uppercase text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>

              <ProjectVisual projectId={project.visual} />
            </div>
          </motion.div>
        ))}
      </div>

      {secondary.length > 0 && (
        <div className="mt-12 border-b border-[var(--line)]">
          <div className="section-kicker mb-4">Secondary Projects</div>
          {secondary.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="grid gap-3 border-t border-[var(--line)] py-5 transition-colors hover:bg-[rgba(42,42,41,0.45)] md:grid-cols-[1fr_1.4fr_auto]"
            >
              <div>
                <div className="font-semibold text-[var(--text)]">{project.title}</div>
                <div className="mono mt-1 text-xs uppercase text-[var(--dim)]">{project.category}</div>
              </div>
              <p className="text-sm text-[var(--muted)]">{project.description}</p>
              <span className="mono text-xs uppercase text-[var(--accent)]">Open →</span>
            </a>
          ))}
        </div>
      )}

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mono mt-10 text-center text-xs uppercase text-[var(--dim)]"
      >
        More projects on{" "}
        <a
          href="https://github.com/DivSeth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline"
        >
          GitHub
        </a>
      </motion.p>
    </section>
  );
}

function ProjectVisual({ projectId }: { projectId: "orderbook" | "autoapply" | "backtester" | "none" }) {
  if (projectId === "orderbook") return <OrderBookDemo />;
  if (projectId === "autoapply") return <AutoApplyShowcase />;
  if (projectId === "backtester") return <BacktesterVisual />;
  return null;
}
