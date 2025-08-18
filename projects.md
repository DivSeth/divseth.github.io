---
title: "Projects"
layout: splash
permalink: /projects/
header:
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/tech-bg.jpg
  actions:
    - label: "View GitHub"
      url: "https://github.com/DivSeth"
excerpt: "Showcasing hands-on experience in algorithmic trading, generative AI, and financial technology."
---

<style>
  .project-card {
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
    margin: 1rem auto;
    padding: 1.25rem;
    background: white;
    transition: 0.3s;
    cursor: pointer;
    max-width: 800px;
  }
  .project-card:hover {
    background: #f0f8ff;
  }
  .project-details {
    display: none;
    margin-top: 0.75rem;
    font-size: 0.95rem;
  }
  .project-title {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  .project-tech {
    font-size: 0.9rem;
    color: #fff;
  }
  @media (prefers-color-scheme: dark) {
    .project-card { background: #222; color: #eee; }
    .project-card:hover { background:rgb(0, 0, 0); }
  }
</style>

<script>
  function toggleDetails(id) {
    const details = document.getElementById(id);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  }
</script>

<div class="project-card" onclick="toggleDetails('backtester')">
  <div class="project-title">💹 Algorithmic Trading Backtester</div>
  <div class="project-tech">Python · NumPy · Streamlit · Monte Carlo</div>
  <div id="backtester" class="project-details">
    Modular engine for backtesting trading strategies with performance metrics, VaR/CVaR analysis, and visual analytics dashboard.
    <br><a href="https://github.com/DivSeth/Strategy-Backtester" target="_blank">🔗 View on GitHub</a>
  </div>
</div>

<div class="project-card" onclick="toggleDetails('ragbot')">
  <div class="project-title">📄 Financial RAG Summarizer</div>
  <div class="project-tech">LangChain · Milvus · Llama 3.2 · Streamlit</div>
  <div id="ragbot" class="project-details">
    Local chatbot for financial PDFs using retrieval-augmented generation with fast semantic search and multi-turn Q&A.
    <br><a href="https://github.com/DivSeth/RAGTrader-FInancial-RAG-Chatbot" target="_blank">🔗 View on GitHub</a>
  </div>
</div>

<div class="project-card" onclick="toggleDetails('financeviz')">
  <div class="project-title">📊 Personal Finance Visualizer</div>
  <div class="project-tech">Python · Pandas · Streamlit · Matplotlib</div>
  <div id="financeviz" class="project-details">
    Parses and visualizes personal income/spending data with dynamic charts, category tracking, and downloadable summaries.
    <br><a href="https://github.com/DivSeth/personal-finance-visualiser-DivyaanshSeth" target="_blank">🔗 View on GitHub</a>
  </div>
</div>

<div class="project-card" onclick="toggleDetails('expressify')">
  <div class="project-title">🚀 Expressify – Co-founder & NLP Developer</div>
  <div class="project-tech">Python(Django) · spaCy · TensorFlow · JavaScript</div>
  <div id="expressify" class="project-details">
    Built an AI-powered web platform with real-time pronunciation and grammar feedback for non-native English speakers. Developed core backend APIs with Flask and deployed to AWS using Docker. Ranked Top 28 globally in the Young Tycoons Business Challenge and won a Govt. of India organized Hackathon.
  </div>
</div>


<p style="text-align:center; margin-top:2rem;">
  ✨ Click on a project to expand details and explore more on <a href="https://github.com/DivSeth" target="_blank">GitHub</a>
</p>
