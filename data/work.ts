export type WorkItem = {
  id: string;
  title: string;
  meta: string;
  description: string;
  link?: string;
};

export const work: WorkItem[] = [
  {
    id: "deloitte",
    title: "Deloitte India – Artificial Intelligence Intern",
    meta: "July 2025 – August 2025 · Healthcare Analytics",
    description:
      "Developing a RAG-driven decision support system for IVF clinics using 2,000+ embryo images. Assigns Gardner scale ratings with 84% accuracy and feeds features into ensemble models (XGBoost, Random Forest, Linear Regression) to forecast IVF success from 30+ clinical variables. Optimized inference to under 2 seconds per query and improved calibration across age groups by 18%, with findings validated alongside clinicians.",
  },
  {
    id: "nic",
    title: "National Informatics Centre (NIC) – AI Intern",
    meta: "June 2025 – July 2025 · Government of India",
    description:
      "Modernizing India's VANI virtual assistant by migrating from Dialogflow to a national-scale RAG pipeline. Built ingestion and inference modules for multilingual, multimodal data across 150+ welfare schemes. Designed vector search and LLM interfaces that deliver sub-200ms responses on DGX A100 while reducing hallucinations; improved response precision from 65% to 85%.",
  },
  {
    id: "gt",
    title: "Grant Thornton – Data Analytics Intern",
    meta: "June 2024 – Aug 2024 · Public Policy Consulting",
    description:
      "Modeled India’s Multidimensional Poverty Index (MPI) trajectory through 2047 using ARIMA, CAGR, and optimization techniques. Designed a Scheme Performance Index to identify high‑impact programs and inform budget reallocation. Presented scenario analyses and strategy recommendations to senior leadership using clear, decision-focused visualizations.",
  },
  {
    id: "build",
    title: "BUILD UMass – Product Manager",
    meta: "Sep 2023 – May 2024 · Technical Consulting for Nonprofits",
    description:
      "Led an 8‑person product team building a fundraising platform for the Amherst Education Foundation. Ran agile sprints, defined requirements with stakeholders, and translated them into Figma wireframes and developer tickets. Shipped campaign features that helped raise over $25,000 for public schools across Western Massachusetts.",
  },
];