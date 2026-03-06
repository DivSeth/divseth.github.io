"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleWords = ["Hi,", "I'm", "Divyaansh", "Seth."];
const subtitleWords = [
  "CS",
  "&",
  "Math",
  "@",
  "UMass",
  "·",
  "AI",
  "·",
  "Quant",
  "·",
  "Full-Stack",
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
      className="relative min-h-screen flex flex-col items-center justify-center bg-black px-6 text-center"
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,122,204,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <h1
        ref={titleRef}
        className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight mb-6"
      >
        {titleWords.map((word, i) => (
          <span key={i} className="hero-word inline-block mr-4 last:mr-0">
            {word === "Divyaansh" || word === "Seth." ? (
              <span className="text-[#007acc]">{word}</span>
            ) : (
              word
            )}
          </span>
        ))}
      </h1>

      <p
        ref={subtitleRef}
        className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl"
      >
        {subtitleWords.map((word, i) => (
          <span key={i} className="hero-subtitle-word inline-block mr-2">
            {word}
          </span>
        ))}
      </p>

      <div ref={ctaRef} className="flex gap-4 flex-wrap justify-center">
        <a
          href="#work"
          className="px-8 py-3 bg-[#007acc] text-white font-semibold rounded-full hover:bg-[#0090e8] transition-colors duration-200"
        >
          View My Work
        </a>
        <a
          href="/docs/Resume Final Aug 2025.pdf"
          download
          className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
        >
          Download Resume
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
