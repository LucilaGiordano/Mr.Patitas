# Flujo de Trabajo y Definition of Done (DoD) — Mr. Patitas

> **Lectura rápida**: ~1.5 min · **Última actualización**: 2026-10-26 23:36

## 1. Integración Ciclo DCU + SDD Adaptativo

El desarrollo de **Mr. Patitas** articula las 5 fases del **Diseño Centrado en el Usuario (DCU)** con el protocolo **Spec-Driven Development (SDD)**:

```
[DCU] Empatizar/Definir (Sofía & Carlos) ➔ Idear/Prototipar (Figma) ➔ Evaluar (DoD)
  │
  └──▶ [SDD Fast-Path] (1 archivo: corrección cosmética o typo) ➔ Verificación directa
  │
  └──▶ [SDD Completo] (>2 archivos o nueva feature):
       1. Explore  ➔ Leer docs/contexto/ y wireframes
       2. Propose  ➔ Explicar el Why antes del How al usuario
       3. Tasks    ➔ Planificar pasos atómicos
       4. Apply    ➔ Maquetar con HTML5 + Tailwind + Vanilla JS
       5. Verify   ➔ Validar contra Checklist DoD
```

## 2. Fast-Path vs. SDD Completo
- **Fast-Path (Vía Rápida)**:
  - Aplica exclusivamente a corrección de textos, ajustes menores de espaciado o bugs puntuales que afecten a un único archivo.
  - No requiere plan extenso; se resuelve y verifica inmediatamente.
- **SDD Completo (Vía Estructurada)**:
  - Aplica a nuevas vistas SPA, cambios en el modelo de datos o interacción con componentes.
  - Requiere propuesta formal, aprobación previa si altera reglas de negocio y actualización de `decisiones.md`.

## 3. Checklist de Listo (Definition of Done — DoD)
Antes de dar por completada cualquier tarea, se debe verificar sin excepción:

- [ ] **1. Fidelidad Visual con Figma**: Componentes, colores y tipografías reflejan fielmente el prototipo.
- [ ] **2. Emulador Móvil F12**: Sin scroll horizontal (`overflow-x: hidden` en contenedor raíz).
- [ ] **3. Operabilidad por Teclado**: 100% navegable con `Tab`, `Shift+Tab`, `Enter` y `Escape`.
- [ ] **4. Contraste WCAG AA**: Ratio $\ge 4.5:1$ en texto normal; `.force-text-white` aplicado en botones naranja/rojo.
- [ ] **5. Los 5 Estados Visuales**: Estilos presentes para `Default`, `Hover`, `Active`, `Focus` y `Disabled`.
- [ ] **6. Feedback en Formulario**: Validación en cliente, apertura de modal de éxito verde sin recarga de página y generación de link a WhatsApp.
- [ ] **7. Código Limpio**: Cero estilos inline (`style="..."`), cero logs de debug y etiquetas semánticas (`<button>` nativos, `alt` en imágenes).
