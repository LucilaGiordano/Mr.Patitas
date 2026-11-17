# 🐾 Mr. Patitas · Red Comunitaria de Mascotas (Río Cuarto)

**Entrega Final Integradora (EFI) — Tecnicatura Superior en Desarrollo de Software**  
**Institución:** Instituto Tecnológico Río Cuarto (ITEC)  
**Desarrolladoras:** Lucila Giordano y Eliana Tallone  
**Año:** 2026  

---

## 📋 Descripción del Proyecto
**Mr. Patitas** es una aplicación web de página única (**SPA - Single Page Application**) diseñada y desarrollada para resolver una problemática real en la ciudad de Río Cuarto: la dispersión y falta de centralización en los reportes de mascotas perdidas, avistamientos, adopciones responsables y servicios del ecosistema veterinario local. 

La plataforma provee una interfaz ágil, moderna y accesible, permitiendo a los vecinos reportar extravíos con fichas técnicas detalladas, geolocalizar alertas en un mapa interactivo y conectar de manera directa con refugios y comercios de cercanía.

---

## ✨ Características Principales
* **Red de Alertas Barriales:** Publicación y filtrado por zonas de Río Cuarto (*Centro, Banda Norte, Alberdi, Macrocentro y Sur*).
* **Mapa Comunitario Interactivo:** Geolocalización de mascotas perdidas, encontradas y clínicas veterinarias 24hs integrado mediante **Leaflet.js** y OpenStreetMap.
* **Módulo de Adopciones Responsables:** Fichas técnicas completas (*edad, tamaño, sexo, castración*) con compromiso ético y postulación comunitaria.
* **Marketplace Local:** Catálogo de productos veterinarios de cercanía y sistema de reserva de turnos para servicios profesionales.
* **Experiencia de Usuario Adaptativa:** 
  * Interfaz diseñada bajo principios *mobile-first*.
  * Modo oscuro institucional integrado para accesibilidad nocturna.
  * Persistencia local mediante `LocalStorage` para simulación de sesiones (*Vecino / Proveedor*), carritos de compra y favoritos.

---

## 🛠️ Stack Tecnológico
El desarrollo se estructuró utilizando estándares web modernos sin dependencias de compilación complejas para facilitar su evaluación:

* **Frontend & Interfaz:** HTML5 semántico, CSS3 y **Tailwind CSS (v3)** mediante CDN para el sistema de diseño corporativo.
* **Lógica de Aplicación:** JavaScript (ES6+) estructurado de manera modular para el enrutamiento dinámico de la SPA y gestión de estados locales.
* **Mapas y Geolocalización:** **Leaflet.js** para la manipulación de capas y marcadores vectoriales.
* **Diseño UX/UI & Prototipado:** Figma (Diseño atómico, wireframes en baja fidelidad y prototipos de alta fidelidad).
* **Control de Versiones y Despliegue:** Git, GitHub y Netlify.

---

## 🚀 Instalación y Ejecución Local

Para clonar y poner en marcha el proyecto de manera local en tu equipo:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/LucilaGiordano/Mr.Patitas.git](https://github.com/LucilaGiordano/Mr.Patitas.git)
