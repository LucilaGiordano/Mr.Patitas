---
name: tailwind-ui
description: Guía y patrones de maquetación con Tailwind CSS v3 vía CDN, diseño responsive mobile-first, paleta semántica y 5 estados de componentes para Mr. Patitas.
---

# Skill: Tailwind UI para Mr. Patitas

Este skill asiste en la creación y mantenimiento de interfaces limpias, modernas y responsivas con **Tailwind CSS v3 (CDN)** para el proyecto **Mr. Patitas**.

## 1. Configuración de Paleta Semántica
En el script de configuración de Tailwind en `index.html`:
```html
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          brand: {
            50: '#fff7ed',
            100: '#ffedd5',
            500: '#f97316', // Primario naranja
            600: '#ea580c',
            700: '#c2410c'
          },
          slate: {
            700: '#334155', // Secundario
            950: '#020617'  // Fondo Dark
          }
        },
        fontFamily: {
          heading: ['Outfit', 'Poppins', 'sans-serif'],
          body: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
        }
      }
    }
  }
</script>
```

## 2. Reglas de Maquetado
- **Mobile-First**: Usar clases base para pantallas móviles (`w-full`, `flex-col`, `gap-4`) y prefijos para pantallas mayores (`md:grid-cols-2`, `lg:grid-cols-3`).
- **Prevenir Overflow Horizontal**: Siempre colocar `overflow-x-hidden` en el contenedor raíz o `<body>`.
- **Cero Estilos Inline**: Prohibido `style="..."`. Toda propiedad se resuelve con utilidades de Tailwind.
- **5 Estados de Componentes**:
  - `Default`: `bg-orange-500 text-white shadow-sm`
  - `Hover`: `hover:bg-orange-600 hover:shadow-md`
  - `Active`: `active:scale-95 transition-transform`
  - `Focus`: `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 focus:outline-none`
  - `Disabled`: `disabled:opacity-50 disabled:cursor-not-allowed`
