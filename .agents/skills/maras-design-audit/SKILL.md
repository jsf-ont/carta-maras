---
name: maras-design-audit
description: >
  Design audit for the Maras restaurant menu carta_maras.html. Use when user asks
  to audit design, check aesthetics, review visual design, analyze typography,
  color usage, spacing, or any variation like "audita el diseño", "revisá los colores",
  "está bien la tipografía", "check the design", "does it look premium", "mejora la
  estética". ONLY for carta_maras.html in this project.
---

# Maras Design Audit Skill

Audit the carta_maras.html file focusing on visual design, aesthetics,
and design system consistency.

## Target File
`carta_maras.html` in the project root.

## Audit Checklist

### 1. Color System
- [ ] Verify :root color palette is consistently used:
  - `--black: #0A0806` — main background
  - `--deep: #141008` — welcome section, protagonists
  - `--charcoal: #1E1810` — card backgrounds
  - `--rust: #C4380A` — primary accent
  - `--ember: #E05218` — hover states
  - `--gold: #C9973A` — premium accent, prices
  - `--gold-light: #E8B84B` — price highlights
  - `--cream: #F5EDD8` — primary text on dark
  - `--parchment: #EDE0C4` — light section backgrounds
  - `--smoke: #8C7B6B` — secondary text
  - `--white: #FAF6EE` — white text on dark
- [ ] Check for hardcoded color values that bypass variables
- [ ] Verify dark/light section alternation creates rhythm

### 2. Typography System
- [ ] Verify Google Fonts are properly loaded (Playfair Display, Cormorant Garamond, Bebas Neue, DM Sans)
- [ ] Check usage of each font family:
  - **Bebas Neue**: Display titles, chapter numbers, massive headings
  - **Cormorant Garamond**: Body descriptions, menu items (italic for descriptions)
  - **DM Sans**: Labels, eyebrows, UI elements (small caps, letter-spacing)
- [ ] Verify letter-spacing on labels (.4em-.5em)
- [ ] Check that font sizes use clamp() for responsiveness

### 3. Spacing & Layout
- [ ] Check section padding consistency (7rem for chapters)
- [ ] Verify 2px gaps create the dark line effect in grids
- [ ] Check that generous whitespace (white space is luxury)
- [ ] Verify chapter-header margin-bottom (5rem)
- [ ] Check starter-item gap in starters-grid

### 4. Visual Effects
- [ ] Check grain overlay (body::after) — subtle texture
- [ ] Verify diagonal slash effects on cover (clip-path polygon)
- [ ] Check SVG geometric elements (vineyard-geo, corner ornaments)
- [ ] Verify gold accent lines on hover (cut-item::after)
- [ ] Check border treatments (territorial-border on protagonists)

### 5. Design Patterns
- [ ] Chapter header structure: eyebrow → title → rule (diamond divider)
- [ ] Hero Triangle of Gold layout for featured cuts
- [ ] Protagonist cards with territorial-border decoration
- [ ] Tabbed cocktail sections (mixes-tabs)
- [ ] Cooking terms section for grill restaurants
- [ ] QR section placeholder in backcover (to be removed)

### 6. Premium Feel Check
- [ ] Does it feel like a world-class restaurant menu?
- [ ] Are descriptions evocative, not generic?
- [ ] Is there restraint (not overcrowded)?
- [ ] Do colors feel warm and premium (rust + gold on black)?
- [ ] Does typography hierarchy guide the eye?

## Design Quality Standards

This menu aspires to the level of:
- Asador Arxada (Basque grill excellence)
- Maido (Latin America's 50 Best)
- Central (Peruvian haute cuisine)

### Signs it's working:
- Clean, confident layout
- Evocative dish descriptions (poetry, not inventory)
- Consistent visual language throughout
- Premium materials feeling (rust, gold, black)
- Restraint in decoration

### Signs it needs work:
- Overcrowded sections
- Generic descriptions
- Inconsistent spacing
- Weak hierarchy
- Clashing colors

## Audit Output Format

```
## Design Audit Report — Maras Carta

### ✅ Design Strengths
- [what works visually and why]

### ⚠️ Design Issues
- [specific issue] — [problem it creates]
- Recommendation: [how to improve]

### 🎨 Color & Typography
- [observations about the design system]

### 📐 Layout & Spacing
- [observations about composition]

### ✨ Premium Feel Assessment
- [does it feel world-class? what to improve]

### 📋 Priority Fixes (High/Medium/Low)
- HIGH: [design issue]
- MEDIUM: [design issue]
- LOW: [design issue]
```

## Key Files to Reference

- `:root` CSS variables (lines ~10-22)
- Font families (line ~8)
- Grid systems (cuts-grid, hero-grid, starters-grid)
- Media queries (~1080-1090, ~1351-1359)

## Workflow

1. Read carta_maras.html
2. Apply audit checklist
3. Assess overall premium feel
4. Report findings in format above
5. If requested, make targeted design improvements
