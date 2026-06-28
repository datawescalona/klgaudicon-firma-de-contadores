---
name: klg-audicon-design
description: Use this skill to generate well-branded interfaces and assets for KLG AUDICON (a firm of auditors/accountants in Venezuela), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (tokens, components, ui_kits, assets, guidelines).

KLG AUDICON is a Venezuelan audit/accounting firm with a "Corporate Avant-Garde" identity: deep cobalt blue, off-white "hueso" canvas, bronze CTAs, cyan accents; geometric type (Space Grotesk / Manrope / JetBrains Mono); floating glassmorphism pill nav; subtly tilted editorial cards with soft "sticker" hover shadows; line-art Lucide icons; an omnipresent WhatsApp conversion button. Copy is Spanish (Venezuela), precise and solution-oriented, addressing business owners as "tú", naming real fiscal terms (SENIAT, ajuste por inflación, parafiscales). No emoji.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view — link `styles.css` for the tokens. If working on production code, copy assets and read the rules here to become an expert in designing with this brand; mount components from `window.DesignSystem_b17006` after loading `_ds_bundle.js`.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
