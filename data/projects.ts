export type Project = {
  id: string;
  title: string;
  tech: string[];
  description: string;
  status: "featured" | "secondary" | "archived" | "removed";
  category: string;
  metrics?: { label: string; value: string; note?: string }[];
  visual: "orderbook" | "autoapply" | "backtester" | "none";
  demo?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "orderbook",
    title: "Low-Latency Limit Order Book & Matching Engine",
    category: "C++20 / Systems / Trading",
    tech: ["C++20", "CMake", "Multithreading", "UBSan", "Latency Benchmarks"],
    description:
      "C++20 matching engine implementing price-time priority, fixed-point prices, market/limit orders, cancels, modifies, aggregate depth, and reproducible latency benchmarking.",
    status: "featured",
    visual: "orderbook",
    metrics: [
      { label: "Throughput", value: "6.27M", note: "events/sec" },
      { label: "p99", value: "0.42 µs", note: "raw engine processing" },
      { label: "Tests", value: "17", note: "correctness checks" },
    ],
    link: "https://github.com/DivSeth/low-latency-limit-order-book",
  },
  {
    id: "autoapply",
    title: "AutoApply OS",
    category: "Product / Extension / Tracking",
    tech: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "Manifest V3"],
    description:
      "Active-beta job application autofill and tracking platform with browser workflows, persistent application state, one-time auth, RLS, encryption, token refresh, rate limiting, retries, and caching.",
    status: "featured",
    visual: "autoapply",
    metrics: [
      { label: "Surface", value: "Web + MV3", note: "dashboard and extension" },
      { label: "Security", value: "RLS", note: "pgcrypto + OAuth token storage" },
    ],
    link: "https://github.com/DivSeth/JobTracker",
    demo: "https://autoapply-seven.vercel.app",
  },
  {
    id: "backtester",
    title: "Algorithmic Trading Backtester",
    category: "Python / Quant Research",
    tech: ["Python", "NumPy", "Pandas", "Docker", "pytest"],
    description:
      "Modular backtesting engine with strategy abstractions, OHLCV ingestion, caching, position/cash accounting, commissions, slippage, Sharpe, max drawdown, historical VaR, and CVaR.",
    status: "featured",
    visual: "backtester",
    metrics: [
      { label: "Risk", value: "VaR", note: "plus CVaR and drawdown" },
      { label: "Coverage", value: "pytest", note: "latest repo to verify output" },
    ],
    link: "https://github.com/DivSeth/Strategy-Backtester",
  },
  {
    id: "ragbot",
    title: "Financial RAG Summarizer",
    category: "AI / Retrieval",
    tech: ["LangChain", "Milvus", "Llama 3.2", "Streamlit"],
    description:
      "Local chatbot for financial PDFs using retrieval-augmented generation with fast semantic search and multi-turn Q&A.",
    status: "secondary",
    visual: "none",
    link: "https://github.com/DivSeth/RAGTrader-FInancial-RAG-Chatbot",
  },
  {
    id: "financeviz",
    title: "Personal Finance Visualizer",
    category: "Data App",
    tech: ["Python", "Pandas", "Streamlit", "Matplotlib"],
    description:
      "Parses and visualizes personal income/spending data with dynamic charts, category tracking, and downloadable summaries.",
    status: "archived",
    visual: "none",
    link: "https://github.com/DivSeth/personal-finance-visualiser-DivyaanshSeth",
  },
  {
    id: "expressify",
    title: "Expressify – Co-founder & NLP Developer",
    category: "Archived startup project",
    tech: ["Django", "spaCy", "TensorFlow", "JavaScript"],
    description:
      "AI-powered web platform with real-time pronunciation and grammar feedback for non-native English speakers. Backend APIs with Flask, deployed to AWS via Docker. Ranked Top 28 globally in Young Tycoons Business Challenge and won a Govt. of India Hackathon.",
    status: "removed",
    visual: "none",
  },
];
