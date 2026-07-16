# Core Physio Clinic — Design System

A premium, modern, **bilingual (Arabic / English)** design system for **Core Physio Clinic**, a specialized physiotherapy & rehabilitation center in Sheikh Zayed, Giza, Egypt. The system powers a high-conversion landing page and an appointment-booking experience with a calm, trustworthy, clean-medical aesthetic.

> **Tagline:** Move Better. Live Pain Free. — **استعد حركتك بدون ألم**

## Brand at a glance

| | |
|---|---|
| **Clinic** | Core Physio Clinic |
| **Specialty** | Physiotherapy, rehabilitation, sports-injury recovery, posture & pain management |
| **Location** | Twin Towers Mall, Second Al Sheikh Zayed, Giza Governorate 12511, Egypt |
| **Phone / WhatsApp** | +20 10 40396189 · https://wa.me/201040396189 |
| **Instagram** | https://www.instagram.com/core_physio_clinic |
| **Hours** | Sat–Fri · Daily 9:00 AM – 12:00 PM |
| **Rating** | 4.9 ★ · 35+ reviews |
| **Languages** | Arabic (RTL) / English (LTR) |

## Sources

This is a **net-new brand identity** authored from the client brief (no prior codebase or Figma). The user attached several generic Claude/agent **skill libraries** for reference — none contain Core Physio brand assets, so nothing was imported from them. They remain useful reading for motion/animation technique:

- nextlevelbuilder/ui-ux-pro-max-skill
- freshtechbro/claudedesignskills (`motion-framer`, `gsap-scrolltrigger`, `animated-component-libraries` subtrees)
- leadgenjay/claude-skills (`animation-designer` subtree)
- anthropics/skills (+ `web-artifacts-builder` subtree)
- BehiSecc/awesome-claude-skills
- avelikiy/great_cto

Explore these repositories further to deepen animation/scroll work on the landing page.

---

## CONTENT FUNDAMENTALS

**Voice:** warm, professional, reassuring — a trusted clinician, not a hospital bureaucracy. Confidence without hype. Every line should lower anxiety and move the reader toward booking.

- **Person:** speak to the patient as **"you"** ("Your path to better movement"); the clinic is **"we / our team"**. Never clinical third-person.
- **Casing:** Headlines use **Title Case** ("Why Patients Trust Core Physio Clinic"). Body is sentence case. Eyebrows/labels are **UPPERCASE** with wide tracking.
- **Tone words:** recovery, movement, pain-free, personalized, long-term, comfortable, trusted, professional. Avoid fear-based or salesy language.
- **Outcomes over features:** "return to daily activities with confidence," not "we own modern equipment."
- **Trust signals are copy:** the 4.9★, 35+ reviews, "Top Physiotherapy & Rehabilitation Consultants and Specialists," "Located in Sheikh Zayed" appear as short badge phrases — punchy, scannable.
- **CTAs** are short imperatives: *Book Appointment*, *Chat on WhatsApp*, *Get Directions*, *Call Now*, *Learn More*, *Request Appointment*.
- **No emoji.** Trust marks use the gold star (★) and check (✓) only. Real testimonials are quoted verbatim and attributed to a real first + last name.
- **Bilingual parity:** every string ships in English **and** Arabic; the language switcher (EN | AR) toggles all content and flips layout direction instantly. Arabic copy is natural, not a literal translation (e.g. hero AR: *طريقك لحياة أكثر راحة وحركة بدون ألم*).

**Example pairings**

| English | العربية |
|---|---|
| Your Path To Better Movement & Pain-Free Living | طريقك لحياة أكثر راحة وحركة بدون ألم |
| Book Appointment | احجز موعدك |
| Chat on WhatsApp | تواصل عبر واتساب |
| Why Patients Trust Core Physio Clinic | لماذا يثق المرضى في كور فيزيو |

---

## VISUAL FOUNDATIONS

**Overall vibe:** clean medical, premium and minimal. White-dominant canvas, generous whitespace, soft mint gradients, calming teal as the single hero color. Think top-tier international clinic — airy, organized, confidence-inspiring.

### Color
- **Primary:** healing **teal** (`--teal-600 #0D8E80`), deepening to `--teal-900` for inverse sections, lightening to mint `--teal-50/100` for soft surfaces and icon tiles.
- **Text:** desaturated **ink/slate** (`--ink-900` headings → `--ink-500` muted). Never pure black.
- **Surfaces:** white cards on a barely-tinted page (`--surface #F6FAF9`); alternating sections use `--surface-2`.
- **Accents, used sparingly:** **gold** `--gold-500` for star ratings only; **coral** `--coral-500` for required-field asterisks / occasional warmth; **WhatsApp green** `--whatsapp #25D366` reserved exclusively for WhatsApp actions.
- **Gradients are soft & medical** — `--grad-hero` (mint radial wash behind hero), `--grad-mint` (section backdrops), `--grad-cta` (teal diagonal on primary buttons and conversion sections). No bluish-purple gradients, ever.

