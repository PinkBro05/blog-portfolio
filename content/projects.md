+++
title = "Projects"
description = "A collection of my key projects in AI, machine learning, and financial market analysis"
layout = "page"
+++

<style>
:root {
  --primary-color: #ffffff;
  --secondary-color: #a0a0a0;
  --accent-color: #ff69b4;
  --background-color: #121212;
  --card-background: #1e1e1e;
  --border-radius: 10px;
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  --spacing: 20px;
  --container-width: min(95%, 1400px); /* Updated for better wide screen support */
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--primary-color);
  background-color: var(--background-color);
}

h1, h2, h3 {
  color: var(--primary-color);
}

header {
  text-align: center;
  margin-bottom: 40px;
  width: var(--container-width);
  margin-left: auto;
  margin-right: auto;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

header p {
  text-align: center;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing);
  margin-bottom: 40px;
  width: var(--container-width);
  margin-left: auto;
  margin-right: auto;
  justify-content: center; /* Center items in container */
}

.project-card {
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: var(--spacing);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  border-top: 3px solid var(--accent-color);
  float: left;
  width: calc(33.333% - var(--spacing));
  margin-bottom: var(--spacing);
  box-sizing: border-box;
  min-height: 200px;
  max-width: 600px; /* Added max-width for very wide screens */
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.project-card h3 {
  margin-top: 0;
  color: var(--primary-color);
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 10px;
  font-weight: 400;
}

.project-card .role {
  font-weight: bold;
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.project-card .description {
  flex-grow: 1;
  color: var(--secondary-color);
}

.project-card .contributions {
  margin-top: 15px;
  color: var(--secondary-color);
}

.project-card .contributions ul {
  padding-left: 20px;
}

.project-card .contributions ul li {
  margin-bottom: 5px;
}

.project-card .links {
  margin-top: 15px;
}

.project-card .links a {
  display: inline-block;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
}

.project-card .links a:hover {
  color: #ff9ed8;
}

.section-title {
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  color: var(--primary-color);
  width: var(--container-width);
  margin-left: auto;
  margin-right: auto;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background-color: var(--accent-color);
}

.contact-section {
  text-align: center;
  margin: 60px auto 30px;
  width: var(--container-width);
}

.contact-section a {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: bold;
}

@media (min-width: 1920px) {
  :root {
    --container-width: min(90%, 1800px);
  }
  
  .project-card {
    width: calc(33.333% - var(--spacing));
    padding: 25px;
  }
}

@media (max-width: 1400px) {
  .project-card {
    width: calc(50% - var(--spacing));
  }
}

@media (max-width: 768px) {
  .project-card {
    width: calc(100% - var(--spacing));
    float: none;
  }
}

@media (max-width: 480px) {
  .project-card {
    width: 100%;
    float: none;
    padding: 15px;
  }
  
  :root {
    --spacing: 15px;
  }
}

.projects-container::after {
  content: "";
  display: table;
  clear: both;
}

.container.page {
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
}

p {
  text-align: center;
}
</style>

A collection of my key projects in AI, machine learning, and financial market analysis.

{{< section-title >}}
Featured Projects
{{< /section-title >}}

{{< projects-container >}}
{{< project-card 
    title="PACO - Pink Ant Colony Optimization" 
    role="Role" 
    rolevalue="Lead Researcher & Developer"
    github="https://github.com/PinkBro05/PACO-Optimization"
    contributions="Developed an optimized algorithm combining gradient descent and pheromone updates|Implemented parallelization techniques for significant performance improvement|Applied advanced techniques like Floyd Warshall preprocessing and 2-opt local search" 
>}}
A novel implementation of Ant Colony Optimization (ACO) algorithm for solving shortest path and Traveling Salesman Problems (TSP). PACO incorporates adaptive gradient descent, elitist strategy, MaxMin boundaries, and parallel processing to enhance solution quality while reducing computational cost.
{{< /project-card >}}

{{< project-card 
    title="Mitigation of Large Language Model (LLM) Hallucination" 
    role="Role" 
    rolevalue="Project Leader"
    github="https://github.com/khangdzox/COS30018-Mitigate-Hallucination"
    contributions="Led research and project management|Developed and fine-tuned models locally and on high-performance computing infrastructure|Worked on LoRA, QLoRA, prompt engineering, and self-refinement techniques" 
>}}
Addressing hallucination in LLMs using Fine-Tuning (LoRA & QLoRA) and Self-Refine techniques, applied to LLaMA 3 8B Instruct in the medical domain. Our model outperforms the base model in MELT-HALT and HaluBench benchmarks.
{{< /project-card >}}

{{< project-card 
    title="Melbourne House Market Analysis using ML" 
    role="Role" 
    rolevalue="Project Leader"
    github="https://github.com/PinkBro05/Melbourne-House-Market-AI-Driven"
    contributions="Collected and processed real estate data|Implemented Random Forest Regression/Classification and Clustering techniques|Developed and deployed ML models through a RESTful API" 
>}}
A machine learning project analyzing Melbourne's house market for investors. Deployed models via a full-stack web application using React (Front-End) and FastAPI (Back-End).
{{< /project-card >}}
{{< /projects-container >}}

{{< section-title >}}
Other Projects
{{< /section-title >}}

{{< projects-container >}}
{{< project-card 
    title="Vietnamese Blog Titles Classification using Transformers" 
    role="Role" 
    rolevalue="Developer"
    github="https://github.com/PinkBro05/Blog-title-classification-using-transformer"
    contributions="Implemented PyTorch-based Transformer models|Explored advanced optimization techniques: ROBE, Mixture of Experts (MoE), synthetic data generation" 
>}}
A deep learning project to classify Vietnamese blog titles using Transformer models.
{{< /project-card >}}

{{< project-card 
    title="Market Intelligence Analysis for Commodity Futures Investment" 
    role="Role" 
    rolevalue="Project Leader"
    contributions="Developed predictive models with Transformers, LSTMs, GRUs, and CNNs|Conducted feature engineering for complex market analysis|Applied interdisciplinary approach combining finance and AI" 
>}}
A real-world industry project supporting commodity futures trading (gold, oil) using ML/DL. Analyzed geopolitical, economic, and financial factors.
{{< /project-card >}}

{{< project-card 
    title="Personal Blog &amp; Portfolio" 
    role="Tech Stack" 
    rolevalue="Hugo, HTML/CSS, JavaScript"
    github="https://github.com/Pinkbro05/blog-portfolio"
    linktext="View on GitHub"
>}}
The website you're currently viewing! Built with Hugo using the Coder theme, featuring responsive design and dark/light mode toggle.
{{< /project-card >}}
{{< /projects-container >}}

<div class="contact-section">
  <h2>Get in Touch</h2>
  <p>Interested in collaborating on a project? Have questions about my work? Feel free to <a href="/contact">contact me</a> for more information.</p>
</div>