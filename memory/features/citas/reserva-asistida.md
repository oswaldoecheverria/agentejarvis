# ⚙️ Característica: Reserva Asistida sin Login Obligatorio

* **Módulo:** [Citas y Reservas](file:///F:/proyectos/agentejarvis/memory/modules/citas.md)
* **ID:** `citas-reserva-asistida`
* **Origen:** `erikasalud`
* **Estado:** `[PRODUCCIÓN / HIGH-STAKES]`
* **Actores:** `Paciente / Cliente (Público)`

---

## 🎯 Propósito
Maximizar la tasa de conversión permitiendo que un paciente reserve una cita médica ingresando únicamente sus datos de contacto esenciales, sin obligarlo a crear una cuenta con contraseña antes de agendar.

---

## 🔄 Flujo de Datos y Lógica
1. El usuario selecciona una franja horaria disponible en la interfaz.
2. Completa los campos mínimos obligatorios: Nombres, Apellidos, Teléfono WhatsApp, Correo electrónico y Motivo de consulta.
3. Marca la casilla obligatoria de Aceptación de Términos y Política LOPDP.
4. El frontend envía `POST /api/citas/agendar/`.
5. El backend ejecuta una transacción atómica:
   - Verifica nuevamente que la franja horaria no haya sido tomada por otra persona mientras llenaba el formulario.
   - Si está ocupada: responde HTTP 409 (Conflicto) y sugiere las horas libres más próximas.
   - Si está libre: crea el registro de la cita en estado `PENDIENTE`.
6. Si el número de identificación o teléfono coincide con un paciente registrado previamente, enlaza automáticamente la cita a su historial clínico.

---

## 🛡️ Reglas Críticas de Negocio
* **Bloqueo Transaccional:** Uso de `select_for_update()` o constraint condicional único `UniqueConstraint(fields=['fecha', 'hora_inicio'], condition=~Q(estado='CANCELADA'))`.
* **Protección Anti-Spam:** Rate limiting por IP (máximo 5 solicitudes por hora).
