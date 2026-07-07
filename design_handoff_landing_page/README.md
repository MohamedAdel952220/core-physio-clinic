# Handoff: Core Physio Clinic — Bilingual Landing Page & Booking

## Overview

A premium, mobile-first marketing website for **Core Physio Clinic**, a physiotherapy & rehabilitation clinic in Sheikh Zayed, Giza, Egypt. The package covers two views:

1. **Landing page** — a 10-section storytelling marketing page (hero → empathy → about → trust → recovery journey → services → reviews → gallery → booking CTA → location → final CTA → footer).
2. **Booking page** — an appointment-request form that hands off to the clinic's WhatsApp with a pre-filled message (no online payment).

Both views are **fully bilingual (English LTR / Arabic RTL)** with an instant language toggle, and use a calming medical brand (healing teal, soft mint gradients, white background).

---

## About the Design Files

The design sources (HTML / React+Babel prototypes) live at the **project root** — `ui_kits/landing/`, `ui_kits/booking/`, `components/`, `tokens/`, `styles.css`, `assets/`. They are **design references** that show the intended look, content, and behavior. They are **not** meant to be shipped as-is.

**Your task:** recreate these designs in the target codebase's environment. The brief calls for **Next.js 15 + Tailwind CSS + Framer Motion + Lucide icons**, so the intended target is a React/Next stack. If you're dropping into an existing codebase, use its established patterns and component library instead of porting the prototype's inline styles verbatim. If no codebase exists yet, scaffold a Next.js 15 (App Router) project.

The prototype uses:
- **CSS custom properties** for all design tokens (`tokens/*.css`) — port these to your Tailwind theme (`tailwind.config.js`) or a global CSS layer.- **Inline-style React components** (no Tailwind in the prototype) — re-implement with Tailwind classes / your styling solution.
- **A custom inline-SVG icon set** mimicking Lucide — in production, just install `lucide-react` and use the matching icon names (listed below).

---

## Fidelity

**High-fidelity (hifi).** Final colors, typography, spacing, gradients, shadows, copy (EN + AR), and interactions are all specified. Recreate pixel-faithfully using the codebase's libraries. Exact token values are in the Design Tokens section and in `tokens/`.

---

## Screens / Views

### 1. Landing Page (`ui_kits/landing/index.html`)

**Purpose:** Convert visitors into appointment bookings; build trust via reviews, ratings, and a clear recovery narrative.

**Global layout**
- Max content width **1200px**, horizontal padding **24px**, centered.
- Vertical section rhythm: **80px** desktop (`--section-y`), **64px** mobile.
- Alternating section backgrounds: `--white` and `--surface-tint (#F6FAF9)`.
- Fixed/sticky header (72px tall) that turns to a translucent blurred bar after 20px of scroll.
- Scroll-reveal animation on most blocks (fade + 22px rise, 0.7s `--ease-out`, staggered by `--d` delay).

**Sections (in order):**

