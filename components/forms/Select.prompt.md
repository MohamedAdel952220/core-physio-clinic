**Select** — styled native dropdown matching Input; for Service Needed and Gender fields.

```jsx
<Select label="Service Needed" placeholder="Choose a service"
  options={['Physiotherapy Session','Manual Therapy','Other']} required />
```

Options accept plain strings or `{value,label}`. RTL-aware via `dir`.
