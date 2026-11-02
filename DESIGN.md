# DESIGN.md: Visual Guidelines & Art Direction

## 1. Aesthetic Direction
- **Inspiration:** renlenon.vercel.app — minimalist, clean technical portfolio.
- **Tone:** Technical, intentional, typography-forward, minimal visual distraction.
- **Anti-Slop Directives:** 
  - No generic purple-to-blue AI gradients.
  - No endless cards nested inside cards.
  - Generous whitespace, precise typography scale, and crisp subtle borders.

## 2. Color Palette & Theming (Dual Mode)
### Dark Mode (Default)
- **Background:** `#090a0f` / `#0d1117`
- **Surface / Card:** `#161b22` with border `#30363d`
- **Primary Text:** `#f0f6fc`
- **Muted Text:** `#8b949e`
- **Accent:** Emerald `#10b981` (for live status indicators) & Indigo/Cyan `#38bdf8` for subtle technical highlights.

### Light Mode
- **Background:** `#fcfcfd`
- **Surface / Card:** `#ffffff` with border `#e2e8f0`
- **Primary Text:** `#0f172a`
- **Muted Text:** `#64748b`
- **Accent:** Emerald `#059669` / Blue `#2563eb`

## 3. Typography
- **Headings & Body:** Geist Sans / Inter with clean system font fallbacks.
- **Code & Tech Tags:** Geist Mono / JetBrains Mono.

## 4. UI Library
- Tailwind CSS v4 / v3 with `shadcn/ui` style primitives (Radix UI / Lucide React).
