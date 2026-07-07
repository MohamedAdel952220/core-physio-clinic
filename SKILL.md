---
name: core-physio-design
description: Use this skill to generate well-branded interfaces and assets for Core Physio Clinic (a bilingual Arabic/English physiotherapy & rehabilitation clinic), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, the logo, and UI kit components for prototyping.
user-invocable: true
---

# Core Physio Clinic — Design System

Read `readme.md` in this skill for the full design guide (content voice, visual foundations, iconography, and a file index), then explore the other files.

**Quick orientation**
- `styles.css` — the single global stylesheet to link. It `@import`s all design tokens (`tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css`) and the webfonts (Plus Jakarta Sans + IBM Plex Sans Arabic).
- `assets/` — the logo (running figure in a care-ring): `logo-mark.png` (color), `logo-mark-white.png` (for dark backgrounds), `logo-core-physio-original.png` (full lockup).
- `components/` — reusable React primitives (Button, Badge, Card, Input, Select, Logo, ServiceCard, ReviewCard). Each has a `.jsx`, `.d.ts`, and `.prompt.md`.
- `ui_kits/landing/` — the full premium bilingual storytelling landing page.
- `ui_kits/booking/` — the appointment-request page (submits to the clinic's WhatsApp).
- `foundations/` — token specimen cards (colors, type).

**Brand essence:** clean medical, premium, calming. White-dominant, healing teal (`--teal-600 #0D8E80`), soft mint gradients, generous whitespace, pill buttons, soft diffuse shadows, gentle scroll reveals. Warm, reassuring, outcome-focused copy. Fully bilingual: English (LTR) + Arabic (IBM Plex Sans Arabic, RTL) with an instant language toggle. No emoji; gold ★ for ratings, WhatsApp green for chat actions only.

**How to work**
- If you're creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and produce static HTML files for the user to view. Link `styles.css`, load the bundled components via `_ds_bundle.js` (`window.<Namespace>`), and reuse the tokens.
- If you're working on production code, copy assets and follow the rules in `readme.md` to design as an expert in this brand.
- If invoked without guidance, ask what the user wants to build, ask a few focused questions, then act as an expert designer who outputs HTML artifacts **or** production code as needed.
- Real photography matters for this brand — the UI kits use art-directed placeholders that should be swapped for the clinic's real physiotherapy photos.
