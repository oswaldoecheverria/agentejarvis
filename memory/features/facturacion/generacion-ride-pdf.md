# ⚙️ Característica: Generación Automática del RIDE en PDF

* **Módulo:** [Facturación Electrónica](file:///F:/proyectos/agentejarvis/memory/modules/facturacion.md)
* **ID:** `facturacion-generacion-ride-pdf`
* **Origen:** `erikasalud`
* **Estado:** `[PRODUCCIÓN / HIGH-STAKES]`
* **Actores:** `Paciente / Cliente`, `Sistema de Facturación`

---

## 🎯 Propósito
Renderizar y enviar el RIDE (Representación Impresa de Documento Electrónico) en formato PDF conforme a las especificaciones visuales y de código de barras del SRI.

---

## 🔄 Flujo de Datos y Lógica
1. Una vez obtenida la autorización del SRI, el backend toma el XML autorizado.
2. Renderiza la plantilla HTML/PDF del RIDE con:
   - Datos del emisor y receptor.
   - Detalle de servicios médicos e impuestos.
   - Número de autorización y fecha de autorización.
   - Código de barras generado con la clave de acceso de 49 dígitos.
3. Envía automáticamente un correo al paciente con el PDF y el XML adjuntos.

---

## 🛡️ Reglas Críticas de Negocio
* **Fidelidad Tributaria:** El PDF debe reflejar con exactitud matemática los valores autorizados en el XML del SRI.
