<div align="center">

# Akash Kaintura
### Full-Stack & Systems Engineer &bull; Open Source Contributor

<p align="center">
  <a href="https://linkedin.com/in/akashkaintura">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="mailto:akashkaintura.ak@gmail.com">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  &nbsp;
  <a href="https://github.com/UGilfoyle">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

</div>

---

### Core Focus Areas

- **Real-Time Collaboration & Media**: Conflict-free document editing (ProseMirror, TipTap, Yjs CRDTs) and real-time WebRTC media streams (LiveKit).
- **AST Engineering & Editors**: Abstract Syntax Tree manipulation, presentation-layer decoration pipelines, and syntax highlighting engines.
- **SRE & Autonomous Agents**: Automated cloud infrastructure diagnostics, telemetry parsers, and agentic workflows.
- **Client-Side Systems & Offline Architecture**: Zero-latency browser extensions (Manifest V3) and offline-first SQLite WASM architectures.

---

### Open Source Contributions

#### <img src="https://api.iconify.design/lucide/git-pull-request.svg?color=%2358a6ff" width="18" height="18" align="center" /> [Plane](https://github.com/makeplane/plane) — Open Source Project Management Platform
*Contributor to core editor (`@plane/editor`) and utility infrastructure (`@plane/utils`).*

- **Editor AST Tokenization & Highlighting**: Re-engineered Lowlight syntax tree processing (`parseNodes`) from shallow flattening to recursive leaf-node extraction, eliminating `TypeError` decoration crashes on multi-line scripts. Added native syntax support and alias mappings (`ps`, `ps1`) for PowerShell.
- **Collaborative Sync**: Enhanced `LowlightPlugin.apply` transaction state tracking so decorations deterministically recompute across remote Yjs peer syncs.
- **Utility Layer Security & Reliability**:
  - Implemented configurable injection validation (`hasInjectionRiskChars` / `validatePersonName`) balancing security protections with apostrophes in global names.
  - Fixed nested object traversal in `orderArrayBy` to prevent runtime crashes on undefined paths and migrated sorting to immutable `.toSorted()` semantics.
  - Corrected IPv6 hostname extraction in `extractHostname` and timestamp parsing in `calculateTimeAgo` to prevent unhandled `RangeError` exceptions in React views.
- **Testing**: Added automated unit test suites for editor extensions and utilities with 0 OxLint warnings and strict TypeScript compliance.

#### <img src="https://api.iconify.design/lucide/video.svg?color=%233fb950" width="18" height="18" align="center" /> [Meet](https://github.com/suitenumerique/meet) — Open Source Video Conferencing
*WebRTC video collaboration platform powered by LiveKit.*

- Worked on real-time room state management, media track handling, and participant synchronization for low-latency video and audio streaming.

#### <img src="https://api.iconify.design/lucide/cpu.svg?color=%23d29922" width="18" height="18" align="center" /> [OpenSRE](https://github.com/Tracer-Cloud/opensre) — Open Source AI SRE Toolkit
*AI-driven SRE toolkit for autonomous cloud operations and incident triage.*

- Contributed to telemetry aggregation pipelines, automated root-cause analysis workflows, and cloud diagnostics integrations.

---

### Featured Projects

#### <img src="https://api.iconify.design/lucide/briefcase.svg?color=%23bc8cff" width="18" height="18" align="center" /> [CareerOps](https://github.com/UGilfoyle/career-ops)
*Automated career command center and ATS tailoring pipeline.*

- Headless job portal scanning and lifecycle application tracking built with Playwright and PostgreSQL.
- Resume customization engine integrating Google Gemini AI and HuggingFace inference for semantic job description alignment.
- Snapshot and document storage pipeline on AWS S3 with automated data normalization.

#### <img src="https://api.iconify.design/lucide/layout.svg?color=%2358a6ff" width="18" height="18" align="center" /> [Collab Whiteboard](https://github.com/UGilfoyle/collab-whiteboard)
*Real-time collaborative canvas (Miro alternative).*

- Multi-user real-time drawing and object synchronization built on Bun, Fabric.js, WebSockets, and PostgreSQL.

#### <img src="https://api.iconify.design/lucide/shield-check.svg?color=%233fb950" width="18" height="18" align="center" /> [API Contract Guardian](https://github.com/UGilfoyle/api-contract-guardian)
*AI-assisted OpenAPI compatibility and release risk analyzer.*

- Automated breaking change detection and schema compatibility evaluation across API versions.

#### <img src="https://api.iconify.design/lucide/trending-up.svg?color=%23f0883e" width="18" height="18" align="center" /> [KitePlus Companion](https://github.com/UGilfoyle/kite-plus-alternative)
*Client-side trading companion for Zerodha Kite.*

- 100% local, zero-latency Chrome extension with dual-axis intraday MTM charts, position grouping, and option chain basket execution.

#### <img src="https://api.iconify.design/lucide/database.svg?color=%2379c0ff" width="18" height="18" align="center" /> [Rugged Todo](https://github.com/UGilfoyle/rugged-todo)
*Offline-first task management PWA / Android app.*

- Local-first embedded SQL database using SQLite WASM, designed for low-connectivity environments.

---

### Technologies & Tooling

<div align="center">

| Category | Badges |
| :--- | :--- |
| **Languages** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![SQL](https://img.shields.io/badge/SQL-CC292B?style=flat-square&logo=sqlite&logoColor=white) ![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat-square&logo=gnubash&logoColor=white) |
| **Frontend & Real-Time** | ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![ProseMirror](https://img.shields.io/badge/ProseMirror-DB4437?style=flat-square) ![Yjs CRDT](https://img.shields.io/badge/Yjs_CRDT-E95420?style=flat-square) ![LiveKit](https://img.shields.io/badge/LiveKit_WebRTC-00254D?style=flat-square&logo=livekit&logoColor=white) |
| **Backend & Databases** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Bun](https://img.shields.io/badge/Bun-000000?style=flat-square&logo=bun&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white) ![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?style=flat-square&logo=amazons3&logoColor=white) |
| **Testing & Tooling** | ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white) ![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white) ![OxLint](https://img.shields.io/badge/OxLint-000000?style=flat-square) ![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=flat-square&logo=turborepo&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) |

</div>

---

### Contribution & Activity Graph

<div align="center">

<img src="https://github-readme-activity-graph.vercel.app/graph?username=UGilfoyle&theme=react-dark&hide_border=true&area=true&color=61dafb" width="95%" alt="Contribution Graph" />

</div>
