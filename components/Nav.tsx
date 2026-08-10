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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const offset = window.innerHeight * 0.28;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - offset <= window.scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[var(--line)] bg-[rgba(19,19,19,0.86)] backdrop-blur-md"
          : "border-[rgba(68,71,72,0.45)] bg-[rgba(19,19,19,0.42)] backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-4 md:px-16">
        <a
          href="#hero"
          className="mono whitespace-nowrap text-xs font-semibold uppercase text-[var(--text)]"
        >
          DS/SYS
        </a>
        <div className="flex items-center gap-1 overflow-x-auto">
          {sections.map((id, index) => (
            <a
              key={id}
              href={`#${id}`}
              className={`mono whitespace-nowrap border px-2.5 py-2 text-[11px] font-semibold uppercase transition-colors duration-200 sm:px-3 ${
                active === id
                  ? "border-[var(--accent)] text-[var(--accent)]"
                  : "border-transparent text-[var(--dim)] hover:border-[var(--line)] hover:text-[var(--text)]"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
              <span className="hidden sm:inline"> {labels[id]}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
