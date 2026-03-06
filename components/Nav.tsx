"use client";

import { useEffect, useState } from "react";

const sections = ["hero", "about", "work", "projects", "roadmap", "contact"];
const labels: Record<string, string> = {
  hero: "Home",
  about: "About",
  work: "Work",
  projects: "Projects",
  roadmap: "Roadmap",
  contact: "Contact",
};

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center gap-6 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
            active === id
              ? "text-[#007acc]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {labels[id]}
        </a>
      ))}
    </nav>
  );
}
