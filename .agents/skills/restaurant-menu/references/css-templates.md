# CSS Templates for Restaurant Menus

Copy-paste ready patterns for world-class restaurant menu design.

---

## Color Palette Template

```css
:root {
  /* Primary palette - adjust these to match restaurant brand */
  --black: #0A0806;           /* Deep black - main background */
  --deep: #141008;            /* Slightly lighter - section contrast */
  --charcoal: #1E1810;        /* Card backgrounds */
  --rust: #C4380A;            /* Primary accent - heat, passion */
  --ember: #E05218;           /* Lighter rust - hovers */
  --gold: #C9973A;            /* Premium accent - elegance */
  --gold-light: #E8B84B;      /* Prices, highlights */
  --cream: #F5EDD8;           /* Primary text on dark */
  --parchment: #EDE0C4;       /* Light section backgrounds */
  --smoke: #8C7B6B;           /* Secondary text, labels */
  --white: #FAF6EE;           /* Pure white text */
}
```

---

## Typography System

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

/* Display font - Bebas Neue for massive titles */
font-family: 'Bebas Neue', sans-serif;
font-size: clamp(2.5rem, 6vw, 4.5rem);  /* Responsive */
letter-spacing: .06em;
line-height: 1;

/* Body font - Cormorant Garamond for descriptions */
font-family: 'Cormorant Garamond', serif;
font-style: italic;  /* Only for descriptions */
font-size: 1rem;
line-height: 1.7;
color: rgba(245,237,216,.75);  /* Semi-transparent cream */

/* UI font - DM Sans for labels/metadata */
font-family: 'DM Sans', sans-serif;
font-size: .6rem;  /* Small */
letter-spacing: .4em;  /* Wide tracking */
text-transform: uppercase;
```

---

## Chapter Section Template

```css
.chapter {
  background: var(--black);
  padding: 7rem 5%;  /* Generous vertical padding */
  position: relative;
  overflow: hidden;
}

.chapter.dark { background: var(--charcoal); }
.chapter.light {
  background: var(--cream);
  color: var(--black);
}

.chapter-header {
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
}

.chapter-number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 10rem;
  color: rgba(255,255,255,.03);  /* Nearly invisible */
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  user-select: none;
}

.chapter-eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: .6rem;
  letter-spacing: .5em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
}

.chapter-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  letter-spacing: .05em;
  line-height: 1;
  color: var(--cream);
  margin-bottom: 1rem;
}

.chapter-rule {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.rule-line {
  width: 60px;
  height: 1px;
  background: var(--gold);
  opacity: .5;
}

.rule-diamond {
  width: 5px;
  height: 5px;
  background: var(--gold);
  transform: rotate(45deg);
}
```

---

## Item Grid Template

```css
/* Standard responsive grid */
.cuts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2px;
  max-width: 1300px;
  margin: 0 auto;
}

/* Item card styling */
.cut-item {
  background: var(--charcoal);
  padding: 2.5rem 2.2rem;
  border-left: 3px solid transparent;
  transition: border-color .3s, background .3s;
  position: relative;
  overflow: hidden;
}

.cut-item::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--rust), transparent);
  opacity: 0;
  transition: opacity .3s;
}

.cut-item:hover {
  border-color: var(--rust);
  background: #1a140c;
}

.cut-item:hover::after { opacity: 1; }

/* Item inner elements */
.cut-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  letter-spacing: .08em;
  color: var(--cream);
  margin-bottom: .4rem;
}

.cut-weight {
  font-family: 'DM Sans', sans-serif;
  font-size: .6rem;
  letter-spacing: .3em;
  text-transform: uppercase;
  color: var(--smoke);
  margin-bottom: .9rem;
}

.cut-desc {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: .95rem;
  line-height: 1.65;
  color: rgba(245,237,216,.65);
  margin-bottom: 1.2rem;
}

.cut-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cut-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--gold-light);
}
```

---

## Hero Triangle Template

```css
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2px;
  max-width: 1300px;
  margin: 0 auto 2px;
}

.hero-top-left { grid-column: 1; grid-row: 1; }
.hero-center {
  grid-column: 2;
  grid-row: 1 / 3;  /* Spans 2 rows */
  background: var(--rust);  /* Featured background */
  position: relative;
  overflow: hidden;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.hero-top-right { grid-column: 3; grid-row: 1; }
.hero-bottom-left { grid-column: 1; grid-row: 2; }
.hero-bottom-right { grid-column: 3; grid-row: 2; }

.hero-card {
  background: var(--charcoal);
  padding: 3rem 2.5rem;
  position: relative;
  overflow: hidden;
  transition: background .3s;
}

.hero-card:hover { background: #201a12; }

.hero-card-center {
  background: var(--rust);
  padding: 4rem 3rem;
  min-height: 500px;
}

/* Badge styling */
.hero-card-badge {
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: .55rem;
  letter-spacing: .45em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid rgba(201,151,58,.35);
  padding: .35rem .8rem;
  margin-bottom: 1.5rem;
}

/* Background number decoration */
.hero-bg-num {
  position: absolute;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 14rem;
  color: rgba(0,0,0,.15);
  bottom: -2rem;
  right: -1rem;
  line-height: 1;
  user-select: none;
}
```

---

## Light Section Template (Starters/Salads)

```css
.light {
  background: var(--cream);
  color: var(--black);
}

.light .starter-item {
  border-top: 1px solid rgba(0,0,0,.12);
  padding-top: 1.5rem;
  position: relative;
}

.light .starter-dot {
  width: 8px;
  height: 8px;
  background: var(--rust);
  border-radius: 50%;
  position: absolute;
  top: -4px;
  left: 0;
}

.light .starter-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3rem;
  letter-spacing: .08em;
  color: var(--black);
  margin-bottom: .5rem;
}

.light .starter-desc {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: .95rem;
  line-height: 1.65;
  color: #4a3d2e;
  margin-bottom: 1rem;
}

.light .starter-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--rust);
}
```

---

## Cocktail Tabs Template

```css
.mixes-layout {
  max-width: 1200px;
  margin: 0 auto;
}

