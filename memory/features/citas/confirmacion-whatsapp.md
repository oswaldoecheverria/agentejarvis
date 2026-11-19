# ⚙️ Característica: Confirmación Asistida vía WhatsApp

* **Módulo:** [Citas y Reservas](file:///F:/proyectos/agentejarvis/memory/modules/citas.md)
* **ID:** `citas-confirmacion-whatsapp`
* **Origen:** `erikasalud`
* **Estado:** `[PRODUCCIÓN / HIGH-STAKES]`
* **Actores:** `Paciente / Cliente`, `Personal Clínico / Doctora`

---

## 🎯 Propósito
Cerrar el ciclo de agendamiento conectando al paciente con la línea oficial de atención de WhatsApp con un mensaje pre-redactado que contiene los detalles de su cita para confirmación humana rápida.

---

## 🔄 Flujo de Datos y Lógica
1. Tras registrar la cita, la pantalla de confirmación presenta el botón "Confirmar por WhatsApp".
2. El sistema genera el enlace oficial: `https://wa.me/<NUMERO>?text=<MENSAJE_CODIFICADO>`.
3. El mensaje incluye:
   - Nombre del paciente.
   - Fecha y hora solicitada.
   - Código o identificador de referencia de la cita.
4. El paciente abre WhatsApp con el mensaje ya escrito en su pantalla listo para enviar.
5. El equipo médico recibe el mensaje y valida o resuelve dudas directamente.

---

## 🛡️ Reglas Críticas de Negocio
* **URL Encoding:** El mensaje debe codificarse con `encodeURIComponent` para preservar saltos de línea (`%0A`), tildes y caracteres especiales.
