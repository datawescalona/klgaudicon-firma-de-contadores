Labelled form field with cobalt focus ring; renders input, textarea, or select.

```jsx
<Input label="Correo corporativo" type="email" icon={<i data-lucide="mail"></i>} hint="Te respondemos en 24h" />
<Input label="Servicio" as="select" options={['Auditoría','Outsourcing contable','Tributos']} />
```

Pass `error` to flag validation (red border + message).
