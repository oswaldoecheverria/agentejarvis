# 📘 Manual Integral del Agente de IA (AgentKit)

Bienvenido al manual oficial de tu **Agente Personal de Inteligencia Artificial**. Este documento explica en detalle cómo funciona el cerebro del agente, para qué sirve cada habilidad (*skill*), cuándo invocarla, y cómo trabajar con él día a día para construir software profesional de forma rápida, segura y sin gastar tokens de más.

---

## 🧠 1. ¿Cómo Funciona la Mente del Agente?

El agente funciona bajo una arquitectura de **3 capas complementarias**:

```
┌────────────────────────────────────────────────────────┐
│  1. REGLAS BASE (AGENTS.md) — "El ADN Siempre Activo"   │
│  · Idioma español, local-first, trunk-based git        │
│  · Filosofía Ponytail (YAGNI, no sobre-ingeniería)     │
│  · Estándar visual y anti-AI-slop                      │
└────────────────────────────────────────────────────────┘
                           ▼
┌────────────────────────────────────────────────────────┐
│  2. SKILLS BAJO DEMANDA (.agents/skills/)              │
│  · Progressive Disclosure: viven dormidas y despiertan  │
│    solo cuando las necesitas o las mencionas.          │
│  · No saturan la memoria de tokens innecesariamente.   │
└────────────────────────────────────────────────────────┘
                           ▼
┌────────────────────────────────────────────────────────┐
│  3. AUTONOMÍA Y HERRAMIENTAS                           │
│  · Inspecciona el código, edita archivos, ejecuta      │
│    comandos en terminal y prueba antes de avisar.      │
└────────────────────────────────────────────────────────┘
```

### ¿Qué es el "Progressive Disclosure"?
En Antigravity, el agente no carga todo el texto de las 16 skills a la vez porque eso consumiría miles de tokens en cada mensaje. Solo tiene presente el **nombre y descripción** de cada una. Cuando tú mencionas un tema (ejemplo: *"revisa con ponytail"* o *"diseña con neumorfismo"*), el agente abre el manual de esa skill específica, lo lee, ejecuta la tarea y lo vuelve a cerrar.

---

## 🏗️ 2. Estructura Canónica de Proyecto (El Estándar Oficial)

Todo proyecto que crees con este agente debe seguir esta arquitectura modular:

```text
mi-proyecto/
├── .agents/                      ← Motor del Agente (16 skills activas)
├── AGENTS.md                     ← Reglas del proyecto, Efecto Glass, Ponytail y Arquitectura
├── BITACORA_PROYECTO.md          ← Historial de avances, credenciales y arquitectura
├── docker-compose.yml            ← Orquestación de desarrollo local
├── docker-compose.prod.yml       ← Orquestación de producción para VPS
│
├── backend/                      ← Django 5.2 + Django Ninja + uv
│   ├── config/                   ← settings/ (base.py, local.py, production.py), urls.py, api.py
│   ├── core/                     ← Utilidades transversales (imágenes WebP, RBAC, permisos, health checks)
│   └── apps/                     ← Monolito modular por dominios de negocio:
│       └── <dominio>/            ← Cada app contiene: models.py, api.py, admin.py, schemas.py, tests/
│
└── frontend/                     ← Next.js 16 (App Router + Turbopack + Tailwind + pnpm)
    └── src/
        ├── components/           ← Componentes compartidos (Navbar, Footer, alertas, UI base)
        ├── lib/api/              ← Cliente HTTP fail-safe y contratos de tipos generados
        └── app/
            ├── (web)/            ← Grupo de rutas público: Landing, blog, catálogo, SEO y pacientes
            └── (sistema)/        ← Grupo de rutas privado: Panel de control, dashboards y login
```

### ¿Por qué esta estructura? (Fundamento Técnico)
1. **Backend Monolito Modular vs Microservicios:**
   * *El problema:* Los microservicios añaden sobrecarga operativa brutal (redes, múltiples bases de datos, latencia de red, despliegues complejos) que no se justifica y viola la filosofía YAGNI.
   * *La solución:* Un **Monolito Modular** en Django. Una sola base de datos y un solo despliegue, pero el código vive en carpetas aisladas por dominio (`apps/web/<modulo>/`). Cada módulo tiene sus propios modelos, endpoints y tests. Si necesitas modificar facturación, jamás tocas el blog ni la galería.
