---
name: restaurant-menu
description: >
  Create stunning, responsive restaurant menus in HTML/CSS that rival the world's
  top restaurants. Use this skill whenever the user wants to create a restaurant menu,
  carta de restaurante, carta de comida, digital menu, QR menu, or when they provide
  restaurant information (dishes, prices, categories) and ask for a menu design. Also
  trigger when building a restaurant website,的食物, carta de restaurante, carta de bar,
  carta de cafetería, or any variation. This skill handles the full workflow: content
  structure, visual design, responsive layout, QR code integration, and GitHub Pages
  deployment. Best for steakhouses, parrillas, haute cuisine, cocktail bars, and any
  restaurant wanting a world-class digital presence.
---

# Restaurant Menu Creation Skill

This skill guides you through creating a world-class restaurant menu that rivals the
design standards of elite establishments like Asador Arxada, Maido, Central, Disfrutar,
and other Latin America's 50 Best restaurants.

## Core Philosophy

A top restaurant menu is NOT just a list of dishes with prices. It's a **narrative
experience** that:
- Tells the restaurant's story before the first bite
- Creates desire through evocative, sensory descriptions
- Organizes information with clear visual hierarchy
- Feels premium through typography, spacing, and restraint

**The 3 Rules of World-Class Menu Design:**
1. **Less is more** — White space is a luxury, not wasted space
2. **Description sells** — Write dishes like poetry, not inventory
3. **Consistency is key** — Same structure, same weight, same tone throughout

---

## Workflow

### Phase 1: Capture & Structure

**Step 1: Get the raw content**
- Request or read the menu content ( dishes, categories, prices, descriptions)
- If user only provides dish names/prices, create evocative descriptions yourself
- NEVER leave a dish without a description (except simple items like "Agua Mineral")

**Step 2: Identify the menu structure from the .md**
Parse the categories in this order (typical Latin American/Peruvian restaurant):

```
1. ENTRADAS / STARTERS
2. ENSALADAS / SALADS
3. GUARNICIONES / SIDE ORDERS
4. CORTES DE RES / CUTS OF BEEF (the hero section)
5. CORDERO / LAMB
6. CERDO / PORK
7. POLLO / CHICKEN
8. HAMBURGUESAS / BURGERS
9. COMBOS PARRILLEROS / GRILL COMBOS
10. MOQUEGUA ES PISCO / COCKTAILS
11. TROPICALES / TROPICAL COCKTAILS
12. TIKI BAR
13. APERITIVOS / DIGESTIVOS
14. BEBIDAS / DRINKS
    - GASEOSAS / SODAS
    - CERVEZAS / BEERS
    - FROZEN
    - MOCKTAILS
    - CALIENTITOS / INFUSIONES
15. TÉRMINOS DE COCCIÓN / COOKING TERMS (for grill restaurants)
```

**Step 3: Note special sections**
- "PROTAGONISTAS MOQUEGUANOS" — heroes that get special visual treatment
- "TÉRMINOS DE COCCIÓN" — cooking temperatures for grill restaurants
- QR code section — usually on backcover

---

### Phase 2: Design System

