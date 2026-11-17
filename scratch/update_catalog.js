const fs = require('fs');
const path = require('path');

const catalogPath = 'F:/proyectos/agentepersonal/vault/catalog.json';
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

const newItems = [
  // Glassmorphism (4)
  {
    id: "glass-notification-center",
    title: "Glassmorphic Notification Center",
    category: "card",
    style: "glassmorphism",
    tags: ["glassmorphism", "notification", "acrylic", "badge", "frosted"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Centro de notificaciones acrílico frosted con refracción multicapa, badge dinámico y filtros.",
    componentFile: "styles/glass-notification-center.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "glass-weather-widget",
    title: "Glassmorphic Weather Island",
    category: "card",
    style: "glassmorphism",
    tags: ["glassmorphism", "weather", "frosted", "widget", "gradient"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Widget meteorológico de vidrio esmerilado con temperatura en vivo, orbes reflectantes y pronóstico por horas.",
    componentFile: "styles/glass-weather-widget.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "glass-crypto-portfolio",
    title: "Liquid Glass Portfolio Card",
    category: "card",
    style: "glassmorphism",
    tags: ["glassmorphism", "crypto", "chart", "wallet", "liquid-glass"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Panel de activos con refracción líquida, gráfico SVG traslúcido y bisel cenital reflectante.",
    componentFile: "styles/glass-crypto-portfolio.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "glass-login-modal",
    title: "Emerald Specular Glass Gateway",
    category: "card",
    style: "glassmorphism",
    tags: ["glassmorphism", "auth", "modal", "security", "specular"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Modal de autenticación flotante en vidrio esmeralda satinado con bisel de refracción perimetral y orbes confinados.",
    componentFile: "styles/glass-login-modal.tsx",
    dependencies: ["lucide-react"]
  },

  // Neo-Brutalism (6)
  {
    id: "neo-brutalist-testimonial",
    title: "Neo-Brutalist Customer Proof",
    category: "card",
    style: "neo-brutalism",
    tags: ["neo-brutalism", "testimonial", "sticker", "hard-shadow", "bold"],
    sourceName: "Gumroad UI",
    sourceUrl: "https://gumroad.com",
    dateAdded: "2026-11-06",
    description: "Tarjeta de testimonio con bordes gruesos de 3px, calcomanía rotada, estrellas sólidas y sombra dura 6px.",
    componentFile: "styles/neo-brutalist-testimonial.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neo-brutalist-faq-accordion",
    title: "Neo-Brutalist Expandable FAQ",
    category: "accordion",
    style: "neo-brutalism",
    tags: ["neo-brutalism", "faq", "accordion", "yellow", "high-contrast"],
    sourceName: "Gumroad UI",
    sourceUrl: "https://gumroad.com",
    dateAdded: "2026-11-06",
    description: "Acordeón de preguntas frecuentes de alto contraste amarillo y negro con toggle de botón geométrico.",
    componentFile: "styles/neo-brutalist-faq-accordion.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neo-brutalist-search-filter",
    title: "Neo-Brutalist Search & Tag Bar",
    category: "navigation",
    style: "neo-brutalism",
    tags: ["neo-brutalism", "search", "filter", "tags", "cyan"],
    sourceName: "Gumroad UI",
    sourceUrl: "https://gumroad.com",
    dateAdded: "2026-11-06",
    description: "Buscador y barra de etiquetas con tipografía grotesca, inputs gruesos y feedback táctil.",
    componentFile: "styles/neo-brutalist-search-filter.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neo-brutalist-badge-stack",
    title: "Neo-Brutalist Sticker Badges",
    category: "card",
    style: "neo-brutalism",
    tags: ["neo-brutalism", "badge", "sticker", "tags", "retro"],
    sourceName: "Gumroad UI",
    sourceUrl: "https://gumroad.com",
    dateAdded: "2026-11-06",
    description: "Colección de pegatinas y etiquetas de impacto con sombras duras, inclinaciones ligeras y colores pop.",
    componentFile: "styles/neo-brutalist-badge-stack.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neo-brutalist-newsletter",
    title: "Neo-Brutalist Subscription Block",
    category: "card",
    style: "neo-brutalism",
    tags: ["neo-brutalism", "newsletter", "form", "cta", "punchy"],
    sourceName: "Gumroad UI",
    sourceUrl: "https://gumroad.com",
    dateAdded: "2026-11-06",
    description: "Caja de suscripción de alto impacto en fondo amarillo canario con botón de acción activo a 1px.",
    componentFile: "styles/neo-brutalist-newsletter.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neo-brutalist-stats-grid",
    title: "Neo-Brutalist 4-Stat Grid",
    category: "card",
    style: "neo-brutalism",
    tags: ["neo-brutalism", "stats", "grid", "metrics", "colorful"],
    sourceName: "Gumroad UI",
    sourceUrl: "https://gumroad.com",
    dateAdded: "2026-11-06",
    description: "Cuadrícula de 4 indicadores clave con bordes negros rígidos y fondos pastel saturados.",
    componentFile: "styles/neo-brutalist-stats-grid.tsx",
    dependencies: ["lucide-react"]
  },

  // Neumorphism (8)
  {
    id: "neumorphic-smart-switch",
    title: "Neumorphic Smart Home Switch",
    category: "card",
    style: "neumorphism",
    tags: ["neumorphism", "switch", "toggle", "soft-ui", "slider"],
    sourceName: "Neumorphism.io",
    sourceUrl: "https://neumorphism.io",
    dateAdded: "2026-11-06",
    description: "Tarjeta domótica con interruptores convexos y cóncavos táctiles y barra de brillo hundida.",
    componentFile: "styles/neumorphic-smart-switch.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neumorphic-stat-tile",
    title: "Neumorphic Server Metric Tile",
    category: "card",
    style: "neumorphism",
    tags: ["neumorphism", "metrics", "cpu", "soft-ui", "tactile"],
    sourceName: "Neumorphism.io",
    sourceUrl: "https://neumorphism.io",
    dateAdded: "2026-11-06",
    description: "Tarjeta de rendimiento con icono extruido en doble sombra e indicador de uso hundido en bajo relieve.",
    componentFile: "styles/neumorphic-stat-tile.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neumorphic-calculator",
    title: "Neumorphic Tactile Keypad",
    category: "card",
    style: "neumorphism",
    tags: ["neumorphism", "calculator", "keypad", "buttons", "display"],
    sourceName: "Neumorphism.io",
    sourceUrl: "https://neumorphism.io",
    dateAdded: "2026-11-06",
    description: "Teclado numérico con pantalla LCD grabada hacia adentro y botones convexos que se hunden al pulsar.",
    componentFile: "styles/neumorphic-calculator.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neumorphic-clock",
    title: "Neumorphic Inset Analog Clock",
    category: "card",
    style: "neumorphism",
    tags: ["neumorphism", "clock", "analog", "inset", "time"],
    sourceName: "Neumorphism.io",
    sourceUrl: "https://neumorphism.io",
    dateAdded: "2026-11-06",
    description: "Esfera de reloj tallada en bajo relieve con manecillas de precisión y píldora digital extruida.",
    componentFile: "styles/neumorphic-clock.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neumorphic-profile-card",
    title: "Neumorphic Executive Profile",
    category: "card",
    style: "neumorphism",
    tags: ["neumorphism", "profile", "avatar", "social", "soft-ui"],
    sourceName: "Neumorphism.io",
    sourceUrl: "https://neumorphism.io",
    dateAdded: "2026-11-06",
    description: "Tarjeta de perfil con avatar extruido, zócalo de estadísticas hundido y botones táctiles interactivos.",
    componentFile: "styles/neumorphic-profile-card.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neumorphic-tab-bar",
    title: "Neumorphic Segmented Tab Bar",
    category: "navigation",
    style: "neumorphism",
    tags: ["neumorphism", "tabs", "navbar", "segmented", "soft-ui"],
    sourceName: "Neumorphism.io",
    sourceUrl: "https://neumorphism.io",
    dateAdded: "2026-11-06",
    description: "Barra de navegación horizontal con pestañas de relieve activo y transiciones de sombra natural.",
    componentFile: "styles/neumorphic-tab-bar.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neumorphic-color-picker",
    title: "Neumorphic Tone Selector",
    category: "card",
    style: "neumorphism",
    tags: ["neumorphism", "color-picker", "palette", "swatch", "soft-ui"],
    sourceName: "Neumorphism.io",
    sourceUrl: "https://neumorphism.io",
    dateAdded: "2026-11-06",
    description: "Muestrario de colores táctil con botones circulares que se hunden en el material al seleccionarlos.",
    componentFile: "styles/neumorphic-color-picker.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "neumorphic-task-item",
    title: "Neumorphic Checklist Capsule",
    category: "card",
    style: "neumorphism",
    tags: ["neumorphism", "todo", "checklist", "tasks", "soft-ui"],
    sourceName: "Neumorphism.io",
    sourceUrl: "https://neumorphism.io",
    dateAdded: "2026-11-06",
    description: "Lista de pendientes táctil con casillas de verificación que cambian de relieve al completarse.",
    componentFile: "styles/neumorphic-task-item.tsx",
    dependencies: ["lucide-react"]
  },

  // Claymorphism (8)
  {
    id: "claymorphic-avatar-card",
    title: "Claymorphic 3D Puffy Profile",
    category: "card",
    style: "claymorphism",
    tags: ["claymorphism", "avatar", "3d", "puffy", "pastel"],
    sourceName: "Claymorphism Design",
    sourceUrl: "https://uxdesign.cc",
    dateAdded: "2026-11-06",
    description: "Tarjeta inflada tridimensional con bordes ultra curvos de 3rem, reflejos interiores y sombras pasteles suaves.",
    componentFile: "styles/claymorphic-avatar-card.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "claymorphic-action-dock",
    title: "Claymorphic Floating App Dock",
    category: "navigation",
    style: "claymorphism",
    tags: ["claymorphism", "dock", "3d", "icons", "navigation"],
    sourceName: "Claymorphism Design",
    sourceUrl: "https://uxdesign.cc",
    dateAdded: "2026-11-06",
    description: "Dock de aplicaciones suspendido con iconos inflados en 3D que flotan al activarse.",
    componentFile: "styles/claymorphic-action-dock.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "claymorphic-counter-badge",
    title: "Claymorphic 3D Stepper Pill",
    category: "card",
    style: "claymorphism",
    tags: ["claymorphism", "stepper", "counter", "puffy", "ecommerce"],
    sourceName: "Claymorphism Design",
    sourceUrl: "https://uxdesign.cc",
    dateAdded: "2026-11-06",
    description: "Contador inflado de unidades con botones redondeados en miniatura y sombras plásticas.",
    componentFile: "styles/claymorphic-counter-badge.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "claymorphic-weather-island",
    title: "Claymorphic 3D Weather Card",
    category: "card",
    style: "claymorphism",
    tags: ["claymorphism", "weather", "3d-cloud", "puffy", "island"],
    sourceName: "Claymorphism Design",
    sourceUrl: "https://uxdesign.cc",
    dateAdded: "2026-11-06",
    description: "Isla meteorológica en arcilla digital con sol y nube inflada en 3D con doble resplandor.",
    componentFile: "styles/claymorphic-weather-island.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "claymorphic-music-pill",
    title: "Claymorphic 3D Audio Player",
    category: "card",
    style: "claymorphism",
    tags: ["claymorphism", "audio", "music", "3d", "player"],
    sourceName: "Claymorphism Design",
    sourceUrl: "https://uxdesign.cc",
    dateAdded: "2026-11-06",
    description: "Reproductor musical en píldora inflada 3D con botón de play de gelatina y esquinas de 3rem.",
    componentFile: "styles/claymorphic-music-pill.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "claymorphic-toggle-pill",
    title: "Claymorphic Squishy Toggle",
    category: "card",
    style: "claymorphism",
    tags: ["claymorphism", "toggle", "switch", "squishy", "3d"],
    sourceName: "Claymorphism Design",
    sourceUrl: "https://uxdesign.cc",
    dateAdded: "2026-11-06",
    description: "Interruptor táctil tipo cápsula con botón deslizante inflado y gradiente esmeralda.",
    componentFile: "styles/claymorphic-toggle-pill.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "claymorphic-calendar-widget",
    title: "Claymorphic 3D Day Selector",
    category: "card",
    style: "claymorphism",
    tags: ["claymorphism", "calendar", "date", "3d", "puffy"],
    sourceName: "Claymorphism Design",
    sourceUrl: "https://uxdesign.cc",
    dateAdded: "2026-11-06",
    description: "Calendario con días en pastillas infladas y fecha activa con relieve brillante.",
    componentFile: "styles/claymorphic-calendar-widget.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "claymorphic-review-bubble",
    title: "Claymorphic 3D Speech Bubble",
    category: "card",
    style: "claymorphism",
    tags: ["claymorphism", "review", "bubble", "testimonial", "3d"],
    sourceName: "Claymorphism Design",
    sourceUrl: "https://uxdesign.cc",
    dateAdded: "2026-11-06",
    description: "Burbuja de testimonio inflada con avatar tridimensional y botón de utilidad interactivo.",
    componentFile: "styles/claymorphic-review-bubble.tsx",
    dependencies: ["lucide-react"]
  },

  // Minimalism (5)
  {
    id: "minimalist-editorial-quote",
    title: "Swiss Typographic Pull-Quote",
    category: "card",
    style: "minimalism",
    tags: ["minimalism", "swiss", "typography", "quote", "editorial"],
    sourceName: "International Typographic Style",
    sourceUrl: "https://designhistory.org",
    dateAdded: "2026-11-06",
    description: "Cita editorial basada en la escuela suiza con filetes de 1px, numeración monospaciada y máximo contraste.",
    componentFile: "styles/minimalist-editorial-quote.tsx",
    dependencies: []
  },
  {
    id: "minimalist-pricing-table",
    title: "Bauhaus Monospaced Pricing Grid",
    category: "card",
    style: "minimalism",
    tags: ["minimalism", "pricing", "monochrome", "grid", "swiss"],
    sourceName: "International Typographic Style",
    sourceUrl: "https://designhistory.org",
    dateAdded: "2026-11-06",
    description: "Tabla de precios monocromática en cuadrícula rigurosa, tipografía monospace y cero decoración superflua.",
    componentFile: "styles/minimalist-pricing-table.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "minimalist-split-nav",
    title: "Atelier Swiss Split Header",
    category: "navigation",
    style: "minimalism",
    tags: ["minimalism", "navbar", "header", "swiss", "clean"],
    sourceName: "International Typographic Style",
    sourceUrl: "https://designhistory.org",
    dateAdded: "2026-11-06",
    description: "Cabecera de navegación minimalista con coordenadas, indicador de versión y enlaces limpios.",
    componentFile: "styles/minimalist-split-nav.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "minimalist-metric-row",
    title: "Monochrome Telemetry Rows",
    category: "card",
    style: "minimalism",
    tags: ["minimalism", "metrics", "table", "rows", "monochrome"],
    sourceName: "International Typographic Style",
    sourceUrl: "https://designhistory.org",
    dateAdded: "2026-11-06",
    description: "Filas de métricas técnicas con códigos de índice, valores monospaciados y división por filetes de 1px.",
    componentFile: "styles/minimalist-metric-row.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "minimalist-article-card",
    title: "Editorial Essay Preview Card",
    category: "card",
    style: "minimalism",
    tags: ["minimalism", "article", "editorial", "typography", "clean"],
    sourceName: "International Typographic Style",
    sourceUrl: "https://designhistory.org",
    dateAdded: "2026-11-06",
    description: "Tarjeta de artículo centrada en el ritmo tipográfico, metadatos estructurados y enlace sobrio.",
    componentFile: "styles/minimalist-article-card.tsx",
    dependencies: ["lucide-react"]
  },

  // Cyberpunk (7)
  {
    id: "cyberpunk-terminal-hero",
    title: "Cyberpunk Neural Terminal Hero",
    category: "hero",
    style: "cyberpunk",
    tags: ["cyberpunk", "terminal", "neon", "hero", "hud"],
    sourceName: "ThreeUI / Cyberpunk",
    sourceUrl: "https://threeui.com",
    dateAdded: "2026-11-06",
    description: "Sección hero con consola hacker en neón cian y magenta, soportes angulares y log de comandos en tiempo real.",
    componentFile: "styles/cyberpunk-terminal-hero.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "cyberpunk-status-grid",
    title: "Cyberpunk Tactical Reticle Grid",
    category: "card",
    style: "cyberpunk",
    tags: ["cyberpunk", "telemetry", "reticle", "hud", "neon"],
    sourceName: "ThreeUI / Cyberpunk",
    sourceUrl: "https://threeui.com",
    dateAdded: "2026-11-06",
    description: "Cuadrícula de telemetría militar futurista con coordenadas hex, retícula giratoria y estado de reactor.",
    componentFile: "styles/cyberpunk-status-grid.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "cyberpunk-glitch-badge",
    title: "Cyberpunk Anomaly Warning Chip",
    category: "card",
    style: "cyberpunk",
    tags: ["cyberpunk", "alert", "anomaly", "glitch", "neon-pink"],
    sourceName: "ThreeUI / Cyberpunk",
    sourceUrl: "https://threeui.com",
    dateAdded: "2026-11-06",
    description: "Alerta táctica de brecha en neón magenta con luz pulsante y botón de aislamiento de nodo.",
    componentFile: "styles/cyberpunk-glitch-badge.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "cyberpunk-audio-visualizer",
    title: "Cyberpunk Neon Audio Spectrum",
    category: "card",
    style: "cyberpunk",
    tags: ["cyberpunk", "audio", "spectrum", "equalizer", "neon"],
    sourceName: "ThreeUI / Cyberpunk",
    sourceUrl: "https://threeui.com",
    dateAdded: "2026-11-06",
    description: "Visualizador de ondas sonoras sintéticas con barras de frecuencia dinámicas en gradiente cian y rosa.",
    componentFile: "styles/cyberpunk-audio-visualizer.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "cyberpunk-license-badge",
    title: "Cyberpunk Synthetic ID Pass",
    category: "card",
    style: "cyberpunk",
    tags: ["cyberpunk", "badge", "id", "pass", "hologram"],
    sourceName: "ThreeUI / Cyberpunk",
    sourceUrl: "https://threeui.com",
    dateAdded: "2026-11-06",
    description: "Credencial cibernética con franja holográfica, chip integrado, código QR y nivel de acceso biométrico.",
    componentFile: "styles/cyberpunk-license-badge.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "cyberpunk-system-telemetry",
    title: "Cyberpunk Reactor Core Telemetry",
    category: "card",
    style: "cyberpunk",
    tags: ["cyberpunk", "reactor", "telemetry", "plasma", "hud"],
    sourceName: "ThreeUI / Cyberpunk",
    sourceUrl: "https://threeui.com",
    dateAdded: "2026-11-06",
    description: "Monitor de temperatura de plasma y flujo cuántico con barras de energía en neón incandescente.",
    componentFile: "styles/cyberpunk-system-telemetry.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "cyberpunk-action-strip",
    title: "Cyberpunk Chamfered Action Strip",
    category: "navigation",
    style: "cyberpunk",
    tags: ["cyberpunk", "action-strip", "toolbar", "hud", "neon"],
    sourceName: "ThreeUI / Cyberpunk",
    sourceUrl: "https://threeui.com",
    dateAdded: "2026-11-06",
    description: "Barra de herramientas táctica con indicadores luminosos y botones de acción directa a consola.",
    componentFile: "styles/cyberpunk-action-strip.tsx",
    dependencies: ["lucide-react"]
  }
];

const existingIds = new Set(catalog.map(c => c.id));
for (const item of newItems) {
  if (!existingIds.has(item.id)) {
    catalog.push(item);
  }
}

fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), 'utf8');
console.log(`Actualizado con éxito. Total componentes en catalog: ${catalog.length}`);