| # | Section | Layout & key components |
|---|---------|------------------------|
| 1 | **Header** | Logo (left), centered nav (Home/About/How It Works/Services/Reviews/Location), right: EN\|AR toggle + "Book on WhatsApp" button. Sticky; nav hidden < 920px. |
| 2 | **Hero** | 2-col grid (1.05fr / 0.95fr). Left: soft badge, H1 (clamp 34–60px, weight 800, tracking −0.03em), subhead, two CTAs (primary "Book Appointment" + secondary "Chat on WhatsApp"), inline rating row (4.9★ + 35+ reviews). Right: 4:5 photo with two floating glass stat cards (rating, happy patients). Background `--grad-hero`. |
| 3 | **Empathy** | 2-col. Left: 1:1 photo. Right: section heading + body + pill chips of pain points. Background white. |
| 4 | **About** | 2-col. Left: heading + body + 2×2 feature cards (icons: venus, sofa, sparkles, heart-handshake). Right: 3-photo collage grid. Background `--surface-tint`. |
| 5 | **Trust** | Centered heading + 3-col grid of 6 trust cards (icon tile + title + description). Background white. |
| 6 | **Journey** | Centered heading + 5-step horizontal timeline with connecting line. Each step: numbered gradient circle (68px) with icon, title, description. Collapses to 2-col / 1-col on mobile; line hidden on mobile. Background `--surface-tint`. |
| 7 | **Services** | Centered heading + auto-fill grid (min 248px) of 10 `ServiceCard`s (icon + title + description + "Learn More" → WhatsApp). Background white. |
| 8 | **Testimonials** | Heading + Google rating badge (4.9 + stars), then 3-col grid of `ReviewCard`s. Background `--surface-tint`. |
| 9 | **Gallery** | Centered heading + asymmetric masonry grid (4 cols, 180px rows, varied spans) of 6 photo tiles. Background white. |
| 10 | **Booking CTA** | Full-width teal-gradient card (radius 32px) with heading + body (left) and stacked CTA buttons (right). Inside a white-padded band. |
| 11 | **Location** | Heading + 2-col: left address/hours/phone card with Directions/Call/WhatsApp buttons; right Google Maps `<iframe>` embed. Background `--surface-tint`. |
| 12 | **Final CTA** | Full-bleed `--teal-900` band with radial glow, centered eyebrow + big H2 (clamp 30–54px) + subtext + two CTAs. |
| 13 | **Footer** | `--ink-900` bg, 4-col: logo+tagline, Quick Links, Contact, Follow (Instagram + WhatsApp). Bottom copyright bar. |

### 2. Booking Page (`ui_kits/booking/index.html`)

**Purpose:** Collect an appointment request and hand off to WhatsApp. **No online payment.**

**Layout**
- Top bar (70px): logo (left) + "Back to site" link + language toggle (right).
- Main: 2-col grid (0.82fr aside / 1.18fr form), max 1140px, gap 28px. Collapses to 1-col < 860px.
- **Aside** (teal-gradient card, radius 26px, white text): eyebrow, H1, subtext, "What happens next?" 3-step list, "no online payment" pill, call link.
- **Form card** (white, radius 26px, border, shadow-md): fields below.

**Form fields** (required marked *):
- Full Name* (text, users icon)
- Phone Number* (tel, phone icon)
- WhatsApp Number (tel, message-circle icon)
- Age* (number)
- Gender* (select: Male / Female / Prefer not to say)
- Preferred Date* (native date picker)
- Service Needed* (select: Physiotherapy Session / Sports Injury Rehabilitation / Back Pain Treatment / Neck Pain Treatment / Manual Therapy / Post Surgery Rehabilitation / Other)
- Notes (textarea, optional)
- Submit: "Request Appointment" (full-width primary, message-circle icon)

**Success state** (replaces form after submit): centered check circle, "Thank you!" heading, confirmation body, "we've opened WhatsApp" note, "Open WhatsApp" + "Submit another request" buttons.

---

## Interactions & Behavior

- **Language toggle (EN ↔ AR):** sets `document.documentElement.dir` to `ltr`/`rtl` and `lang`, and swaps every string. Font family switches to `--font-arabic` for AR. Must be instant, no reload.
- **Sticky header:** transparent at top; on `scrollY > 20` gains `rgba(255,255,255,0.82)` bg + `blur(16px)` backdrop + hairline border + soft shadow. Transition `--dur-base var(--ease-out)`.
- **Smooth scroll:** nav links scroll to section top minus 76px header offset (`window.scrollTo({behavior:'smooth'})`).
- **Scroll reveal:** `IntersectionObserver` (threshold 0.14, rootMargin `0px 0px -6% 0px`). Elements in/near the viewport on load reveal immediately; below-fold reveal on intersect. Respect `prefers-reduced-motion: reduce` (show instantly, no transform).
- **WhatsApp handoff (both pages):**
  - "Chat on WhatsApp" / "Learn More" open `https://wa.me/201040396189` (Learn More appends `?text=I'd like to know more about: <service>`).
  - Booking submit builds a multi-line message (format below), `encodeURIComponent`s it, opens `https://wa.me/201040396189?text=…` in a new tab, then shows the success state.