.mixes-tabs {
  display: flex;
  gap: 3px;
  margin-bottom: 3px;
}

.mix-section { flex: 1; }

.mix-section-header {
  background: var(--rust);
  padding: 1.5rem 2rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
  letter-spacing: .1em;
  color: var(--white);
}

/* Different header colors for different cocktail families */
.mix-section-header.tiki { background: #0d3d4a; }
.mix-section-header.aperitivo { background: #2d2010; }
.mix-section-header.pisco-sec {
  background: linear-gradient(135deg, #7a2e08, #c4380a);
}

.mix-items {
  background: var(--charcoal);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.mix-item {
  padding: 1.2rem 0;
  border-bottom: 1px solid rgba(255,255,255,.05);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.mix-item:last-child { border-bottom: none; }

.mix-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: .06em;
  color: var(--cream);
  margin-bottom: .2rem;
}

.mix-desc {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: .82rem;
  color: var(--smoke);
  line-height: 1.5;
  max-width: 240px;
}

.mix-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--gold-light);
  white-space: nowrap;
  flex-shrink: 0;
}
```

---

## Cooking Terms Template

```css
.cooking-terms {
  background: var(--charcoal);
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(201,151,58,.2);
  border-bottom: 1px solid rgba(201,151,58,.2);
}

.cooking-terms-title {
  font-family: 'DM Sans', sans-serif;
  font-size: .55rem;
  letter-spacing: .5em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.5rem;
}

.cooking-terms-grid {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.cooking-term { text-align: center; }

.cooking-term-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  letter-spacing: .1em;
  color: var(--cream);
  margin-bottom: .3rem;
}

.cooking-term-desc {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: .75rem;
  color: var(--smoke);
}
```

---

## QR Code Template

```css
.qr-section {
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

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

.qr-label {
  font-family: 'DM Sans', sans-serif;
  font-size: .6rem;
  letter-spacing: .35em;
  text-transform: uppercase;
  color: var(--smoke);
  text-align: center;
}

.qr-url {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: .85rem;
  color: var(--gold);
  text-align: center;
}

@media (max-width: 600px) {
  .qr-code-wrapper img { width: 120px; height: 120px; }
  .qr-section { margin: 2rem 0; }
}
```

---

## Responsive Breakpoints

```css
@media (max-width: 800px) {
  /* Stack all grids */
  .hero-grid { grid-template-columns: 1fr; }
  .hero-center { grid-column: 1; grid-row: auto; }

  .protagonists-inner { grid-template-columns: 1fr; }
  .ritual-grid { grid-template-columns: 1fr; }
  .other-proteins { grid-template-columns: 1fr; }

  /* Remove clip-paths */
  .welcome { flex-direction: column; }
  .welcome-left { clip-path: none; }

  /* Stack tabs */
  .mixes-tabs { flex-direction: column; }

  /* Reduce padding */
  .chapter { padding: 4rem 5%; }
  .chapter-header { margin-bottom: 3rem; }
  .chapter-number { font-size: 6rem; }
}

@media (max-width: 600px) {
  /* Fine-tune sizes */
  .qr-code-wrapper img { width: 120px; height: 120px; }
  .hero-card { padding: 2rem 1.5rem; }
  .hero-card-center { padding: 3rem 2rem; }
  .cut-item { padding: 2rem 1.5rem; }
}
```

---

## Combos Grid Template

```css
.combos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2px;
  max-width: 1300px;
  margin: 0 auto;
}

.combo-card {
  background: var(--charcoal);
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;
  transition: transform .2s;
}

.combo-card:hover { transform: translateY(-2px); }

.combo-card.featured {
  background: var(--rust);
  grid-column: span 2;
}

@media (max-width: 700px) {
  .combo-card.featured { grid-column: span 1; }
}

.combo-tier {
  font-family: 'DM Sans', sans-serif;
  font-size: .55rem;
  letter-spacing: .45em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: .8rem;
}

.combo-tier.white { color: rgba(255,255,255,.55); }

.combo-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  letter-spacing: .06em;
  color: var(--cream);
  margin-bottom: .8rem;
  line-height: 1;
}

.combo-items {
  font-family: 'Cormorant Garamond', serif;
  font-size: .9rem;
  line-height: 1.7;
  color: rgba(245,237,216,.6);
  font-style: italic;
  margin-bottom: 1.5rem;
}

.combo-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--gold-light);
}

.combo-price.featured { color: var(--white); font-size: 1.8rem; }
```

---

## Spacer Divider

```css
.spacer {
  height: 2px;
  background: var(--rust);
  opacity: .35;
}
```