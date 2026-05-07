# World-Class Restaurant Menu Best Practices

## The Philosophy

Top restaurant menus worldwide operate on a simple principle: **the menu is the restaurant's
most powerful sales tool**. At places like Asador Arxada (Spain #1), Central (Peru #1),
Disfrutar (Spain), and Maido (Peru), the menu does not list food—it sells an experience.

---

## Visual Design Principles

### 1. White Space is Luxury

The world's best menus use white space generously. This isn't wasted space—it's
deliberate breathing room that makes each dish feel important and considered.

**Example:**
- Most chain restaurants: Dense text, small margins, maximum information
- World's best: Generous margins, dishes breathe, premium feel

**Implementation:**
```css
.chapter {
  padding: 7rem 5%;  /* Lots of vertical padding */
}
.cut-item {
  padding: 2.5rem 2.2rem;  /* Generous internal spacing */
  gap: 2px;  /* But tight grid gaps for visual cohesion */
}
```

### 2. Typography Hierarchy

```
Display (Bebas Neue / Playfair Display)     → Restaurant name, section titles
Body Italic (Cormorant Garamond)             → Dish descriptions
UI/Labels (DM Sans)                          → Eyebrows, prices, metadata
```

**Never use:**
- More than 2 font families
- Sans-serif for descriptions (feels cheap)
- Script fonts (illegible at small sizes)

### 3. Color Psychology

| Color | Role | Example |
|-------|------|---------|
| Black/Deep | Authority, premium | Main backgrounds |
| Gold | Premium, celebration | Accents, borders, prices |
| Rust/Fire | Heat, passion, grill | Primary accent |
| Cream | Warmth, paper, tradition | Text on dark, light sections |
| White | Purity, cleanliness | Text on accent colors |

### 4. The Hero Triangle Layout

For steakhouse/grill restaurants, the most important 3-5 cuts get special treatment
in a triangular arrangement:

```
[    TOMAHAWK (900g)     ] [     LOMO FINO ★      ] [     T-BONE (500g)      ]
                            (spans 2 rows, rust bg)
[       COWBOY          ] [    ENTRAÑA FINA      ]
```

The center item (Lomo Fino / the signature) gets:
- Larger font
- Rust background (vs charcoal)
- More vertical space
- Star badge
- Background number decoration

---

## Writing Dish Descriptions

### The Sensory Writing Method

Top restaurants don't describe dishes—they **evoke them**.

**The formula:** `[technique] + [key element] + [sensory payoff]`

### Examples Transformation

| ❌ Chain Restaurant | ✅ World-Class |
|---------------------|---------------|
| "Grilled steak with herbs" | "Herb-crusted on the outside, rosy and tender within. The grill speaks." |
| "Fresh salmon" | "Atlantic salmon, kissed by fire. Skin crisps, flesh yields." |
| "Chocolate cake" | "Dense as a promise. Dark as a Mañara night." |

### For Latin American/Peruvian Restaurants

Use the terroir—celebrate the land:

**Good:** "Lomo de res a la parrilla"
**Better:** "Corte de 250g, tierno y jugoso"
**World-class:** "Seda que se funde. El corte que susurra lo que otros cortes gritan."

### Forbidden Words
- "Delicious" / "Rico" / "Sabroso" (tell, don't show)
- "Fresh" / "Fresco" (expected, not a selling point)
- "Homemade" / "Casero" (unless it's the concept)

### Recommended Words
- Texture: crujiente, sedoso, terso, jugoso, tierno
- Technique: asado, ahumado, braseado, a la parrilla
- Sensory: intenso, profundo, envolvente, memorable

---

## Section Structure

### The Flow (Latin American Grill Restaurant)

1. **Cover** — Brand statement, atmosphere
2. **Welcome** — Territory, story, personality
3. **Hero Cuts** — The signature pieces (triangle layout)
4. **Cuts of Beef** — Remaining cuts in grid
5. **Protagonists** — Special regional items get full cards
6. **Starters + Sides** — Light section on cream background
7. **Other Proteins** — Lamb, pork, chicken in 3-column grid
8. **Combos** — Sharing platters, horizontal cards
9. **Burgers** — Simple grid
10. **Cocktails** — Tabbed interface for cocktail types
11. **Beverages** — Compact grid, easy reference
12. **Cooking Terms** — If grill restaurant
13. **Backcover** — Quote, contact, QR code

### Dark/Light Alternation

Create rhythm through alternating section colors:

```
Cover (black)
Welcome (dark charcoal)
Hero Cuts (black)
Protagonists (deep/dark)
Starters (light/cream) ← contrast
Cuts Grid (dark)
Proteins (dark)
Combos (black)
Burgers (dark charcoal)
Cocktails (dark charcoal)
Beverages (black)
Backcover (black)
```

---

## Layout Patterns

### Triangle of Gold (Hero Cuts)
```css
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2px;
}
.hero-center {
  grid-column: 2;
  grid-row: 1 / 3;  /* Spans both rows */
  background: var(--rust);  /* Accent background */
  min-height: 500px;
}
```

### Standard Item Grid
```css
.cuts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2px;
  max-width: 1300px;
  margin: 0 auto;
}
```

### Tabbed Cocktails
```css
.mixes-tabs {
  display: flex;
  gap: 3px;
  margin-bottom: 3px;
}
.mix-section {
  flex: 1;
}
.mix-section-header {
  padding: 1.5rem 2rem;
  /* Different colors for different cocktail families */
}
```

---

## Price Presentation

### Best Practices

1. **Always use the currency symbol**: S/, $, €
2. **Omit decimals when clean**: S/100 not S/100.00 (unless the md has them)
3. **Use light gold color**: `color: var(--gold-light)`
4. **Range formatting**: "250 g — S/45 / 500 g — S/93"
5. **Position**: Bottom right or right-aligned in cards

### DON'T
- Don't use red for prices (aggressive)
- Don't use black for prices (lost on dark backgrounds)
- Don't use large bold prices (they're not the star)

---

## QR Code Placement

### Backcover is the Standard

The QR code lives on the backcover/closing page because:
1. Guest scans AFTER browsing (when they want the digital version)
2. It's a natural endpoint in the menu journey
3. Doesn't interrupt the visual flow of dishes

### QR Design Pattern
```html
<div class="qr-section">
  <div class="qr-code-wrapper">
    <img src="qr-code.png" alt="Scan for digital menu"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
    <div style="display:none;align-items:center;justify-content:center;...">
      <span>QR Code<br>(agregar archivo)</span>
    </div>
  </div>
  <div class="qr-label">Escanea para la carta digital</div>
  <div class="qr-url">yourrestaurant.com</div>
</div>
```

### QR Code Styling
```css
.qr-code-wrapper {
  background: var(--white);
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0,0,0,.3);
}
.qr-code-wrapper img {
  display: block;
  width: 140px;
  height: 140px;
}
```

---

## Responsive Strategy

### Breakpoints

**800px — Major restructuring:**
- Triangles become single column
- 3-column grids become 1 column
- Diagonal clip-paths removed
- Tabs become stacked

**600px — Fine tuning:**
- QR code size reduced
- Font sizes slightly smaller
- Padding reduced

### Mobile-First Patterns
```css
/* Always start with mobile, enhance for desktop */
.starters-grid {
  display: grid;
  grid-template-columns: 1fr;  /* Mobile first */
  gap: 2rem;
}
@media (min-width: 800px) {
  .starters-grid {
    grid-template-columns: repeat(2, 1fr);  /* Desktop enhancement */
  }
}
```

---

## Inspiration: Real World References

### Asador Arxada (Spain)
- Brutalist black backgrounds
- Massive Bebas Neue titles
- Cream text
- Minimal but impactful
- Heavy emphasis on fire/coal imagery

### Maido (Peru)
- Dark, sophisticated
- Fusion of Japanese/Peruvian typography
- Generous whitespace
- Cocktail-forward design
- Warm gold accents

### Central (Peru)
- Clean, editorial
- Cream/parchment backgrounds in some sections
- Altitude/terroir references
- Elegant, not aggressive

### Disfrutar (Spain)
- Playful but sophisticated
- Creative geometric elements
- Vivid accent colors
- Modernist approach

---

## Common Mistakes to Avoid

1. **Too many fonts** — Stick to 2-3 max
2. **Cluttered sections** — If it looks busy, remove items
3. **Inconsistent prices** — Use exact numbers from source
4. **Missing descriptions** — Every dish needs evocative text
5. **No visual hierarchy** — Eyebrow → Title → Item is the flow
6. **Ignoring the .md** — The source document IS the truth
7. **Hardcoded paths** — Always use relative paths for deployment
8. **Forgetting cooking terms** — Essential for grill restaurants
9. **QR without fallback** — Always handle missing image gracefully