2. **Frontend Route Groups `(web)` vs `(sistema)`:**
   * *El problema:* En Next.js tradicional, mezclar páginas públicas con paneles de administración en la misma estructura provoca choques de layouts, estilos que se filtran, y carga innecesaria de librerías en landings donde importa el SEO.
   * *La solución:* Los paréntesis `(web)` y `(sistema)` crean **árboles de layout 100% aislados** sin agregar carpetas a la URL visible. En `(web)` se prioriza el SEO, SSR ultra-rápido y el diseño visual; en `(sistema)` se montan dashboards privados y autenticación protegida.
3. **Cliente de API Desacoplado y Fail-Safe (`lib/api/`):**
   * El frontend jamás hace llamadas dispersas con `fetch` crudo. Todo pasa por `lib/api/client.ts` con manejo centralizado de caídas de servidor y tipos Pydantic/TypeScript sincronizados.

---

## 🛠️ 3. Catálogo Detallado de Skills (Las 16 Herramientas)

Tus herramientas están divididas en 4 cuadrantes funcionales:

### Cuadrante A: Eficiencia y Código Limpio (Anti-Bloat)
| Skill | Propósito Central | ¿En qué momento llamarla? |
| :--- | :--- | :--- |
| **`ponytail`** | Modo desarrollador senior minimalista. Resuelve la tarea con la menor cantidad de código nuevo posible. Evita inventar abstracciones o instalar paquetes npm/pip superfluos. | Cuando vayas a programar algo nuevo, hacer un refactor o cuando quieras que el agente no invente código de más. |
| **`ponytail-review`** | Auditor de calidad implacable. Revisa el código buscando código muerto, riesgos de seguridad, lentitud y falta de pruebas. | Justo antes de hacer un commit o al terminar una sección de trabajo. |

### Cuadrante B: Diseño Visual y Experiencia de Usuario (UI/UX)
| Skill | Propósito Central | ¿En qué momento llamarla? |
| :--- | :--- | :--- |
| **`ui-ux-master`** | Enciclopedia técnica de 8 estilos visuales: *Glassmorphism, Liquid Glass / Spatial UI, Neumorphism, Claymorphism, Neo-Brutalism, Skeuomorphism, Minimalism y Maximalism*. Contiene las fórmulas exactas de Tailwind CSS. | Cuando pidas diseñar o rediseñar pantallas, componentes, tarjetas o landings en un estilo estético particular. |
| **`hallmark`** | Diseño web de autor y escudo Anti-AI-Slop (reglas The Floor, maquetación de landings y auditoría visual). Previene cuadrículas trilladas, botones morados cliché y layouts inflados. | Al maquetar nuevas páginas/landings, auditar la calidad visual de una pantalla o rediseñar componentes manteniendo intacta su lógica. |
| **`motion-designer`** | Física de movimiento y micro-interacciones estilo Emil Kowalski. Garantiza animaciones ultra-rápidas (<300ms), curvas naturales de desaceleración y respuesta táctil. | Cuando diseñes botones, modales, menús desplegables, toasts o quieras darle vida y fluidez a la interfaz. |

### Cuadrante C: Flujo de Arquitectura y Especificación (Spec-Kit)
| Skill | Propósito Central | ¿En qué momento llamarla? |
| :--- | :--- | :--- |
| **`speckit-specify`** | Convierte una idea en lenguaje natural en un documento formal de requerimientos (`spec.md`). | Al inicio de una nueva funcionalidad grande o módulo. |
| **`speckit-clarify`** | Analiza el `spec.md` y te hace preguntas clave para aclarar zonas grises antes de programar. | Cuando el requerimiento tiene dudas sobre casos límite o reglas de negocio. |
| **`speckit-constitution`** | Crea o actualiza las reglas fundamentales y principios técnicos de tu proyecto. | Al fundar un proyecto o definir límites arquitectónicos estrictos. |
| **`speckit-plan`** | Toma el `spec.md` y diseña el plan técnico y de arquitectura (`plan.md`): modelos, APIs y componentes. | Antes de tocar código, para validar la arquitectura. |
| **`speckit-tasks`** | Divide el `plan.md` en tareas ordenadas por dependencia (`tasks.md`). | Después del plan, para tener la lista paso a paso. |
| **`speckit-analyze`** | Verifica la coherencia entre `spec.md`, `plan.md` y `tasks.md` antes de construir. | Auditoría previa a la implementación. |
| **`speckit-implement`** | Lee `tasks.md` y construye el código tarea por tarea de forma ordenada. | Cuando ya aprobaste el plan y las tareas. |
| **`speckit-checklist`** | Genera un checklist de calidad específico para probar la funcionalidad. | Al terminar el desarrollo para validar que no falte nada. |
| **`speckit-converge`** | Compara el código real contra el plan para detectar si quedó algo a medias. | Si sospechas que faltó construir alguna tarea del plan. |
| **`speckit-taskstoissues`**| Convierte las tareas de `tasks.md` en issues de GitHub para seguimiento. | Si trabajas con issues en un repositorio colaborativo. |

