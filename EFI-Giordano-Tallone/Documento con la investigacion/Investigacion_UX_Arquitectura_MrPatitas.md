# Trabajo de Integración Final (EFI) — Mr. Patitas
## Investigación UX, Arquitectura de Información y Diseño de Interfaz Accesible

**Cátedra**: Diseño de Interfaces / Seminario de Inteligencia Artificial  
**Equipo**: Giordano – Tallone  
**Proyecto**: Mr. Patitas (Red Comunitaria de Mascotas – Río Cuarto)  
**Fecha de Entrega**: Noviembre 2026  
**Metodología**: Gentle-AI & Spec-Driven Development (SDD)

---

## 1. Introducción y Planteamiento del Problema

### 1.1 Contexto de la Problemática Local
En la ciudad de Río Cuarto y su área metropolitana, la pérdida y el abandono de animales de compañía representa una problemática social, ética y sanitaria de gran impacto cotidiano. Tradicionalmente, la búsqueda y difusión comunitaria se realiza de manera dispersa y desorganizada a través de grupos abiertos en redes sociales (Facebook, Instagram y cadenas de mensajería instantánea). 

Esta dispersión genera serias limitaciones operativas y de usabilidad:
1. **Pérdida de Información Crítica**: Las publicaciones se hunden rápidamente en los feeds algorítmicos.
2. **Falta de Georreferenciación Precisa**: La mayoría de los avisos carecen de referencias geográficas claras (zonas o barrios homogéneos).
3. **Fricción en el Contacto Directo**: Exigen pasos engorrosos de mensajería privada con personas desconocidas, demorando horas críticas de rescate.
4. **Barreras de Entrada**: Aplicaciones existentes saturan al usuario con registros obligatorios, anuncios publicitarios o interfaces no adaptadas a personas mayores o situaciones de emergencia en la calle.

### 1.2 Misión y Propósito de "Mr. Patitas"
"Mr. Patitas" surge como una **Plataforma Web Comunitaria Single Page Application (SPA)** de alto impacto y cero fricción, diseñada para centralizar, acelerar y visibilizar reportes de animales extraviados, hallazgos en vía pública, adopciones responsables y dinamización del comercio solidario local.

---

## 2. Investigación con Usuarios (UX Discovery)

### 2.1 Metodología de Empatía
A través de entrevistas contextuales y observaciones directas en terreno, se identificaron las dinámicas y necesidades emocionales y operativas de los usuarios que interactúan ante la pérdida o el rescate de un animal.

### 2.2 Arquetipos de Usuario (User Personas)

#### Arquetipo 1: Sofía — "La Rescatista Empírica y Vecina en Alerta"
- **Demografía**: 28 años, activa en voluntariados independientes de rescate barrial.
- **Contexto de Uso**: Vía pública, sosteniendo un animal o su correa con una mano y operando el smartphone con la otra, bajo luz solar directa o en horarios nocturnos.
- **Frustraciones Principales**:
  - Formularios largos con preguntas irrelevantes.
  - Obligatoriedad de crear una cuenta o verificar correo electrónico para reportar una urgencia en la calle.
  - Botones pequeños que no responden al pulsar en movimiento.
- **Requerimientos UX/UI**:
  - **Cero Fricción en Acceso**: Capacidad de publicar un hallazgo de emergencia de forma inmediata como invitada.
  - **Ergonomía Táctil**: Botones de al menos 44px de altura ubicados en la zona inferior de la pantalla (zona del pulgar).
  - **Contacto Inmediato**: Botón con enlace dinámico a WhatsApp preconfigurado con el nombre del animal y la zona.

#### Arquetipo 2: Carlos — "El Vecino de Barrio Solidario"
- **Demografía**: 63 años, jubilado, dueño de un perro mestizo mayor, reside en Barrio Alberdi.
- **Contexto de Uso**: Dispositivo móvil en su hogar, a menudo con baja iluminación o fatiga visual. Posee presbicia y no domina jerga técnica informática.
- **Frustraciones Principales**:
  - Tipografías pequeñas y textos con bajo contraste gris sobre fondo blanco.
  - Modales invasivos que se abren sin control y no sabe cómo cerrar.
  - Jergas incomprensibles como "Database record", "Status 201" o "Webhook".
- **Requerimientos UX/UI**:
  - **Alta Legibilidad**: Tipografía clara no menor a 16px en textos principales y contraste WCAG AA $\ge 4.5:1$.
  - **Rotulado Empático (Labeling)**: Términos cotidianos ("Mascotas Perdidas", "Reportar Hallazgo", "Contactar").
  - **5 Estados de Interacción**: Feedback visible al interactuar con cualquier botón o tarjeta.

