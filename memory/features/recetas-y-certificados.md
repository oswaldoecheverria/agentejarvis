# 📦 Dominio: Documentos Oficiales Criptográficos (Recetas y Certificados)

## 📌 Variante / Opción 1: Firma Digital PAdES-BES con Validador Público QR
* **Origen:** Sistema Médico (`erikasalud`)
* **ID:** `documentos-pades-qr-verificacion`
* **Tipo:** Emisión de documentos con firma digital avanzada y página de validación pública para terceros.

### 👥 Roles y Actores
- `Profesional Emisor`: Crea la orden, receta o certificado y firma electrónicamente.
- `Beneficiario / Paciente`: Recibe documento oficial en formato PDF firmado.
- `Tercero Validador (Farmacia / Empleador / Público)`: Escanea el código QR impreso en el documento para comprobar autenticidad sin necesidad de usuario ni contraseña.

### 🔄 Flujo de Usuario E2E
1. El emisor genera la receta o certificado completando los campos obligatorios.
2. El sistema genera un hash criptográfico único y un identificador no secuencial (`token` o `uuid4`).
3. El documento PDF se firma digitalmente conforme al estándar PAdES-BES incorporando un código QR en la cabecera o pie de página.
4. El paciente presenta el documento (impreso o digital).
5. El tercero escanea el código QR con cualquier smartphone, abriendo la URL pública `dominio.com/validar/[tipo]?token=...`.
6. La página de validación pública muestra el sello verde de verificación, confirmando emisor, fecha, contenido autorizado y estado de vigencia.

### 🛠️ Estructura Técnica Recomendada
- **Backend:** Endpoint público sin autenticación de solo lectura optimizado con caché por hash.
- **Frontend:** Vista limpia y responsiva de validación con badge de autenticidad.
