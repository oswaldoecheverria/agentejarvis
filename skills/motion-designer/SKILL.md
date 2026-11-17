---
name: motion-designer
description: >
  Especialista en animaciones, micro-interacciones y física de movimiento (inspirado en la filosofía de Emil Kowalski). Reglas estrictas de rendimiento, timing refinado (<300ms), curvas cubic-bezier naturales, anclaje de modales/popovers y física elástica sutil. Usar para "agrega animación", "pule las transiciones", "micro-interacciones estilo Emil Kowalski", "framer motion", o mejorar el dinamismo de la UI.
---

# Motion Designer — Filosofía de Movimiento y Micro-interacciones

Inspirado en los principios de diseño de interacción de **Emil Kowalski** (creador de *Sonner* y referente de interfaces fluidas). La animación en software no es decoración: es **orientación espacial y confirmación táctil**.

---

## ⏱️ Las Reglas de Oro del Timing y Curvas

### 1. El límite de los 300ms (Regla Infranqueable)
- **Ninguna interacción funcional debe durar más de 300ms.** Las animaciones largas hacen que la interfaz se sienta lenta y frustrante.
- **Micro-interacciones (botones, switches, hovers):** `100ms - 150ms`.
- **Elementos medianos (dropdowns, tooltips, toasts):** `150ms - 220ms`.
- **Superficies grandes (modales, drawers, cambio de vistas):** `200ms - 280ms`.

### 2. Prohibido el `linear` y el `ease-in` en entradas
- Los objetos en el mundo real no se mueven a velocidad constante.
- **Entradas (Aparición de elementos):** Deben entrar rápido y desacelerar suavemente:
  * Curva estándar de élite: `cubic-bezier(0.16, 1, 0.3, 1)` o Tailwind `ease-out`.
- **Salidas (Desaparición):** Deben salir aún más rápido (`100ms - 150ms`) con aceleración:
  * Curva: `cubic-bezier(0.7, 0, 0.84, 0)` o Tailwind `ease-in`.

---

## ⚡ Rendimiento Puro (60 / 120 FPS)

- **Solo animar dos propiedades:** `transform` y `opacity`.
  * Nunca animes `width`, `height`, `top`, `left`, `margin` o `padding`. Forzar el recálculo del layout destruye los fotogramas del navegador.
- Si necesitas simular un cambio de tamaño, escala (`scale`) o usa animaciones de contenedor con `clip-path` u `overflow-hidden`.
- **Aceleración por hardware:** Usar `will-change: transform` o clases como `transform-gpu` en Tailwind para elementos animados recurrentes.

---

## 🎯 Patrones Canónicos de Micro-Interacciones

### 1. Botón con Respuesta Háptica / Táctil
```html
<button class="transition-all duration-150 ease-out active:scale-[0.97] hover:brightness-105">
  Continuar
</button>
```

### 2. Popover / Menú Desplegable con Anclaje Espacial
El menú debe emerger **desde el botón que lo activó** (ajustar `origin-top` u `origin-top-right`):
```html
<div class="transform-gpu transition-all duration-180 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top scale-95 opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100">
  <!-- Contenido del menú -->
</div>
```

### 3. Modal / Dialog Suspendido (Flotabilidad Orgánica)
El fondo oscurecido entra en fade; la tarjeta entra con una escala muy sutil (de `0.96` a `1.0`) y un ligero desplazamiento vertical:
```html
<!-- Backdrop -->
<div class="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200"></div>

<!-- Card Modal -->
<div class="transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] scale-95 translate-y-2 opacity-0 data-[state=open]:scale-100 data-[state=open]:translate-y-0 data-[state=open]:opacity-100">
  ...
</div>
```

---

## ⚛️ Framer Motion: Configuración de Resortes (*Springs*)

Cuando el proyecto cuente con `framer-motion`, priorizar física de resortes con amortiguación en lugar de duraciones artificiales:

```jsx
// Resorte fluido estilo iOS/Apple (rápido y con micro-rebote imperceptible)
const fluidSpring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

// Resorte de confirmación (botones o toggles activos)
const snappySpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
};
```

---

## ♿ Accesibilidad Obligatoria
Respeta siempre la configuración de reducción de movimiento del sistema operativo:
```html
<div class="transition-all duration-200 motion-reduce:transition-none motion-reduce:transform-none">
  ...
</div>
```
