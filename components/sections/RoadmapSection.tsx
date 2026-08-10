"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { roadmap } from "@/data/roadmap";

gsap.registerPlugin(ScrollTrigger);

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line drawing downward
      gsap.fromTo(
        lineRef.current,
        { strokeDashoffset: 600 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );

      // Stagger nodes in
      gsap.from(".roadmap-node", {
        opacity: 0,
        scale: 0.8,
        x: (i) => (i % 2 === 0 ? -40 : 40),
        stagger: 0.15,
        duration: 0.6,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="section-shell min-h-screen"
    >
      <div>
        <div className="mb-16 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="section-kicker mb-4">Working Notes / 04</p>
            <h2 className="section-title">How I Think</h2>
          </div>
          <p className="section-copy md:col-span-5 md:pt-12">
            A few habits I keep coming back to while building software: keep
            the system visible, measure the real bottleneck, and make the next
            version easier to change.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-visible hidden md:block">
            <svg
              className="absolute inset-0 w-px h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                ref={lineRef}
                x1="0.5"
                y1="0"
                x2="0.5"
                y2="100%"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="600"
                strokeDashoffset="600"
              />
            </svg>
          </div>

          <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--line)] md:hidden" />

          <div className="space-y-8">
            {roadmap.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`roadmap-node relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`pl-12 md:pl-0 flex-1 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="technical-card inline-block max-w-md p-5 text-left transition-colors duration-200 hover:border-[var(--accent)]">
                      <div className="mono mb-4 text-xs text-[var(--dim)]">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-4 top-5 z-10 h-4 w-4 -translate-x-1/2 border-2 border-[var(--accent)] bg-[var(--background)] md:left-1/2" />

                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        <p className="mono mt-16 text-center text-xs uppercase text-[var(--dim)]">
          Follow the work on{" "}
          <a
            href="https://github.com/DivSeth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            GitHub
          </a>{" "}
          or{" "}
          <a
            href="https://linkedin.com/in/divyaanshseth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
