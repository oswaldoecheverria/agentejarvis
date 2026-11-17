---
name: hallmark
description: >
  Especialista en diseño web de alta fidelidad, maquetación de autor y escudo Anti-AI-Slop (basado en Nutlope/Hallmark). Se activa automáticamente al: 1) Crear o maquetar nuevas páginas web, landing pages o vistas completas; 2) Auditar o evaluar interfaces existentes contra vicios comunes de IA (cuadrículas repetitivas, gradientes genéricos, textos de relleno falsos); 3) Rediseñar componentes o vistas manteniendo intacta la lógica y el cableado funcional; o 4) Cuando el usuario mencione "hallmark", "anti-slop", "diseño de autor", "audita el diseño", "rediseña esta página" o "haz una landing con personalidad".
argument-hint: "[<prompt> | audit <ruta> | redesign <ruta> | study <url/imagen>]"
---

# Hallmark — Diseño Web de Autor & Escudo Anti-AI-Slop

Inspirado en la filosofía y arquitectura de **Nutlope/Hallmark** (Hassan El Mghari). Su objetivo es garantizar que cualquier interfaz generada por el agente parezca creada por un diseñador humano de clase mundial, erradicando los patrones trillados y genéricos ("AI slop") en los que los modelos de lenguaje caen por defecto.

---

## ⚡ Criterios de Activación Automática

El agente debe activar y consultar esta skill de forma autónoma cuando:
- El usuario solicite **crear, diseñar o maquetar una nueva página, landing page o sección web** desde cero.
- Se detecte la necesidad de **auditar la calidad visual o maquetación** de una vista existente (`audit`).
- Se requiera **rediseñar la estética visual** de un componente o página sin alterar su funcionalidad, APIs o rutas (`redesign`).
- Se identifiquen síntomas de "AI slop" en el frontend (layouts genéricos de 3 tarjetas, botones violetas sin identidad, encabezados saturados de adornos artificiales).

---

## 🛡️ "The Floor" — Las 16 Reglas Duras Innegociables

Estas reglas son obligatorias en cualquier generación web maquetada con Hallmark:

1. **Variables y Tokens Obligatorios:** Todo color, fuente y sombra debe originarse en variables `:root` o tokens de Tailwind/CSS. Cero colores hexadecimales o tipografías mágicas dispersas en el marcado.
2. **Animaciones Sanas (Zero Layout Thrashing):** NUNCA usar `transition: all`. Prohibido animar `width`, `height`, `top`, `left`, `margin` o `padding`. Animar exclusivamente `transform` y `opacity` con aceleración de GPU (`transform-gpu`).
3. **Cero Cursivas Aisladas:** Nunca una sola palabra en cursiva o con color diferente dentro de un título principal.
4. **Scroll Horizontal Blindado:** Declarar `overflow-x: clip` (o `overflow-hidden` seguro) en el contenedor raíz y `body`. Nunca `100vw`.
5. **Grids Seguros:** En CSS Grid con imágenes o tarjetas, usar siempre pistas `minmax(0, 1fr)`. Encabezados con `overflow-wrap: break-word; min-width: 0`.
6. **Foco y Accesibilidad Inmediata:** Todo elemento interactivo (botones, inputs, enlaces) debe tener `:focus-visible` definido y visible instantáneamente.
7. **Reducción de Movimiento:** Toda animación debe respetar `@media (prefers-reduced-motion: reduce)` y el contenido crítico debe ser legible sin depender de JavaScript.
8. **Cero Datos Falsos o "Inventos":** NUNCA inventar métricas ficticias (`"10,000+ usuarios felices"`), testimonios con nombres inventados, logowalls de marcas aleatorias o contadores vacíos. Mostrar solo datos reales o estados de slot limpios.
9. **Cero Eyebrows y Subtítulos en Mayúsculas Rastreadas:** Eliminar etiquetas forzadas sobre los títulos (`WELCOME TO OUR APP` con tracking exagerado). Los subtítulos usan tipografía de cuerpo, tamaño natural y redacción honesta.
10. **Sin Puntos Medios ni Flechas Pegadas:** Evitar cadenas con `·` decorativos indiscriminados o flechas adhesivas (`Leer más ->`). Usar composición visual limpia.
11. **Cero Gradientes Violeta/Azul y Carditis:** Prohibido el gradiente cliché `from-indigo-500 to-purple-600`. Prohibido anidar "tarjetas dentro de tarjetas" (`card inside a card`) o usar emojis como iconos.
12. **El Hero Cabe en el Viewport:** A 1280x800, el titular del Hero, una oración explicativa y las acciones primarias deben ser visibles **sin hacer scroll**.
13. **Economía de Palabras (~80 palabras por pantalla):** El titular del hero tiene ≤7 palabras; la descripción ≤12 palabras. No abrumar con párrafos densos.
14. **Contenedor Acotado y Centrado:** En pantallas ultrawide (1920px+), el ancho máximo del contenedor se detiene (`max-w-7xl` o similar) y crecen los márgenes exteriores, preservando la proporción visual.
15. **Estilos de Botón Consistentes:** Un único estilo y peso visual para el botón de acción principal (CTA) en toda la página.
16. **Validación de Escala y Responsividad:** Probar mental o programáticamente en 3 resoluciones clave: Móvil (390px), Laptop estándar (1280px) y Monitor amplio (1920px).

