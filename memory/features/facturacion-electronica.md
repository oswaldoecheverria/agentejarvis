# 📦 Dominio: Facturación y Tributación

## 📌 Variante / Opción 1: Facturación Electrónica SRI Ecuador (XAdES-BES + SOAP + RIDE)
* **Origen:** Sistema Médico (`erikasalud`)
* **ID:** `facturacion-sri-xades-soap`
* **Tipo:** Emisión legal de comprobantes electrónicos autorizados por el SRI.

### 👥 Roles y Actores
- `Emisor / Administrador`: Registra cobro de servicio o consulta y genera factura.
- `SRI (Servicio de Rentas Internas)`: Servicio web SOAP de recepción y autorización de comprobantes XML.
- `Cliente / Receptor`: Recibe comprobante fiscal por correo electrónico.

### 🔄 Flujo de Usuario E2E
1. El emisor genera la orden de cobro con identificación del receptor (RUC/Cédula), detalle de ítems, tarifas e impuestos (IVA 0% o 15%).
2. El sistema construye el XML estándar bajo la ficha técnica del SRI con clave de acceso de 49 dígitos (incluyendo dígito verificador módulo 11).
3. Se firma digitalmente el XML usando estándar XAdES-BES con archivo de firma electrónica `.p12` y contraseña.
4. El backend envía el documento firmado al Web Service SOAP de Recepción del SRI.
5. Si es recibido, consulta el Web Service SOAP de Autorización hasta obtener el estado `AUTORIZADO`.
6. Se genera el documento PDF (RIDE) y se envía automáticamente el pack (PDF + XML) al correo del cliente.

### 🛠️ Estructura Técnica Recomendada
- **Backend:** Módulo transaccional con manejo de colas o reintentos asíncronos en caso de caídas del SRI, almacenamiento del XML firmado y generador de RIDE con ReportLab o WeasyPrint.
