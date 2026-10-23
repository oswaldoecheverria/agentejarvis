# 🤖 Agente Personal (Personal AI DevKit)

Repositorio centralizado para tus habilidades (*skills*), directrices de ingeniería y flujos de desarrollo asistido por IA (Antigravity).

---

## 📁 Estructura

* `skills/`: Catálogo modular de habilidades especializadas:
  * `devops-mentor/`: Mentor de Git (Trunk-Based), commits semánticos, filtros de calidad y despliegues seguros.
  * `speckit-*`: Metodología Spec-Kit (`specify`, `plan`, `tasks`, `implement`, `analyze`, `clarify`).
* `rules/`: Plantillas base de interacción y directrices de proyectos (`AGENTS.template.md`).
* `scripts/`: Utilidades de automatización (`setup-project.ps1`).

---

## 🚀 Cómo vincular el agente a un nuevo proyecto

Cuando crees una nueva carpeta de proyecto en `F:\proyectos\<nombre>`, puedes enlazar tu agente personal ejecutando en PowerShell:

```powershell
F:\proyectos\agentepersonal\scripts\setup-project.ps1 -ProjectPath "F:\proyectos\nombre-de-tu-proyecto"
```

Esto hará lo siguiente:
1. Crea un enlace en tiempo real (*Junction*) a tus `skills`. Cualquier mejora que hagas aquí se reflejará al instante en tu proyecto.
2. Genera un archivo `AGENTS.md` personalizado con las reglas base de desarrollo profesional.

---

## 🌐 Cómo respaldar en GitHub

Para subir este repositorio a tu cuenta de GitHub:

1. Crea un nuevo repositorio **privado** en GitHub llamado `agentepersonal` (sin README ni .gitignore inicial).
2. En tu terminal ejecuta:
   ```powershell
   cd F:\proyectos\agentepersonal
   git remote add origin https://github.com/<tu-usuario>/agentepersonal.git
   git push -u origin main
   ```
3. Cada vez que agregues o afines una habilidad:
   ```powershell
   git add .
   git commit -m "feat(skills): nueva habilidad agregada"
   git push
   ```
