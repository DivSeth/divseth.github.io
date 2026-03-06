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
      className="min-h-screen px-6 py-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Learning Roadmap
        </h2>
        <p className="text-gray-400 mb-16 text-center">
          A visual journey of my growth as a software engineer.
        </p>

        <div className="relative">
          {/* Animated center line */}
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
                stroke="#007acc"
                strokeWidth="2"
                strokeDasharray="600"
                strokeDashoffset="600"
              />
            </svg>
          </div>

          {/* Mobile: simple left line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#007acc]/30 md:hidden" />

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
                    <div className="inline-block p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#007acc]/40 transition-colors duration-200 text-left">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full bg-[#007acc] border-4 border-black z-10" />

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-16">
          Follow my journey on{" "}
          <a
            href="https://github.com/DivSeth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007acc] hover:underline"
          >
            GitHub
          </a>{" "}
          or{" "}
          <a
            href="https://linkedin.com/in/divyaanshseth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007acc] hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
