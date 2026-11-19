---
name: feature-memory
description: >-
  Memoria funcional viva, ingeniería inversa de software y bitácora de arquitectura.
  Se activa al: 1) Auditar un proyecto existente para extraer sus módulos, características,
  flujos visuales en terminal y resultados esperados; 2) Cerrar una sesión o hito para actualizar
  la bitácora funcional del proyecto y el almacén global de opciones; 3) Solicitar
  o proponer una nueva funcionalidad para sugerir variantes ya dominadas o generar su spec.md;
  4) Generar manuales de usuario y documentación del sistema a partir de flujos reales;
  5) Cuando el usuario mencione "bitácora funcional", "aprende este módulo", "audita las funciones",
  "genera manual de usuario", "qué funciones tenemos de X" o "feature-memory".
---

# Feature-Memory: Memoria Funcional Viva y Bitácora de Negocio

Esta habilidad dota al agente de una **memoria funcional acumulativa** entre proyectos. A diferencia de las herramientas cosméticas de UI/UX, `feature-memory` se enfoca en la **lógica de negocio pura**: qué hace el sistema, cómo se organizan sus módulos y qué características los componen.

---

## 🏛️ Jerarquía de 3 Niveles: Sistema > Módulos > Características

```text
┌────────────────────────────────────────────────────────┐
│  1. SISTEMA (La Aplicación Completa)                   │
│  Ejemplo: "ErikaSalud"                                 │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│  2. MÓDULOS (Los Contenedores de Dominio)              │
│  Ubicación: memory/modules/<modulo>.md                 │
│  · Diagrama visual de flujo en terminal (Box-Drawing). │
│  · Secuencia macro en texto paso a paso.               │
│  · Lista de características atómicas con enlaces       │
│    directos (file:///...) sin texto redundante.        │
│  · Receta de ensamble Lego para reutilización.         │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│  3. CARACTERÍSTICAS (Las Unidades Funcionales Atómicas)│
│  Ubicación: memory/features/<modulo>/<feature>.md      │
│  · Propósito específico de la función.                 │
│  · Flujo de datos y validaciones paso a paso.          │
│  · Reglas críticas de negocio y casos borde.           │
│  · Estado: [PRODUCCIÓN / HIGH-STAKES] o [MVP / BETA].  │
└────────────────────────────────────────────────────────┘
```

---

## 📐 El Enfoque Dual: Visual (Terminal) + Texto Lógico

Todo documento de módulo debe estructurarse con dos representaciones complementarias:

1. **Flujo Visual en Terminal (Box-Drawing):**
   - Construido con caracteres Unicode estándar (`┌──┐`, `│`, `└──►`, `◇`).
   - Permite al desarrollador entender la arquitectura en 3 segundos directamente desde la terminal.
2. **Secuencia Macro en Letras (Para la IA y lectura formal):**
   - Resumen numerado de 4 a 6 pasos clave (entradas, bifurcaciones y resultados).
   - Garantiza que la IA interprete las reglas con 100% de precisión matemática cuando vaya a generar código o especificaciones `spec.md`.
3. **Principio DRY (Don't Repeat Yourself) y Enlaces Cliqueables:**
   - El módulo **NUNCA** repite la explicación exhaustiva de cada característica.
   - En su lugar, enlaza a cada una mediante hipervínculos `file:///F:/...` para que con un Ctrl+Click en la terminal se abra la ficha técnica atómica.

---

## ⚙️ Los 4 Protocolos Operativos

### Protocolo 1: Auditoría e Ingeniería Inversa (Retroactivo)
*Se activa al conectar un proyecto existente o cuando el usuario dice: "Audita este proyecto y extrae su bitácora funcional".*

1. **Escaneo Profundo del Backend y Frontend:**
   - Inspeccionar carpetas de negocio (`apps/web/*`), modelos, esquemas y endpoints.
   - Leer páginas y componentes cliente (`src/app/*`).
2. **Desglose en Módulos y Características:**
   - Agrupar la lógica en Módulos mayores.
   - Descomponer cada módulo en sus Características atómicas.
3. **Generación de Entregables:**
   - Generar la bitácora local `<proyecto>/BITACORA_FUNCIONAL.md` con los diagramas visuales y listas de características.
   - Sincronizar la memoria global en `agentejarvis/memory/` con los nuevos módulos y características aprendidas.

---

### Protocolo 2: Bitácora Continua y Cierre de Jornada
*Se activa al concluir una sesión de desarrollo o cuando el usuario dice: "Actualiza la bitácora con lo trabajado hoy".*

1. **Detección de Nuevas Características:**
   - Revisar `git status` y `git diff`.
   - Identificar nuevas funciones o modificaciones en los flujos.
2. **Persistencia Atómica:**
   - Actualizar el módulo local en la bitácora del proyecto.
   - Guardar o actualizar la característica en `agentejarvis/memory/features/`.

---

### Protocolo 3: Detección, Sugerencia y Generación de Spec en Proyectos Nuevos
*Se activa cuando en un nuevo desarrollo el usuario pide una funcionalidad (ej. "Quiero un sistema de citas").*

1. **Intercepción y Receta de Ensamble:**
   - El agente consulta `agentejarvis/memory/catalog.json`.
   - Ofrece el módulo con su receta de características:
     > *"Tenemos el Módulo de Citas compuesto por:*
     > *1. Disponibilidad de Franjas en Tiempo Real*
     > *2. Reserva Asistida sin Login*
     > *3. Sincronización con Google Calendar/iCal*
     > *4. Confirmación por WhatsApp*
     > *¿Deseas ensamblar este módulo completo o cambiar alguna característica (ej. agregar cobro con tarjeta)?"*
2. **Generación Directa del Spec:**
   - Al aceptar la receta, el agente genera automáticamente el `spec.md` del módulo adaptado al nuevo proyecto.

---

### Protocolo 4: Síntesis de Manuales del Sistema
*Se activa cuando el usuario dice: "Genera el manual de usuario" o "Genera el manual técnico".*

1. **Manual de Usuario:** Traduce las características y flujos visuales en una guía paso a paso ilustrada sin tecnicismos para clientes o pacientes.
2. **Manual de Operaciones:** Guía para el administrador del sistema con permisos, roles y gestión de estados.
