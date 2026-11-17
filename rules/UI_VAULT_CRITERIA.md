# Regla de Criterio de Diseño y Diversidad Anatómica (Anti-Slop) — UI Vault

Este documento establece el **criterio obligatorio** que el agente debe aplicar antes de crear, extraer, recrear o registrar cualquier componente en la biblioteca `UI Vault`.

---

## 1. La Ley de Singularidad Anatómica (Layout Diversity)

> **Un componente NO se define por su texto, su título o su icono.**  
> **Un componente se define por su ESTRUCTURA DE WIREFRAME (su anatomía de layout e interacción).**

### 🚫 Prohibido: El Patrón "Plantilla Repetitiva" (AI Slop)
Está terminantemente prohibido generar múltiples componentes que compartan el mismo esqueleto visual:
`[Badge superior] ➔ [Título y subtítulo] ➔ [Caja hundida central con icono + 2 líneas] ➔ [Botón ancho inferior]`

Cambiar solo el texto y el icono en una tarjeta idéntica **se considera duplicación inaceptable**.

---

## 2. Taxonomía de Layouts Obligatorios por Tipo de Elemento

Cada componente registrado debe tener una distribución espacial acorde a su función:

1. **Ficha Médica / Expediente 360 (`patient-record`):**
   - Debe ser un expediente de salud real: avatar/foto, badge de grupo sanguíneo (ej: `O+`), chip rojo de alerta de alergias (`Penicilina`), cuadrícula de signos vitales (presión arterial, SpO2, pulso) y diagnóstico CIE-10 codificado.
2. **Newsletter / Captura de Leads (`newsletter`):**
   - Debe tener un campo de entrada interactivo `<input type="email" placeholder="..." />`, botón de envío integrado (*inline* o anclado), y micro-garantía de privacidad LOPDP.
3. **Tarjeta de Métrica / Telemetría (`stat`):**
   - Debe mostrar visualización cuantitativa real: sparkline gráfico, barra de progreso dividida, comparativa porcentual (+18%) y números monumentales.
4. **Cinta de Filtros en Píldora (`pill-ribbon`):**
   - Segmented control horizontal con micro-badges numéricos de conteo y píldoras redondeadas activas.
5. **Menú Lateral / Panel de Navegación (`medical-sidebar`):**
   - Columna vertical de accesos con agrupaciones temáticas, iconos clínicos, indicador de sesión y badges de estado.
6. **Galería & Álbum Fotográfico (`clinical-album`):**
   - Composición visual fotográfica con aspect-ratio clínico, hover-zoom, tags de especialidad y contador de capturas.
7. **Buscador Inteligente CIE-10 (`cie10-search`):**
   - Campo de búsqueda reactivo con icono de lupa, atajo de teclado (`⌘K`), y dropdown flotante de resultados sugeridos con códigos de la OMS.
8. **Plan Médico Comparativo (`medical-plan`):**
   - Tarjeta comercial con desglose de modalidad (domicilio/consultorio), precio monetario estructurado y checklist de beneficios con checks médicos.

---

## 3. Protocolo de Verificación Antes de Agregar (Gating)

Antes de registrar cualquier componente en `UI Vault`:
1. **Inspección de Wireframe:** Comparar la jerarquía visual contra los elementos ya registrados en su categoría.
2. **Detección de Colisión:** Si el nuevo componente tiene la misma estructura que uno existente, **se rechaza el clon** y se exige diseñar un layout alternativo (ej: vista dividida *split*, disposición horizontal, tarjeta compacta o acordeón).
3. **Simetría Polimórfica 1:1:** Una vez validada la singularidad del layout, se adapta a los **7 sistemas de diseño oficiales** (`neo-brutalism`, `glassmorphism`, `liquid-glass`, `neumorphism`, `claymorphism`, `minimalism`, `cyberpunk`).
