# EFI - Mr. Patitas | Giordano & Tallone
## Entrega Final Integradora (EFI) - Ingeniería de Software Frontend & UX/UI

### Jerarquía de Carpetas Oficial
```text
EFI-Giordano-Tallone/
├── Documento con la investigacion/
│   └── Investigacion_UX_UI_Mr_Patitas.md  (Documento académico completo de UX/UI, Gestalt, Arquitectura y WCAG AA)
├── Prototipo - Web SPA/
│   ├── index.html                         (Aplicación SPA completa interactiva)
│   ├── style.css                          (Estilos del sistema de diseño, fuentes y transiciones)
│   ├── app.js                             (Lógica de vistas, catálogo, mapa Leaflet, checkout y roles)
│   └── assets/                            (Isotipo oficial, fotos de Milo y elementos de UI)
│       ├── logo.png
│       ├── ui_elements/
│       └── milo_case/
└── Presentacion/
    ├── index.html                         (Presentación interactiva de diapositivas)
    └── Presentacion_Defensa_EFI.md        (Guion de defensa académica y estructura de slides)
```

> **Nota de compatibilidad:** Para garantizar compatibilidad total en cualquier sistema operativo (donde las barras `/` no están permitidas en nombres de carpeta directos), la subcarpeta del prototipo se encuentra disponible en `Prototipo - Web SPA/`, `Prototipo Web SPA/` y `Prototipo/Web SPA/`. También se generó una réplica en `EFI-Equipo/`.

---

### Criterios de Diseño y Lineamientos Cumplidos:
- **Color Principal de Marca:** Naranja cálido vibrante (`#FF6B35` / `brand-500`) en CTAs principales, alertas de emergencia y botones de reporte.
- **Tipografías Oficiales:**
  - **Poppins** para todos los títulos y cabeceras (*headings*).
  - **Inter / Plus Jakarta Sans** para el cuerpo de texto y metadatos.
- **Identidad de Marca:** Isotipo oficial "Casa-Huella" integrado en cabecera superior y pantalla de bienvenida.
- **Vistas SPA:**
  1. *Pantalla de Bienvenida (Splash)* con acceso como invitado o login.
  2. *Dashboard de Inicio* con búsqueda en tiempo real y 4 pilares: Perdidos, Encontrados, Adopciones y Marketplace.
  3. *Ficha en Detalle de Mascota* (con caso de estudio completo "Milo", carrusel fotográfico, ficha médica y mapa aproximado).
  4. *Intercepción de Seguridad para Invitados:* Los usuarios invitados navegan libremente, pero se exige inicio de sesión al contactar al dueño o publicar.
  5. *Formulario de Reporte de Mascota* en 5 pasos con validación en tiempo real y subida de fotos.
  6. *Catálogo de Adopciones Responsables* con postulación ética.
  7. *Marketplace:*
     - Catálogo de productos locales con carrito de compras y checkout en 3 pasos.
     - Catálogo de servicios profesionales (veterinarias 24hs, paseadores) con reserva de turnos y franjas horarias.
  8. *Mapa Comunitario Interactivo (Leaflet.js)* centrado en Río Cuarto (-33.1232, -64.3493) con filtros de mascotas perdidas, encontradas y clínicas veterinarias.
  9. *Perfil con Switch de Roles Dinámico:* Alternancia fluida entre **Modo Vecino** (reportes propios y mascotas recuperadas) y **Modo Proveedor/Rescatista** (radio de alerta en km y métricas de impacto).
