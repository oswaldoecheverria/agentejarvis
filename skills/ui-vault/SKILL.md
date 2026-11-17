---
name: ui-vault
description: >
  Bóveda privada local y curador de componentes y diseños web modernos (Tailwind, React, Next.js).
  Se activa automáticamente al: 1) Analizar una página web recomendada por el usuario para extraer y clasificar elementos gratuitos; 2) Detectar que el usuario está maquetando o diseñando UI (hero, slider, card, nav, footer, etc.) para ofrecer componentes listos de la bóveda local o encender el visor en http://localhost:3333; 3) Alertar cada 3 meses sobre fuentes pendientes de revisión para pedir aprobación de re-escaneo; 4) Cuando el usuario mencione "ui-vault", "bóveda de diseño", "mi galería local", "guarda este diseño" o "busca componentes gratuitos".
---

# UI Vault — Bóveda Privada de Diseño y Componentes Web

Esta skill gestiona la biblioteca local personal de componentes, efectos visuales y patrones de diseño moderno almacenados en `F:\proyectos\agentepersonal\vault\`.

---

## 🏛️ Los 4 Protocolos Operativos

### Protocolo 1: Ingesta Curada de Webs (A Demanda)
Cuando el usuario comparta una URL o diga: *"Analiza esta web y guarda los elementos gratuitos que encuentres"*:
1. **Inspección:** El agente analiza la página web buscando componentes y patrones de código abierto o gratuitos (heroes, sliders, bento cards, modales, etc.).
2. **Normalización de Código:** Extrae el código en React/TypeScript y clases Tailwind CSS nativas.
   - Elimina librerías externas o wrappers innecesarios (regla *Ponytail*).
   - Asegura compatibilidad con React 19 y Next.js.
3. **Persistencia en Disco Local:**
   - Guarda el archivo en `F:\proyectos\agentepersonal\vault\components/<categoria>/<nombre-componente>.tsx`.
   - Registra el componente en `F:\proyectos\agentepersonal\vault\catalog.json` con:
     * `id`, `title`, `category`, `tags`, `description`.
     * `sourceName` y `sourceUrl` (origen explícito para trazabilidad y atribución).
     * `dateAdded`, `componentFile`, `dependencies`.
   - Si es un componente interactivo nuevo, lo vincula en el registro del visor (`viewer/src/registry.tsx`).
4. **Registro de la Fuente:**
   - Actualiza o añade la web en `F:\proyectos\agentepersonal\vault\sources.json`:
     * `lastScanned`: Fecha actual (`AAAA-MM-DD`).
     * `nextReviewDate`: Fecha en +90 días exactos para el ciclo trimestral.
     * `componentsCount`: Total de elementos extraídos.

---

### Protocolo 2: Detección e Intercepción en Desarrollo
Cuando el usuario esté programando en cualquier proyecto (por ejemplo `erikasalud` u otros) y el agente detecte que se va a diseñar, maquetar o refactorizar un elemento visual (Hero, Slider, Carousel, Tarjetas Bento, Barra de Navegación, Modal o Efecto Glass):

El agente **debe intervenir proactivamente** con esta fórmula:
> *"Noto que estamos por diseñar una sección/componente de tipo [Categoría: ej. Hero / Slider]. Tenemos opciones listas en nuestra biblioteca privada (`ui-vault`). ¿Deseas que consulte los componentes guardados o encendemos el visor local en `http://localhost:3333` para que elijas visualmente?"*

Si el usuario acepta:
- Recomienda los componentes locales que coincidan con el caso de uso.
- Proporciona el enlace directo al visor local (`http://localhost:3333`) y el fragmento de código adaptado al proyecto actual.

---

### Protocolo 3: Auditoría Trimestral (Consentimiento Estricto)
**Regla Inquebrantable:** El agente **NUNCA** re-analiza o navega por su cuenta a internet sin permiso.

1. Al interactuar en `agentepersonal`, el agente verifica las fechas en `vault/sources.json`.
2. Si han transcurrido 90 días (3 meses) desde el `lastScanned` de alguna web registrada (o si `nextReviewDate <= hoy`):
3. El agente emite un aviso pasivo y respetuoso:
   > *"📅 **Recordatorio Trimestral de UI Vault:** Han pasado 3 meses desde que analizamos [Nombre de Web / URL]. ¿Deseas que la vuelva a revisar para ver si han publicado nuevos diseños gratuitos o componentes actualizados?"*
4. **Solo si el usuario responde afirmativamente**, se procede con la revisión. Si el usuario dice que no o lo ignora, no se realiza ninguna acción en la red.

---

### Protocolo 4: Gestión, Ahorro de Espacio y Eliminación
- El visor web local en `http://localhost:3333` cuenta con un botón **Eliminar (Trash)** con confirmación.
- Al pulsar eliminar, se borra el archivo `.tsx` físico del disco y se actualiza `catalog.json`, garantizando que la bóveda solo conserve lo que el usuario realmente ama y usa.
- El usuario también puede pedir por chat: *"Elimina el componente X de la bóveda"* y el agente removerá el archivo y su registro.

---

### Protocolo 5: Filtro Obligatorio de Diversidad Anatómica (Anti-Slop / Anti-Clones)
**Regla Inquebrantable:** Prohibido registrar o recrear componentes que compartan la misma estructura de wireframe (`rules/UI_VAULT_CRITERIA.md`).
- Antes de registrar un componente, verificar que su layout sea único. Si solo cambia el texto y el icono sobre una plantilla idéntica, debe rechazarse o rediseñarse con un layout alternativo (Split View, Ficha Médica 360, Segmented Ribbon, Input Integrado, etc.).
- Todo nuevo elemento anatómico debe generarse obligatoriamente en los **7 sistemas de diseño oficiales** de forma simétrica.

---

## 🚀 Comandos Rápidos del Visor Local

- Para iniciar la galería local:
  ```powershell
  F:\proyectos\agentepersonal\scripts\start-vault.ps1
  ```
- Para detener la galería:
  ```powershell
  F:\proyectos\agentepersonal\scripts\stop-vault.ps1
  ```
