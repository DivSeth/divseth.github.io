export type WorkItem = {
  id: string;
  title: string;
  meta: string;
  description: string;
  link?: string;
};

export const work: WorkItem[] = [
  {
    id: "nic",
    title: "National Informatics Centre (NIC) – AI Intern",
    meta: "June 2025 – Present · Government of India",
    description:
      "Supporting the transition of India's VANI virtual assistant from Dialogflow to a national-scale RAG pipeline. Built ingestion and inference modules to process multi-lingual, multimodal data across 150+ schemes. Developed vector search and LLM interfaces for fast, hallucination-resistant responses. Deployed on DGX A100 with sub-200ms latency; improved precision from 65% → 85%.",
  },
  {
    id: "deloitte",
    title: "Deloitte India – Artificial Intelligence Intern",
    meta: "July 2025 – Present · Healthcare Analytics",
    description:
      "Engineered a RAG pipeline for 2,000+ embryo images, assigning Gardner scale ratings with 84% accuracy. Integrated RAG outputs with ensemble models (XGBoost, Random Forest, Linear Regression) to forecast IVF success using 30+ clinical features. Optimized inference to sub-2s/query, improved calibration across age groups by 18%, and validated interpretability with clinicians.",
  },
  {
    id: "gt",
    title: "Grant Thornton – Data Analytics Intern",
    meta: "June 2024 – Aug 2024 · Public Policy Consulting",
    description:
      "Forecasted India's MPI through 2047 using ARIMA, CAGR, and optimization techniques. Designed Scheme Performance Index to guide budget shifts and policy prioritization. Delivered strategy insights to senior GT leaders with high-impact modeling charts.",
  },
  {
    id: "build",
    title: "BUILD UMass – Product Manager",
    meta: "Sep 2023 – May 2024 · Technical Consulting for Nonprofits",
    description:
      "Led an 8-member team in designing and launching a fundraising platform for the Amherst Education Foundation. Managed sprints, created Figma wireframes. Drove campaign features that raised $25,000+ for public schools in Western MA.",
  },
  {
    id: "ashoka",
    title: "Ashoka University – Data Science Intern",
    meta: "Oct 2022 – Apr 2023 · BharatSim Research",
    description:
      "Assisted in simulating realistic population behavior using real census inputs and randomized mobility parameters. Validated models against benchmark historical data and refined correlation weights between age, income, and migration patterns.",
  },
];
