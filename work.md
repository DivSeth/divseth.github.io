---
title: "Work Experience"
layout: splash
permalink: /work/
header:
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/experience-bg.jpg
  actions:
    - label: "View LinkedIn"
      url: "https://linkedin.com/in/divyaanshseth"
excerpt: "A clickable and concise view of my internship, research, and leadership experiences."
---

<style>
  .work-card {
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
    margin: 1rem auto;
    padding: 1.25rem;
    background: white;
    transition: 0.3s;
    cursor: pointer;
    max-width: 850px;
  }
  .work-card:hover {
    background: #f0f8ff;
  }
  .work-details {
    display: none;
    margin-top: 0.75rem;
    font-size: 0.95rem;
  }
  .work-title {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  .work-meta {
    font-size: 0.9rem;
    color: #fff;
  }
  @media (prefers-color-scheme: dark) {
    .work-card { background: #222; color: #eee; }
    .work-card:hover { background:rgb(0, 0, 0); }
  }
</style>

<script>
  function toggleDetails(id) {
    const details = document.getElementById(id);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  }
</script>

<div class="work-card" onclick="toggleDetails('nic')">
  <div class="work-title">🧠 National Informatics Centre (NIC) – AI Intern</div>
  <div class="work-meta">June 2025 – Present · Government of India</div>
  <div id="nic" class="work-details">
    Supporting the transition of India’s VANI virtual assistant from Dialogflow to a national-scale RAG (Retrieval-Augmented Generation) pipeline. Built ingestion and inference modules to process multi-lingual, multimodal data across 150+ schemes. Developed vector search and LLM interfaces for fast, hallucination-resistant responses. Deployed and monitored infrastructure on DGX A100 with sub-200ms latency and improved precision from 65% → 85%.
  </div>
</div>

<div class="work-card" onclick="toggleDetails('deloitte')">
  <div class="work-title">🏥 Deloitte India – Artificial Intelligence Intern</div>
  <div class="work-meta">July 2025 – Present · Healthcare Analytics</div>
  <div id="deloitte" class="work-details">
    Engineered a Retrieval-Augmented Generation (RAG) pipeline for 2,000+ embryo images, assigning Gardner scale ratings with 84% accuracy. Integrated RAG outputs with ensemble models (XGBoost, Random Forest, Linear Regression) to forecast IVF success using 30+ clinical features. Optimized inference to sub-2s/query, improved calibration across age groups by 18%, and validated interpretability with clinicians for fair, real-world deployment
  </div>
</div>

<div class="work-card" onclick="toggleDetails('gt')">
  <div class="work-title">📊 Grant Thornton – Data Analytics Intern</div>
  <div class="work-meta">June 2024 – Aug 2024 · Public Policy Consulting</div>
  <div id="gt" class="work-details">
    Forecasted India’s MPI through 2047 using ARIMA, CAGR, and optimization techniques. Designed Scheme Performance Index to guide budget shifts and policy prioritization. Delivered strategy insights to senior GT leaders with high-impact modeling charts and recommendations.
  </div>
</div>

<div class="work-card" onclick="toggleDetails('build')">
  <div class="work-title">💼 BUILD UMass – Product Manager</div>
  <div class="work-meta">Sep 2023 – May 2024 · Technical Consulting for Nonprofits</div>
  <div id="build" class="work-details">
    As Product Manager, led an 8-member team in designing and launching a fundraising platform for the Amherst Education Foundation. Managed sprints, created Figma wireframes. Drove campaign features that raised $25,000+ for public schools in Western MA.
  </div>
</div>

<div class="work-card" onclick="toggleDetails('ashoka')">
  <div class="work-title">🧪 Ashoka University – Data Science Intern</div>
  <div class="work-meta">Oct 2022 – Apr 2023 · BharatSim Research</div>
  <div id="ashoka" class="work-details">
    Assisted in simulating realistic population behavior using real census inputs and randomized mobility parameters. Validated models against benchmark historical data and refined correlation weights between age, income, and migration patterns.
  </div>
</div>

<p style="text-align:center; margin-top:2rem;">
  ✨ Click on an experience to expand details and explore more on <a href="https://linkedin.com/in/divyaanshseth" target="_blank">LinkedIn</a>
</p>