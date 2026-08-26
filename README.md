<div align="center">

# Hi there, I'm Akash Kaintura 👋
### Full-Stack & Systems Engineer • Open Source Contributor • Real-Time Systems Builder

[![GitHub followers](https://img.shields.io/github/followers/UGilfoyle?label=Follow&style=for-the-badge&color=238636)](https://github.com/UGilfoyle)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/akashkaintura)
[![Email](https://img.shields.io/badge/Email-Contact_Me-EA4335?style=for-the-badge&logo=gmail)](mailto:akashkaintura.ak@gmail.com)

<br/>

```typescript
const engineer = {
  name: "Akash Kaintura",
  handle: "@UGilfoyle",
  role: "Full-Stack & Systems Engineer",
  specialization: ["Real-Time Collaboration (CRDTs)", "High-Performance Web & ASTs", "Agentic Systems"],
  coreStack: ["TypeScript", "React", "Node.js", "ProseMirror/TipTap", "Yjs", "PostgreSQL", "Python"],
  status: "Shipping resilient, test-driven open source software 🚀",
};
```

</div>

---

## ⚡ What I Do & Technical Focus

- 🛠️ **Real-Time Collaborative Systems**: Deep experience with ProseMirror, TipTap, and Yjs CRDT architecture for zero-conflict multi-user editing.
- ⚡ **High-Performance Web & ASTs**: Parsing, transforming, and decorating deeply nested Abstract Syntax Trees (HAST/MDAST) with sub-millisecond execution.
- 🤖 **Agentic AI & Automation Engines**: Building autonomous scraping, evaluation, and publishing pipelines (Playwright, Gemini AI, PostgreSQL, AWS).
- 📈 **Browser Engineering & FinTech**: Crafting zero-latency, 100% local Chrome Extensions for financial market tracking and high-frequency UI rendering.

---

## 🚀 Key Open-Source Contributions & Projects

### 1. 🌐 [Plane](https://github.com/makeplane/plane) — Open Source Project Management Platform
> *Active core contributor focusing on `@plane/editor`, `@plane/utils`, and collaborative text editing.*

- **AST Tokenizer & Syntax Highlighting Engine**:
  - Re-architected Lowlight AST traversal (`parseNodes`) from shallow flattening to recursive leaf-node extraction, eliminating deep tokenization crashes on multi-line scripts.
  - Implemented multi-language syntax grammars (PowerShell, TypeScript, Python, Bash) in collaborative TipTap editor blocks.
  - Engineered transaction detection in `LowlightPlugin.apply` to guarantee real-time decoration re-computation across Yjs collaborative peer syncs.
- **Resilient Utility Layer (`@plane/utils`)**:
  - **Security**: Added injection protection options (`hasInjectionRiskChars` / `validatePersonName`) balancing security with valid multi-cultural naming conventions.
  - **Fault-Tolerant Sorting**: Fixed nested property path traversal in `orderArrayBy` preventing null-pointer exceptions on deeply nested objects.
  - **Network & DateTime Safety**: Built IPv6 address parsing in `extractHostname` and safe date-parsing pipelines in `calculateTimeAgo` preventing runtime `RangeError` crashes.
  - **100% Test-Driven Quality**: Added automated unit test suites with 0 OxLint warnings and complete type safety across monorepo builds.

---

### 2. 🎯 [CareerOps](https://github.com/UGilfoyle/career-ops) — Job Search Command Center & ATS Engine
> *An automated, AI-augmented career operations pipeline.*

- **Automated Pipeline**: Built headless portal scanning and application tracking using **Playwright** and **PostgreSQL**.
- **LLM Resume Tailoring**: Integrated **Google Gemini AI** and **HuggingFace Inference** for semantic job-description alignment and automated PDF generation.
- **Cloud & Data Pipelines**: Managed document storage and snapshots with **AWS S3** and automated database deduplication.

---

### 3. 📈 [KitePlus Companion](https://github.com/UGilfoyle/kite-plus-alternative) — FinTech Browser Extension
> *A lightweight, client-side companion for Zerodha Kite.*

- **Real-Time Intraday MTM Charting**: Injects a custom dual-axis canvas chart into live trading pages tracking Net P&L every 10s.
- **100% Local Privacy**: Runs entirely client-side with zero external API calls or tracking, interacting directly with active session endpoints.
- **Advanced Execution Engine**: Features position grouping by expiry/underlying and multi-leg option basket builder.

---

### 4. 🤖 [LinkedIn Automation Engine](https://github.com/UGilfoyle/linkedin-automation)
> *Autonomous system design infographic generator and content delivery pipeline.*

- **Automated Infographics**: Headless HTML/CSS-to-image render engine producing production-grade architecture diagrams.
- **Scheduled Publishing**: API integration for programmatic publishing and engagement management.

---

## 🛠️ Tech Stack & Tooling

<div align="center">

| Domain | Technologies |
| :--- | :--- |
| **Languages** | `TypeScript` • `JavaScript (ESNext)` • `Python` • `SQL` • `HTML5 / CSS3` • `Bash` |
| **Frontend & UI** | `React 19` • `Next.js` • `TailwindCSS` • `TipTap / ProseMirror` • `Vite` |
| **Real-Time & State** | `Yjs (CRDT)` • `y-prosemirror` • `WebSockets` • `Hocuspocus` |
| **Backend & Databases** | `Node.js` • `Express` • `PostgreSQL` • `Redis` • `AWS S3` |
| **Testing & Quality** | `Vitest` • `Playwright` • `OxLint` • `Oxfmt` • `Turborepo` • `Husky` |

</div>

---

## 📊 GitHub Analytics

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=UGilfoyle&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" alt="Akash's GitHub Stats" width="48%" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=UGilfoyle&layout=compact&theme=tokyonight&hide_border=true" alt="Top Languages" width="48%" />

<br/>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=UGilfoyle&theme=tokyonight&hide_border=true" alt="GitHub Streak" width="97%" />

</div>

---

<div align="center">

### 🤝 Let's Connect & Collaborate!

*Always open to collaborating on high-performance open-source projects, real-time web infrastructure, and innovative systems engineering.*

📫 **Reach out at**: [akashkaintura.ak@gmail.com](mailto:akashkaintura.ak@gmail.com) • [LinkedIn](https://linkedin.com/in/akashkaintura)

</div>
