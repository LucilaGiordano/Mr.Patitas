# Bitácora de Errores Conocidos y Gotchas — Mr. Patitas

> **Lectura rápida**: ~1.5 min · **Última actualización**: 2026-10-26 23:36

Esta bitácora registra las trampas técnicas de maquetado y usabilidad identificadas en el proyecto y sus soluciones obligatorias para blindar el código:

| ID | Área | Síntoma / Problema | Causa Raíz | Solución Preventiva Obligatoria |
| :--- | :--- | :--- | :--- | :--- |
| **GTC-001** | **Responsive Móvil** | Desborde horizontal (scroll lateral involuntario en pantallas de 360px–390px). | Elementos con anchos fijos en píxeles (`w-[450px]`) o márgenes negativos sin contención. | Aplicar `overflow-x: hidden` en el elemento contenedor raíz y usar utilidades `w-full max-w-...`. |
| **GTC-002** | **Contraste / Modo Claro** | Texto oscuro ilegible sobre botones naranja (`#f97316`) o rojo (`#ef4444`). | Tailwind hereda el color de texto del body (`slate-900`) en modo claro. | Aplicar siempre la clase de seguridad `.force-text-white` (`color: #ffffff !important;`) en botones de acento. |
| **GTC-003** | **Foco en Teclado** | Navegar con `Tab` no muestra ningún indicador visual de foco. | Se aplicó `focus:outline-none` sin proveer un reemplazo accesible. | Agregar obligatoriamente `focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2`. |
| **GTC-004** | **Semántica e Interacción** | Elementos interactivos inoperables con la tecla `Enter` o invisibles para lectores. | Uso de `<div onclick="...">` o `<span>` en lugar de controles interactivos reales. | Emplear exclusivamente `<button type="button">` o enlaces `<a>` con texto accesible o `aria-label`. |
| **GTC-005** | **Comportamiento SPA** | La página se recarga por completo al presionar "Publicar Reporte", perdiendo el estado. | El formulario ejecuta el envío nativo GET/POST por defecto. | Interceptar con `event.preventDefault()`, validar campos en cliente y abrir el modal verde de confirmación. |
| **GTC-006** | **Ergonomía Táctil** | Dificultad para pulsar botones de la barra inferior con una sola mano (para Sofía en la calle). | Áreas táctiles menores a 44px o iconos muy juntos. | Forzar dimensiones mínimas `min-h-[44px] min-w-[44px]` con padding táctil en la Bottom Navigation Bar. |