---

## 🧭 Flujo de Trabajo Canónico (Phased Building)

Cuando se diseña una página nueva, el agente sigue este orden riguroso:

```
[ 0. Pre-Flight ] ──► Analizar identidad de marca, paleta, fuentes y stack existente.
         │
         ▼
[ 1. Definir Tono ] ──► Seleccionar materialidad, audiencia, objetivo de conversión y tono visual.
         │
         ▼
[ 2. Hero Primero ] ──► Maquetar ÚNICAMENTE el Navbar y el Hero.
         │              · Validar titular conciso, CTA claro y proporción de viewport.
         ▼
[ 3. Secciones ] ────► Construir 5 a 8 secciones con contenido específico de dominio:
         │              · Alternar pesos visuales (nunca dos bloques idénticos seguidos).
         │              · Usar espacio negativo en lugar de bordes/tarjetas repetitivas.
         ▼
[ 4. Sweep / QA ] ───► Pasar lista de verificación:
                        · ¿Hay texto falso? Eliminarlo.
                        · ¿Hay transition:all? Corregirlo a transform/opacity.
                        · ¿Hay overflow horizontal? Blindarlo con minmax(0, 1fr).
```

---

## 🎯 Modos de Operación

### 1. Modo Creación (`design <prompt>`)
Se activa al crear vistas completas. Define un concepto rector por pantalla, maqueta el Hero de alto impacto primero y despliega las secciones de apoyo con ritmo visual variado.

### 2. Modo Auditoría (`audit <ruta>`)
Se activa al pedir revisión visual de una página existente.
- Revisa el cumplimiento de las 16 reglas de *The Floor*.
- Detecta "carditis" (exceso de tarjetas grises con bordes).
- Evalúa el contraste cromático, jerarquía tipográfica y accesibilidad.
- Emite un informe estructurado con hallazgos críticos y soluciones en código.

### 3. Modo Rediseño (`redesign <ruta>`)
Se activa al querer renovar la apariencia de una vista existente.
- **Regla sagrada:** Respeta el 100% de la lógica de negocio, llamadas a endpoints (`fetch`/`client`), props, formularios y rutas de navegación.
- Sustituye el layout genérico por una composición asimétrica con ritmo, tokens centralizados y micro-interacciones de alta gama.

---

## 🤝 Sinergia con el Ecosistema del Agente

Hallmark no compite con las otras habilidades de tu caja de herramientas, se ensambla con ellas:

| Skill Hermana | Cómo colaboran |
| :--- | :--- |
| **`ui-ux-master`** | Provee los estilos visuales específicos (como el *Efecto Glass* de ErikaSalud, Neumorfismo o Neo-Brutalismo), mientras que **Hallmark** vigila la composición general, evita el AI-slop y estructura el Hero. |
| **`motion-designer`** | Aplica la física de Emil Kowalski (<300ms, curvas elásticas naturales), cumpliendo a la perfección la regla de Hallmark de jamás usar `transition: all`. |
| **`ponytail`** | Garantiza la economía estricta de código, dependencias y CSS, complementando la regla de Hallmark de economía de palabras y componentes esenciales. |
| **`speckit-*`** | Modela los requerimientos funcionales (`spec.md`), que Hallmark traduce a interfaces humanas de alta conversión. |
