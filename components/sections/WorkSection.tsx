"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { work } from "@/data/work";

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
      className="min-h-screen px-6 py-24 max-w-4xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Work Experience
      </h2>
      <p className="text-gray-400 mb-12">
        Internships, research, and leadership — click any card to expand.
      </p>

      {work.map((item) => (
        <div
          key={item.id}
          className="work-card mb-4 rounded-2xl border border-white/10 bg-white/5 overflow-hidden cursor-pointer hover:border-[#007acc]/40 transition-colors duration-200"
          onClick={() => toggle(item.id)}
        >
          <div className="p-6 flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="text-lg font-semibold text-white">
                {item.title}
              </div>
              <div className="text-sm text-[#007acc] mt-1">{item.meta}</div>
            </div>
            <span
              className={`text-gray-400 text-xl mt-1 transition-transform duration-300 flex-shrink-0 ${
                expanded === item.id ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded === item.id ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-6 text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
              {item.description}
            </div>
          </div>
        </div>
      ))}

      <p className="text-center text-gray-500 text-sm mt-8">
        More on{" "}
        <a
          href="https://linkedin.com/in/divyaanshseth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#007acc] hover:underline"
        >
          LinkedIn
        </a>
      </p>
    </section>
  );
}
