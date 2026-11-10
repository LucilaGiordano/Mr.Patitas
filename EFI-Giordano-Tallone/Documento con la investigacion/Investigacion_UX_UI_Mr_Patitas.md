# MR. PATITAS - INVESTIGACIÓN UX/UI Y ESPECIFICACIÓN TÉCNICA
## Entrega Final Integradora (EFI)
**Materia:** Ingeniería de Software Frontend & Diseño UX/UI  
**Autores:** Giordano - Tallone  
**Proyecto:** "Mr. Patitas" - Plataforma Comunitaria Web SPA para Mascotas Locales  
**Localización Piloto:** Ciudad de Río Cuarto, Córdoba, Argentina  
**Fecha:** Noviembre 2026  

---

## 1. INTRODUCCIÓN Y JUSTIFICACIÓN DEL PROYECTO

### 1.1 Contexto y Problemática
En la ciudad de Río Cuarto y su área metropolitana (Banda Norte, Alberdi, Centro, Macrocentro, Bimaco, etc.), la pérdida de mascotas y la búsqueda de animales en adopción se gestiona de manera fragmentada, caótica y poco eficiente a través de grupos abiertos de redes sociales (Facebook, grupos de WhatsApp barriales e historias de Instagram). 

Esta fragmentación genera graves problemas de usabilidad e impacto:
1. **Pérdida de la ventana crítica de tiempo:** Las publicaciones se pierden rápidamente en el algoritmo de las redes sociales. En las primeras 4 a 12 horas de extravío es cuando existe la mayor probabilidad de recuperar un animal antes de que se desoriente o sufra un accidente.
2. **Falta de georreferenciación precisa:** Las publicaciones suelen indicar únicamente "Se perdió por el barrio Alberdi", sin coordenadas, mapa interactivo ni radio de búsqueda claro.
3. **Fricción en el contacto directo:** Quienes encuentran una mascota no siempre desean publicar su número personal abiertamente en grupos masivos, lo que desalienta la colaboración ciudadana.
4. **Desconexión con el ecosistema local:** No existe un puente unificado entre vecinos, veterinarias de guardia 24hs, paseadores certificados, rescatistas independientes y tiendas de productos locales.

### 1.2 Misión y Propuesta de Valor
**Mr. Patitas** nace como una aplicación web de página única (Single Page Application - SPA) de diseño prioritario móvil (*Mobile-First*), hiperlocalizada y centrada en la empatía y la velocidad de respuesta. Su misión es:
> *"Conectar en tiempo real a la comunidad de Río Cuarto para que las mascotas perdidas vuelvan rápidamente a sus hogares, promover la adopción responsable y articular el comercio y los servicios veterinarios locales."*

---

## 2. ARQUETIPOS DE USUARIO (BUYER PERSONAS)

### Arquetipo 1: "Valeria, la vecina desesperada"
- **Edad:** 29 años.
- **Ocupación:** Diseñadora gráfica / Empleada de comercio en el Centro de Río Cuarto.
- **Situación:** Se le escapó su gato Milo por una ventana en barrio Centro durante una tormenta.
- **Estado emocional:** Angustia, ansiedad, urgencia cognitiva extrema.
- **Objetivo clave:** Crear un reporte en menos de 2 minutos desde su teléfono móvil y generar una alerta visible en el mapa para que vecinos de cuadras aledañas reconozcan a Milo.
- **Requisito UX crítico:** Interfaz con contraste inmediato, campos indispensables sin fricción y botón directo de contacto por WhatsApp.

### Arquetipo 2: "Gonzalo, el vecino solidario / transeúnte"
- **Edad:** 42 años.
- **Ocupación:** Docente universitario (UNRC), reside en Banda Norte.
- **Situación:** Encontró una perra Golden Retriever asustada cerca de la Plaza San Martín. No puede adoptarla permanentemente porque ya tiene dos perros, pero quiere retenerla en tránsito seguro.
- **Estado emocional:** Empático, apurado, precavido.
- **Objetivo clave:** Ingresar como invitado, verificar en 30 segundos si hay reportes de animales perdidos con esas características en la zona y contactar al dueño de inmediato.
- **Requisito UX crítico:** Navegación libre sin obligatoriedad de registro para consultar el catálogo o mapa, con modal claro de autenticación únicamente al momento de accionar el contacto seguro.

