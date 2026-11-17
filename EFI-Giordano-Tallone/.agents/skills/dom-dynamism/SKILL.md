---
name: dom-dynamism
description: Patrones de interactividad y dinamismo del DOM con Vanilla JS limpio, filtrado de catálogo, modales accesibles, integración con WhatsApp y LocalStorage.
---

# Skill: Dinamismo DOM & Cliente para Mr. Patitas

Este skill provee directrices y patrones de arquitectura JavaScript sin frameworks (Vanilla JS) para manejar el estado y la interactividad en **Mr. Patitas**.

## 1. Patrones de Manejo de Estado en Cliente
- **Persistencia en `LocalStorage`**: Guardar los reportes ingresados por el usuario y la preferencia de tema (Dark/Light).
  ```javascript
  const STORAGE_KEY = 'mr_patitas_reports';
  function saveReports(reports) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
  }
  function loadReports() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }
  ```

## 2. Filtrado Reactivo de Catálogo
- Filtrado por zona/barrio y categoría (`Perdidos`, `Encontrados`, `Adopción`) actualizando el contenedor de tarjetas sin recargas de página.

## 3. Modales Accesibles y Feedback Inmediato
- Al enviar el formulario de reporte:
  1. Validar campos obligatorios en el cliente (Nombre, Teléfono, Descripción, Zona).
  2. Abrir modal verde de confirmación comunitaria (`#modal-exito`).
  3. Prevenir el envío tradicional (`event.preventDefault()`).
  4. Limpiar los campos del formulario.

## 4. Enlace Dinámico a WhatsApp
- Generar el enlace directo a WhatsApp con parámetros URL codificados:
  ```javascript
  function buildWhatsAppLink(phone, petName, zone) {
    const text = encodeURIComponent(`¡Hola! Vi en Mr. Patitas la publicación sobre "${petName}" en la zona "${zone}". Me gustaría coordinar.`);
    return `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${text}`;
  }
  ```
