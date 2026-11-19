# 🤖 Agente Jarvis (AgentKit) — Mi Caja de Herramientas de IA

Repositorio personal de **skills, reglas y scripts** para el agente de IA (Antigravity).
Diseñado para crecer incrementalmente y desplegarse en cualquier proyecto nuevo en segundos.

> 📖 **[Ver Manual Integral de Uso y Comandos (MANUAL_DE_USO.md)](./MANUAL_DE_USO.md)** para una explicación completa de cada skill, flujo de trabajo y ejemplos prácticos.

---

## 📐 Filosofía

> **Una skill = Una responsabilidad.**
> Las skills viven aquí, crecen aquí, y se *copian* a cada proyecto cuando se necesitan.
> Cada proyecto es autosuficiente: no depende de este repositorio en tiempo real.

---

## 📁 Estructura

```
agentejarvis/
├── skills/                    ← Catálogo de skills disponibles
│   ├── devops-mentor/         ← Mentor Git, commits, despliegue seguro
│   ├── speckit-specify/       ← Generar spec.md desde descripción
│   ├── speckit-plan/          ← Generar plan.md de arquitectura
│   ├── speckit-tasks/         ← Generar tasks.md
│   ├── speckit-implement/     ← Ejecutar tasks.md
│   ├── speckit-analyze/       ← Validar consistencia de artefactos
│   ├── speckit-clarify/       ← Preguntas de aclaración al spec
│   ├── speckit-checklist/     ← Checklist por feature
│   ├── speckit-converge/      ← Detectar trabajo no construido
│   ├── speckit-constitution/  ← Constitución del proyecto
│   ├── speckit-taskstoissues/ ← Tasks → GitHub Issues
│   ├── hallmark/              ← Diseño web de autor Anti-AI-Slop
│   ├── motion-designer/       ← Animaciones y micro-interacciones (Emil Kowalski)
│   ├── ponytail/              ← Minimalismo YAGNI
│   ├── ui-ux-master/          ← Sistemas de diseño visual moderno
│   └── feature-memory/        ← Memoria funcional, ingeniería inversa y bitácora de negocio
├── memory/
│   ├── catalog.json           ← Índice global de funcionalidades y opciones aprendidas
│   └── features/              ← Fichas multivariante de negocio por dominio
├── rules/
│   └── AGENTS.template.md     ← Plantilla base de AGENTS.md para nuevos proyectos
├── scripts/
│   ├── setup-project.ps1      ← Instalar agente en un proyecto (copia skills + AGENTS.md)
│   └── new-skill.ps1          ← Crear el scaffold de una nueva skill
└── README.md                  ← Este archivo
```

---

## 🚀 Instalar el agente en un proyecto nuevo

```powershell
# Opción A: Desde esta carpeta local
F:\proyectos\agentejarvis\scripts\setup-project.ps1 -ProjectPath "F:\proyectos\mi-nuevo-proyecto"

# Opción B: Desde GitHub
irm https://raw.githubusercontent.com/oswaldoecheverria/agentejarvis/main/scripts/setup-project.ps1 | iex
```

---

## 🧩 Agregar una nueva skill

Cuando identifiques una nueva necesidad recurrente:

```powershell
F:\proyectos\agentejarvis\scripts\new-skill.ps1 -SkillName "mi-nueva-skill"
```

Esto crea el scaffold en `skills/mi-nueva-skill/SKILL.md` listo para editar.
Luego haz commit y push, y estará disponible para todos los proyectos futuros.

---

## 🌐 Bootstrap desde GitHub (nuevo proyecto, nueva PC)

Para instalar el agente en un proyecto nuevo sin tener `agentejarvis` clonado:

```powershell
# 1. Clonar solo agentejarvis temporalmente
git clone --depth=1 https://github.com/oswaldoecheverria/agentejarvis.git C:\Temp\agentejarvis

# 2. Instalar en el proyecto
C:\Temp\agentejarvis\scripts\setup-project.ps1 -ProjectPath "F:\proyectos\mi-proyecto"

# 3. Limpiar
Remove-Item C:\Temp\agentejarvis -Recurse -Force
```

---

## 🔄 Mantener actualizado un proyecto existente

Si agregas nuevas skills a `agentejarvis` y quieres actualizarlas en un proyecto que ya tiene el agente:

```powershell
F:\proyectos\agentejarvis\scripts\setup-project.ps1 -ProjectPath "F:\proyectos\mi-proyecto" -UpdateSkills
```

---

## 📋 Skills disponibles

| Skill | Cuándo usarla |
|-------|--------------|
| `devops-mentor` | Guía de Git, commits semánticos, despliegue seguro |
| `ponytail` | Desarrollo minimalista (YAGNI): mínimo código, cero sobreingeniería |
| `ponytail-review` | Auditoría de código previa a commit: caza bloat, bugs y falta de tests |
| `ui-ux-master` | Enciclopedia de estilos: Glassmorphism, Neumorphism, Claymorphism, Spatial UI, etc. |
| `hallmark` | Diseño web de autor y escudo Anti-AI-Slop (reglas The Floor, maquetación de landings y auditoría visual) |
| `motion-designer` | Animaciones y física de micro-interacciones refinadas (<300ms, estilo Emil Kowalski) |
| `feature-memory` | Memoria funcional viva: bitácora de proyecto, ingeniería inversa, reutilización de opciones y manuales |
| `speckit-specify` | Tienes una idea, quieres convertirla en spec.md |
| `speckit-plan` | Tienes spec.md, quieres el plan de arquitectura |
| `speckit-tasks` | Tienes plan.md, quieres el desglose de tareas |
| `speckit-implement` | Tienes tasks.md, quieres ejecutar las tareas |
| `speckit-analyze` | Validar consistencia entre spec/plan/tasks |
| `speckit-clarify` | El spec tiene zonas grises, pedir aclaraciones |
| `speckit-checklist` | Generar checklist de calidad para un feature |
| `speckit-converge` | Detectar si hay tareas del plan aún no construidas |
| `speckit-constitution` | Crear/actualizar la constitución del proyecto |
| `speckit-taskstoissues` | Convertir tasks.md en GitHub Issues |