- **Form validation:** on submit, if name/phone/age/gender/date/service are empty → show inline error banner ("Please fill in all required fields.") and abort. Otherwise proceed.
- **Button states:** primary = teal, hover darkens to `--teal-700` + lifts (translateY −1px) + `--shadow-teal`; secondary = white w/ border, hover tint; whatsapp = `--whatsapp #25D366`, hover `--whatsapp-dark`. Active = slight scale-down.
- **Service / Review cards:** hover lifts card (translateY −4px) and deepens shadow.

### WhatsApp message format (booking)
```
New Appointment Request

Patient Name: [name]
Phone: [phone]
WhatsApp: [whatsapp or phone]
Age: [age]
Gender: [gender]
Preferred Date: [date]
Service: [service]
Notes: [notes or "-"]

Please contact the patient to confirm the exact appointment time.
```
The message labels stay in English for the clinic's consistency even when the UI is Arabic.

---

## State Management

**Landing:** `lang` ('en' | 'ar'); `scrolled` (boolean, header); reveal classes via IntersectionObserver (DOM, not React state).

**Booking:**
- `lang` ('en' | 'ar')
- `form` object: `{ name, phone, whatsapp, age, gender, date, service, notes }`
- `error` (boolean) — required-fields banner
- `done` (boolean) — toggles success view
- `waUrl` (string) — the generated WhatsApp link (for the "Open WhatsApp" fallback button)

No data fetching. No backend. WhatsApp deep link is the only "submission."

---

## Design Tokens

Full source: `tokens/`. Port to `tailwind.config.js` theme or a global CSS layer.

### Colors
**Teal (primary/healing):** 900 `#073B36` · 800 `#0A574E` · 700 `#0A6F64` · **600 `#0D8E80` (primary)** · 500 `#16A99A` · 400 `#43C2B5` · 300 `#82D7CD` · 200 `#BDE9E3` · 100 `#DCF2EF` · 50 `#EEF8F6`
**Ink/Slate (text):** 900 `#0C2429` (headings) · 800 `#15333A` · 700 `#274A51` (strong body) · 600 `#3C5B61` (body) · 500 `#5C7479` (muted) · 400 `#84999D` (placeholder) · 300 `#AFC0C3`
**Surfaces:** white `#FFFFFF` · page tint `#F6FAF9` · alt `#EFF5F4` · border `#E2ECEA` · border-2 `#D2E0DD`
**Accents:** gold `#F5B73E` (stars) / gold-100 `#FCEEC9` · coral `#F08A6A` / coral-100 `#FBE3DA` · whatsapp `#25D366` / dark `#1EBE5B`

**Gradients:**
- `--grad-hero`: `radial-gradient(120% 120% at 85% 8%, #DCF2EF 0%, #F6FAF9 42%, #FFFFFF 100%)`
- `--grad-cta`: `linear-gradient(135deg, #0A6F64 0%, #0D8E80 55%, #16A99A 100%)`
- `--grad-mint`: `linear-gradient(160deg, #EEF8F6 0%, #DCF2EF 55%, #FFFFFF 100%)`

### Typography
- **English/UI font:** Plus Jakarta Sans (weights 400/500/600/700/800)
- **Arabic font:** IBM Plex Sans Arabic
- **Scale (rem / px):** 2xs .6875/11 · xs .75/12 · sm .875/14 · base 1/16 · md 1.125/18 · lg 1.375/22 · xl 1.75/28 · 2xl 2.25/36 · 3xl 2.75/44 · 4xl 3.5/56 · 5xl 4.25/68
- **Line-heights:** tight 1.08 · snug 1.2 · normal 1.45 · relaxed 1.65
- **Tracking:** tight −0.02em · snug −0.01em · wide 0.04em · eyebrow 0.14em (uppercase)
- Headings use weight 800, hero H1 tracking −0.03em.

