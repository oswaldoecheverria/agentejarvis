# 📦 Dominio: Citas y Reservas

## 📌 Variante / Opción 1: Calendario con Franjas Dinámicas y Reserva Asistida
* **Origen:** Sistema Médico (`erikasalud`)
* **ID:** `citas-medica-franjas-dinamicas`
* **Tipo:** Reserva de turnos con cálculo de disponibilidad en tiempo real, bloqueo de solapamiento y confirmación multicanal.

### 👥 Roles y Actores
- `Cliente / Paciente`: Consulta disponibilidad sin necesidad de login previo, selecciona franja y reserva.
- `Profesional / Administrador`: Define su horario de atención, bloquea fechas no disponibles y gestiona el estado de las citas (confirmar, reprogramar, cancelar).

### 🔄 Flujo de Usuario (Step-by-Step E2E)
1. **Apertura:** El usuario hace clic en "Agendar Cita" desde el menú o hero. Se abre el modal o página de reserva.
2. **Cálculo de Disponibilidad:** El sistema consulta el backend y colorea los días disponibles. Al hacer clic en un día, calcula las franjas horarias libres (excluyendo citas activas y bloqueos de agenda).
3. **Formulario:** El usuario selecciona la hora deseada e ingresa sus datos (nombres, teléfono, motivo de consulta) y acepta los términos de privacidad.
4. **Validación Transaccional:** El backend valida en una transacción que la franja horaria siga libre al momento de persistir (`POST /api/citas/agendar/`).
5. **Persistencia:** Se genera el registro de la cita en la base de datos en estado inicial `PENDIENTE`.
6. **Confirmación y Acciones Inmediatas:** La pantalla de éxito muestra la tarjeta de confirmación con:
   - Botón directo para sincronizar con Google Calendar o Apple iCal.
   - Botón directo a WhatsApp con mensaje pre-redactado para confirmar con el profesional.

### 🎯 Resultados Esperados y Reglas de Negocio
- **Cero Solapamientos:** Restricción estricta en base de datos. Si dos usuarios intentan agendar la misma franja a la vez, el segundo recibe una alerta amigable solicitándole elegir la hora más próxima.
- **Reserva Asistida:** No obliga a crear cuenta con contraseña antes de reservar, maximizando la tasa de conversión.
- **Trazabilidad:** Cada cita registra fecha de creación, IP y consentimiento LOPDP.

### 🛠️ Estructura Técnica Recomendada (Tu Estilo de Autor)
- **Backend:** Modelo `Cita` (fecha, hora_inicio, hora_fin, estado, datos_contacto) con índice único condicional excluyendo citas canceladas (`exclude(estado='CANCELADA')`). Endpoints en NinjaAPI (`GET /disponibilidad/`, `POST /agendar/`).
- **Frontend:** Componente calendario mensual + lista interactiva de pills horarias (`CalendarioCitas.tsx`) y modal flotante (`ModalReservaCita.tsx`).

---

<!-- Cuando crees una forma diferente de hacer citas (ej. turnos de barbería con pago previo por Stripe, o reservas grupales), se agregará aquí abajo automáticamente como:
## 📌 Variante / Opción 2: [Nombre de la nueva variante]
-->
