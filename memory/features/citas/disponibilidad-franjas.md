# ⚙️ Característica: Cálculo de Disponibilidad de Franjas en Tiempo Real

* **Módulo:** [Citas y Reservas](file:///F:/proyectos/agentejarvis/memory/modules/citas.md)
* **ID:** `citas-disponibilidad-franjas`
* **Origen:** `erikasalud`
* **Estado:** `[PRODUCCIÓN / HIGH-STAKES]`
* **Actores:** `Paciente / Cliente (Público)`

---

## 🎯 Propósito
Calcular de forma dinámica y en tiempo real las horas libres de un profesional para una fecha seleccionada, evitando mostrar horas ocupadas o bloqueadas administrativamente.

---

## 🔄 Flujo de Datos y Lógica
1. El frontend envía `GET /api/citas/disponibilidad/?fecha=YYYY-MM-DD`.
2. El backend obtiene la configuración de horario laboral del profesional (ej. 09:00 a 18:00 con intervalo de 30 o 45 min).
3. Consulta las citas existentes para esa fecha excluyendo aquellas con estado `CANCELADA`.
4. Consulta los bloqueos de agenda administrativos (vacaciones, reuniones, descansos).
5. Genera la lista de franjas horarias y marca cada una como `disponible: true` o `disponible: false`.
6. Si la fecha consultada es el día de hoy, filtra automáticamente las franjas horarias que ya hayan pasado.

---

## 🛡️ Reglas Críticas de Negocio
* **Exclusión de Canceladas:** Una cita cancelada libera inmediatamente la franja horaria sin intervención manual.
* **Hora del Servidor:** Las comparaciones temporales deben realizarse siempre en la zona horaria del profesional (`America/Guayaquil`).
* **Optimización de Consulta:** La consulta debe indexar `(fecha, estado)` para responder en menos de 50ms.
