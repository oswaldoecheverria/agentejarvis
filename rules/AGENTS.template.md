# Reglas de Proyecto - {{PROJECT_NAME}}

- **Idioma obligatorio**: Comunicarse y responder SIEMPRE en español en todas las respuestas, análisis, mensajes y explicaciones.
- **Autonomía**: Proceder con las acciones y comandos de forma directa y resolutiva para agilizar las tareas del usuario.
- **Entorno de Desarrollo Local-First**:
  - Todo desarrollo, refactorización y prueba se realiza primero en local.
  - Prohibido hacer modificaciones directas (hot-patching) en servidores de producción.
- **Estrategia de Ramas (Trunk-Based Ágil)**:
  - Rama predeterminada en local: `main`.
  - Crear ramas aisladas (`feature/<nombre>` o `exp/<nombre>`) únicamente cuando se trate de cambios estructurales disruptivos o a petición del usuario.
- **Checkpoints y Commits Semánticos**:
  - Al completar una sección lógica o componente, pausar y proponer commit bajo el estándar Conventional Commits (`feat:`, `fix:`, `refactor:`, `perf:`, `test:`).
- **Filtro de Calidad (Gatekeeper)**:
  - Ejecutar pruebas automáticas y chequeo de tipos antes de consolidar commits o pasar a producción.
