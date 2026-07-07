**Button** — the brand's pill-shaped action button; use for every primary/secondary CTA across marketing and booking surfaces.

```jsx
<Button variant="primary" size="lg" iconRight={<ArrowIcon/>}>Book Appointment</Button>
<Button variant="whatsapp" iconLeft={<WhatsAppIcon/>}>Chat on WhatsApp</Button>
<Button variant="secondary">Learn More</Button>
```

Variants: `primary` (teal gradient, main CTA), `secondary` (white + hairline outline), `ghost` (text-only, for nav), `whatsapp` (brand green). Sizes `sm | md | lg`. Pass `full` to stretch, `as="a"` for links.
