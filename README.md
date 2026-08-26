# Akash Kaintura

Software Engineer specializing in full-stack web systems, real-time collaboration (CRDTs / WebRTC), and developer tooling. Active contributor to open-source infrastructure and real-time platforms.

[LinkedIn](https://linkedin.com/in/akashkaintura) &bull; [Email](mailto:akashkaintura.ak@gmail.com)

---

## Core Focus

- **Real-Time Collaboration & Media**: Conflict-free document editing (ProseMirror, TipTap, Yjs CRDTs) and real-time WebRTC media streams (LiveKit).
- **AST Engineering & Editors**: Abstract Syntax Tree manipulation, presentation-layer decoration pipelines, and syntax highlighting engines.
- **SRE & Autonomous Agents**: Automated cloud infrastructure diagnostics, telemetry parsers, and agentic workflows.
- **Client-Side Systems & Offline Architecture**: Zero-latency browser extensions (Manifest V3) and offline-first SQLite WASM architectures.

---

## Open Source Contributions

### [Plane](https://github.com/makeplane/plane) — Open Source Project Management Platform
*Contributor to core editor (`@plane/editor`) and utility infrastructure (`@plane/utils`).*

- **Editor AST Tokenization & Highlighting**: Re-engineered Lowlight syntax tree processing (`parseNodes`) from shallow flattening to recursive leaf-node extraction, eliminating `TypeError` decoration crashes on multi-line scripts. Added native syntax support and alias mappings (`ps`, `ps1`) for PowerShell.
- **Collaborative Sync**: Enhanced `LowlightPlugin.apply` transaction state tracking so decorations deterministically recompute across remote Yjs peer syncs.
- **Utility Layer Security & Reliability**:
  - Implemented configurable injection validation (`hasInjectionRiskChars` / `validatePersonName`) balancing security protections with apostrophes in global names.
  - Fixed nested object traversal in `orderArrayBy` to prevent runtime crashes on undefined paths and migrated sorting to immutable `.toSorted()` semantics.
  - Corrected IPv6 hostname extraction in `extractHostname` and timestamp parsing in `calculateTimeAgo` to prevent unhandled `RangeError` exceptions in React views.
- **Testing**: Added automated unit test suites for editor extensions and utilities with 0 OxLint warnings and strict TypeScript compliance.

### [Meet](https://github.com/suitenumerique/meet) — Open Source Video Conferencing
*WebRTC video collaboration platform powered by LiveKit.*

- Worked on real-time room state management, media track handling, and participant synchronization for low-latency video and audio streaming.

### [OpenSRE](https://github.com/Tracer-Cloud/opensre) — Open Source AI SRE Toolkit
*AI-driven SRE toolkit for autonomous cloud operations and incident triage.*

- Contributed to telemetry aggregation pipelines, automated root-cause analysis workflows, and cloud diagnostics integrations.

---

## Featured Projects

### [CareerOps](https://github.com/UGilfoyle/career-ops)
*Automated career command center and ATS tailoring pipeline.*

- Headless job portal scanning and lifecycle application tracking built with Playwright and PostgreSQL.
- Resume customization engine integrating Google Gemini AI and HuggingFace inference for semantic job description alignment.
- Snapshot and document storage pipeline on AWS S3 with automated data normalization.

### [Collab Whiteboard](https://github.com/UGilfoyle/collab-whiteboard)
*Real-time collaborative canvas (Miro alternative).*

- Multi-user real-time drawing and object synchronization built on Bun, Fabric.js, WebSockets, and PostgreSQL.

### [API Contract Guardian](https://github.com/UGilfoyle/api-contract-guardian)
*AI-assisted OpenAPI compatibility and release risk analyzer.*

- Automated breaking change detection and schema compatibility evaluation across API versions.

### [KitePlus Companion](https://github.com/UGilfoyle/kite-plus-alternative)
*Client-side trading companion for Zerodha Kite.*

- 100% local, zero-latency Chrome extension with dual-axis intraday MTM charts, position grouping, and option chain basket execution.

### [Rugged Todo](https://github.com/UGilfoyle/rugged-todo)
*Offline-first task management PWA / Android app.*

- Local-first embedded SQL database using SQLite WASM, designed for low-connectivity environments.

---

## Technical Stack

- **Languages**: TypeScript, JavaScript (ESNext), Python, SQL, HTML5, CSS3, Bash
- **Frontend & Real-Time**: React, Next.js, TipTap, ProseMirror, Yjs (CRDTs), LiveKit / WebRTC, TailwindCSS, Vite
- **Backend & Systems**: Node.js, Bun, Express, PostgreSQL, Redis, AWS S3, SQLite WASM
- **Quality & Automation**: Vitest, Playwright, OxLint, Oxfmt, Turborepo, Git
