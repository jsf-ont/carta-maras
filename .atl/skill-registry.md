# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| audit design, aesthetics, typography, color, premium | maras-design-audit | /mnt/c/Users/HP/Desktop/carta maras/.agents/skills/maras-design-audit/SKILL.md |
| audit UI/UX, user experience, mobile, accessibility | maras-ui-ux-audit | /mnt/c/Users/HP/Desktop/carta maras/.agents/skills/maras-ui-ux-audit/SKILL.md |
| neuromarketing, exclusividad, calidad premium, descripciones, persuasivo, auditar la carta, plan de mejora | maras-neuromarketing | /mnt/c/Users/HP/Desktop/carta maras/.agents/skills/maras-neuromarketing/SKILL.md |
| restaurant menu, carta, digital menu, QR menu, Parrilla | restaurant-menu | /mnt/c/Users/HP/Desktop/carta maras/.agents/skills/restaurant-menu/SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### maras-design-audit
- Audit carta_maras.html ONLY — not other files
- Use design checklist: color system, typography, spacing, visual effects, premium feel
- Benchmarks: Asador Arxada, Maido, Central level design
- CSS variables at :root (lines ~10-22) — verify all values use variables not hardcoded colors
- Google Fonts: Playfair Display, Cormorant Garamond, Bebas Neue, DM Sans
- Dark/light section alternation creates rhythm — check consistency
- Hero Triangle of Gold layout for featured cuts
- Output format: Design Audit Report with strengths, issues, priority fixes (High/Medium/Low)
- Only audit — do NOT implement changes

### maras-ui-ux-audit
- Audit carta_maras.html ONLY — not other files
- Use checklist: responsive breakpoints (800px, 600px), hierarchy, hover states, accessibility
- Hover transitions must be smooth (.3s timing)
- Mobile: grid systems collapse correctly, mix tabs stack to column
- All images need alt text, color contrast must meet standards
- Output format: UI/UX Audit Report with what's working, issues, mobile observations, priority fixes
- Only audit — do NOT implement changes

### maras-neuromarketing
- Audit carta_maras.html ONLY — not other files
- Six levers: Anchoring, Escasez, Prueba Social, Sensory Storytelling, Identity Signal, Info Architecture
- Benchmark examples: "Seda que se funde" (Lomo Fino), "Insignia Maras" (Tomahawk), "El rito que abre la mesa" (Pisco Sour)
- Each premium item needs ONE exclusivity signal — no over-badging
- Descriptions must be sensory + emotional, 15-25 words, NO generic adjectives (delicious/tasty/fresh)
- Price always needs anchoring context (weight, range, pairing) — never isolated
- Output format: Audit report + Plan de Mejora Propuesto with principles applied and impact expected
- Only audit + plan — do NOT modify the HTML file

### restaurant-menu
- Creates world-class restaurant menus rivaling Maido, Central, Asador Arxada
- Core rules: Less is more, Description sells, Consistency is key
- Color roles: black=bg, rust=accent, gold=premium, cream=text
- Fonts: Bebas Neue (display), Cormorant Garamond (body), DM Sans (labels)
- Hero triangle layout for featured cuts
- Descriptions: [texture] + [key ingredient] + [preparation/origin] + [sensory adjective]
- QR code placeholder with onerror handler for GitHub Pages
- Grid gap: 2px creates dark line effect — never remove
- Only create/build menus — audit existing menus uses maras-design-audit or maras-neuromarketing

## Project Conventions

No convention index files found in project root.