### Spacing (4px base)
1 `4` · 2 `8` · 3 `12` · 4 `16` · 5 `24` · 6 `32` · 7 `40` · 8 `48` · 9 `64` · 10 `80` · 12 `112` (px). Section rhythm `--section-y` = 80px (mobile 64px). Container max 1200px, pad 24px.

### Radius
xs 6 · sm 10 · md 16 · lg 22 · xl 28 · 2xl 36 · pill 999 (px).

### Shadows
- xs `0 1px 2px rgba(12,36,41,.06)`
- sm `0 2px 8px rgba(12,36,41,.06)`
- md `0 10px 28px -12px rgba(12,36,41,.18)`
- lg `0 24px 56px -20px rgba(12,36,41,.22)`
- teal `0 18px 40px -16px rgba(13,142,128,.45)`
- glass `0 16px 48px -18px rgba(10,111,100,.28)`
- glass-bg `rgba(255,255,255,.72)`, blur `blur(16px)`

### Motion
- ease-out `cubic-bezier(0.22,1,0.36,1)` · ease-in-out `cubic-bezier(0.65,0,0.35,1)` · spring `cubic-bezier(0.34,1.56,0.64,1)`
- durations: fast 140ms · base 240ms · slow 420ms

---

## Components (re-implement these primitives)

Source in `components/`. Each has a `.jsx` (implementation), `.d.ts` (props contract), and `.prompt.md` (usage).

| Component | Props (key) | Notes |
|-----------|-------------|-------|
| `Button` | `variant` (primary/secondary/whatsapp/danger), `size` (sm/md/lg), `full`, `iconLeft`, `iconRight`, `disabled` | Pill radius, hover lift |
| `Badge` | `tone` (soft/teal/gold), `dot` | Small status pill |
| `Card` | `padding`, elevation via shadow | Base surface card |
| `Input` | `label`, `type`, `required`, `icon`, `dir`, `placeholder` | Focus ring `0 0 0 4px rgba(22,169,154,.14)` |
| `Select` | `label`, `options[]`, `placeholder`, `required`, `dir` | Native-style dropdown |
| `Logo` | `variant` (dark/light), `size` | Running-figure mark + wordmark |
| `ServiceCard` | `icon`, `title`, `description`, `action`, `onAction`, `dir` | Icon tile + Learn More |
| `ReviewCard` | `name`, `rating`, `quote`, `role`, `dir` | Star row + quote |

---

## Icons

The prototype ships a **custom inline-SVG set** (in `ui_kits/landing/lib.jsx`) styled like **Lucide** (24×24, stroke 2, round caps/joins). **In production, install `lucide-react`** and map by name. Names used:

`arrow-right, check, message-circle, users, stethoscope, heart-pulse, heart, image, building-2, armchair, sofa, bed, venus, sparkles, heart-handshake, activity, zap, move-down, bone, hand, droplets, person-standing, scan-line, shield-plus, shield-check, clipboard-list, route, line-chart, trophy, map-pin, clock, phone, navigation, instagram, dumbbell, star`

Stars (rating) use **filled** gold `#F5B73E`.

---

## Assets

In `assets/`:
- `logo-mark.png` — color running-figure mark (light backgrounds)
- `logo-mark-white.png` — white mark (dark backgrounds)
- `logo-core-physio-original.png` — original supplied full lockup

> **Logo note:** currently raster PNG (embedded in the `Logo` component as a data URI in the prototype). For production, request/produce an **SVG** version for crisp scaling and smaller payload.

**Photography:** the prototype uses art-directed **placeholder panels** (`Photo` component — branded duotone gradient + icon + label). Replace every `<Photo>` with the clinic's **real physiotherapy photography**: hero (therapist treating patient), clinic interior, treatment room, reception, equipment, rehab sessions, staff.

