# 📦 Módulo: Facturación Electrónica

* **ID del Módulo:** `mod-facturacion-sri`
* **Origen:** `erikasalud`
* **Estado:** `[EN PRODUCCIÓN / HIGH-STAKES]`
* **Dominio:** Facturación y Tributación Fiscal (Ecuador)

---

## 🗺️ 1. Flujo Visual en Terminal (Box-Drawing)

```text
 [DOCTORA / SISTEMA]
          │
          ▼
┌───────────────────────────┐
│ 1. Orden de Cobro / Venta │
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ 2. Construcción de XML    │ (Cálculo Clave de Acceso 49 dígitos)
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ 3. Firma XAdES-BES        │ (Firma criptográfica con .p12)
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ 4. Envío SOAP Recepción   │
└─────────────┬─────────────┘
              │
     ¿Recibido por SRI?
     ├───► NO ──► Encola para reintento automático
     ▼ SÍ
┌───────────────────────────┐
│ 5. Consulta Autorización  │
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ 6. Factura AUTORIZADA     │
└─────────────┬─────────────┘
              ▼
    ┌───────────────────┴───────────────────┐
    ▼                                       ▼
┌────────────────────────┐             ┌────────────────────────┐
│ Genera RIDE (PDF)      │             │ Envío por Correo       │
│ con código de barras   │             │ (PDF + XML adjuntos)   │
└────────────────────────┘             └────────────────────────┘
```

---

## 📝 2. Secuencia Macro en Letras (Lógica Paso a Paso)

1. **Orden de Cobro:** Se registra la venta del servicio con datos de cliente, desglose de tarifas e impuestos.
2. **Generación XML:** Se construye el documento XML oficial con clave de acceso de 49 dígitos.
3. **Firma Criptográfica:** Se estampa la firma digital XAdES-BES con el archivo `.p12`.
4. **Envío y Validación:** Se transmite por SOAP al SRI. Si hay problemas de conexión, se reintenta asíncronamente sin interrumpir al usuario.
5. **Autorización y Notificación:** Al recibir la autorización oficial, se genera el RIDE en PDF y se envía el comprobante por correo electrónico al cliente.

---

## 🧩 3. Características Atómicas que Componen este Módulo

*(Haz Ctrl+Click o Click en cualquier enlace para abrir su ficha técnica detallada sin repetir texto redundante):*

* ⚙️ [Firma Electrónica XAdES-BES para Comprobantes SRI](file:///F:/proyectos/agentejarvis/memory/features/facturacion/firma-xades-bes.md)
  * *Firma de XML con certificado .p12 y clave protegida.*
* ⚙️ [Transmisión y Autorización SOAP con el SRI](file:///F:/proyectos/agentejarvis/memory/features/facturacion/conexion-soap-sri.md)
  * *Comunicación resiliente con Web Services de Recepción y Autorización.*
* ⚙️ [Generación Automática del RIDE en PDF](file:///F:/proyectos/agentejarvis/memory/features/facturacion/generacion-ride-pdf.md)
  * *Plantilla PDF con código de barras y envío automatizado de correo.*

---

## 🧱 4. Receta de Ensamble (Componibilidad Lego)

* **Receta Estándar (Ecuador SRI):** Firma XAdES-BES + Conexión SOAP SRI + Generación RIDE PDF.
* **Variante Alternativa (Pasarelas Internacionales):** Para proyectos en otros países o ecommerce global, este módulo se puede sustituir por una receta basada en Stripe o PayPal.
