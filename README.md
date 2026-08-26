# Akash Kaintura

Software Engineer specializing in full-stack web architecture, real-time collaborative systems, and developer tooling. Core open-source contributor to [Plane](https://github.com/makeplane/plane).

[LinkedIn](https://linkedin.com/in/akashkaintura) &bull; [Email](mailto:akashkaintura.ak@gmail.com)

---

## Core Focus Areas

- **Real-Time Collaboration**: Conflict-free document editing architectures using ProseMirror, TipTap, and Yjs CRDTs.
- **AST Engineering & Editors**: High-performance Abstract Syntax Tree manipulation, custom tokenizers, and presentation-layer decorations.
- **Client-Side Systems & Extensions**: Low-latency browser extensions (Manifest V3) and client-heavy architectures.
- **Automation Pipelines**: Headless browser automation (Playwright), document extraction, and LLM integrations.

---

## Open Source & Notable Work

### [Plane](https://github.com/makeplane/plane) — Open Source Project Management Platform
*Active contributor to `@plane/editor` and `@plane/utils`.*

- **Editor Syntax Tokenizer**: Re-architected Lowlight AST tokenization (`parseNodes`) to recursively extract leaf text nodes, resolving decoration crashes on multi-line scripts. Added language support for PowerShell and registered aliases (`ps`, `ps1`).
- **Collaborative Sync**: Enhanced `LowlightPlugin.apply` transaction detection to ensure syntax decorations recompute deterministically across Yjs remote collaborative syncs.
- **Utility Security & Reliability**: 
  - Added configurable injection protection (`hasInjectionRiskChars`) to support apostrophes in global naming conventions without compromising security.
  - Resolved nested traversal crashes in `orderArrayBy` and updated sorting to use immutable `.toSorted()` semantics.
  - Fixed hostname extraction for IPv6 addresses (`extractHostname`) and timestamp parsing in `calculateTimeAgo` to eliminate runtime `RangeError` exceptions.
- **Test Infrastructure**: Introduced automated unit test suites for editor extensions and utility functions, maintaining 0 OxLint warnings and strict type compliance.

### [CareerOps](https://github.com/UGilfoyle/career-ops) — Job Search Command Center
*Automated recruitment tracking and ATS evaluation pipeline.*

- Built automated portal discovery and application tracking using Playwright and PostgreSQL.
- Implemented resume tailoring workflows integrating Google Gemini AI and HuggingFace inference.
- Structured document versioning and asset storage with AWS S3.

### [KitePlus Companion](https://github.com/UGilfoyle/kite-plus-alternative) — FinTech Browser Extension
*Client-side companion extension for Zerodha Kite.*

- Injected dual-axis real-time MTM performance charts into live trading views.
- Implemented position grouping and multi-leg option basket execution with zero external server dependencies.

### [LinkedIn Automation Engine](https://github.com/UGilfoyle/linkedin-automation)
*System design visualization and automated publishing engine.*

- Automated headless HTML/CSS rendering pipeline for generating system architecture diagrams.
- Programmatic API scheduling and engagement workflow.

---

## Technical Stack

- **Languages**: TypeScript, JavaScript, Python, SQL, HTML5, CSS3, Shell
- **Frontend & Real-Time**: React, Next.js, TipTap, ProseMirror, Yjs (CRDTs), TailwindCSS, Vite
- **Backend & Data**: Node.js, Express, PostgreSQL, Redis, AWS S3
- **Tooling & Quality**: Vitest, Playwright, OxLint, Oxfmt, Turborepo, Git
