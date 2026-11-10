# MR. PATITAS - DEFENSA ORAL Y PRESENTACIÓN FINAL EFI
## Proyecto: Single Page Application para Mascotas Locales (Río Cuarto)
**Autores:** Giordano - Tallone  
**Materia:** Entrega Final Integradora (EFI) - Frontend & UX/UI  

---

### ESTRUCTURA DE DIAPOSITIVAS / GUION DE DEFENSA

#### Slide 1: Portada y Presentación
- **Título:** Mr. Patitas - Ecosistema Digital Comunitario de Mascotas
- **Subtítulo:** Single Page Application (SPA) Mobile-First con Arquitectura Reactiva
- **Autores:** Giordano & Tallone
- **Ubicación Piloto:** Río Cuarto, Córdoba

#### Slide 2: El Problema de la Comunidad
- Pérdida crítica de las primeras horas tras el extravío.
- Difusión caótica y desordenada en Facebook / WhatsApp sin georreferenciación.
- Barreras de contacto y desconfianza en la entrega de números personales.
- Falta de articulación con el comercio local y los profesionales veterinarios.

#### Slide 3: Propuesta de Valor y Objetivos UX
- **Velocidad:** Reportar un extravío en menos de 2 minutos.
- **Geolocalización:** Mapa comunitario con cuadrantes de Río Cuarto (Centro, Banda Norte, Alberdi, Macrocentro, Sur).
- **Acceso Inclusivo:** Navegación abierta para visitantes/invitados con intercepción inteligente solo al ejecutar acciones protegidas (contactar o publicar).
- **Ecosistema 360°:** Integración de Mascotas Perdidas, Encontradas, Adopciones Responsables y Marketplace (Productos y Servicios).

#### Slide 4: Identidad Visual y Psicología del Color
- **Color Primario:** Naranja cálido vibrante (`#FF6B35` / `brand-500`) transmitiendo calidez, energía, urgencia benévola y acción proactiva.
- **Tipografía:**
  - *Poppins* (Headings): Connotación amable, moderna, con formas geométricas humanistas.
  - *Inter* (Body): Legibilidad superior en pantallas de densidad variable (retina/OLED).
- **Isotipo:** Casita con huella integrada, simbolizando el retorno seguro al hogar.

#### Slide 5: Leyes de Gestalt Aplicadas en la Interfaz
1. **Ley de Proximidad:** Agrupamiento de metadatos (distancia, barrio, tiempo transcurrido) junto a la foto del animal.
2. **Ley de Semejanza:** Coherencia cromática en badges según criticidad (Naranja = Perdido; Verde = Encontrado; Violeta = Adopción).
3. **Ley de Cierre / Región Común:** Tarjetas con curvatura de 20px (`rounded-2xl`) y sombras sutiles.
4. **Ley de Figura y Fondo:** Modales con desenfoque de fondo (`backdrop-filter`) para concentrar la atención en la acción prioritaria.

#### Slide 6: Arquitectura Técnica Frontend (SPA)
- **Vanilla JavaScript Modular:** Manejo de estado centralizado, eventos desacoplados y simulación de enrutamiento por hash/vistas sin recarga de página.
- **Persistencia en LocalStorage:** Sesión de usuario, listado dinámico de publicaciones y carrito de compras persistente.
- **Tailwind CSS v3 CDN:** Configuración personalizada de tokens de color `brand` y utilidades responsive.
- **Leaflet.js & OpenStreetMap:** Capa de mapas interactiva con marcadores y ventanas de información dinámicas.

#### Slide 7: Demostración Funcional en Vivo (Casos de Uso)
1. Flujo de Bienvenida: Invitado vs Usuario Registrado.
2. Navegación en Catálogo y Búsqueda por barrios de Río Cuarto.
3. Ficha en Detalle: Caso "Milo" (fotos, última ubicación, información médica).
4. Intercepción de Seguridad: Alerta al intentar contactar al dueño sin estar autenticado.
5. Reporte de Mascota con subida de fotografía y validaciones en tiempo real.
6. Marketplace: Carrito de compras, selección de envío/retiro y checkout.
7. Perfil y Switch de Rol: Modo Vecino vs Modo Rescatista/Proveedor.

#### Slide 8: Conclusiones e Impacto Futuro
- Mayor tasa de éxito en el reencuentro de animales en Río Cuarto.
- Fomento de la tenencia responsable y adopción ética.
- Escalabilidad para integración futura con alertas de mensajería instantánea y lectura de microchips QR.