### Type
- **English / UI:** **Plus Jakarta Sans** — modern humanist sans; weights 400–800. Headlines `--fw-black (800)`, tight tracking `-0.02em`.
- **Arabic:** **IBM Plex Sans Arabic** — clean, clinical, highly legible RTL; weights 400–700.
- Fluid-feeling scale from `--text-2xs (11)` to `--text-5xl (68)`. Eyebrows are `--text-xs`, uppercase, `0.14em` tracking, teal.
- Body line-height is relaxed (`1.65`) for calm reading; headlines snug (`1.08–1.2`).
- *Substitution note: both families are loaded from Google Fonts. Swap to self-hosted binaries for production — see Caveats.*

### Spacing & layout
- 4px base scale (`--space-1…12`). Section rhythm `--section-y (80px)` desktop / `64px` mobile. Container max `1200px`, gutter `--space-5`.
- **Mobile-first**, fully responsive; hit targets ≥ 44px.
- Sticky glass header. Floating stat cards overlap the hero image.

### Shape, elevation & effects
- **Corner radii** are generous and soft: cards `--radius-lg (22px)`, buttons fully **pill** (`--radius-pill`), inputs `--radius-md (16px)`, large feature panels up to `--radius-2xl (36px)`.
- **Cards:** white fill, **1px hairline border** (`--border-subtle #E2ECEA`) + diffuse low shadow (`--shadow-sm`). On hover they **lift 4px** into `--shadow-lg`. Service-card icon tiles flip from mint to teal-gradient on hover.
- **Shadows** are soft, cool-tinted and long-throw (negative spread), never harsh. A dedicated `--shadow-teal` gives primary CTAs a colored glow.
- **Glassmorphism** (`--glass-bg` + `--blur-glass 16px` + translucent white border) is used for floating stats over imagery and the sticky header — sparingly, only over photos/color.
- **Borders** are hairlines only; structure comes from shadow and spacing, not heavy rules.

### Motion
- Easing `--ease-out cubic-bezier(.22,1,.36,1)` for entrances; `--ease-spring` for playful lifts. Durations `--dur-fast 140ms` (hover) → `--dur-slow 420ms` (reveals).
- Hover = lift + shadow deepen (and translateY(-2px) on buttons). Press = `scale(0.98)`. Scroll reveals are gentle fade-up. No bounce-heavy or infinite decorative loops.
- Imagery: warm, bright, real **physiotherapy photography** — clinicians treating patients, clean modern rooms. Natural light, calm tones, no heavy filters or grain.

---

## ICONOGRAPHY

- **Library:** **Lucide** (per the brief) — 24×24, ~2px stroke, round caps/joins. Matches the clean-medical, low-weight aesthetic. Link from CDN (`lucide` / `lucide-react`) or inline the few SVGs a page needs. *Substitution note: Lucide is the brief's choice and is used directly — no substitution.*
- **Style rule:** outline (stroke) icons only — never filled, never duotone — except the **gold star** (filled) for ratings and the **WhatsApp glyph** (filled) on its branded button.
- Icons sit in **mint rounded tiles** (`--radius-md`, `--teal-50` bg, `--teal-600` icon) that flip to the teal gradient on hover.
- **No emoji.** Unicode is limited to ★ (rating) and ✓ (trust checks).
- **Logo:** the Core Physio mark is an **athletic running figure inside a care-ring** — a teal-gradient emblem signalling movement, sports rehabilitation and recovery, paired with the *Core Physio* wordmark (Core in ink, Physio in teal, CLINIC tracked below). It is a supplied raster artwork, processed into transparent assets. Files in `assets/`: `logo-core-physio-original.png` (full supplied lockup), `logo-mark.png` (color mark, transparent — for light backgrounds), `logo-mark-white.png` (white knockout — for teal/dark backgrounds). The `Logo` React component embeds both marks and renders the full lockup with `variant="dark"` (light bg) or `variant="light"` (dark bg).

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry; `@import`s every token + font file. Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper so the system can be used in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css` (CSS custom properties).

**`assets/`** — `logo-core-physio-original.png` (full supplied lockup), `logo-mark.png` (color, transparent), `logo-mark-white.png` (white knockout for dark backgrounds).

**`components/`** — reusable React primitives (each with `.jsx` + `.d.ts` + `.prompt.md`):
- `core/` — **Button**, **Badge**, **Card**
- `forms/` — **Input**, **Select**
- `brand/` — **Logo**
- `marketing/` — **ServiceCard**, **ReviewCard**

**`foundations/`** — Design-System-tab specimen cards (colors, type, gradients, Arabic).

**`ui_kits/`** — full-screen product recreations:
- `landing/` — the premium bilingual storytelling landing page (`index.html` + `lib.jsx`, `content.jsx`, `sectionsA–D.jsx`, `App.jsx`). EN/AR toggle flips direction and all content; scroll-reveal animations; consumes the DS components.
- `booking/` — the appointment-request page (`index.html` + `booking.jsx`). Validates and hands off to the clinic's WhatsApp with a pre-filled message; bilingual; shows a success state. No online payment.

> Both kits load Lucide-style inline icons (in `landing/lib.jsx`) and art-directed photo placeholders (`Photo`) that the clinic replaces with real photography.

> The Design System tab renders every `@dsCard`-tagged HTML. The compiler auto-generates `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — do not edit those.