### Cuadrante D: Control de Producción y Git
| Skill | Propósito Central | ¿En qué momento llamarla? |
| :--- | :--- | :--- |
| **`devops-mentor`** | Supervisa el flujo Git (Trunk-Based), aconseja commits semánticos (`feat:`, `fix:`) y guía el despliegue al servidor VPS paso a paso sin fallos. | Al cerrar una etapa de trabajo o cuando quieras subir cambios a producción. |

---

## 🔄 3. El Proceso de Trabajo Recomendado (Paso a Paso)

Para sacarle el 100% de provecho al agente y no perder tiempo ni dinero, sigue este ciclo estándar:

```
[ IDEA DEL USUARIO ]
        │
        ▼
1. ESPECIFICACIÓN ───► ¿Es grande? ──► Usar speckit-specify
        │                     │
        │                     └──► ¿Es pequeña/mediana? ──► Pedir directamente (Regla Ponytail se aplica sola)
        ▼
2. DISEÑO VISUAL ────► Elegir estilo (ui-ux-master) + Animación (motion-designer)
        │
        ▼
3. CONSTRUCCIÓN ─────► El agente programa autónomamente (Local-First)
        │
        ▼
4. AUDITORÍA ────────► Ejecutar ponytail-review (caza bugs y código inflado)
        │
        ▼
5. CHECKPOINT ───────► devops-mentor propone commit semántico guiado
```

---

## ⚡ 4. Guía Rápida de Comandos y Frases Detonantes

El agente entiende lenguaje natural, pero estas palabras clave activan inmediatamente las directivas de cada skill:

| Lo que quieres lograr | Qué debes escribirle al agente | Skill que se activa |
| :--- | :--- | :--- |
| **Escribir código ultra-minimalista** | *"Usa ponytail"* o *"Aplica ponytail ultra en esto"* | `ponytail` |
| **Auditar código antes de guardar** | *"Haz un review"* o *"Audita los cambios con ponytail-review"* | `ponytail-review` |
| **Diseño con cristal traslúcido** | *"Diseña este componente con efecto glass"* o *"Spatial UI"* | `ui-ux-master` |
| **Diseño web de autor (Anti-AI-Slop)** | *"Maqueta esta landing con estilo de autor"* o *"Audita el diseño con hallmark"* o *"Rediseña esta vista"* | `hallmark` |
| **Diseño moderno retro/geométrico** | *"Usa estilo Neo-Brutalismo con bordes gruesos"* | `ui-ux-master` |
| **Diseño suave tipo arcilla 3D** | *"Crea esta tarjeta usando Claymorphism"* | `ui-ux-master` |
| **Diseño integrado en la superficie**| *"Aplica Neumorfismo a estos botones"* | `ui-ux-master` |
| **Animar componentes de forma fluida** | *"Pule las transiciones con estilo Emil Kowalski"* o *"animación spring"* | `motion-designer` |
| **Convertir una idea en especificación**| *"Especifica esta idea: quiero un sistema de recetas"* | `speckit-specify` |
| **Armar el plan técnico** | *"Genera el plan de arquitectura para el spec"* | `speckit-plan` |
| **Crear la lista de tareas** | *"Genera el desglose de tareas (tasks.md)"* | `speckit-tasks` |
| **Construir el sistema planificado** | *"Implementa las tareas de tasks.md"* | `speckit-implement` |
| **Hacer commit seguro** | *"¿Hacemos commit de lo avanzado?"* | `devops-mentor` |

---

## 🚀 5. Ejemplo de la Vida Real: De la Idea a Producción

Imaginemos que estás en tu proyecto **`erikasalud`** y quieres agregar una nueva función:  
👉 **"Un modal flotante para que el paciente pueda cancelar o reprogramar su cita médica"**.

Así es como interactúas con tu agente para lograr un resultado perfecto:

### Paso 1: Pedir el Requerimiento con Identidad Visual
Tú no tienes que programar ni buscar clases de CSS. Solo le dices al agente:

> **Tú dices:**  
> *"Quiero agregar un botón 'Gestionar Cita' en la lista de citas. Al hacer clic, debe abrir un modal con estilo Liquid Glass / Spatial UI donde el paciente elija entre 'Reprogramar' o 'Cancelar'. Usa animaciones rápidas estilo Emil Kowalski y mantén el código minimalista."*

