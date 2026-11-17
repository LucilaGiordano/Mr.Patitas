# Arquitectura del Sistema — Mr. Patitas

> **Lectura rápida**: ~1.5 min · **Última actualización**: 2026-10-26 23:36

## 1. Stack Tecnológico Base
- **Marcado y Estructura**: HTML5 semántico (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`).
- **Estilos y Utilidades**: Tailwind CSS v3 cargado vía CDN con script de configuración personalizada.
- **Tipografías**: Google Fonts (*Outfit* para títulos; *Plus Jakarta Sans* para cuerpo de texto).
- **Lógica e Interactividad**: JavaScript Vanilla (ES6+) modular y limpio, centrado en el cliente.
- **Persistencia Local**: `LocalStorage` del navegador para caché de reportes, perfil activo y tema visual (Dark/Light).

## 2. Router SPA y Vistas (Mapeo con Frames de Figma)
La aplicación opera como una **Single Page Application (SPA)** ligera basada en alternancia de contenedores de vista mediante atributos de datos (`data-view` / `hidden`), sin recargas de página:

| Frame Figma | Vista / Componente | Función y Contenido |
| :--- | :--- | :--- |
| **Frame 1: Home / Hero** | `#view-home` | Top App Bar fija con logo + selector Dark/Light. Banner de bienvenida con CTA directos: *"Reportar Hallazgo"* y *"Ver Adopciones"*. |
| **Frame 2: Catálogo** | `#view-catalog` | Grid de 4 tarjetas interactivas: *Mascotas Perdidas*, *Mascotas Encontradas*, *Adopciones* y *Marketplace Solidario*. |
| **Frame 3: Detalle / Contacto** | `#view-detail` (Modal) | Ficha expandida con foto, zona, fecha y botón de acción directa hacia WhatsApp (`https://wa.me/...`). |
| **Frame 4: Formulario Reporte** | `#view-report` | Formulario rápido en 1 paso para emergencias en la calle. Al completar, activa modal verde de confirmación comunitaria. |
| **Frame 5: Bottom Navigation** | `#bottom-nav` | Barra inferior persistente en móviles (área $\ge 44$px): *Inicio*, *Mapa/Zonas*, *Mi Perfil* (modo vecino y modo rescatista/proveedor). |

## 3. Límites Técnicos Estrictos (Lo que NO existe)
Para mantener la aplicación ágil, pedagógica y libre de deuda técnica:
- ❌ **NO frameworks frontend**: Prohibido React, Vue, Angular o Svelte.
- ❌ **NO backend o servidores**: Prohibido Node.js, Express, Python, PHP o endpoints REST propios.
- ❌ **NO bases de datos externas**: Prohibido Firebase, Supabase, MySQL o MongoDB.
- ❌ **NO estilos inline**: Prohibido `style="..."` (salvo variables CSS dinámicas imprescindibles). Todo se maqueta con Tailwind.
