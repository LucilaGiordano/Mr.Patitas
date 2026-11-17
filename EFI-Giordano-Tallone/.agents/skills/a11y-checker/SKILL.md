---
name: a11y-checker
description: Guía de auditoría y patrones de accesibilidad web WCAG AA, contraste 4.5:1, navegación por teclado, focus rings y áreas táctiles de 44px.
---

# Skill: A11y Checker (Accesibilidad WCAG AA)

Este skill asegura que cada componente y vista de **Mr. Patitas** sea accesible para personas con visión reducida (arquetipo Carlos) y usuarios en contextos demandantes en la vía pública (arquetipo Sofía).

## 1. Contraste de Texto y Elementos Semánticos
- **Ratio mínimo WCAG AA**:
  - Texto normal: $\ge 4.5:1$.
  - Texto grande ($\ge 18\text{pt}$ o bold $\ge 14\text{pt}$) y elementos UI: $\ge 3:1$.
- **Regla `.force-text-white`**:
  - Todo botón o badge naranja (`#f97316`) o rojo (`#ef4444`) debe asegurar `color: #ffffff !important;` en modo claro para evitar herencia de texto oscuro ilegible.

## 2. Áreas de Toque Táctil (Mobile-First)
- Los botones, enlaces de la Bottom Nav y controles interactivos deben medir como mínimo **44px $\times$ 44px** (`min-h-[44px] min-w-[44px] flex items-center justify-center`).

## 3. Navegación por Teclado y Focus
- **Elementos Semánticos Nativos**: Usar siempre `<button type="button">`, nunca `<div onclick="...">`.
- **Anillo de Foco Accesible**: Cada elemento interactivo debe incluir `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 focus:outline-none`.
- **Lógica de Escape**: Los modales deben cerrarse al presionar la tecla `Escape`.

## 4. Imágenes y Lectores de Pantalla
- Toda imagen de animal o avatar debe tener un atributo `alt` específico y descriptivo (ej: `alt="Perrito caniche blanco con collar rojo perdido en Barrio Centro"`).