**Map:** Google Maps embed via `<iframe src="https://www.google.com/maps?q=Twin+Towers+Mall+Second+Al+Sheikh+Zayed+Giza&output=embed">`. For production use the Maps Embed API with a key.

---

## Clinic Data (constants)

```
Name:      Core Physio Clinic
Tagline:   Move Better. Live Pain Free. / استعد حركتك بدون ألم
Phone:     +20 10 40396189   (raw: +201040396189)
WhatsApp:  https://wa.me/201040396189
Instagram: https://www.instagram.com/core_physio_clinic
Address:   Twin Towers Mall, Second Al Sheikh Zayed, Giza Governorate 12511, Egypt
Hours:     Sat–Thu 9:00 AM – 10:00 PM · Fri Closed
Rating:    4.9 ★ (35+ reviews)
```

---

## Responsive Behavior

- **≤ 920px:** nav hidden (add a mobile menu in production); all 2-col grids → 1-col; trust 3-col → 2-col; journey timeline → 2-col, connecting line hidden; footer → 2-col; gallery → 2-col.
- **≤ 560px:** hide secondary header CTA; all grids → 1-col.
- Type scales fluidly via `clamp()` (values given per section above).
- **Mobile-first** is a brief requirement — build up from the single-column layout.

---

## Files

The design sources live at the **project root** (this README sits in `design_handoff_landing_page/`). Paths below are relative to the repo root:
- `ui_kits/landing/index.html` — landing entry (loads the JSX bundles below)
- `ui_kits/landing/lib.jsx` — `Icon` set, `Photo` placeholder, `useReveals`, `CLINIC` constants
- `ui_kits/landing/content.jsx` — all bilingual strings: `T`, `NAV`, `SERVICES`, `STEPS`, `REVIEWS`, `GALLERY`
- `ui_kits/landing/sectionsA.jsx` — Header, Hero, Empathy, About
- `ui_kits/landing/sectionsB.jsx` — Trust, Journey, Services
- `ui_kits/landing/sectionsC.jsx` — Testimonials, Gallery
- `ui_kits/landing/sectionsD.jsx` — BookingCTA, Location, FinalCTA, Footer
- `ui_kits/landing/App.jsx` — composition + language state
- `ui_kits/booking/index.html` — booking entry
- `ui_kits/booking/booking.jsx` — form, validation, WhatsApp handoff, success state
- `tokens/*.css` — colors, typography, spacing, effects (port to Tailwind theme)
- `styles.css` — global entry that `@import`s all tokens
- `components/**` — the 8 primitives (`.jsx` + `.d.ts` + `.prompt.md`)
- `_ds_bundle.js` — compiled component bundle (reference only; rebuild natively)

**To preview the prototype:** from the repo root, run `npx serve .` and open `ui_kits/landing/index.html`.

---

## Suggested Next.js 15 Implementation Notes

- App Router; one route `/` (landing) + `/booking`.
- Port tokens to `tailwind.config.js` `theme.extend` (colors, fontFamily, boxShadow, borderRadius, transitionTimingFunction).
- Load fonts via `next/font/google` (Plus_Jakarta_Sans) + a self-hosted/`next/font` IBM Plex Sans Arabic.
- i18n: a `lang` context (or `next-intl`) with the `T` dictionary from `content.jsx`; set `<html dir lang>` accordingly. Brief wants an instant in-page toggle (no route change is fine).
- Animations: Framer Motion `whileInView` with `viewport={{ once: true }}` replaces the IntersectionObserver reveal; respect `useReducedMotion()`.
- Icons: `lucide-react`.
- Map: `@vis.gl/react-google-maps` or a plain iframe embed.
- SEO: per-page `metadata`, OpenGraph, JSON-LD `MedicalClinic` schema (name, address, geo, hours, telephone, aggregateRating).
- Accessibility: label every field, focus-visible rings (token provided), 44px min hit targets, alt text on all photos.
```
