---
name: maras-ui-ux-audit
description: >
  UI/UX audit for the Maras restaurant menu carta_maras.html. Use when user asks
  to audit UI/UX, check user experience, analyze interface quality, review interactions,
  assess accessibility, or any variation like "audita la UI/UX", "revisá la experiencia
  de usuario", "cómo se ve esto en móvil", "check the UX", "is this user friendly",
  "mejora la usabilidad". ONLY for carta_maras.html in this project.
---

# Maras UI/UX Audit Skill

Audit the carta_maras.html file focusing on user experience, interaction quality,
and accessibility.

## Target File
`carta_maras.html` in the project root.

## Audit Checklist

### 1. Responsive Behavior
- [ ] Check if layout works at 800px breakpoint
- [ ] Check if layout works at 600px breakpoint
- [ ] Verify grid systems collapse correctly (hero-grid, cuts-grid, starters-grid)
- [ ] Check if tabs become stacked columns on mobile (mixes-tabs)
- [ ] Verify welcome section clips correctly or has fallback

### 2. Visual Hierarchy
- [ ] Confirm chapter headers have clear eyebrow → title → rule structure
- [ ] Check that prices are visually distinct from descriptions
- [ ] Verify hero items (Triangle of Gold) have proper visual weight
- [ ] Ensure the "ESTRELLA DE LA BRASA" badge draws attention

### 3. Interaction Quality
- [ ] Hover states exist on cut-item cards (border-color transition)
- [ ] Hover states exist on burger cards (border-top-color)
- [ ] Hover states exist on combo cards (translateY)
- [ ] All hover transitions are smooth (check .3s timing)
- [ ] Check if any interactive elements lack hover feedback

### 4. Accessibility
- [ ] All images have alt text (logo, QR placeholder)
- [ ] Font sizes are readable on mobile (check clamp() values)
- [ ] Color contrast between text and backgrounds meets standards
  - cream on black: OK
  - gold on charcoal: OK
  - rust on white: OK
- [ ] Check if touch targets (buttons, links) are adequate size

### 5. Information Architecture
- [ ] Menu flows logically: Cover → Welcome → Hero → Categories → Drinks → Backcover
- [ ] Category sections have consistent structure
- [ ] Price formatting is consistent throughout (same decimal places)
- [ ] No orphaned sections or floating elements

### 6. Performance Considerations
- [ ] No external resources that could fail silently
- [ ] SVG elements are inline (no external SVG dependencies)
- [ ] Google Fonts loaded with proper preconnect

## Audit Output Format

When auditing, report findings in this structure:

```
## UI/UX Audit Report — Maras Carta

### ✅ What's Working Well
- [item]

### ⚠️ Issues to Fix
- [item] — specific problem
- Recommendation: [how to fix]

### 🔍 Mobile Experience
- [observations about responsive behavior]

### 📋 Priority Fixes (High/Medium/Low)
- HIGH: [issue]
- MEDIUM: [issue]
- LOW: [issue]
```

## Key Files to Reference

For CSS patterns and component structures:
- Review the `<style>` section of carta_maras.html
- Focus on media queries at lines ~1080-1090 and ~1351-1359

## Workflow

1. Read carta_maras.html
2. Apply audit checklist
3. Report findings in the format above
4. If requested, make targeted fixes to specific issues