Use this exact color palette structure (adjust the specific colors to match the
restaurant's brand, but keep the roles):

```css
:root {
  /* Primary palette */
  --black: #0A0806;           /* Deep black - main background */
  --deep: #141008;            /* Slightly lighter - section contrast */
  --charcoal: #1E1810;        /* Card backgrounds */
  --rust: #C4380A;            /* Primary accent - heat, passion, brand */
  --ember: #E05218;           /* Lighter rust for hovers */
  --gold: #C9973A;            /* Premium accent - elegance */
  --gold-light: #E8B84B;      /* Prices, highlights */
  --cream: #F5EDD8;           /* Primary text on dark */
  --parchment: #EDE0C4;      /* Light section backgrounds */
  --smoke: #8C7B6B;           /* Secondary text, labels */
  --white: #FAF6EE;           /* Pure white text on dark backgrounds */
}
```

**Typography System** (use Google Fonts):
```css
/* Display / Hero titles — Bebas Neue */
font-family: 'Bebas Neue', sans-serif;
letter-spacing: .06em;

/* Body / Descriptions — Cormorant Garamond */
font-family: 'Cormorant Garamond', serif;
font-style: italic;  /* descriptions only */

/* Labels / UI — DM Sans */
font-family: 'DM Sans', sans-serif;
font-size: .6rem;
letter-spacing: .4em;
text-transform: uppercase;
```

---

### Phase 3: HTML Structure

Build the page in this order:

#### 1. PORTADA (Cover)
- Full viewport height (100vh)
- Restaurant name in massive display font
- Tagline or concept statement
- Decorative geometric elements (SVG patterns, diagonal slashes)
- Optional logo

#### 2. BIENVENIDA (Welcome) [OPTIONAL but recommended]
- Two-column layout with diagonal clip-path
- Story/concept paragraph
- Territory stats if relevant (altitude, year founded, etc.)

#### 3. HERO GRID — The Triangle of Gold
For steakhouse/grill restaurants: the 3 most important cuts get the triangle layout:
- Top-left, Top-center (featured, larger), Top-right
- Bottom-left, Bottom-right

Each hero card: badge, name, weight, description, price, pairing suggestion

#### 4. MAIN CATEGORY SECTIONS
For each category:
```html
<section class="chapter [dark|light]">
  <div class="chapter-header">
    <div class="chapter-number">CATEGORY</div>
    <div class="chapter-eyebrow">Subtitle</div>
    <div class="chapter-title">CATEGORY NAME</div>
    <div class="chapter-rule">
      <div class="rule-line"></div>
      <div class="rule-diamond"></div>
      <div class="rule-line"></div>
    </div>
  </div>

  <!-- Grid of items -->
  <div class="[category]-grid">
    <!-- Item cards -->
  </div>
</section>
<div class="spacer"></div>
```

#### 5. SPECIAL SECTIONS

**Protagonistas** (Featured items with special visual treatment):
- Full-width cards with decorative borders
- Illustration SVGs (geometric/stylized, not clipart)

**Cocktails** — Tabbed layout:
- Mixes tabs with colored section headers
- Items with name, description, price in rows

#### 6. TERMS SECTION (for grills)
```html
<div class="cooking-terms">
  <div class="cooking-terms-title">Términos de Cocción</div>
  <div class="cooking-terms-grid">
    <div class="cooking-term">
      <div class="cooking-term-name">AZUL</div>
      <div class="cooking-term-desc">...</div>
    </div>
    <!-- repeat -->
  </div>
</div>
```

#### 7. CONTRAPORTADA (Backcover)
- Quote/tagline
- Contact info
- **QR Code section**:
```html
<div class="qr-section">
  <div class="qr-code-wrapper">
    <img src="qr-code.png" alt="Scan for digital menu"
         onerror="showFallback(this)">
  </div>
  <div class="qr-label">Escanea para la carta digital</div>
  <div class="qr-url">your-domain.com</div>
</div>
```

---

### Phase 4: CSS Patterns

#### Grid Systems
```css
/* For item grids — auto-fill responsive */
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 2px;  /* 2px gaps create the dark line effect */

/* For hero triangles — 3 column, center spans 2 rows */
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto auto;
```

#### Responsive Breakpoints
```css
@media (max-width: 800px) {
  /* Stack everything, remove clip-paths */
  .hero-grid { grid-template-columns: 1fr; }
  .protagonists-inner { grid-template-columns: 1fr; }
  .other-proteins { grid-template-columns: 1fr; }
  .ritual-grid { grid-template-columns: 1fr; }
  .welcome { flex-direction: column; }
  .welcome-left { clip-path: none; }
  .mixes-tabs { flex-direction: column; }
}

@media (max-width: 600px) {
  /* Adjust QR code size */
  .qr-code-wrapper img { width: 120px; height: 120px; }
}
```

#### Hover Effects
```css
.cut-item {
  border-left: 3px solid transparent;
  transition: border-color .3s, background .3s;
}
.cut-item:hover {
  border-color: var(--rust);
  background: #1a140c;
}
```

#### Gold Accent Lines
```css
.cut-item::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--rust), transparent);
  opacity: 0;
  transition: opacity .3s;
}
.cut-item:hover::after { opacity: 1; }
```

---

### Phase 5: Writing Descriptions That Sell

**The Formula:**
`[Texture] + [key ingredient] + [special preparation or origin] + [sensory adjective]`

**Examples from good to world-class:**

❌ BAD: "Picaña, 250g, S/45"
✅ GOOD: "Capa de grasa que sella los jugos. Intensa, vibrante."
✅ WORLD-CLASS: "Capa de grasa que sella los jugos en cada vuelta de la brasa.
Intensa, vibrante, pura memoria gustativa."

❌ BAD: "Lomo fino, S/45"
✅ GOOD: "Seda que se funde. El corte que susurra lo que otros gritan."

**Never write:**
- Generic descriptions ("Delicious", "Fresh", "Tasty")
- Simple lists of ingredients
- Technical cooking terms the guest won't understand

**Always write:**
- Sensory, evocative language
- What makes THIS dish special
- The experience of eating it

---

### Phase 6: QR Code & Deployment

**For GitHub Pages deployment:**
1. Use relative paths: `./logo.webp`, `./qr-code.png`
2. Add `onerror` handlers so missing files don't break layout
3. In the QR section, use a placeholder comment explaining the user needs to:
   - Generate QR code pointing to their GitHub Pages URL
   - Name it `qr-code.png` and place in same folder

**QR Code generation:**
```html
<!-- Use a service like qr-code-generator.com -->
<!-- Point to: https://yourusername.github.io/repo-name/ -->
<img src="qr-code.png" alt="Scan for digital menu">
```

---

## Output Checklist

Before finishing, verify:

- [ ] All categories from the source .md are represented
- [ ] All dishes have prices that match the source
- [ ] All sections have proper headers (eyebrow, title, rule)
- [ ] Responsive at 800px and 600px breakpoints
- [ ] Logo paths use relative `./` paths for GitHub Pages
- [ ] QR code section is in backcover with proper fallback
- [ ] Cooking terms section present (for grill restaurants)
- [ ] No hardcoded absolute paths (no `/mnt/user-data/...`)
- [ ] Fonts loaded from Google Fonts
- [ ] Color variables defined in :root
- [ ] Dark/light section alternation creates rhythm
- [ ] Hero triangle layout for featured cuts
- [ ] No Lorem ipsum or placeholder text

---

## File Output

Save the menu as:
- `{restaurant_name}.html` (e.g., `carta_maras.html`)

For GitHub Pages, also note:
- `{restaurant_name}_md.md` (original markdown source)
- `logo.webp` (user provides)
- `qr-code.png` (user generates)

---

## References

See `references/best-practices.md` for detailed design principles from
world-renowned restaurant menus (Asador Arxada, Maido, Central, Disfrutar).

See `references/css-templates.md` for copy-paste CSS patterns.

See `templates/menu-template.html` for a complete starting template.