### Arquetipo 3: "Dra. Sofía Martínez, Médica Veterinaria y Rescatista"
- **Edad:** 38 años.
- **Ocupación:** Directora de Clínica Veterinaria en Macrocentro y colaboradora en refugios.
- **Situación:** Recibe periódicamente animales extraviados, gestiona turnos de castración y atiende urgencias 24 hs.
- **Estado emocional:** Profesional, orientada a la eficiencia y el impacto comunitario.
- **Objetivo clave:** Acceder a un panel de control con métricas de impacto (vidas rescatadas, animales en tránsito) y gestionar servicios profesionales y productos en el Marketplace local.
- **Requisito UX crítico:** Selector de roles dinámico (Modo Vecino vs Modo Proveedor/Rescatista).

---

## 3. APLICACIÓN DE LAS LEYES DE GESTALT Y PSICOLOGÍA DEL DISEÑO

El diseño de Mr. Patitas se fundamenta en principios empíricos de percepción visual:

### 3.1 Ley de Proximidad
- Los datos de cada mascota (fotografía, nombre, barrio y tiempo transcurrido) se agrupan dentro de una tarjeta con padding armónico de 16px (`p-4`), permitiendo que el cerebro del usuario los perciba instantáneamente como una sola entidad informativa coherente.

### 3.2 Ley de Semejanza (Similarity)
- Todos los elementos con función interactiva primaria utilizan el color corporativo naranja vibrante (`#FF6B35`). Los botones de acción secundaria conservan estilos neutros o delineados (*ghost buttons*).
- Los badges de estado siguen una convención cromática uniforme:
  - **Perdido (Urgencia):** Naranja cálido saturado / Rojo suave (`#FF6B35` / `#EF4444`).
  - **Encontrado / Tránsito:** Verde esmeralda (`#10B981`).
  - **Adopción:** Azul celeste / violeta suave (`#6366F1`).

### 3.3 Ley de Cierre y Región Común (Enclosure)
- Las tarjetas están contenidas en contenedores con bordes redondeados (`rounded-2xl`, radio de 16px a 24px) y fondos sutiles con sombras suaves (`shadow-sm`, `shadow-md`), delimitando visualmente el espacio de cada animal o producto del fondo general de la aplicación.

### 3.4 Ley de Figura y Fondo (Figure-Ground)
- Al activar modales críticos (como el formulario de reporte, el diálogo de login interceptado o el detalle de compra), la capa de fondo se oscurece con un velo translúcido y desenfoque gausiano (`backdrop-blur-sm bg-slate-900/60`), dirigiendo el 100% de la atención focal a la acción requerida.

---

## 4. SISTEMA DE DISEÑO E IDENTIDAD VISUAL

### 4.1 Paleta de Color
| Token | Valor Hex | Uso en la UI |
|---|---|---|
| `brand-500` (Principal) | `#FF6B35` | Botones de Llamada a la Acción (CTA), isotipo, pines destacados del mapa, badges de emergencia. |
| `brand-600` (Hover/Active) | `#EA580C` | Estados *hover* y *active* en botones primarios. |
| `brand-50` (Tinte suave) | `#FFF4EE` | Fondos de contenedores activos, cápsulas de navegación seleccionadas. |
| `slate-900` (Encabezados) | `#0F172A` | Títulos principales (Poppins Bold) para contraste WCAG AAA. |
| `slate-600` (Texto secundario)| `#475569` | Texto explicativo, detalles técnicos y metadata (Inter Regular). |
| `emerald-500` (Éxito/Hallazgo) | `#10B981` | Notificaciones de éxito, mascotas reencontradas, adopciones. |
| `rose-500` (Alerta crítica) | `#EF4444` | Mascotas extraviadas con riesgo inminente, mensajes de error. |

### 4.2 Tipografía Oficial
- **Encabezados (`h1`, `h2`, `h3`, `h4`):** **Poppins** (Pesos 600 Semibold y 700 Bold). Brinda una personalidad moderna, empática y redondeada que remite a la calidez y el bienestar animal.
- **Cuerpo de texto (`body`, `inputs`, `labels`):** **Inter** / **Plus Jakarta Sans** (Pesos 400 Regular y 500 Medium). Diseñada específicamente para pantallas digitales, optimiza el espaciado entre letras (*kerning*) y la lectura a tamaños reducidos en smartphones.

