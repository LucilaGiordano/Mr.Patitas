---
name: sdd-workflow
description: Metodología Spec-Driven Development (SDD) y verificación exhaustiva de Definition of Done (DoD) para el desarrollo continuo de Mr. Patitas.
---

# Skill: Flujo de Trabajo SDD & Definition of Done

Este skill guía la ejecución metódica de tareas complejas en **Mr. Patitas**, asegurando rigor técnico y alineación con los requerimientos pedagógicos y de UX.

## 1. El Ciclo de 5 Fases SDD
1. **Explore**:
   - Inspeccionar el DOM actual, estilos aplicados y revisar `docs/contexto/`.
2. **Propose**:
   - Explicar el **Why antes del How**. Documentar el impacto para Sofía o Carlos.
3. **Tasks**:
   - Desglosar en pasos pequeños y secuenciales.
4. **Apply**:
   - Ejecutar los cambios respetando límites técnicos (sin React, sin backend, sin estilos inline).
5. **Verify**:
   - Pasar el checklist de Definition of Done.

## 2. Checklist DoD Obligatorio
- [ ] 1. Fidelidad al prototipo de Figma y diagrama de flujo.
- [ ] 2. Sin scroll horizontal en emulador móvil (F12) con `overflow-x: hidden`.
- [ ] 3. 100% operable con teclado (`Tab`, `Enter`, `Space`, `Escape`).
- [ ] 4. Contraste WCAG AA validado ($\ge 4.5:1$) y `.force-text-white` aplicado.
- [ ] 5. 5 estados presentes en componentes interactivos (`Default`, `Hover`, `Active`, `Focus`, `Disabled`).
- [ ] 6. Formulario con validación en cliente, modal verde de confirmación y enlace dinámico a WhatsApp.
- [ ] 7. Código limpio sin librerías no solicitadas ni logs residuales.