---

## 3. Psicología Visual, Sistema de Diseño y Leyes de la Gestalt

### 3.1 Identidad de Marca y Cromatismo
- **Color Primario (Brand CTA)**: Naranja Cálido Vibrante (`#FF6B35` / `brand-500`).
  - *Psicología*: Transmite calidez, energía, cercanía y rescate comunitario. Es el acento visual de máxima jerarquía para botones de acción prioritaria (CTAs) y llamadas urgentes.
- **Tonos de Alerta**: Rojo Intenso (`#EF4444`).
  - *Psicología*: Connota alerta inmediata. En la interfaz se aplica con sutileza en badges y en el estado *hover* de la sección de animales perdidos, evitando saturar la vista del usuario en reposo.
- **Tonos de Éxito**: Verde Esmeralda (`#10B981`).
  - *Psicología*: Tranquilidad, esperanza y confirmación de que una mascota fue devuelta o adoptada.
- **Fondos y Contraste**: Superficies limpias (`#FFFFFF` y `#F8FAFC`) con textos oscuros en `Slate-800` (`#1E293B`), garantizando un contraste superior a **7:1**, superando el estándar WCAG AA.

### 3.2 Tipografía
- **Títulos y Cabeceras**: **Poppins** (SemiBold / Bold). Proporciona carácter moderno, amigable, redondeado y geométricamente equilibrado.
- **Cuerpo de Texto y Datos**: **Inter** / **Plus Jakarta Sans**. Diseñadas específicamente para legibilidad en pantallas de cualquier resolución móvil y escritorio.

### 3.3 Aplicación de las Leyes de la Gestalt
1. **Ley de Proximidad**: Los datos pertenecientes a una misma mascota (foto, nombre, badge de estado, zona y botón de acción) se agrupan en una tarjeta unificada con espaciado interno de 16px (`p-4`), mientras que el espacio entre tarjetas es de 24px (`gap-6`), eliminando la ambigüedad perceptiva.
2. **Ley de Semejanza**: Todas las tarjetas del catálogo comparten idéntica estructura anatómica: *Imagen $\rightarrow$ Badge de estado $\rightarrow$ Título $\rightarrow$ Ubicación/Fecha $\rightarrow$ Acción*. Los elementos con la misma función tienen la misma forma y estilo interactivo.
3. **Ley de Región Común**: Cada vista, modal y tarjeta interactiva está contenida en un marco delimitado por bordes sutiles (`border-slate-100`) y sombras suaves (`shadow-sm` / `shadow-md`), comunicando cohesión funcional.
4. **Ley de Continuidad y Foco**: La barra superior y la barra inferior guían la trayectoria visual del usuario mediante íconos reconocibles y etiquetas en lenguaje natural.

---

## 4. Arquitectura de Información y Flujo SPA

### 4.1 Principio de Navegación "Cero Fricción"
La aplicación implementa un modelo de acceso abierto y gradual (Progressive Engagement):
- **Navegación Libre (Invitados)**: Cualquier persona puede ingresar directamente, filtrar reportes, ver el mapa comunitario, explorar las mascotas en adopción y los productos del marketplace solidario sin requerir registro ni login.
- **Intercepción de Acciones Protegidas**: Cuando un usuario no autenticado pulsa sobre acciones con impacto comunitario (**"Publicar Reporte"**, **"Subir Adopción"** o **"Contactar al dueño"**), la SPA intercepta la acción mediante un modal accesible que explica pedagógicamente la necesidad de identificarse antes de continuar, ofreciendo opciones directas de **Iniciar Sesión** o **Registrarse**.

```
[Usuario Ingresa a la App]
          │
          ├───► Continuar como Invitado ──► Navegación Completa (Catálogo, Mapa, Detalles)
          │                                      │
          │                                      ▼ (Intenta Publicar o Contactar)
          │                             [Modal de Acceso Requerido]
          │                                  │           │
          │                        Iniciar Sesión    Registrarse
          │                                  │           │
          └──────────────────────────────────┴───────────┴──► [Usuario Autenticado]
                                                                     │
                                                       Acceso Total a Publicaciones,
                                                       Reportes Inmediatos y Contacto
```

