# Knowledge Graph Report: Hezekiah Shem Baling Portfolio

Generated: 2026-11-02T10:16:36.294Z  
Graph Schema: Graphify V2 GraphRAG Standard  
Nodes: 24 | Edges: 26 | Communities: 4

---

## 1. Executive Summary & Vibe Coding Lineage
This portfolio was architected and vibe coded as a senior full-stack showcase for **Hezekiah Shem Baling** (Full-Stack Web Developer & Data Analyst), combining:
- **Zero-Baud Aesthetics**: Strict anti-slop visual tokens, high-contrast monochrome base with emerald primary signal and amber secondary pillar.
- **Adaptive Personified AI Assistant**: In-browser Gemini 3.5 Flash Lite streaming agent with 4 dynamic personas.
- **Micro-Interactions**: Dual anime/suit avatar with theme/tap reactivity, stacked 3-card photo deck with shuffle physics, interactive scroll-down indicator, and viewport scroll reveals.
- **Mobile Hardening**: Dynamic Viewport Height (`dvh`), iOS Safari zoom prevention (16px base input), and multi-header CGNAT rate limiting.

---

## 2. Community Detection & God Nodes

### Community 1: Presentation & Page Composition
- **Primary God Node**: `src/app/page.tsx` (Degree 14)
- **Members**: `navbar.tsx`, `hero.tsx`, `what-i-offer.tsx`, `projects.tsx`, `skills.tsx`, `experience.tsx`, `outside-the-ide.tsx`, `contact.tsx`, `footer.tsx`
- **Architecture**: Single-page responsive container with maximum width of 2xl (`max-w-2xl`), maintaining tight typographic focus.

### Community 2: Motion, Skeletons & Lifecycle
- **Members**: `page-loader.tsx`, `scroll-indicator.tsx`, `scroll-reveal.tsx`, `theme-toggle.tsx`
- **Core Pattern**: Hardware-accelerated compositor animations (`opacity` and `transform: translateY`) running at 60fps with native `IntersectionObserver` and reduced-motion fallback.

### Community 3: AI Intelligence, Data & Transports
- **Primary God Nodes**: `components/chatbot.tsx` (Degree 9), `lib/data.ts` (Degree 8), `app/api/chat/route.ts` (Degree 5)
- **Members**: `profile-knowledge.ts`, `direct-email-modal.tsx`, `api/send-email/route.ts`
- **Architecture**: Grounded system prompt diagnosing visitor query angle; dual-transport email dispatch (Web3Forms client-side + nodemailer server-side).

### Community 4: Hive Mind & Cross-Agent Memory
- **Members**: `.swarm/memory.db` (RuFlo v3.71), `concept:DualAvatarToggle`, `concept:MobileDvhHardening`, `concept:FourAIPersonas`
- **Storage**: Vector embeddings (384-dimensional) indexed for multi-agent swarm retrieval under the `hive` namespace.

---

## 3. Provenance & Verification
- **EXTRACTED Edges**: Verified through static module imports and API routes.
- **INFERRED Edges**: Architectural design mappings and swarm memory associations.
- **Status**: Persisted into RuFlo Hive Memory and Graphify JSON for continuous agent recall.
