export type RoadmapItem = {
  id: string;
  title: string;
  description: string;
};

export const roadmap: RoadmapItem[] = [
  {
    id: "systems",
    title: "Start With The Shape",
    description:
      "Before polishing anything, I try to understand the data, state, failure modes, and what the user is actually waiting on.",
  },
  {
    id: "measure",
    title: "Measure Before Tuning",
    description:
      "Logs, traces, benchmarks, and small checks usually tell a clearer story than a guess from the happy path.",
  },
  {
    id: "automation",
    title: "Reuse The Boring Parts",
    description:
      "If the same workflow shows up twice, I look for the smaller tool or interface that can make the next version easier.",
  },
  {
    id: "performance",
    title: "Keep The Fast Path Honest",
    description:
      "Speed matters most when the measurement is honest about scope: engine time, queue time, model time, or end-to-end time.",
  },
  {
    id: "visuals",
    title: "Show The System",
    description:
      "When a diagram, chart, or interaction explains the work faster than a paragraph, I would rather show it.",
  },
  {
    id: "direction",
    title: "Leave Room To Improve",
    description:
      "I like shipping the useful version, then tightening reliability, interfaces, tests, and the parts that make it feel clean.",
  },
];
