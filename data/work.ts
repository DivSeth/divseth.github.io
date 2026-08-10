export type WorkItem = {
  id: string;
  company: string;
  role: string;
  title: string;
  meta: string;
  summary: string;
  description: string;
  focus: string;
  metrics?: { label: string; value: string; note?: string }[];
  stack?: string[];
  visual: "siemens" | "deloitte" | "nic" | "none";
  prominence: "featured" | "secondary";
  link?: string;
};

export const work: WorkItem[] = [
  {
    id: "siemens",
    company: "Siemens Energy",
    role: "Software Engineering / AI Platform Intern",
    title: "Siemens Energy – Software Engineering / AI Platform Intern",
    meta: "Jun 2026 – Present · Gurugram, India",
    focus: "Distributed AI infrastructure",
    summary:
      "Building production AI platform infrastructure, reusable agent tooling, and observability for long-running enterprise workflows.",
    description:
      "Converted a notebook prototype into a distributed Python/FastAPI application, then pushed the system toward reusable agent/tool architecture: atomic capabilities, shared schemas, orchestration loops, correlation IDs, queue safeguards, and dashboardable telemetry for long-running jobs.",
    metrics: [
      { label: "Runtime", value: "13%", note: "faster after pipeline optimization" },
      { label: "Reliability", value: "45", note: "handover tests passing" },
      { label: "Reuse", value: "40+", note: "tool candidates mapped" },
    ],
    stack: [
      "Python",
      "FastAPI",
      "MCP-style Tools",
      "Agent Orchestration",
      "Azure Container Apps",
      "Service Bus",
      "Cosmos DB",
      "OpenTelemetry",
    ],
    visual: "siemens",
    prominence: "featured",
  },
  {
    id: "deloitte",
    company: "Deloitte",
    role: "AI Engineer Intern",
    title: "Deloitte India – Artificial Intelligence Intern",
    meta: "Jul 2025 – Aug 2025 · Gurugram, India",
    focus: "Computer vision retrieval",
    summary:
      "Built a DINOv2 + FAISS retrieval system for image similarity and clinical feature modeling.",
    description:
      "Engineered a DINOv2 + FAISS HNSW pipeline across 2,000+ embryo images, then integrated morphology features into ensemble models over 30+ clinical variables with Boruta feature selection and sub-2-second inference.",
    metrics: [
      { label: "Images", value: "2,000+", note: "retrieval corpus" },
      { label: "Agreement", value: "84%", note: "against annotations" },
      { label: "Calibration", value: "18%", note: "improvement" },
    ],
    stack: ["Python", "DINOv2", "FAISS HNSW", "XGBoost", "Random Forest", "Boruta"],
    visual: "deloitte",
    prominence: "featured",
  },
  {
    id: "nic",
    company: "National Informatics Centre",
    role: "AI Engineer Intern",
    title: "National Informatics Centre (NIC) – AI Intern",
    meta: "Jun 2025 – Jul 2025 · New Delhi, India",
    focus: "Multilingual retrieval",
    summary:
      "Worked on multilingual retrieval architecture for a government information system.",
    description:
      "Built Redis-backed ingestion and session services for a multilingual retrieval system using Qwen3 embeddings, Milvus vector search, and Mistral, reducing irrelevant or outdated responses by 30%.",
    metrics: [
      { label: "Quality", value: "30%", note: "fewer stale/irrelevant responses" },
      { label: "Modes", value: "3", note: "query/retrieval/context" },
    ],
    stack: ["Qwen3 Embeddings", "Milvus", "Redis", "Mistral", "RAG"],
    visual: "nic",
    prominence: "featured",
  },
  {
    id: "gt",
    company: "Grant Thornton",
    role: "Data Analytics Intern",
    title: "Grant Thornton – Data Analytics Intern",
    meta: "June 2024 – Aug 2024 · Public Policy Consulting",
    focus: "Policy analytics",
    summary:
      "Modeled poverty-index trajectories and built decision-focused analytics for public policy work.",
    description:
      "Modeled India’s Multidimensional Poverty Index (MPI) trajectory through 2047 using ARIMA, CAGR, and optimization techniques. Designed a Scheme Performance Index to identify high‑impact programs and inform budget reallocation. Presented scenario analyses and strategy recommendations to senior leadership using clear, decision-focused visualizations.",
    stack: ["Python", "ARIMA", "Forecasting", "Optimization", "Policy Analytics"],
    visual: "none",
    prominence: "secondary",
  },
  {
    id: "build",
    company: "BUILD UMass",
    role: "Product Manager",
    title: "BUILD UMass – Product Manager",
    meta: "Sep 2023 – May 2024 · Technical Consulting for Nonprofits",
    focus: "Product leadership",
    summary:
      "Led a student product team shipping nonprofit fundraising software for a local education foundation.",
    description:
      "Led an 8‑person product team building a fundraising platform for the Amherst Education Foundation. Ran agile sprints, defined requirements with stakeholders, and translated them into Figma wireframes and developer tickets. Shipped campaign features that helped raise over $25,000 for public schools across Western Massachusetts.",
    metrics: [{ label: "Raised", value: "$25k+", note: "for public schools" }],
    stack: ["Product", "Figma", "Agile", "Stakeholder Discovery"],
    visual: "none",
    prominence: "secondary",
  },
];
