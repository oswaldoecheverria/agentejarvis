# ⚙️ Característica: Transmisión y Autorización SOAP con el SRI

* **Módulo:** [Facturación Electrónica](file:///F:/proyectos/agentejarvis/memory/modules/facturacion.md)
* **ID:** `facturacion-conexion-soap-sri`
* **Origen:** `erikasalud`
* **Estado:** `[PRODUCCIÓN / HIGH-STAKES]`
* **Actores:** `Sistema Backend`, `Web Services SRI (Recepción y Autorización)`

---

## 🎯 Propósito
Conectarse de forma segura a los Web Services SOAP del SRI para enviar el comprobante firmado y consultar de forma asíncrona o síncrona el estado de autorización oficial.

---

## 🔄 Flujo de Datos y Lógica
1. El backend envía el XML firmado al Web Service SOAP de Recepción del SRI (`validarComprobante`).
2. El SRI responde si el comprobante fue `RECIBIDA` o `DEVUELTA` (con detalle de errores de validación).
3. Si es recibida, el backend consulta el Web Service SOAP de Autorización (`autorizacionComprobante`) con la clave de acceso de 49 dígitos.
4. El SRI devuelve el estado final: `AUTORIZADO`, fecha de autorización y número de autorización.
5. El backend actualiza el estado de la factura en la base de datos local.

---

## 🛡️ Reglas Críticas de Negocio
* **Reintentos Exponenciales:** Si el SRI está caído o con latencia alta, el comprobante se encola para reintento automático sin bloquear la atención médica.
