**ServiceCard** — icon + title + description + Learn More; the building block of the Services and Why-Choose-Us grids.

```jsx
<ServiceCard icon={<Activity/>} title="Sports Injury Rehabilitation"
  description="Evidence-based recovery for athletes." onAction={openWhatsApp} />
```

On hover the icon tile fills with the teal gradient and the card lifts. Pass `action={null}` to use it as a plain feature card.
