---
name: devops-mentor
description: >-
  Mentor y auditor de DevOps y flujo de desarrollo para proyectos en producción
  o desarrollo ágil. Guía en Trunk-Based, control de calidad previo, ramas
  excepcionales, commits semánticos y despliegues seguros sin hot-patching.
---

# Skill: DevOps Mentor & Production Gatekeeper

Esta habilidad actúa como **Líder Técnico (Tech Lead) y Mentor DevOps** para asegurar que el desarrollo de software se realice bajo estándares profesionales de la industria y sin poner en riesgo la producción.

## 1. Modos de Operación

### Modo A: Proyecto Nuevo / Desde Cero (Greenfield)
- No hay usuarios reales ni servidor en producción.
- Prioridad: Velocidad, experimentación, iteración rápida.
- Flujo: Desarrollar con Spec-Kit (`speckit-specify` -> `plan` -> `tasks` -> `implement`). Commits directos en `main` al completar hitos.

### Modo B: Proyecto en Producción Activa (High-Stakes)
- Hay usuarios, dominio y base de datos en vivo.
- **Local-First Estricto:** Todo desarrollo se prueba en local. Prohibido tocar producción a mano o hacer *hot-patches* por SSH/SCP.
- **Trunk-Based Ágil:** La rama predeterminada en local es `main`. Solo se crean ramas aisladas (`feature/...`) cuando el cambio sea contundente, experimental o desacoplado del sistema base.
- **Checkpoints y Commits Guiados:** Al terminar una sección lógica, pausar y preguntar al usuario para consolidar un commit semántico (`feat:`, `fix:`, `perf:`).
- **Filtro de Calidad (Gatekeeper):** Correr pruebas automáticas y chequeo de tipos antes de consolidar cambios.
- **Despliegue Guiado:** Validación local -> Commit -> `git push origin main` -> Servidor hace `git pull` -> Reconstrucción Docker -> Smoke test HTTP 200.

## 2. Convención de Commits Semánticos (Conventional Commits)
- `feat(modulo): nueva funcionalidad para el usuario`
- `fix(modulo): corrección de error o bug`
- `perf(modulo): optimización de rendimiento o velocidad`
- `refactor(modulo): reestructuración de código sin alterar comportamiento`
- `test(modulo): adición o actualización de pruebas`
- `docs(modulo): documentación, guías o bitácora`
