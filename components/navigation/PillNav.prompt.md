Signature floating glass "pill" top bar — logo, centered links, right-side CTA. Position it fixed near the top of the page over content.

```jsx
<PillNav
  logo={<img src="assets/logo-horizontal-cobalt.png" height={26} />}
  links={[{id:'servicios',label:'Servicios'},{id:'blog',label:'Blog'}]}
  active="servicios" onNavigate={setView}
  cta={<Button variant="cta" size="sm">Contacto</Button>} />
```
