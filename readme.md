# KLG AUDICON — Design System

**KLG AUDICON** is a firm of auditors and accountants (*firma de auditores y contadores*) based in **Venezuela**. The brand voice is **"Corporate Avant-Garde"**: disruptive financial seriousness — technical innovation without losing professional authority. KLG positions itself not as a number-processor but as a **technological ally that prevents sanctions and optimizes profitability**.

This design system encodes that positioning into reusable tokens, components, and a full marketing-site UI kit, all in Spanish (Venezuela) and tuned for the local market (WhatsApp-first conversion, SENIAT/tributary literacy).

## Sources used to build this system
- **Logo assets** (uploaded): horizontal + stacked lockups in cobalt / black / white, plus the boxed **KLG** monogram in cobalt / cyan / black. All vectorized into `assets/`.
- **GitHub repo:** [`datawescalona/klgaudicon-firma-de-contadores`](https://github.com/datawescalona/klgaudicon-firma-de-contadores) — currently a placeholder (README only), so no code/Figma source was available. The system below is derived from the **logos** + the **brand strategy brief**. Explore that repo for future updates.
- **Brand strategy brief** (uploaded): the "Corporate Avant-Garde" prompt defining palette, iconography, UI motifs (floating glass pill nav, tilted cards), information architecture, and tone.

> ⚠️ **No production codebase or Figma was available.** The UI kit is an original, faithful interpretation of the documented brand direction — not a recreation of an existing live product. When real product code or Figma arrives, re-import and reconcile.

---

## Core services (content domain)
Auditoría (Financiera & Administrativa) · Outsourcing Contable · Outsourcing de Nómina · Estrategia Tributaria (IVA, ISLR, retenciones, IGTF, IGP) · **Conciliación Bancaria Express (24h — the conversion "gancho")** · Certificaciones de Ingresos.

---

## CONTENT FUNDAMENTALS — how KLG writes

- **Language:** Spanish (Venezuela). Professional but human; never robotic.
- **Voice & person:** Speaks as *"nosotros"* (we / the firm) to a business-owner *"tú"* (informal-but-respectful "you"). Direct address: "tu empresa", "tu próxima conciliación". Never the formal "usted" — it builds peer-to-peer trust, not distance.
- **Tone:** *Preciso, quirúrgico, orientado a soluciones* (precise, surgical, solution-oriented). Every line implies competence and risk-prevention. Headlines make a confident claim, then qualify it: *"Auditoría que previene sanciones, no que las explica."*
- **Positioning language:** Frame KLG as an **aliado tecnológico** (technological ally). Emphasize *prevención de sanciones*, *optimización de rentabilidad*, *cumplimiento SENIAT*, *respuesta en 24h*.
- **Casing:** Sentence case for body and most headlines. Eyebrows/kickers are **UPPERCASE** in mono with wide tracking ("ESTRATEGIA TRIBUTARIA"). Badges are uppercase mono.
- **Local specificity is a feature:** Name real Venezuelan fiscal terms — *SENIAT, ajuste por inflación, INCES, IGTF, parafiscales, libros legales, RIF*. This signals genuine expertise.
- **Numbers carry weight:** Figures are shown in tabular mono (`Bs. 1.284.500,00`, "24h", "+18 años"). Precision = credibility for an accounting firm.
- **CTAs are verbs + outcome:** "Conciliación en 24h", "Descargar checklist", "Solicitar propuesta", "Hablemos". The WhatsApp CTA is omnipresent.
- **Emoji:** **Not used.** This is a serious financial brand. Iconography carries visual warmth instead.
- **Vibe:** Authoritative, modern, reassuring. The subtext is always: *"con KLG, no te van a multar."*

---

## VISUAL FOUNDATIONS

- **Color:** Deep **cobalt blue** (`--cobalt-700 #2C38B8`, sampled from the logo box) is the authority color — headlines, links, primary actions. **Off-white "hueso"** (`--hueso #F5F3EC`) is the base canvas (warmer and more editorial than pure white; white is reserved for cards). **Bronze/copper** (`--bronze-600 #B97A39`) is reserved *exclusively* for conversion CTAs. **Cyan** (`--cyan-500 #1BC8F5`, a logo variant) is the technical highlight — accent rules, dots, small flourishes. Neutrals are cool-gray "ink".
- **Typography:** Display = **Space Grotesk** (geometric, avant-garde, slightly quirky — the disruptive voice), tight `-0.02em` tracking. Body/UI = **Manrope** (clean geometric sans). Figures/eyebrows/codes = **JetBrains Mono** with tabular numerals. *(All three are Google Fonts substitutes — see Font substitution below.)*
- **Backgrounds:** Predominantly flat **off-white** canvas with **white cards**. The one sanctioned gradient is a **cobalt→cobalt-900 diagonal** used for the lead-magnet band and footer. No stock photography ("nada de apretones de manos"), no busy textures. Imagery, when present, is geometric/iconographic, not photographic.
- **Signature motif — the tilt:** Cards rotate a subtle **−1.4° / +1.2°** (`--tilt` / `--tilt-alt`) to break grid rigidity (editorial asymmetry). On hover they **straighten and lift**.
- **Floating glass pill nav:** The navigation is a **glassmorphism pill** — translucent white (`--glass-bg`), 16px backdrop-blur, fully rounded, floating over content. The brand's most recognizable UI gesture.
- **Cards:** White surface, **16px radius** (`--radius-lg`), 1px subtle border, soft low-blur shadow. Optional **cyan top-rule** accent (`accent`). Squarer than typical SaaS — editorial, not bubbly.
- **Corner radii:** Buttons and badges are **full pills** (`--radius-pill`). Cards/inputs use **10–16px**. Icon tiles **10px**. The contrast (pill controls vs squarer cards) is intentional.
- **Shadows — "sticker" system:** Soft, low-spread, cool-tinted lifts. Interactive elements (buttons, icon tiles, cards) gain a **sticker shadow + 2–4px translateY** on hover — the brief's "tactile sticker" effect. Colored shadows (`--shadow-cobalt`, `--shadow-bronze`) under their matching buttons.
- **Iconography:** **Line art, 2px stroke, rounded corners, monocolor** (default gray `--ink-500`, or tinted in icon tiles). See ICONOGRAPHY below.
- **Animation/easing:** Crisp and confident. `--ease-out` `cubic-bezier(0.22,1,0.36,1)`, 140–240ms. Hovers translate up + add shadow; no bounces, no infinite loops, no parallax. Press states darken the fill.
- **Hover states:** Buttons darken fill + lift 2px. Cards straighten + lift 4px + deepen shadow. Nav links get a soft tinted pill background. Links underline.
- **Press states:** Color deepens (e.g. `--brand-primary-hover`, `--cta-hover`); no aggressive scale-down.
- **Borders:** Hairline `--border-subtle`/`--border-default` cool grays. Strong black border (`--border-strong`) only for high-contrast brand moments echoing the logo box.
- **Transparency & blur:** Used deliberately — the glass pill nav and the WhatsApp FAB shadow. Not sprinkled around.
- **Layout:** Max width `--container 1200px`, fluid `--gutter`. Asymmetric editorial grids (e.g. `1.15fr / 0.85fr` hero). Sticky floating nav. Fixed bottom-right WhatsApp FAB.
- **Imagery color vibe:** Cool and confident — cobalt/cyan dominant, warm bronze only as a conversion spark. No grain, no warmth wash.

---

## ICONOGRAPHY

- **System:** **Lucide** (https://lucide.dev) via CDN — it matches the brief's spec exactly: **2px stroke, rounded line caps/joins, monocolor**. This is the substitute for any future proprietary set; it is consistent and license-clean.
- **Treatment:** Default monocolor gray (`--icon-default #545967`). Inside an `IconTile`, icons take a tinted color on a soft rounded-square background with the **sticker hover shadow**.
- **Common glyphs:** `search-check` (auditoría), `calculator` (contable), `users-round` (nómina), `receipt-text` (tributos), `banknote` (conciliación), `file-badge` (certificaciones), `shield-check` (cumplimiento), `message-circle` (WhatsApp), `download` (lead magnet).
- **WhatsApp:** Rendered with the official WhatsApp glyph (hand-pathed in `WhatsAppFab`), always on brand-green `#25D366` — never restyled.
- **Emoji:** **Never.** **Unicode arrows** (→, ▾) are used sparingly inside controls only.
- **No hand-drawn SVG illustration.** Visual interest comes from the icon tiles, the tilt, and the cobalt gradient bands.

> **Font substitution flag:** The KLG/AUDICON wordmark uses a proprietary chunky geometric sans (rounded terminals, dotted "i"). We substitute **Space Grotesk** (display), **Manrope** (UI), and **JetBrains Mono** (figures) from Google Fonts. **If you have the licensed brand font, share it** and we'll swap `tokens/fonts.css`.

---

## Index — what's in this folder

**Foundations**
- `styles.css` — entry point (consumers link this one file; `@import` list only).
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css` — all design tokens + base element styles.
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand) for the Design System tab.

**Assets** (`assets/`)
- `logo-horizontal-{cobalt,black,white}.png`, `logo-stacked-{cobalt,black,white}.png`, `icon-klg-{cobalt,cyan,black}.png`.

**Components** (`components/`) — namespace `window.DesignSystem_b17006`
- `core/` — **Button**, **Badge**, **Card**, **IconTile**
- `forms/` — **Input** (input / textarea / select)
- `navigation/` — **PillNav** (floating glass nav)
- `feedback/` — **WhatsAppFab**
- `marketing/` — **ServiceCard**

**UI kit** (`ui_kits/website/`)
- `index.html` — interactive marketing site: Home · Servicios · Service detail · Blog · Contacto, with the floating WhatsApp FAB. Built from `Shell.jsx`, `HomeScreen.jsx`, `ServiceScreen.jsx`, `BlogScreen.jsx`, `ContactScreen.jsx`, `app.jsx`, `data.js`.

**Skill**
- `SKILL.md` — Agent-Skill manifest for using this system in Claude Code.

---

## Using the system
Link `styles.css`, load `_ds_bundle.js` (auto-generated), then read components from `window.DesignSystem_b17006`. See any `components/**/*.card.html` for the exact mount pattern, and each component's `*.prompt.md` for usage + variants.
