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
- **Filosofía Anti-Sobreingeniería (Ponytail & YAGNI - Always-On)**:
  - *El mejor código es el que nunca se escribe*: resolver cada requerimiento con el menor código nuevo completo posible.
  - **La Escalera de Decisión** antes de escribir código:
    1. *¿Es necesario? (YAGNI)*: Omitir opciones, wrappers, capas o configuraciones no solicitadas expresamente.
    2. *Reutilizar*: Usar componentes, helpers o servicios ya existentes en el repositorio antes de crear uno nuevo.
    3. *Plataforma / Biblioteca Estándar*: Usar utilidades nativas del lenguaje o navegador antes que paquetes externos.
    4. *Dependencias existentes*: Usar lo ya instalado en el proyecto; prohibido instalar nuevas dependencias (npm/pip/uv) por unas pocas líneas de código.
    5. *Mínimo cambio completo*: El diff más corto, legible y seguro siempre gana.
  - *No negociables*: Seguridad, validación en fronteras de datos, prevención de pérdida de datos y accesibilidad NUNCA se omiten.
  - *Transparencia*: Concluir respuestas técnicas indicando brevemente en 1 o 2 líneas qué se omitió o asumió y cualquier riesgo a considerar.
- **Estándar de Diseño y Calidad Visual (Taste & Anti-AI-Slop - Always-On)**:
  - *Prohibido el diseño genérico de IA*: Cero degradados morados cliché (`from-indigo-500 to-purple-600`) y evitar la "carditis" (no meter todo en tarjetas idénticas con bordes grises).
  - *Jerarquía y Tipografía*: Contraste visual marcado entre títulos y contenido, con espaciado rítmico y holgado.
  - *Micro-interacciones funcionales*: Duraciones bajo 300ms con curvas de desaceleración naturales (`cubic-bezier(0.16, 1, 0.3, 1)`) y respuesta táctil sutil (`active:scale-[0.98]`).
- **Arquitectura Canónica y Estructura de Proyecto (Obligatoria)**:
  - Todo proyecto full-stack debe construirse bajo la siguiente estructura modular:
    ```text
    {{PROJECT_NAME}}/
    ├── BITACORA_FUNCIONAL.md         # Inventario vivo de funcionalidades, roles y flujos de usuario
    ├── backend/                      # Monolito Modular (Django 5.2 / Django Ninja / uv)
    │   ├── config/                   # settings/ (base.py, local.py, production.py), urls.py, api.py
    │   ├── core/                     # Utilidades transversales (imágenes, auth, RBAC, health, schemas)
    │   └── apps/
    │       └── web/ o sistema/       # Módulos por dominio de negocio (models, api, admin, schemas, tests)
    ├── frontend/                     # Next.js App Router (Turbopack, Tailwind, pnpm)
    │   └── src/
    │       ├── components/           # Componentes UI compartidos (Navbar, Footer, alertas, UI base)
    │       ├── lib/api/              # Cliente HTTP fail-safe y contratos de tipos tipados
    │       └── app/
    │           ├── (web)/            # Route Group Público: Layouts de clientes/pacientes y SEO
    │           └── (sistema)/        # Route Group Privado: Layouts de administración, dashboard y seguridad
    ├── docker-compose.yml            # Base de datos y servicios locales
    └── docker-compose.prod.yml       # Orquestación de producción para VPS
    ```
  - **¿Por qué esta estructura? (Fundamento Técnico)**:
    1. *Backend Monolito Modular:* Evita la complejidad y sobrecosto de microservicios, pero mantiene dominios estrictamente desacoplados. Cada funcionalidad (citas, facturación, blog) vive en su propia app con modelos y pruebas aisladas, facilitando el mantenimiento y respetando YAGNI.
    2. *Frontend Route Groups `(web)` vs `(sistema)`:* Permite tener layouts, temas y árboles de componentes 100% independientes para la web pública y para el panel privado sin alterar la URL visible en el navegador. Garantiza máximo rendimiento y SEO en lo público, y aislamiento de autenticación en lo privado.
    3. *Despliegue Limpio y Local-First:* Arquitectura simétrica entre local y producción mediada por Docker Compose, garantizando que lo que compila y prueba en local funcione de forma idéntica en el VPS.
