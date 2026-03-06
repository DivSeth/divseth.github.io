export type Project = {
  id: string;
  title: string;
  tech: string[];
  description: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "backtester",
    title: "Algorithmic Trading Backtester",
    tech: ["Python", "NumPy", "Streamlit", "Monte Carlo"],
    description:
      "Modular engine for backtesting trading strategies with performance metrics, VaR/CVaR analysis, and visual analytics dashboard.",
    link: "https://github.com/DivSeth/Strategy-Backtester",
  },
  {
    id: "ragbot",
    title: "Financial RAG Summarizer",
    tech: ["LangChain", "Milvus", "Llama 3.2", "Streamlit"],
    description:
      "Local chatbot for financial PDFs using retrieval-augmented generation with fast semantic search and multi-turn Q&A.",
    link: "https://github.com/DivSeth/RAGTrader-FInancial-RAG-Chatbot",
  },
  {
    id: "financeviz",
    title: "Personal Finance Visualizer",
    tech: ["Python", "Pandas", "Streamlit", "Matplotlib"],
    description:
      "Parses and visualizes personal income/spending data with dynamic charts, category tracking, and downloadable summaries.",
    link: "https://github.com/DivSeth/personal-finance-visualiser-DivyaanshSeth",
  },
  {
    id: "expressify",
    title: "Expressify – Co-founder & NLP Developer",
    tech: ["Django", "spaCy", "TensorFlow", "JavaScript"],
    description:
      "AI-powered web platform with real-time pronunciation and grammar feedback for non-native English speakers. Backend APIs with Flask, deployed to AWS via Docker. Ranked Top 28 globally in Young Tycoons Business Challenge and won a Govt. of India Hackathon.",
  },
];
