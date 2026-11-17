# Glosario y Rotulado (Labeling) — Mr. Patitas

> **Lectura rápida**: ~1.5 min · **Última actualización**: 2026-10-26 23:36

## 1. Términos del Dominio
- **Mascota Perdida**: Animal extraviado cuyos dueños o rescatistas solicitan ayuda para localizar.
- **Mascota Encontrada / Hallazgo**: Animal avistado o retenido temporalmente en la vía pública por un vecino.
- **Adopción Responsable**: Animal rescatado y listo para ser integrado a un hogar definitivo.
- **Marketplace Solidario**: Espacio comunitario para compra/venta de insumos para mascotas cuyos beneficios apoyan rescates.
- **Alerta Comunitaria**: Notificación visual y difusión inmediata del reporte en el catálogo local.
- **Roles de Perfil**: *Vecino* (reporta y adopta) vs. *Proveedor / Rescatista* (gestiona múltiples fichas y servicios).

## 2. Reglas de Negocio Nucleares
1. **RN-01 (Contacto Inmediato Obligatorio)**: Todo reporte debe incluir obligatoriamente un número de teléfono válido para habilitar la redirección a WhatsApp.
2. **RN-02 (Ubicación Requerida)**: Es obligatorio seleccionar la zona/barrio para permitir el filtrado geográfico de la comunidad.
3. **RN-03 (Acceso Libre / Cero Fricción)**: No se requiere registro previo ni login para ver el catálogo o reportar un animal en situación de emergencia en la calle.
4. **RN-04 (Confirmación Sin Recarga)**: Al enviar un formulario, la interfaz debe mostrar un modal de éxito verde sin refrescar la ventana del navegador.

## 3. Rotulado Orientado al Usuario (Labeling vs. Dev Jargon)

| Etiqueta Oficial (Lenguaje Natural) | Jerga Técnica Prohibida | Propósito de UX |
| :--- | :--- | :--- |
| **Mascotas Perdidas** | `Lost_Pets_Table_V1` | Título de sección claro y empático |
| **Reportar Hallazgo** | `Execute_Found_Record` | Botón de acción para quien encuentra un animal |
| **Adopciones** | `Adoption_Registry_DB` | Catálogo de animales que buscan hogar |
| **Marketplace Solidario** | `Ecommerce_Catalog_View` | Sección de insumos y servicios veterinarios |
| **Mi Perfil** | `User_Account_Settings` | Panel para gestionar alertas y datos del usuario |
| **Ver Detalle** | `Get_Item_By_ID` | Botón accesible para expandir la tarjeta |
| **Contactar por WhatsApp** | `Open_External_Webhook` | Botón directo para iniciar conversación con el dueño/rescatista |
| **¡Alerta Comunitaria Activada!** | `Status_Code_201_Created` | Modal de confirmación al registrar un reporte |

## 4. Datos de Muestra Oficiales (Seed Data)
1. *Perrito Caniche Perdido* — Barrio Centro (Estado: *Perdido*, Badge Rojo).
2. *Gatito Siamés Encontrado* — Zona Norte (Estado: *Encontrado*, Badge Verde).
3. *Luna (Ovejero)* — En Adopción (Estado: *En Adopción*, Badge Naranja).
4. *Max (Cachorro mestizo)* — En Adopción (Estado: *En Adopción*, Badge Naranja).
5. *Pitbull Perdido* — Barrio Alberdi (Estado: *Perdido*, Badge Rojo).
6. *Gata tricolor encontrada* — Zona Sur (Estado: *Encontrado*, Badge Verde).
