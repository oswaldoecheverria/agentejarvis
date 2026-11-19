# 📦 Módulo: Citas y Reservas

* **ID del Módulo:** `mod-citas-reservas`
* **Origen:** `erikasalud`
* **Estado:** `[EN PRODUCCIÓN / HIGH-STAKES]`
* **Dominio:** Agenda Médica y Reservas de Turnos

---

## 🗺️ 1. Flujo Visual en Terminal (Box-Drawing)

```text
 [PACIENTE]
    │
    ▼
┌─────────────────────────┐
│ 1. Abre Calendario      │
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐     ¿Hay franjas libres?
│ 2. Consulta de Franjas  ├────────────────────────────┐
└───────────┬─────────────┘                            │ NO
            │ SÍ                                       ▼
            ▼                                ┌───────────────────┐
┌─────────────────────────┐                  │ Sugiere próximo   │
│ 3. Formulario Asistido  │                  │ día disponible    │
└───────────┬─────────────┘                  └───────────────────┘
            ▼
┌─────────────────────────┐
│ 4. Validación Backend   │ (Verifica ausencia de colisiones en DB)
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│ 5. Cita Registrada      │──► Alerta en Panel Médico [DOCTORA]
└───────────┬─────────────┘
            ▼
   ┌─────────────────┬─────────────────┐
   │ Acciones Post   │ Acciones Post   │
   ▼                 ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌────────────────────────┐
│ Sync iCal    │  │ Sync Google  │  │ WhatsApp Pre-redactado │
└──────────────┘  └──────────────┘  └────────────────────────┘
```

---

## 📝 2. Secuencia Macro en Letras (Lógica Paso a Paso)

1. **Apertura y Consulta:** El paciente solicita la agenda médica. El sistema calcula en milisegundos las franjas horarias disponibles para la fecha elegida.
2. **Formulario Ligero:** Si hay disponibilidad, el paciente elige su hora y completa sus datos de contacto sin tener que crear una cuenta con contraseña.
3. **Validación Transaccional:** El backend verifica bajo transacción atómica que la franja permanezca libre para evitar solapamientos simultáneos.
4. **Persistencia y Notificación:** Se guarda la cita en estado `PENDIENTE` y se genera una alerta inmediata en el panel de administración médica.
5. **Acciones Asistidas del Paciente:** La pantalla de confirmación entrega sincronización inmediata con Google Calendar/iCal y botón de confirmación con mensaje pre-redactado a WhatsApp.

---

## 🧩 3. Características Atómicas que Componen este Módulo

*(Haz Ctrl+Click o Click en cualquier enlace para abrir su ficha técnica detallada sin repetir texto redundante):*

* ⚙️ [Disponibilidad de Franjas en Tiempo Real](file:///F:/proyectos/agentejarvis/memory/features/citas/disponibilidad-franjas.md)
  * *Cálculo dinámico excluyendo citas canceladas y descansos administrativos.*
* ⚙️ [Reserva Asistida sin Login](file:///F:/proyectos/agentejarvis/memory/features/citas/reserva-asistida.md)
  * *Formulario de alta conversión con validación transaccional anti-colisiones.*
* ⚙️ [Sincronización Dual de Calendarios](file:///F:/proyectos/agentejarvis/memory/features/citas/sync-calendarios.md)
  * *Generación de eventos en Google Calendar y archivos descargables `.ics`.*
* ⚙️ [Confirmación Asistida vía WhatsApp](file:///F:/proyectos/agentejarvis/memory/features/citas/confirmacion-whatsapp.md)
  * *Enlace directo `wa.me` con mensaje formateado y código de cita.*

---

## 🧱 4. Receta de Ensamble (Componibilidad Lego)

Cuando se implemente este módulo en otro proyecto:
* **Receta Estándar (Médica / Consultorios):** Franjas Dinámicas + Reserva Asistida + Sincronización + WhatsApp.
* **Variante Alternativa (Servicios Comerciales):** Se puede sustituir la característica de *Reserva Asistida* por una futura *Reserva con Cobro Previo (Stripe)*, reutilizando intactas las características de *Disponibilidad de Franjas* y *Sincronización*.
