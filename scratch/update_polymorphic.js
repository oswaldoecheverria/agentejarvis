const fs = require('fs');
const catalogPath = 'F:/proyectos/agentepersonal/vault/catalog.json';
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

const polymorphicItems = [
  // Pricing
  {
    id: "pricing-neo-brutalist",
    title: "Plan Pro - Neo-Brutalist",
    category: "pricing",
    style: "neo-brutalism",
    tags: ["pricing", "plan", "neo-brutalism", "popular", "checklist"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Tarjeta de precios Plan Pro $29 con 4 checks, badge rosa y sombra sólida de 6px.",
    componentFile: "elements/pricing/pricing-neo-brutalist.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "pricing-glassmorphic",
    title: "Plan Pro - Glassmorphic",
    category: "pricing",
    style: "glassmorphism",
    tags: ["pricing", "plan", "glassmorphism", "frosted", "emerald"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Tarjeta de precios Plan Pro $29 en cristal esmeralda satinado con bisel de refracción perimetral.",
    componentFile: "elements/pricing/pricing-glassmorphic.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "pricing-liquid-glass",
    title: "Plan Pro - Liquid Glass",
    category: "pricing",
    style: "glassmorphism",
    tags: ["pricing", "plan", "liquid-glass", "acrylic", "refraction"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Tarjeta Plan Pro $29 en vidrio acrílico líquido ultra transparente con destellos de luz.",
    componentFile: "elements/pricing/pricing-liquid-glass.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "pricing-neumorphic",
    title: "Plan Pro - Neumorphic",
    category: "pricing",
    style: "neumorphism",
    tags: ["pricing", "plan", "neumorphism", "soft-ui", "tactile"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Tarjeta Plan Pro $29 en relieve suave sobre superficie con caja de precio en bajorrelieve.",
    componentFile: "elements/pricing/pricing-neumorphic.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "pricing-claymorphic",
    title: "Plan Pro - Claymorphic 3D",
    category: "pricing",
    style: "claymorphism",
    tags: ["pricing", "plan", "claymorphism", "3d", "puffy"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Tarjeta Plan Pro $29 en arcilla 3D inflada con bordes de 3rem y resplandor interior cenital.",
    componentFile: "elements/pricing/pricing-claymorphic.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "pricing-minimalist",
    title: "Plan Pro - Swiss Minimalist",
    category: "pricing",
    style: "minimalism",
    tags: ["pricing", "plan", "minimalism", "swiss", "monochrome"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Tarjeta Plan Pro $29 en líneas de 1px negras austeras y tipografía monospaciada de alto contraste.",
    componentFile: "elements/pricing/pricing-minimalist.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "pricing-cyberpunk",
    title: "Plan Pro - Cyberpunk HUD",
    category: "pricing",
    style: "cyberpunk",
    tags: ["pricing", "plan", "cyberpunk", "hud", "neon"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Tarjeta Plan Pro $29 en marco militar cibernético con neón cian, magenta y terminal de suscripción.",
    componentFile: "elements/pricing/pricing-cyberpunk.tsx",
    dependencies: ["lucide-react"]
  },

  // Profile
  {
    id: "profile-neo-brutalist",
    title: "Alexander Vance - Neo-Brutalist",
    category: "card",
    style: "neo-brutalism",
    tags: ["profile", "avatar", "neo-brutalism", "stats", "social"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Perfil ejecutivo de Alexander Vance con 3 métricas, avatar amarillo y botón mensaje brutalista.",
    componentFile: "elements/profile/profile-neo-brutalist.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "profile-glassmorphic",
    title: "Alexander Vance - Frosted Glass",
    category: "card",
    style: "glassmorphism",
    tags: ["profile", "avatar", "glassmorphism", "frosted", "emerald"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Perfil de Alexander Vance en cristal esmeralda satinado con bisel de refracción y métricas traslúcidas.",
    componentFile: "elements/profile/profile-glassmorphic.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "profile-liquid-glass",
    title: "Alexander Vance - Liquid Glass",
    category: "card",
    style: "glassmorphism",
    tags: ["profile", "avatar", "liquid-glass", "acrylic", "specular"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Perfil de Alexander Vance en vidrio líquido ultra transparente con destellos de luz.",
    componentFile: "elements/profile/profile-liquid-glass.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "profile-claymorphic",
    title: "Alexander Vance - Clay 3D",
    category: "card",
    style: "claymorphism",
    tags: ["profile", "avatar", "claymorphism", "3d", "puffy"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Perfil de Alexander Vance en arcilla 3D inflada con bordes ultra curvos y sombras pastel.",
    componentFile: "elements/profile/profile-claymorphic.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "profile-minimalist",
    title: "Alexander Vance - Swiss Monospace",
    category: "card",
    style: "minimalism",
    tags: ["profile", "avatar", "minimalism", "swiss", "clean"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Perfil de Alexander Vance en tipografía monospaciada rigurosa y división por filetes de 1px.",
    componentFile: "elements/profile/profile-minimalist.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "profile-cyberpunk",
    title: "Alexander Vance - Cyberpunk",
    category: "card",
    style: "cyberpunk",
    tags: ["profile", "avatar", "cyberpunk", "hologram", "hud"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Perfil cibernético de Alexander Vance con chip integrado y neón cian.",
    componentFile: "elements/profile/profile-cyberpunk.tsx",
    dependencies: ["lucide-react"]
  },

  // Control
  {
    id: "control-neo-brutalist",
    title: "Smart Control - Neo-Brutalist",
    category: "card",
    style: "neo-brutalism",
    tags: ["control", "switch", "slider", "neo-brutalism"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Módulo domótico interactivo con toggles Wi-Fi/Bluetooth y slider de brillo en estilo brutalista.",
    componentFile: "elements/control/control-neo-brutalist.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "control-glassmorphic",
    title: "Smart Control - Frosted Glass",
    category: "card",
    style: "glassmorphism",
    tags: ["control", "switch", "slider", "glassmorphism"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Módulo domótico en cristal esmeralda satinado con botones traslúcidos.",
    componentFile: "elements/control/control-glassmorphic.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "control-claymorphic",
    title: "Smart Control - Clay 3D",
    category: "card",
    style: "claymorphism",
    tags: ["control", "switch", "slider", "claymorphism"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Módulo domótico en 3D inflado con botones squishy y slider redondeado.",
    componentFile: "elements/control/control-claymorphic.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "control-minimalist",
    title: "Smart Control - Swiss Monospace",
    category: "card",
    style: "minimalism",
    tags: ["control", "switch", "slider", "minimalism"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Módulo domótico en líneas de 1px negras y estados monospaciados austero.",
    componentFile: "elements/control/control-minimalist.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "control-cyberpunk",
    title: "Smart Control - Cyberpunk Grid",
    category: "card",
    style: "cyberpunk",
    tags: ["control", "switch", "slider", "cyberpunk"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Consola de control táctico con neón cian, estado ONLINE y barra de fotones.",
    componentFile: "elements/control/control-cyberpunk.tsx",
    dependencies: ["lucide-react"]
  },

  // Testimonial
  {
    id: "testimonial-glassmorphic",
    title: "Testimonio Marcus - Frosted Glass",
    category: "card",
    style: "glassmorphism",
    tags: ["testimonial", "review", "glassmorphism", "stars"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Reseña de Marcus Lindqvist en cristal satinado esmeralda con estrellas doradas iluminadas.",
    componentFile: "elements/testimonial/testimonial-glassmorphic.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "testimonial-claymorphic",
    title: "Testimonio Marcus - Clay 3D",
    category: "card",
    style: "claymorphism",
    tags: ["testimonial", "review", "claymorphism", "3d"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Reseña de Marcus Lindqvist en arcilla 3D inflada con bordes redondeados.",
    componentFile: "elements/testimonial/testimonial-claymorphic.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "testimonial-neumorphic",
    title: "Testimonio Marcus - Soft Neumorphic",
    category: "card",
    style: "neumorphism",
    tags: ["testimonial", "review", "neumorphism", "stars"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Reseña de Marcus Lindqvist en plástico suave extruido con estrellas en bajorrelieve.",
    componentFile: "elements/testimonial/testimonial-neumorphic.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "testimonial-minimalist",
    title: "Testimonio Marcus - Swiss Editorial",
    category: "card",
    style: "minimalism",
    tags: ["testimonial", "review", "minimalism", "editorial"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Reseña de Marcus Lindqvist en tipografía serif sobria con filetes de 1px.",
    componentFile: "elements/testimonial/testimonial-minimalist.tsx",
    dependencies: ["lucide-react"]
  },
  {
    id: "testimonial-cyberpunk",
    title: "Testimonio Marcus - Cyberpunk Log",
    category: "card",
    style: "cyberpunk",
    tags: ["testimonial", "review", "cyberpunk", "stars"],
    sourceName: "UI Vault",
    sourceUrl: "https://uivault.internal",
    dateAdded: "2026-11-06",
    description: "Reseña de Marcus Lindqvist en registro de comunicación cibernética con neón rosa.",
    componentFile: "elements/testimonial/testimonial-cyberpunk.tsx",
    dependencies: ["lucide-react"]
  }
];

const existingIds = new Set(catalog.map(c => c.id));
for (const item of polymorphicItems) {
  if (!existingIds.has(item.id)) {
    catalog.push(item);
  }
}

fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), 'utf8');
console.log(`Catálogo actualizado con componentes polimórficos. Total: ${catalog.length}`);
