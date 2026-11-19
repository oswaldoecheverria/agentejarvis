# ⚙️ Característica: Firma Electrónica XAdES-BES para Comprobantes SRI

* **Módulo:** [Facturación Electrónica](file:///F:/proyectos/agentejarvis/memory/modules/facturacion.md)
* **ID:** `facturacion-firma-xades-bes`
* **Origen:** `erikasalud`
* **Estado:** `[PRODUCCIÓN / HIGH-STAKES]`
* **Actores:** `Emisor / Facturador`, `Sistema de Facturación`

---

## 🎯 Propósito
Firmar digitalmente documentos XML conforme a la normativa técnica tributaria del Servicio de Rentas Internas (SRI) del Ecuador utilizando certificados de firma electrónica en formato `.p12`.

---

## 🔄 Flujo de Datos y Lógica
1. El backend genera el XML de la factura con el cálculo de la clave de acceso de 49 dígitos (incluyendo el dígito verificador módulo 11).
2. Se lee el archivo de certificado de firma digital `.p12` y su contraseña segura (almacenada en variable de entorno).
3. Se aplica el algoritmo de firma digital XMLDSig bajo el perfil XAdES-BES (XML Advanced Electronic Signatures - Basic Electronic Signature).
4. El resultado es un XML canónico firmado listo para su transmisión al SRI.

---

## 🛡️ Reglas Críticas de Negocio
* **Vigencia del Certificado:** Validar la fecha de caducidad de la firma antes de procesar el lote.
* **Seguridad de Claves:** Prohibido exponer la contraseña del `.p12` en logs o respuestas HTTP.
