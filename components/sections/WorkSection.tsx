"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { work } from "@/data/work";
import { WorkVisual } from "@/components/visuals/WorkVisuals";

gsap.registerPlugin(ScrollTrigger);

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-card", {
        opacity: 0,
        x: -50,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  return (
    <section
      ref={sectionRef}
      id="work"
      className="section-shell min-h-screen"
    >
      <div className="mb-14 grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="section-kicker mb-4">Experience / 02</p>
          <h2 className="section-title">Work Experience</h2>
        </div>
        <p className="section-copy md:col-span-5 md:pt-12">
          Production software, AI systems, retrieval pipelines, and secondary
          work kept compact. Select a row for the visual story.
        </p>
      </div>

      <div className="border-b border-[var(--line)]">
      {work.map((item, index) => (
        <div
          key={item.id}
          className="work-card group cursor-pointer border-t border-[var(--line)] bg-[rgba(42,42,41,0.45)] transition-colors duration-200 hover:bg-[var(--surface-high)]"
          onClick={() => toggle(item.id)}
        >
          <div className="grid gap-4 p-5 md:grid-cols-[4rem_1fr_3rem] md:p-6">
            <span className="mono text-xs text-[var(--dim)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <div className="text-xl font-semibold text-[var(--text)]">
                {item.company}
              </div>
              <div className="mono mt-2 text-xs uppercase text-[var(--accent)]">
                {item.role} · {item.meta}
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                {item.summary}
              </p>
            </div>
            <span className="mono inline-grid h-9 w-9 place-items-center justify-self-start border border-[var(--line)] bg-[var(--surface-lowest)] text-sm text-[var(--muted)] transition-colors duration-200 group-hover:border-[var(--accent)] md:justify-self-end">
              {expanded === item.id ? "-" : "+"}
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded === item.id ? "max-h-[1100px]" : "max-h-0"
            }`}
          >
            <div className="border-t border-[var(--line)] px-5 pb-6 pt-5 text-sm leading-relaxed text-[var(--muted)] md:ml-24 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p>{item.description}</p>
                  {item.metrics && (
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {item.metrics.map((metric) => (
                        <div key={metric.label} className="border border-[var(--line)] bg-[var(--surface-lowest)] p-3">
                          <div className="text-2xl font-bold text-[var(--text)]">{metric.value}</div>
                          <div className="section-kicker mt-1">{metric.label}</div>
                          {metric.note && <div className="mt-1 text-xs text-[var(--dim)]">{metric.note}</div>}
                        </div>
                      ))}
                    </div>
                  )}
                  {item.stack && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span key={tech} className="technical-chip px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <WorkVisual item={item} />
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

      <p className="mono mt-8 text-center text-xs uppercase text-[var(--dim)]">
        More on{" "}
        <a
          href="https://linkedin.com/in/divyaanshseth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline"
        >
          LinkedIn
        </a>
      </p>
    </section>
  );
}
