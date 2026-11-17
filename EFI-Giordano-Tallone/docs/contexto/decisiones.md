# Registro de Decisiones de Arquitectura (ADR) — Mr. Patitas

> **Lectura rápida**: ~2 min · **Última actualización**: 2026-10-26 23:36

> 🚨 **POLÍTICA DE GUARDAS Y AUTORIZACIÓN MANDATORIA**:
> Cualquier cambio importante o estructural (modificación de arquitectura, alteración de la paleta semántica, cambio de frameworks, eliminación de archivos o alteración de reglas de negocio) **REQUIERE AUTORIZACIÓN EXPLÍCITA DEL USUARIO** antes de ejecutarse en código. Una vez aprobado, debe registrarse obligatoriamente en este documento con fecha y hora.

---

### [ADR-001] · [2026-10-26 13:34] — Adopción del Operating System Gentle-AI y Master Context
- **Contexto**: Se requiere rigor técnico, trazabilidad de negocio y mentalidad de Senior Product Engineer (*Why antes del How*).
- **Decisión**: Se implementa el Master Context en 6 documentos vivos bajo `docs/contexto/` y reglas automáticas en `.agents/rules/antigravity_rules.md`.
- **Estado**: Aceptada.

---

### [ADR-002] · [2026-10-26 14:50] — Tailwind CSS v3 vía CDN con Paleta Semántica Extendida
- **Contexto**: Necesidad de maquetado ágil sin herramientas pesadas de compilación local en la fase inicial de prototipado.
- **Decisión**: Se adopta Tailwind CSS v3 vía CDN con configuración semántica (`orange-500`, `slate-700`, `emerald-500`, `red-500`). Se descarta Bootstrap 5 por menor flexibilidad y CSS puro por lentitud de desarrollo.
- **Estado**: Aceptada.

---

### [ADR-003] · [2026-10-26 14:50] — Límites Técnicos Estrictos y Exclusiones de Arquitectura
- **Contexto**: Cumplir estrictamente el programa del curso sin sobreingeniería (cero dependencias externas complejas).
- **Decisión**: Quedan prohibidos React, Vue, Angular, Node.js, Express, Python, bases de datos SQL externas, Firebase y estilos inline `style="..."`. Todo se construye en HTML semántico con Vanilla JS centrado en el cliente.
- **Estado**: Aceptada.

---

### [ADR-004] · [2026-10-26 14:50] — Bottom Navigation Bar Táctil y Enfoque Mobile-First
- **Contexto**: El arquetipo Sofía rescata animales en la vía pública operando el celular con una sola mano bajo luz solar.
- **Decisión**: Se implementa una barra de navegación inferior persistente (Bottom Nav) con áreas de pulsación $\ge 44$px para *Inicio*, *Mapa* y *Mi Perfil*.
- **Estado**: Aceptada.

---

### [ADR-005] · [2026-10-26 14:50] — Canal de Contacto Directo vía Enlace Dinámico a WhatsApp
- **Contexto**: Un chat interno en tiempo real requeriría backend y autenticación innecesarios para esta etapa del producto.
- **Decisión**: El botón de contacto genera un enlace directo a WhatsApp (`https://wa.me/...`) con mensaje prellenado con nombre del animal y zona, facilitando respuesta comunitaria inmediata.
- **Estado**: Aceptada.

---

### [ADR-006] · [2026-10-26 23:36] — Arquitectura SPA Modular Basada en Vistas (`data-view`) y LocalStorage
- **Contexto**: Necesidad de navegar entre Home, Catálogo, Detalle y Formulario sin recargar la página ni perder datos.
- **Decisión**: Se implementa navegación SPA por alternancia de atributos `data-view` y `hidden` en Vanilla JS, almacenando reportes nuevos y preferencia de tema en `LocalStorage`.
- **Estado**: Aceptada.

---

### [ADR-007] · [2026-10-27 16:55] — Integración Local de la Biblioteca Agentic Awesome Skills
- **Contexto**: El usuario solicitó importar el catálogo completo de `agentic-awesome-skills` dentro de `.agents/skills/`.
- **Decisión**: Se clonó e integró la biblioteca dentro de `.agents/skills/agentic-awesome-skills/` (2.872+ skills categorizadas). Se preservan intactas las skills base del proyecto (`tailwind-ui`, `a11y-checker`, `dom-dynamism`, `sdd-workflow`) y se evita la sobrecarga del contexto directo de Antigravity al mantener el repositorio encapsulado con su catálogo e índices disponibles para consulta e instalación selectiva.
- **Estado**: Aceptada.

---

### [ADR-008] · [2026-10-27 17:02] — Auditoría y Poda Inteligente de Skills (.agents/skills/)
- **Contexto**: De acuerdo con las reglas de negocio y límites técnicos (`docs/contexto/`), el proyecto opera sin frameworks JS pesados (React, Vue, Angular), sin backends ni bases de datos externas. Mantener más de 2.800 carpetas superfluas saturaba el espacio de trabajo y el descubrimiento de herramientas.
- **Decisión**: Se ejecutó una poda integral eliminando permanentemente todas las skills de backend, bases de datos, frameworks pesados y desarrollo móvil nativo. Se conservan 6 skills hiper-enfocadas: `tailwind-ui`, `a11y-checker`, `dom-dynamism`, `sdd-workflow`, `web-design-guidelines` y `fixing-accessibility`.
- **Estado**: Aceptada.

---

### [ADR-009] · [2026-10-27 18:41] — Implementación de la SPA Viva de Mr. Patitas (Figma ➔ Código)
- **Contexto**: Con base en las 5 capturas de pantalla de los wireframes de Figma y el Master Context, se requería maquetar la aplicación completa sin instalaciones pesadas.
- **Decisión**: Se implementaron `index.html`, `style.css` y `app.js` con las 5 pantallas principales más vistas de mapa y perfil, integrando Tailwind CSS v3 (CDN), JavaScript Vanilla reactivo, persistencia en `LocalStorage`, enlace dinámico a WhatsApp, modal de feedback verde y accesibilidad WCAG AA con touch targets $\ge 44$px.
- **Estado**: Aceptada.

---

### [ADR-010] · [2026-11-16 22:15] — Jerarquía de Entrega Final EFI y Sincronización de Materiales
- **Contexto**: Se requiere preparar la entrega académica final para la cátedra bajo la estructura estricta `EFI-Giordano-Tallone/` con tres subcarpetas especializadas: `Documento con la investigacion/`, `Prototipo / Web SPA/` y `Presentacion/`.
- **Decisión**: Se consolidó la estructura de entrega final con el isotipo oficial integrado en `assets/logo.png`, el prototipo SPA adaptativo Desktop/Mobile con flujo de autenticación protegido, el documento formal de investigación UX/Arquitectura (`Investigacion_UX_Arquitectura_MrPatitas.md`) y el guión de presentación para la defensa (`Presentacion_EFI_MrPatitas.md`).
- **Estado**: Aceptada.




