export type RoadmapItem = {
  id: string;
  title: string;
  description: string;
};

export const roadmap: RoadmapItem[] = [
  {
    id: "dsa",
    title: "Algorithms & DSA",
    description:
      "Mastering Leetcode patterns, competitive programming, and TypeScript fundamentals.",
  },
  {
    id: "backend",
    title: "Backend Systems",
    description:
      "Building RESTful apps with Node.js, Redis, PostgreSQL, and message queues like Kafka.",
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    description:
      "Learning Docker, Kubernetes, GitHub Actions, and deploying microservices to GCP.",
  },
  {
    id: "aiml",
    title: "AI/ML Engineering",
    description:
      "Working with LangChain, FAISS, Milvus, fine-tuned LLMs, and scalable RAG systems.",
  },
  {
    id: "frontend",
    title: "Frontend & UX",
    description:
      "Refining React, Tailwind, Figma and motion design with Framer Motion for interactive UIs.",
  },
  {
    id: "vision",
    title: "Long-Term Vision",
    description:
      "Ship polished projects, publish technical blogs, and land a high-impact SWE/ML internship by 2026.",
  },
];
