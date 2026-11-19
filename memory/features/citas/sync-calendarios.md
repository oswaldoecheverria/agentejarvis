# ⚙️ Característica: Sincronización Dual de Calendarios (Google Calendar e iCal)

* **Módulo:** [Citas y Reservas](file:///F:/proyectos/agentejarvis/memory/modules/citas.md)
* **ID:** `citas-sync-calendarios`
* **Origen:** `erikasalud`
* **Estado:** `[PRODUCCIÓN / HIGH-STAKES]`
* **Actores:** `Paciente / Cliente (Público)`

---

## 🎯 Propósito
Evitar el ausentismo (no-show) facilitando al paciente la sincronización inmediata de su cita médica en su calendario personal (Google Calendar en Android/PC o Apple Calendar/Outlook vía `.ics` en iPhone/Mac).

---

## 🔄 Flujo de Datos y Lógica
1. Tras la confirmación de la cita, la pantalla de éxito presenta el componente `AddToCalendarCard`.
2. Al pulsar **Google Calendar**:
   - Construye una URL con formato `https://calendar.google.com/calendar/render?action=TEMPLATE&text=...&dates=...&details=...&location=...`.
   - Abre una pestaña nueva directa al calendario de Google con el evento pre-cargado.
3. Al pulsar **Apple / Outlook / iCal**:
   - Genera dinámicamente en el cliente o descarga un archivo con formato MIME `text/calendar` (`.ics`).
   - El sistema operativo móvil o de escritorio abre el calendario nativo para guardar la cita.

---

## 🛡️ Reglas Críticas de Negocio
* **Formato UTC ISO 8601:** Las fechas deben formatearse en UTC con la terminación `Z` (ej. `20261125T140000Z`) para que los calendarios locales ajusten automáticamente la hora al huso horario del paciente.
