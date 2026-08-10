export type ResumeOption = {
  id: string;
  label: string;
  focus: string;
  href: string;
  description: string;
};

export const resumeOptions: ResumeOption[] = [
  {
    id: "swe-ai",
    label: "SWE + AI Hybrid",
    focus: "Agentic SWE / AI platform work",
    href: "/docs/resumes/swe-ai-hybrid.pdf",
    description:
      "Best fit for software engineering roles involving AI systems, agentic tooling, backend infrastructure, and cloud deployment.",
  },
  {
    id: "google",
    label: "General SWE",
    focus: "General software engineering",
    href: "/docs/resumes/general-swe.pdf",
    description:
      "General SWE version focused on distributed systems, backend infrastructure, and AI-assisted development.",
  },
  {
    id: "hrt",
    label: "Systems + Trading",
    focus: "Low-level systems / latency / trading",
    href: "/docs/resumes/systems-trading.pdf",
    description:
      "Systems-heavy version emphasizing C++, matching engines, latency benchmarking, concurrency, and quantitative software.",
  },
];
