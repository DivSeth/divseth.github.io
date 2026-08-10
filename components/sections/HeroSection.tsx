"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleWords = ["Hi,", "I'm", "Divyaansh", "Seth."];
const subtitleWords = [
  "CS + Math",
  "Software",
  "AI Systems",
  "Quant",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation (no scroll needed)
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-word", {
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 0.9,
      })
        .from(
          ".hero-subtitle-word",
          {
            opacity: 0,
            y: 20,
            stagger: 0.06,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.2"
        );

      // Parallax scroll-out effect
      gsap.to(containerRef.current, {
        opacity: 0,
        y: -80,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen px-5 pt-32 md:px-16"
    >
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1280px] grid-cols-1 content-center gap-12 border-b border-[var(--line)] pb-16 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="section-kicker mb-6">Portfolio / Engineered Systems</p>
          <h1
            ref={titleRef}
            className="mb-8 text-[clamp(4rem,12vw,9rem)] font-extrabold leading-[0.92] text-[var(--text)]"
          >
            {titleWords.map((word, i) => (
              <span key={i} className="hero-word block">
                {word === "Divyaansh" || word === "Seth." ? (
                  <span className="text-[var(--primary)]">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          <p
            ref={subtitleRef}
            className="section-copy max-w-2xl text-[var(--muted)]"
          >
            <span className="hero-subtitle-word mb-4 block text-[var(--text)]">
              Building software, intelligent systems, and occasionally things
              that move very fast.
            </span>
            {subtitleWords.map((word, i) => (
              <span key={i} className="hero-subtitle-word mr-3 inline-block">
                {word}
                {i < subtitleWords.length - 1 ? " /" : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="flex flex-col justify-end gap-6 md:col-span-4">
          <div className="technical-card p-5">
            <div className="mono mb-6 text-xs uppercase text-[var(--dim)]">
              Current Signal
            </div>
            <div className="space-y-4">
              {["Distributed AI systems", "Matching engines", "Agentic automation"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-t border-[var(--line)] pt-3"
                  >
                    <span className="mono text-xs text-[var(--dim)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[var(--text)]">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div ref={ctaRef} className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href="#work" className="button-primary px-6 py-4">
              View Work
            </a>
            <a
              href="/docs/resumes/swe-ai-hybrid.pdf"
              download
              className="button-secondary px-6 py-4"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="grid gap-3 border-t border-[var(--line)] pt-6 md:col-span-12 md:grid-cols-4">
          {[
            ["6.27M", "events/sec"],
            ["0.42 µs", "p99 raw engine processing"],
            ["13%", "pipeline runtime reduction"],
            ["84%", "expert annotation agreement"],
          ].map(([value, label]) => (
            <div key={label} className="border border-[var(--line)] bg-[rgba(42,42,41,0.45)] p-4">
              <div className="text-3xl font-bold text-[var(--text)]">{value}</div>
              <div className="mono mt-2 text-xs uppercase text-[var(--dim)]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