### 4.3 Criterios de Accesibilidad (WCAG 2.1 Nivel AA)
1. **Contraste de Color:** Todos los textos principales sobre blanco o fondos tenues superan el ratio mínimo de 4.5:1. Los botones `#FF6B35` con texto blanco cuentan con un ratio superior a 3.2:1 para texto de gran tamaño y negrita.
2. **Objetivos Táctiles (Touch Targets):** Todos los botones interactivos, enlaces de la barra inferior y controles de filtrado cuentan con un alto mínimo de 44px (`min-h-[44px]` / `p-3`), previniendo errores de pulsación en pantallas táctiles.
3. **Retroalimentación Visual:** Estados de *focus-visible* con anillos de enfoque contrastados para navegación mediante teclado.

---

## 5. ARQUITECTURA DE INFORMACIÓN Y FLUJO DE NAVEGACIÓN SPA

```
                        [ Pantalla de Bienvenida / Splash ]
                                    |
                    +---------------+---------------+
                    |                               |
          [ Iniciar Sesión / Registro ]     [ Continuar como Invitado ]
                    |                               |
                    +---------------+---------------+
                                    |
                        [ DASHBOARD PRINCIPAL (Home) ]
                                    |
      +-----------------+-----------+-----------+-----------------+
      |                 |                       |                 |
[ Mascotas Perdidas ] [ Mascotas Encontradas ] [ Adopciones ]  [ Marketplace ]
      |                 |                       |             /           \
      |                 |                       |       [ Productos ] [ Servicios ]
      +--------+--------+                       |             |             |
               |                                |        (Carrito ->   (Reserva ->
      [ Ficha de Detalle ]                      |         Checkout)      Turno)
               |                                |
    +----------+----------+                     |
    |                     |                     |
(Navegación libre)  [ Contactar Dueño ]         |
(Ver fotos, mapa)         |                     |
                 ¿Usuario Autenticado?          |
                    /             \             |
                  (Sí)            (No)          |
                   |               |            |
            Abre WhatsApp    Modal Bloqueante   |
            con mensaje      con login rápido   |
            preconfigurado         |            |
                                Tras login,     |
                                continúa flujo  |
                                                |
[ + Reportar Mascota ] <------------------------+
         |
    ¿Logueado?
      /     \
    (Sí)    (No: Intercepta modal)
     |
Formulario 5 pasos con subida
de foto y zona de Río Cuarto
     |
Persistencia LocalStorage -> Publicado en Mapa y Catálogo
```

---

## 6. MAPA COMUNITARIO HIPERLOCALIZADO (RÍO CUARTO)

La aplicación integra una capa de mapas interactivos basada en **Leaflet.js** con cartografía libre de **OpenStreetMap**, centrada en las coordenadas geográficas de la ciudad:
- **Latitud:** `-33.1232`
- **Longitud:** `-64.3493`
- **Zonas demarcadas:**
  1. *Centro / Plaza Roca*
  2. *Banda Norte / Costanera Norte*
  3. *Alberdi / Parque Sarmiento*
  4. *Macrocentro / Avenida España*
  5. *Sur / Bimaco / Golf*

Cada marcador en el mapa despliega un *popup* interactivo que muestra:
- Miniatura de la fotografía del animal.
- Nombre y tipo de reporte (Perdido, Encontrado, Punto Veterinario).
- Botón de acceso directo para abrir la ficha de detalle sin recargar la página.

---

## 7. CONCLUSIÓN Y BENEFICIOS EDUCATIVOS Y SOCIALES

La implementación de Mr. Patitas como SPA modular evidencia cómo la combinación de una sólida arquitectura frontend (modularización de vistas, gestión de estado en memoria y almacenamiento local) con principios avanzados de diseño centrado en el usuario (Leyes de Gestalt, accesibilidad universal y diseño emocional) puede transformar una problemática social crítica en una solución digital ágil, empática y de alto impacto comunitario para la ciudad de Río Cuarto.
