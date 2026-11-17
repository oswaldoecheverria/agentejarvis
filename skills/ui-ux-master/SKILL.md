---
name: ui-ux-master
description: >
  Maestro de diseño visual y sistemas UI (inspirado en UI-UX Pro Max, Impeccable y Taste): implementación técnica y conceptual de estilos visuales modernos (Skeuomorphism, Neumorphism, Glassmorphism, Claymorphism, Minimalism, Maximalism, Neo-Brutalism, Liquid Glass y Spatial UI). Usar para "diseña esto con estilo X", "aplica neomorfismo", "glassmorphism", "claymorphism", "neo-brutalism", "spatial ui", o cuando se requiera diseño de interfaces con buen gusto e identidad visual.
argument-hint: "[skeuomorphism|neumorphism|glassmorphism|claymorphism|minimalism|maximalism|brutalism|spatial-ui]"
---

# UI/UX Master — Inteligencia de Diseño Visual

Esta skill dota al agente de criterio estético avanzado y fórmulas técnicas exactas (Tailwind CSS y CSS moderno) para construir interfaces con identidad, evitando el diseño genérico de IA ("AI slop").

---

## 🚫 Reglas Anti-AI-Slop (Criterio Impeccable & Taste)

1. **Cero degradados morados genéricos:** Prohibido usar `from-indigo-500 to-purple-600` por defecto en botones o fondos. Cada producto debe tener una paleta con personalidad propia.
2. **Evitar la "Carditis":** No empaquetes todo dentro de tarjetas idénticas con bordes grises suaves. Usa espacio negativo, divisores de línea sutiles, variaciones de fondo o tipografía para agrupar contenido.
3. **Jerarquía Tipográfica con Contraste:** No uses la misma tipografía con pequeñas diferencias de tamaño. Combina pesos marcados (ej. `font-extrabold tracking-tight` en títulos con `font-normal text-muted` en cuerpo).
4. **Espaciado Rítmico:** Espacios generosos y consistentes (`gap-4`, `gap-6`, `p-6`, `p-8`). Las interfaces apretadas lucen baratas.

---

## 🎨 Enciclopedia de Estilos Visuales (Fórmulas Tailwind)

### 1. Glassmorphism / Frosted Glass
- **Concepto:** Vidrio esmerilado translúcido con desenfoque de fondo y bisel reflectivo.
- **Tailwind Clave:**
  ```html
  <div class="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]">
  ```
- **Detalle de Élite:** Borde superior más luminoso para simular refracción cenital: `border-t-white/40 border-l-white/30`.

---

### 2. Liquid Glass & Spatial UI (Estilo VisionOS)
- **Concepto:** Vidrio suspendido con orbes lumínicos ambientales, sub-docks curvos y alta profundidad.
- **Fórmula de Tarjeta Flotante:**
  ```html
  <div class="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3),inset_0_1.5px_2px_rgba(255,255,255,0.4)] p-8">
    <!-- Orbe difuso confinado (sin desbordamiento) -->
    <div class="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="relative z-10">...</div>
  </div>
  ```
- **Sub-dock inferior curvo:**
  `rounded-[2rem] bg-black/15 border border-white/20 p-2.5 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]`

---

### 3. Neumorphism (Soft UI)
- **Concepto:** Elementos extruidos que nacen del mismo plano de fondo. El color del elemento y del fondo DEBE ser exactamente el mismo.
- **Fondo base recomendado:** Gris suave `#e0e5ec` o `#f0f3f8`.
- **Botón o Tarjeta Extruida (Saliente):**
  ```html
  <div class="bg-[#e0e5ec] rounded-2xl shadow-[-6px_-6px_14px_#ffffff,6px_6px_14px_#a3b1c6] p-6 border-none">
  ```
- **Elemento Presionado o Input (Hundido):**
  ```html
  <input class="bg-[#e0e5ec] rounded-xl shadow-[inset_-4px_-4px_8px_#ffffff,inset_4px_4px_8px_#a3b1c6] outline-none px-4 py-3" />
  ```

---

### 4. Claymorphism (3D Arcilla / Plástico Suave)
- **Concepto:** Elementos 3D redondeados, inflados y amigables. Utiliza sombras interiores dobles (una clara arriba y una oscura abajo) combinadas con una sombra exterior suave.
- **Fórmula Tailwind:**
  ```html
  <div class="bg-indigo-50 rounded-3xl p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08),inset_0_4px_6px_#ffffff,inset_0_-6px_8px_rgba(79,70,229,0.18)] border-2 border-indigo-100">
  ```
- **Uso ideal:** Aplicaciones educativas, gamificación, paneles juveniles o tarjetas destacadas.

---

### 5. Neo-Brutalism (Brutalismo Moderno)
- **Concepto:** Crudo, tipográfico, sin sutilezas. Bordes negros gruesos, sombras sólidas desplazadas (hard shadows sin desenfoque) y colores primarios vivos.
- **Fórmula Tailwind:**
  ```html
  <div class="bg-[#fffdf7] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all">
    <button class="bg-[#ffd900] text-black font-black border-2 border-black px-5 py-2.5 rounded-lg shadow-[3px_3px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
      Acción
    </button>
  </div>
  ```

---

### 6. Skeuomorphism (Realismo Táctil Moderno)
- **Concepto:** Evoca la materialidad física: biseles luminosos arriba, sombras de caída reales y texturas que invitan a ser tocadas.
- **Fórmula de Botón o Tarjeta:**
  ```html
  <button class="relative bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-xl border border-slate-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.15),0_2px_4px_-2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.15)] active:translate-y-[1px] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
    Confirmar
  </button>
  ```

---

### 7. Minimalism (Estilo Suizo / Funcional Puro)
- **Concepto:** Máxima reducción. Todo el peso recae en la proporción, el espacio en blanco y la tipografía.
- **Reglas:**
  - Cero sombras decorativas o bordes innecesarios.
  - Paleta monocromática estricta (negro, blanco y escalas de gris) con un único color de acento funcional.
  - Tipografía sans-serif limpia con seguimiento ajustado (`tracking-tight`).
  - Espaciados amplios: `py-12 px-8`.

---

### 8. Maximalism (Expresivo y Saturado)
- **Concepto:** Anti-aburrimiento. Superposición de capas, contrastes tipográficos radicales (mezcla de serif display gigante con monoespaciado), colores densos y texturas.
- **Reglas:**
  - Títulos monumentales (`text-5xl lg:text-7xl font-black uppercase`).
  - Paletas saturadas y complejas (ej. verde bosque + mostaza + frambuesa).
  - Uso de etiquetas flotantes, badges rotados (`-rotate-3`) y collages de información.

---

## 🛠️ Cómo aplicar esta Skill al recibir un requerimiento

Cuando el usuario pida diseñar o estilizar un componente:
1. **Identificar el estilo solicitado:** Si el usuario no especificó estilo, adoptar un enfoque sobrio pero refinado (Minimalismo elegante o Glassmorphism sutil).
2. **Aplicar la fórmula técnica:** Usar las clases exactas de la enciclopedia sin inventar clases CSS arbitrarias.
3. **Respetar YAGNI (Ponytail):** No crear archivos CSS externos gigantescos cuando Tailwind puede resolver la física óptica con clases de utilidad limpias y reutilizables.
