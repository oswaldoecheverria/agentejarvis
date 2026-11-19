# 📦 Dominio: Campañas de Conversión y Eventos

## 📌 Variante / Opción 1: Landing de Alta Conversión con Selector de Tickets y Countdown
* **Origen:** Sistema Médico (`erikasalud`)
* **ID:** `campanas-landing-conversion-tickets`
* **Tipo:** Captación y registro de usuarios a eventos, charlas o campañas con cupos limitados y viralización.

### 👥 Roles y Actores
- `Visitante / Asistente`: Lee propuesta de valor, elige modalidad/ticket y se registra.
- `Organizador`: Monitorea asistentes, cupos restantes y métricas de registro.

### 🔄 Flujo de Usuario E2E
1. El visitante accede a la URL personalizada del evento o campaña (`/[slug]`).
2. Visualiza el encabezado con cuenta regresiva en vivo (`Countdown`), video explicativo y lo que incluye el evento.
3. El usuario interactúa con el selector de modalidades (`TicketTierSelector`), eligiendo entre opciones (ej. Estándar, VIP, Taller).
4. Llena el formulario de inscripción con validación de datos en tiempo real.
5. El sistema confirma la inscripción, reduce los cupos disponibles y entrega un pase digital.
6. Se despliegan botones de acción rápida para agregar a calendario (`AddToCalendarButton`) y compartir por WhatsApp (`CampanaShareModal`).

### 🛠️ Estructura Técnica Recomendada
- **Backend:** Modelo `Campana` con slug dinámico, cupos máximos, fecha límite y tiers de precios.
- **Frontend:** Hero cinemático, formulario embebido y modal de felicitaciones con trigger para compartir.
