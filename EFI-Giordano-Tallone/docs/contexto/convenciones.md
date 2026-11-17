# Convenciones y Sistema de Diseño — Mr. Patitas

> **Lectura rápida**: ~1.5 min · **Última actualización**: 2026-10-26 23:36

## 1. Paleta de Colores Semántica y Modos

| Rol Semántico | Clase / Token Tailwind | Hex | Uso en UI |
| :--- | :--- | :--- | :--- |
| **Primario** | `bg-orange-500` / `brand-500` | `#f97316` | CTA principal, acentos destacados, badges activos |
| **Secundario** | `text-slate-700` / `border-slate-700` | `#334155` | Textos de alto contraste, bordes y encabezados |
| **Éxito** | `bg-emerald-500` | `#10b981` | Modales de confirmación, animal encontrado, alerta enviada |
| **Alerta / Urgente** | `bg-red-500` | `#ef4444` | Animales perdidos, errores de validación |
| **Fondo Claro** | `bg-white` / `bg-slate-50` | `#ffffff` / `#f8fafc` | Fondo base y superficies de tarjetas |
| **Fondo Oscuro** | `dark:bg-slate-950` / `dark:bg-slate-900` | `#020617` / `#0f172a` | Modo nocturno de alto contraste |

> ⚠️ **Regla de Oro de Contraste**: Todo botón o badge naranja o rojo en modo claro debe incluir `.force-text-white` (`color: #ffffff !important;`) para evitar texto oscuro ilegible.

## 2. Escala Tipográfica Modular
- **`h1` (Hero / Títulos de pantalla)**: 32px (`text-2xl md:text-3xl font-bold font-heading`).
- **`h2` (Títulos de sección)**: 24px (`text-xl md:text-2xl font-bold font-heading`).
- **`h3` (Títulos de tarjetas)**: 20px (`text-lg font-semibold font-heading`).
- **Cuerpo base (Lectura móvil)**: 16px (`text-base leading-relaxed font-body`). Ideal para arquetipo Carlos.
- **Caption / Badges**: 12px–14px (`text-xs md:text-sm font-medium`).

## 3. Los 5 Estados de Componentes Interactivos
Todo botón, tarjeta clickeable o input debe contemplar:
1. **Default**: `shadow-sm border border-slate-200 dark:border-slate-800` (reposo legible).
2. **Hover**: `hover:bg-orange-600 hover:shadow-md transition-all duration-200`.
3. **Active**: `active:scale-[0.98] transition-transform` (retroalimentación física de pulsación).
4. **Focus**: `focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus:outline-none` (anillo visible para teclado).
5. **Disabled**: `disabled:opacity-50 disabled:cursor-not-allowed` con atributo `aria-disabled="true"`.

## 4. Espaciado y Leyes de la Gestalt
- **Proximidad**: Elementos relacionados dentro de una tarjeta usan `gap-2` (8px); separación entre tarjetas usa `gap-4 md:gap-6` (16px a 24px). Padding interno de tarjeta: `p-4` (16px).
- **Semejanza**: Todas las tarjetas del catálogo comparten la misma anatomía: *Avatar/Foto $\rightarrow$ Badge de estado $\rightarrow$ Título $h3$ $\rightarrow$ Zona/Fecha $\rightarrow$ Botón de acción*.

## 5. Reglas WCAG AA Innegociables
- Contraste mínimo de **4.5:1** para texto regular frente al fondo.
- Área táctil móvil mínima de **44px $\times$ 44px** en botones y enlaces de la Bottom Nav.
- Atributo `alt` descriptivo obligatorio en cada imagen de mascota.
- Navegación operable al 100% mediante teclado (`Tab`, `Shift+Tab`, `Enter`, `Escape`).