### Paso 2: Lo que hace el Agente por detrás (en silencio)
1. **Activa `ui-ux-master`**: Aplica la fórmula de tarjeta suspendida con `backdrop-blur-2xl`, borde satinado `border-white/30`, y el sub-dock inferior curvo.
2. **Activa `motion-designer`**: Configura la entrada del modal en `180ms` con curva `cubic-bezier(0.16, 1, 0.3, 1)` y ancla el origen de la animación.
3. **Aplica Ponytail (Always-On)**: En lugar de instalar una librería pesada de diálogos (`@radix-ui` o similares), reutiliza los componentes nativos o existentes en tu Next.js.
4. **Modifica los archivos locales** de frontend y backend de forma autónoma.
5. **Ejecuta las pruebas** para asegurarse de que la aplicación compila.

### Paso 3: Auditoría y Poda de Código
Antes de cerrar la tarea, le pides al agente que revise su propio trabajo:

> **Tú dices:**  
> *"Revisa los cambios con ponytail-review"*

> **El Agente responde:**  
> *"What this change does: Agrega modal de gestión de citas en modal flotante.  
> Hallazgos:  
> - En `ModalGestion.tsx:L32` había un estado booleano redundante que se puede simplificar derivando del prop `cita`.  
> Ahorro: -14 líneas.  
> Veredicto: Listo para commit."*

### Paso 4: Consolidación y Git
Al ver que todo funciona en `localhost`:

> **Tú dices:**  
> *"Excelente, haz el commit"*

> **El Agente ejecuta (`devops-mentor`):**  
> Propone: `feat(citas): agregar modal flotante para reprogramar y cancelar citas`  
> Ejecuta `git add` y `git commit` de forma limpia y profesional.

---

## 💡 6. Consejos de Oro para Sacarle el Máximo Provecho

1. **Sé específico en el "qué", déjale el "cómo" al agente:** No intentes decirle qué archivo editar o qué línea mover; dile qué resultado visual y funcional esperas.
2. **Aprovecha el "Always-On":** No necesitas decirle *"ahorra tokens"* ni *"no instales paquetes"*; tu agente ya lo tiene grabado en sus reglas y lo cumplirá automáticamente.
3. **Audita antes de commitear:** Usa `ponytail-review` con frecuencia. Mantendrá tu base de código pequeña, limpia y fácil de entender.
4. **Para proyectos nuevos:** Recuerda que puedes clonar toda esta inteligencia a cualquier carpeta ejecutando:
   ```powershell
   F:\proyectos\agentepersonal\scripts\setup-project.ps1 -ProjectPath "F:\proyectos\mi-nuevo-proyecto"
   ```

---

## 🏛️ 7. UI Vault — Bóveda Privada Local y Galería de Diseño

Tu repositorio personal de diseño para **guardar, clasificar, previsualizar y reutilizar** componentes modernos (Tailwind CSS, React, Next.js) sin gastar tokens ni depender de internet.

### 🌐 Cómo ver tu galería local:
```powershell
# Iniciar visor local en http://localhost:3333
F:\proyectos\agentepersonal\scripts\start-vault.ps1

# Detener visor local
F:\proyectos\agentepersonal\scripts\stop-vault.ps1
```

### 🎯 Los 4 Flujos Principales:
1. **Ingesta a Demanda:**
   - Tú dices: *"Agente, revisa `https://magicui.design` y guarda los componentes gratuitos que encuentres"*.
   - El agente extrae el código, limpia las dependencias innecesarias, lo clasifica (Hero, Slider, Bento Card, etc.), guarda el archivo en `vault/components/` y registra la URL de la web original.
2. **Detección en Tiempo de Programación:**
   - Mientras programas en cualquier proyecto (ej. `erikasalud`), si el agente detecta que vas a crear un Hero o un Slider, te preguntará activamente:
     > *"Noto que estamos diseñando un componente [Hero/Slider]. ¿Deseas que consulte nuestra biblioteca privada (`ui-vault`) o encendemos el visor local en `http://localhost:3333`?"*
3. **Auditoría Trimestral (Consentimiento Estricto):**
   - El agente registra cuándo se revisó cada web en `vault/sources.json`. Cada 90 días (3 meses), te avisará pasivamente para pedirte autorización antes de volver a escanearlas. **Nunca navegará sin tu permiso.**
4. **Ahorro de Espacio y Eliminación:**
   - Desde la web local (`http://localhost:3333`) puedes probar los componentes en vivo, copiar su código con un clic o borrarlos del disco permanentemente pulsando el icono de papelera.