### 4.2 Mapa de Vistas (Single Page Application)
La SPA opera mediante alternancia dinámica de vistas con identificadores semánticos (`id="view-..."`) gestionadas por JavaScript Vanilla sin recargas de página:
- **`view-welcome`**: Splash inicial con presentación de marca, isotipo y selección de modo (Invitado vs. Acceso).
- **`view-home`**: Dashboard principal con métricas comunitarias, accesos directos a las 4 áreas y feed de reportes recientes.
- **`view-catalog`**: Catálogo reactivo con filtros por categoría (Todos, Perdidos, Encontrados, En Adopción) y buscador por texto en tiempo real.
- **`view-detail`**: Ficha expandida con características del animal, mapa de ubicación aproximada y botón directo hacia WhatsApp.
- **`view-report`**: Formulario ágil de reporte con validación de campos obligatorios y modal de confirmación.
- **`view-map`**: Vista comunitaria con distribución territorial de reportes en Río Cuarto.
- **`view-marketplace`**: Espacio de productos e insumos solidarios con carrito interactivo.
- **`view-profile`**: Panel de usuario con alternancia de roles (Vecino vs. Rescatista/Proveedor).

---

## 5. Accesibilidad Universal (WCAG 2.2 AA)

El prototipo cumple rigurosamente con los 4 principios de accesibilidad web:

### 5.1 Perceptible
- **Contraste de Color**: Todo texto normal posee un ratio superior a **4.5:1** frente a su fondo. Se implementa la clase de seguridad `.force-text-white` para evitar que botones con acentos naranjas o rojos hereden estilos de texto oscuros.
- **Alternativas Textuales**: Todas las imágenes de animales y logotipos incorporan atributos `alt` descriptivos y contextualizados (ej. `alt="Perro mestizo color canela extraviado en Barrio Centro"`).
- **Íconos Semánticos**: Los íconos decorativos incluyen `aria-hidden="true"`, mientras que los botones con solo ícono poseen `aria-label` explícito.

### 5.2 Operable
- **Navegación 100% por Teclado**: Todo el flujo puede completarse utilizando `Tab`, `Shift+Tab`, `Enter` y `Escape` para cerrar diálogos modales.
- **Áreas Táctiles Ergonómicas**: Los botones y enlaces de navegación respetan un área mínima de **44px $\times$ 44px**, garantizando operabilidad táctil para Sofía en la vía pública.
- **Prevención de Desbordes**: Se implementa `overflow-x: hidden` en la raíz de la página, erradicando el scroll horizontal involuntario en cualquier ancho de dispositivo (de 360px a 4K).

### 5.3 Comprensible
- **Los 5 Estados Visuales**: Cada botón, campo de formulario y control interactivo exhibe explícitamente sus 5 estados:
  1. `Default`: Reposo visualmente claro y con bordes suaves.
  2. `Hover`: Resalte sutil de color y elevación con sombras.
  3. `Active`: Micro-animación de pulsación física (`active:scale-[0.98]`).
  4. `Focus`: Anillo accesible visible de alto contraste (`focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2`).
  5. `Disabled`: Opacidad reducida al 50%, cursor no permitido y atributo `aria-disabled="true"`.
- **Validación en Cliente y Mensajes Claros**: Formularios que indican con precisión qué campo falta completar sin utilizar jerga informática.

### 5.4 Robusto
- **HTML5 Semántico**: Uso riguroso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<button>` y `<footer>`.
- **Compatibilidad**: Funciona de manera consistente en navegadores modernos (Chrome, Firefox, Safari, Edge) en entornos móviles y de escritorio.

---

## 6. Arquitectura Tecnológica y Filosofía Gentle-AI

De acuerdo con las **Decisiones de Arquitectura (ADR-001 a ADR-009)**:
- **Tecnologías Activas**:
  - **HTML5 Semántico**: Estructura limpia y accesible.
  - **Tailwind CSS v3 (CDN)**: Clases de utilidad sin compilación local pesada, permitiendo entrega rápida y diseño consistente.
  - **JavaScript Vanilla (ES6+)**: Lógica limpia y modular sin dependencias externas pesadas ni abstracciones innecesarias.
  - **LocalStorage**: Persistencia de sesión, reportes comunitarios y preferencias del usuario.
- **Tecnologías Excluidas de Forma Explícita**:
  - Sin frameworks JS monolíticos (React, Vue, Angular) para evitar sobreingeniería y deuda técnica.
  - Sin servidores backend propios (Node/Express, Python) en esta etapa de prototipado.
  - Sin bases de datos externas que compliquen la ejecución local.

---

## 7. Conclusiones
El proyecto **Mr. Patitas** demuestra que la combinación de una metodología disciplinada (**Spec-Driven Development**), una mentalidad de ingeniería de producto (*Why antes del How*) y un profundo respeto por los criterios de accesibilidad universal (**WCAG AA**) permite crear herramientas digitales de alto impacto social, visualmente atractivas, intuitivas y eficientes para toda la comunidad.
