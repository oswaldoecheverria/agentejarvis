// Catálogo Oficial de Familias Polimórficas (Camaleón)
// Generado dinámicamente con anatomía de wireframe 100% singular y cero duplicados

export interface ChameleonVariant {
  style: string;
  title: string;
  componentId: string;
  description: string;
}

export interface ChameleonFamily {
  id: string;
  name: string;
  category: "cards" | "widgets" | "navbars" | "heros" | "testimonials" | "modals" | "faq" | "carousels";
  categoryLabel: string;
  summary: string;
  iconName: string;
  isPolymorphic: boolean;
  variants: ChameleonVariant[];
}

export interface ElementCategory {
  id: "cards" | "widgets" | "navbars" | "heros" | "testimonials" | "modals" | "faq" | "carousels";
  label: string;
  iconName: string;
  description: string;
}

export const ELEMENT_CATEGORIES: ElementCategory[] = [
  {
    "id": "cards",
    "label": "Cards & Precios",
    "iconName": "CreditCard",
    "description": "Tarjetas de precios, perfiles, fichas clínicas 360, telemetría y tablas de pacientes"
  },
  {
    "id": "widgets",
    "label": "Widgets & Herramientas",
    "iconName": "Sliders",
    "description": "Calculadoras, clima, relojes, controles, buscador CIE-10, triaje y recetas"
  },
  {
    "id": "navbars",
    "label": "Barras de Navegación",
    "iconName": "Menu",
    "description": "Headers superiores, docks flotantes, bottom nav, menús laterales y tabs"
  },
  {
    "id": "heros",
    "label": "Heros & Cabeceras",
    "iconName": "Sparkles",
    "description": "Secciones principales de impacto visual, countdowns y videos"
  },
  {
    "id": "testimonials",
    "label": "Testimonios & Social Proof",
    "iconName": "MessageSquare",
    "description": "Citas de autoridad, reseñas verificadas y recomendaciones"
  },
  {
    "id": "modals",
    "label": "Modales & Diálogos",
    "iconName": "Shield",
    "description": "Ventanas de autenticación segura, cookies, certificados y wizards"
  },
  {
    "id": "faq",
    "label": "Preguntas Frecuentes",
    "iconName": "HelpCircle",
    "description": "Acordeones interactivos de información clínica, especialidades y blog"
  },
  {
    "id": "carousels",
    "label": "Carruseles & Sliders",
    "iconName": "Repeat",
    "description": "Marquesinas de convenios, sliders dinámicos, videos y álbumes fotográficos"
  }
];

export const CHAMELEON_FAMILIES: ChameleonFamily[] = [
  {
    "id": "pricing",
    "name": "Tarjeta de Precios 'Plan Pro $29'",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Tarjeta comercial con desglose de precios, periodo mensual/anual y checklist de beneficios.",
    "iconName": "CreditCard",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "pricing-neo-brutalist",
        "title": "Tarjeta de Precios 'Plan Pro $29' · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Tarjeta de Precios 'Plan Pro $29'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "pricing-glassmorphic",
        "title": "Tarjeta de Precios 'Plan Pro $29' · Glassmorphism",
        "description": "Variante Glassmorphism de Tarjeta de Precios 'Plan Pro $29'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "pricing-liquid-glass",
        "title": "Tarjeta de Precios 'Plan Pro $29' · Liquid Glass",
        "description": "Variante Liquid Glass de Tarjeta de Precios 'Plan Pro $29'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "pricing-neumorphic",
        "title": "Tarjeta de Precios 'Plan Pro $29' · Neumorphism",
        "description": "Variante Neumorphism de Tarjeta de Precios 'Plan Pro $29'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "pricing-claymorphic",
        "title": "Tarjeta de Precios 'Plan Pro $29' · Claymorphism",
        "description": "Variante Claymorphism de Tarjeta de Precios 'Plan Pro $29'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "pricing-minimalist",
        "title": "Tarjeta de Precios 'Plan Pro $29' · Minimalism",
        "description": "Variante Minimalism de Tarjeta de Precios 'Plan Pro $29'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "pricing-cyberpunk",
        "title": "Tarjeta de Precios 'Plan Pro $29' · Cyberpunk",
        "description": "Variante Cyberpunk de Tarjeta de Precios 'Plan Pro $29'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "profile",
    "name": "Perfil de Usuario 'Alexander Vance'",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Tarjeta de identidad y contacto con avatar destacado, roles y métricas de reputación.",
    "iconName": "UserCheck",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "profile-neo-brutalist",
        "title": "Perfil de Usuario 'Alexander Vance' · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Perfil de Usuario 'Alexander Vance'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "profile-glassmorphic",
        "title": "Perfil de Usuario 'Alexander Vance' · Glassmorphism",
        "description": "Variante Glassmorphism de Perfil de Usuario 'Alexander Vance'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "profile-liquid-glass",
        "title": "Perfil de Usuario 'Alexander Vance' · Liquid Glass",
        "description": "Variante Liquid Glass de Perfil de Usuario 'Alexander Vance'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "profile-neumorphic",
        "title": "Perfil de Usuario 'Alexander Vance' · Neumorphism",
        "description": "Variante Neumorphism de Perfil de Usuario 'Alexander Vance'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "profile-claymorphic",
        "title": "Perfil de Usuario 'Alexander Vance' · Claymorphism",
        "description": "Variante Claymorphism de Perfil de Usuario 'Alexander Vance'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "profile-minimalist",
        "title": "Perfil de Usuario 'Alexander Vance' · Minimalism",
        "description": "Variante Minimalism de Perfil de Usuario 'Alexander Vance'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "profile-cyberpunk",
        "title": "Perfil de Usuario 'Alexander Vance' · Cyberpunk",
        "description": "Variante Cyberpunk de Perfil de Usuario 'Alexander Vance'. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "stat",
    "name": "Tarjeta de Métrica & Telemetría 24h",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Monitoreo de rendimiento con gráfico sparkline de 7 días, TPS en tiempo real y porcentaje de cambio.",
    "iconName": "TrendingUp",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "stat-neo-brutalist",
        "title": "Tarjeta de Métrica & Telemetría 24h · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Tarjeta de Métrica & Telemetría 24h. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "stat-glassmorphic",
        "title": "Tarjeta de Métrica & Telemetría 24h · Glassmorphism",
        "description": "Variante Glassmorphism de Tarjeta de Métrica & Telemetría 24h. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "stat-liquid-glass",
        "title": "Tarjeta de Métrica & Telemetría 24h · Liquid Glass",
        "description": "Variante Liquid Glass de Tarjeta de Métrica & Telemetría 24h. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "stat-neumorphic",
        "title": "Tarjeta de Métrica & Telemetría 24h · Neumorphism",
        "description": "Variante Neumorphism de Tarjeta de Métrica & Telemetría 24h. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "stat-claymorphic",
        "title": "Tarjeta de Métrica & Telemetría 24h · Claymorphism",
        "description": "Variante Claymorphism de Tarjeta de Métrica & Telemetría 24h. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "stat-minimalist",
        "title": "Tarjeta de Métrica & Telemetría 24h · Minimalism",
        "description": "Variante Minimalism de Tarjeta de Métrica & Telemetría 24h. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "stat-cyberpunk",
        "title": "Tarjeta de Métrica & Telemetría 24h · Cyberpunk",
        "description": "Variante Cyberpunk de Tarjeta de Métrica & Telemetría 24h. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "newsletter",
    "name": "Tarjeta de Suscripción & Newsletter",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Formulario de captura con campo de correo electrónico, botón de suscripción inline y garantía LOPDP.",
    "iconName": "Mail",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "newsletter-neo-brutalist",
        "title": "Tarjeta de Suscripción & Newsletter · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Tarjeta de Suscripción & Newsletter. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "newsletter-glassmorphic",
        "title": "Tarjeta de Suscripción & Newsletter · Glassmorphism",
        "description": "Variante Glassmorphism de Tarjeta de Suscripción & Newsletter. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "newsletter-liquid-glass",
        "title": "Tarjeta de Suscripción & Newsletter · Liquid Glass",
        "description": "Variante Liquid Glass de Tarjeta de Suscripción & Newsletter. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "newsletter-neumorphic",
        "title": "Tarjeta de Suscripción & Newsletter · Neumorphism",
        "description": "Variante Neumorphism de Tarjeta de Suscripción & Newsletter. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "newsletter-claymorphic",
        "title": "Tarjeta de Suscripción & Newsletter · Claymorphism",
        "description": "Variante Claymorphism de Tarjeta de Suscripción & Newsletter. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "newsletter-minimalist",
        "title": "Tarjeta de Suscripción & Newsletter · Minimalism",
        "description": "Variante Minimalism de Tarjeta de Suscripción & Newsletter. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "newsletter-cyberpunk",
        "title": "Tarjeta de Suscripción & Newsletter · Cyberpunk",
        "description": "Variante Cyberpunk de Tarjeta de Suscripción & Newsletter. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "patient-record",
    "name": "Ficha Clínica 360 del Paciente",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Expediente médico confidencial con avatar, cédula de Ecuador Módulo 10, alerta de alergias y constantes vitales.",
    "iconName": "Activity",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "patient-record-neo-brutalist",
        "title": "Ficha Clínica 360 del Paciente · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Ficha Clínica 360 del Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "patient-record-glassmorphic",
        "title": "Ficha Clínica 360 del Paciente · Glassmorphism",
        "description": "Variante Glassmorphism de Ficha Clínica 360 del Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "patient-record-liquid-glass",
        "title": "Ficha Clínica 360 del Paciente · Liquid Glass",
        "description": "Variante Liquid Glass de Ficha Clínica 360 del Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "patient-record-neumorphic",
        "title": "Ficha Clínica 360 del Paciente · Neumorphism",
        "description": "Variante Neumorphism de Ficha Clínica 360 del Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "patient-record-claymorphic",
        "title": "Ficha Clínica 360 del Paciente · Claymorphism",
        "description": "Variante Claymorphism de Ficha Clínica 360 del Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "patient-record-minimalist",
        "title": "Ficha Clínica 360 del Paciente · Minimalism",
        "description": "Variante Minimalism de Ficha Clínica 360 del Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "patient-record-cyberpunk",
        "title": "Ficha Clínica 360 del Paciente · Cyberpunk",
        "description": "Variante Cyberpunk de Ficha Clínica 360 del Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "plans-comparison-table",
    "name": "Tabla Comparativa de Planes de Salud",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Tabla matricial con columnas de planes (Básico vs Pro), desglose de beneficios médicos y selector de contratación.",
    "iconName": "Table",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "plans-comparison-table-neo-brutalist",
        "title": "Tabla Comparativa de Planes de Salud · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Tabla Comparativa de Planes de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "plans-comparison-table-glassmorphic",
        "title": "Tabla Comparativa de Planes de Salud · Glassmorphism",
        "description": "Variante Glassmorphism de Tabla Comparativa de Planes de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "plans-comparison-table-liquid-glass",
        "title": "Tabla Comparativa de Planes de Salud · Liquid Glass",
        "description": "Variante Liquid Glass de Tabla Comparativa de Planes de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "plans-comparison-table-neumorphic",
        "title": "Tabla Comparativa de Planes de Salud · Neumorphism",
        "description": "Variante Neumorphism de Tabla Comparativa de Planes de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "plans-comparison-table-claymorphic",
        "title": "Tabla Comparativa de Planes de Salud · Claymorphism",
        "description": "Variante Claymorphism de Tabla Comparativa de Planes de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "plans-comparison-table-minimalist",
        "title": "Tabla Comparativa de Planes de Salud · Minimalism",
        "description": "Variante Minimalism de Tabla Comparativa de Planes de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "plans-comparison-table-cyberpunk",
        "title": "Tabla Comparativa de Planes de Salud · Cyberpunk",
        "description": "Variante Cyberpunk de Tabla Comparativa de Planes de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "author-bio-card",
    "name": "Ficha Biográfica de la Doctora",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Tarjeta de perfil con avatar, credenciales Senescyt y MSP 17-5421, especialidad y enlace a biografía.",
    "iconName": "Award",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "author-bio-card-neo-brutalist",
        "title": "Ficha Biográfica de la Doctora · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Ficha Biográfica de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "author-bio-card-glassmorphic",
        "title": "Ficha Biográfica de la Doctora · Glassmorphism",
        "description": "Variante Glassmorphism de Ficha Biográfica de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "author-bio-card-liquid-glass",
        "title": "Ficha Biográfica de la Doctora · Liquid Glass",
        "description": "Variante Liquid Glass de Ficha Biográfica de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "author-bio-card-neumorphic",
        "title": "Ficha Biográfica de la Doctora · Neumorphism",
        "description": "Variante Neumorphism de Ficha Biográfica de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "author-bio-card-claymorphic",
        "title": "Ficha Biográfica de la Doctora · Claymorphism",
        "description": "Variante Claymorphism de Ficha Biográfica de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "author-bio-card-minimalist",
        "title": "Ficha Biográfica de la Doctora · Minimalism",
        "description": "Variante Minimalism de Ficha Biográfica de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "author-bio-card-cyberpunk",
        "title": "Ficha Biográfica de la Doctora · Cyberpunk",
        "description": "Variante Cyberpunk de Ficha Biográfica de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "blog-article-card",
    "name": "Tarjeta de Artículo Médico",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Tarjeta editorial con miniatura de cabecera, tiempo de lectura estimado, categoría clínica y firma médica.",
    "iconName": "BookOpen",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "blog-article-card-neo-brutalist",
        "title": "Tarjeta de Artículo Médico · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Tarjeta de Artículo Médico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "blog-article-card-glassmorphic",
        "title": "Tarjeta de Artículo Médico · Glassmorphism",
        "description": "Variante Glassmorphism de Tarjeta de Artículo Médico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "blog-article-card-liquid-glass",
        "title": "Tarjeta de Artículo Médico · Liquid Glass",
        "description": "Variante Liquid Glass de Tarjeta de Artículo Médico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "blog-article-card-neumorphic",
        "title": "Tarjeta de Artículo Médico · Neumorphism",
        "description": "Variante Neumorphism de Tarjeta de Artículo Médico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "blog-article-card-claymorphic",
        "title": "Tarjeta de Artículo Médico · Claymorphism",
        "description": "Variante Claymorphism de Tarjeta de Artículo Médico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "blog-article-card-minimalist",
        "title": "Tarjeta de Artículo Médico · Minimalism",
        "description": "Variante Minimalism de Tarjeta de Artículo Médico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "blog-article-card-cyberpunk",
        "title": "Tarjeta de Artículo Médico · Cyberpunk",
        "description": "Variante Cyberpunk de Tarjeta de Artículo Médico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "calculator",
    "name": "Calculadora Funcional Interactiva",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Herramienta aritmética de dosimetría con display digital y teclado matricial interactivo.",
    "iconName": "Calculator",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "calculator-neo-brutalist",
        "title": "Calculadora Funcional Interactiva · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Calculadora Funcional Interactiva. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "calculator-glassmorphic",
        "title": "Calculadora Funcional Interactiva · Glassmorphism",
        "description": "Variante Glassmorphism de Calculadora Funcional Interactiva. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "calculator-liquid-glass",
        "title": "Calculadora Funcional Interactiva · Liquid Glass",
        "description": "Variante Liquid Glass de Calculadora Funcional Interactiva. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "calculator-neumorphic",
        "title": "Calculadora Funcional Interactiva · Neumorphism",
        "description": "Variante Neumorphism de Calculadora Funcional Interactiva. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "calculator-claymorphic",
        "title": "Calculadora Funcional Interactiva · Claymorphism",
        "description": "Variante Claymorphism de Calculadora Funcional Interactiva. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "calculator-minimalist",
        "title": "Calculadora Funcional Interactiva · Minimalism",
        "description": "Variante Minimalism de Calculadora Funcional Interactiva. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "calculator-cyberpunk",
        "title": "Calculadora Funcional Interactiva · Cyberpunk",
        "description": "Variante Cyberpunk de Calculadora Funcional Interactiva. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "clock",
    "name": "Reloj Digital en Tiempo Real",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Reloj de precisión de quirófano con cronometría activa, zona horaria UTC-5 y chip de sincronización.",
    "iconName": "Clock",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "clock-neo-brutalist",
        "title": "Reloj Digital en Tiempo Real · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Reloj Digital en Tiempo Real. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "clock-glassmorphic",
        "title": "Reloj Digital en Tiempo Real · Glassmorphism",
        "description": "Variante Glassmorphism de Reloj Digital en Tiempo Real. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "clock-liquid-glass",
        "title": "Reloj Digital en Tiempo Real · Liquid Glass",
        "description": "Variante Liquid Glass de Reloj Digital en Tiempo Real. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "clock-neumorphic",
        "title": "Reloj Digital en Tiempo Real · Neumorphism",
        "description": "Variante Neumorphism de Reloj Digital en Tiempo Real. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "clock-claymorphic",
        "title": "Reloj Digital en Tiempo Real · Claymorphism",
        "description": "Variante Claymorphism de Reloj Digital en Tiempo Real. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "clock-minimalist",
        "title": "Reloj Digital en Tiempo Real · Minimalism",
        "description": "Variante Minimalism de Reloj Digital en Tiempo Real. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "clock-cyberpunk",
        "title": "Reloj Digital en Tiempo Real · Cyberpunk",
        "description": "Variante Cyberpunk de Reloj Digital en Tiempo Real. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "control",
    "name": "Interruptor Inteligente & Toggles",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Panel domótico e instrumental con switches de estado interactivo (Activo / Silenciado).",
    "iconName": "ToggleLeft",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "control-neo-brutalist",
        "title": "Interruptor Inteligente & Toggles · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Interruptor Inteligente & Toggles. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "control-glassmorphic",
        "title": "Interruptor Inteligente & Toggles · Glassmorphism",
        "description": "Variante Glassmorphism de Interruptor Inteligente & Toggles. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "control-liquid-glass",
        "title": "Interruptor Inteligente & Toggles · Liquid Glass",
        "description": "Variante Liquid Glass de Interruptor Inteligente & Toggles. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "control-neumorphic",
        "title": "Interruptor Inteligente & Toggles · Neumorphism",
        "description": "Variante Neumorphism de Interruptor Inteligente & Toggles. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "control-claymorphic",
        "title": "Interruptor Inteligente & Toggles · Claymorphism",
        "description": "Variante Claymorphism de Interruptor Inteligente & Toggles. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "control-minimalist",
        "title": "Interruptor Inteligente & Toggles · Minimalism",
        "description": "Variante Minimalism de Interruptor Inteligente & Toggles. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "control-cyberpunk",
        "title": "Interruptor Inteligente & Toggles · Cyberpunk",
        "description": "Variante Cyberpunk de Interruptor Inteligente & Toggles. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "weather",
    "name": "Clima & Pronóstico Ambiental",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Micro-estación meteorológica con temperatura, índice UV, humedad y calidad de aire.",
    "iconName": "CloudRain",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "weather-neo-brutalist",
        "title": "Clima & Pronóstico Ambiental · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Clima & Pronóstico Ambiental. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "weather-glassmorphic",
        "title": "Clima & Pronóstico Ambiental · Glassmorphism",
        "description": "Variante Glassmorphism de Clima & Pronóstico Ambiental. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "weather-liquid-glass",
        "title": "Clima & Pronóstico Ambiental · Liquid Glass",
        "description": "Variante Liquid Glass de Clima & Pronóstico Ambiental. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "weather-neumorphic",
        "title": "Clima & Pronóstico Ambiental · Neumorphism",
        "description": "Variante Neumorphism de Clima & Pronóstico Ambiental. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "weather-claymorphic",
        "title": "Clima & Pronóstico Ambiental · Claymorphism",
        "description": "Variante Claymorphism de Clima & Pronóstico Ambiental. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "weather-minimalist",
        "title": "Clima & Pronóstico Ambiental · Minimalism",
        "description": "Variante Minimalism de Clima & Pronóstico Ambiental. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "weather-cyberpunk",
        "title": "Clima & Pronóstico Ambiental · Cyberpunk",
        "description": "Variante Cyberpunk de Clima & Pronóstico Ambiental. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "pill-ribbon",
    "name": "Cinta de Filtros en Píldora (Segmented Ribbon)",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Selector horizontal de especialidades con desplazamiento táctil, micro-badges de conteo y estado activo.",
    "iconName": "Sliders",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "pill-ribbon-neo-brutalist",
        "title": "Cinta de Filtros en Píldora (Segmented Ribbon) · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Cinta de Filtros en Píldora (Segmented Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "pill-ribbon-glassmorphic",
        "title": "Cinta de Filtros en Píldora (Segmented Ribbon) · Glassmorphism",
        "description": "Variante Glassmorphism de Cinta de Filtros en Píldora (Segmented Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "pill-ribbon-liquid-glass",
        "title": "Cinta de Filtros en Píldora (Segmented Ribbon) · Liquid Glass",
        "description": "Variante Liquid Glass de Cinta de Filtros en Píldora (Segmented Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "pill-ribbon-neumorphic",
        "title": "Cinta de Filtros en Píldora (Segmented Ribbon) · Neumorphism",
        "description": "Variante Neumorphism de Cinta de Filtros en Píldora (Segmented Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "pill-ribbon-claymorphic",
        "title": "Cinta de Filtros en Píldora (Segmented Ribbon) · Claymorphism",
        "description": "Variante Claymorphism de Cinta de Filtros en Píldora (Segmented Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "pill-ribbon-minimalist",
        "title": "Cinta de Filtros en Píldora (Segmented Ribbon) · Minimalism",
        "description": "Variante Minimalism de Cinta de Filtros en Píldora (Segmented Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "pill-ribbon-cyberpunk",
        "title": "Cinta de Filtros en Píldora (Segmented Ribbon) · Cyberpunk",
        "description": "Variante Cyberpunk de Cinta de Filtros en Píldora (Segmented Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "cie10-search",
    "name": "Buscador Inteligente CIE-10 OMS",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Búsqueda clínica con autocompletado y catálogo oficial de patologías y diagnósticos CIE-10.",
    "iconName": "Search",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "cie10-search-neo-brutalist",
        "title": "Buscador Inteligente CIE-10 OMS · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Buscador Inteligente CIE-10 OMS. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "cie10-search-glassmorphic",
        "title": "Buscador Inteligente CIE-10 OMS · Glassmorphism",
        "description": "Variante Glassmorphism de Buscador Inteligente CIE-10 OMS. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "cie10-search-liquid-glass",
        "title": "Buscador Inteligente CIE-10 OMS · Liquid Glass",
        "description": "Variante Liquid Glass de Buscador Inteligente CIE-10 OMS. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "cie10-search-neumorphic",
        "title": "Buscador Inteligente CIE-10 OMS · Neumorphism",
        "description": "Variante Neumorphism de Buscador Inteligente CIE-10 OMS. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "cie10-search-claymorphic",
        "title": "Buscador Inteligente CIE-10 OMS · Claymorphism",
        "description": "Variante Claymorphism de Buscador Inteligente CIE-10 OMS. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "cie10-search-minimalist",
        "title": "Buscador Inteligente CIE-10 OMS · Minimalism",
        "description": "Variante Minimalism de Buscador Inteligente CIE-10 OMS. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "cie10-search-cyberpunk",
        "title": "Buscador Inteligente CIE-10 OMS · Cyberpunk",
        "description": "Variante Cyberpunk de Buscador Inteligente CIE-10 OMS. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "appointment-calendar",
    "name": "Calendario de Citas & Horarios Médicos",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Selector de turnos semanales de 5 días con ranuras horarias de consulta presencial y telemedicina.",
    "iconName": "Calendar",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "appointment-calendar-neo-brutalist",
        "title": "Calendario de Citas & Horarios Médicos · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Calendario de Citas & Horarios Médicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "appointment-calendar-glassmorphic",
        "title": "Calendario de Citas & Horarios Médicos · Glassmorphism",
        "description": "Variante Glassmorphism de Calendario de Citas & Horarios Médicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "appointment-calendar-liquid-glass",
        "title": "Calendario de Citas & Horarios Médicos · Liquid Glass",
        "description": "Variante Liquid Glass de Calendario de Citas & Horarios Médicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "appointment-calendar-neumorphic",
        "title": "Calendario de Citas & Horarios Médicos · Neumorphism",
        "description": "Variante Neumorphism de Calendario de Citas & Horarios Médicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "appointment-calendar-claymorphic",
        "title": "Calendario de Citas & Horarios Médicos · Claymorphism",
        "description": "Variante Claymorphism de Calendario de Citas & Horarios Médicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "appointment-calendar-minimalist",
        "title": "Calendario de Citas & Horarios Médicos · Minimalism",
        "description": "Variante Minimalism de Calendario de Citas & Horarios Médicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "appointment-calendar-cyberpunk",
        "title": "Calendario de Citas & Horarios Médicos · Cyberpunk",
        "description": "Variante Cyberpunk de Calendario de Citas & Horarios Médicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "calendar-sync-card",
    "name": "Widget de Sincronización de Calendario",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Widget para agregar cita confirmada a Google Calendar, Apple iCal y Outlook con un clic.",
    "iconName": "Calendar",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "calendar-sync-card-neo-brutalist",
        "title": "Widget de Sincronización de Calendario · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Widget de Sincronización de Calendario. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "calendar-sync-card-glassmorphic",
        "title": "Widget de Sincronización de Calendario · Glassmorphism",
        "description": "Variante Glassmorphism de Widget de Sincronización de Calendario. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "calendar-sync-card-liquid-glass",
        "title": "Widget de Sincronización de Calendario · Liquid Glass",
        "description": "Variante Liquid Glass de Widget de Sincronización de Calendario. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "calendar-sync-card-neumorphic",
        "title": "Widget de Sincronización de Calendario · Neumorphism",
        "description": "Variante Neumorphism de Widget de Sincronización de Calendario. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "calendar-sync-card-claymorphic",
        "title": "Widget de Sincronización de Calendario · Claymorphism",
        "description": "Variante Claymorphism de Widget de Sincronización de Calendario. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "calendar-sync-card-minimalist",
        "title": "Widget de Sincronización de Calendario · Minimalism",
        "description": "Variante Minimalism de Widget de Sincronización de Calendario. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "calendar-sync-card-cyberpunk",
        "title": "Widget de Sincronización de Calendario · Cyberpunk",
        "description": "Variante Cyberpunk de Widget de Sincronización de Calendario. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "share-bar-floating",
    "name": "Barra Flotante de Compartir",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Barra compacta para compartir recetas y citas por WhatsApp, Telegram y copiar enlace con confirmación.",
    "iconName": "Share2",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "share-bar-floating-neo-brutalist",
        "title": "Barra Flotante de Compartir · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Barra Flotante de Compartir. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "share-bar-floating-glassmorphic",
        "title": "Barra Flotante de Compartir · Glassmorphism",
        "description": "Variante Glassmorphism de Barra Flotante de Compartir. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "share-bar-floating-liquid-glass",
        "title": "Barra Flotante de Compartir · Liquid Glass",
        "description": "Variante Liquid Glass de Barra Flotante de Compartir. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "share-bar-floating-neumorphic",
        "title": "Barra Flotante de Compartir · Neumorphism",
        "description": "Variante Neumorphism de Barra Flotante de Compartir. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "share-bar-floating-claymorphic",
        "title": "Barra Flotante de Compartir · Claymorphism",
        "description": "Variante Claymorphism de Barra Flotante de Compartir. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "share-bar-floating-minimalist",
        "title": "Barra Flotante de Compartir · Minimalism",
        "description": "Variante Minimalism de Barra Flotante de Compartir. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "share-bar-floating-cyberpunk",
        "title": "Barra Flotante de Compartir · Cyberpunk",
        "description": "Variante Cyberpunk de Barra Flotante de Compartir. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "device-security-manager",
    "name": "Gestor de Dispositivos y Sesiones LOPDP",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Panel de seguridad de accesos con IP, navegador, último acceso y botón de cierre remoto de sesiones.",
    "iconName": "Shield",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "device-security-manager-neo-brutalist",
        "title": "Gestor de Dispositivos y Sesiones LOPDP · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Gestor de Dispositivos y Sesiones LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "device-security-manager-glassmorphic",
        "title": "Gestor de Dispositivos y Sesiones LOPDP · Glassmorphism",
        "description": "Variante Glassmorphism de Gestor de Dispositivos y Sesiones LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "device-security-manager-liquid-glass",
        "title": "Gestor de Dispositivos y Sesiones LOPDP · Liquid Glass",
        "description": "Variante Liquid Glass de Gestor de Dispositivos y Sesiones LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "device-security-manager-neumorphic",
        "title": "Gestor de Dispositivos y Sesiones LOPDP · Neumorphism",
        "description": "Variante Neumorphism de Gestor de Dispositivos y Sesiones LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "device-security-manager-claymorphic",
        "title": "Gestor de Dispositivos y Sesiones LOPDP · Claymorphism",
        "description": "Variante Claymorphism de Gestor de Dispositivos y Sesiones LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "device-security-manager-minimalist",
        "title": "Gestor de Dispositivos y Sesiones LOPDP · Minimalism",
        "description": "Variante Minimalism de Gestor de Dispositivos y Sesiones LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "device-security-manager-cyberpunk",
        "title": "Gestor de Dispositivos y Sesiones LOPDP · Cyberpunk",
        "description": "Variante Cyberpunk de Gestor de Dispositivos y Sesiones LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "digital-cert-status",
    "name": "Estado de Certificado de Firma Digital P12",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Widget de monitoreo de validez de firma electrónica PAdES/SRI con fecha de expiración y emisor oficial.",
    "iconName": "KeyRound",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "digital-cert-status-neo-brutalist",
        "title": "Estado de Certificado de Firma Digital P12 · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Estado de Certificado de Firma Digital P12. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "digital-cert-status-glassmorphic",
        "title": "Estado de Certificado de Firma Digital P12 · Glassmorphism",
        "description": "Variante Glassmorphism de Estado de Certificado de Firma Digital P12. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "digital-cert-status-liquid-glass",
        "title": "Estado de Certificado de Firma Digital P12 · Liquid Glass",
        "description": "Variante Liquid Glass de Estado de Certificado de Firma Digital P12. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "digital-cert-status-neumorphic",
        "title": "Estado de Certificado de Firma Digital P12 · Neumorphism",
        "description": "Variante Neumorphism de Estado de Certificado de Firma Digital P12. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "digital-cert-status-claymorphic",
        "title": "Estado de Certificado de Firma Digital P12 · Claymorphism",
        "description": "Variante Claymorphism de Estado de Certificado de Firma Digital P12. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "digital-cert-status-minimalist",
        "title": "Estado de Certificado de Firma Digital P12 · Minimalism",
        "description": "Variante Minimalism de Estado de Certificado de Firma Digital P12. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "digital-cert-status-cyberpunk",
        "title": "Estado de Certificado de Firma Digital P12 · Cyberpunk",
        "description": "Variante Cyberpunk de Estado de Certificado de Firma Digital P12. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "prescriptions-table",
    "name": "Tabla de Recetas Electrónicas PAdES",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Historial de prescripciones emitidas con identificación, paciente, medicamento, código QR y descarga PDF.",
    "iconName": "FileText",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "prescriptions-table-neo-brutalist",
        "title": "Tabla de Recetas Electrónicas PAdES · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Tabla de Recetas Electrónicas PAdES. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "prescriptions-table-glassmorphic",
        "title": "Tabla de Recetas Electrónicas PAdES · Glassmorphism",
        "description": "Variante Glassmorphism de Tabla de Recetas Electrónicas PAdES. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "prescriptions-table-liquid-glass",
        "title": "Tabla de Recetas Electrónicas PAdES · Liquid Glass",
        "description": "Variante Liquid Glass de Tabla de Recetas Electrónicas PAdES. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "prescriptions-table-neumorphic",
        "title": "Tabla de Recetas Electrónicas PAdES · Neumorphism",
        "description": "Variante Neumorphism de Tabla de Recetas Electrónicas PAdES. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "prescriptions-table-claymorphic",
        "title": "Tabla de Recetas Electrónicas PAdES · Claymorphism",
        "description": "Variante Claymorphism de Tabla de Recetas Electrónicas PAdES. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "prescriptions-table-minimalist",
        "title": "Tabla de Recetas Electrónicas PAdES · Minimalism",
        "description": "Variante Minimalism de Tabla de Recetas Electrónicas PAdES. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "prescriptions-table-cyberpunk",
        "title": "Tabla de Recetas Electrónicas PAdES · Cyberpunk",
        "description": "Variante Cyberpunk de Tabla de Recetas Electrónicas PAdES. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "navbar-header",
    "name": "Cabecera Principal de Navegación (Header Nav)",
    "category": "navbars",
    "categoryLabel": "Barras de Navegación",
    "summary": "Barra superior horizontal con isotipo institucional, menú de navegación principal y botón de agendamiento.",
    "iconName": "Navigation",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "navbar-header-neo-brutalist",
        "title": "Cabecera Principal de Navegación (Header Nav) · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Cabecera Principal de Navegación (Header Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "navbar-header-glassmorphic",
        "title": "Cabecera Principal de Navegación (Header Nav) · Glassmorphism",
        "description": "Variante Glassmorphism de Cabecera Principal de Navegación (Header Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "navbar-header-liquid-glass",
        "title": "Cabecera Principal de Navegación (Header Nav) · Liquid Glass",
        "description": "Variante Liquid Glass de Cabecera Principal de Navegación (Header Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "navbar-header-neumorphic",
        "title": "Cabecera Principal de Navegación (Header Nav) · Neumorphism",
        "description": "Variante Neumorphism de Cabecera Principal de Navegación (Header Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "navbar-header-claymorphic",
        "title": "Cabecera Principal de Navegación (Header Nav) · Claymorphism",
        "description": "Variante Claymorphism de Cabecera Principal de Navegación (Header Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "navbar-header-minimalist",
        "title": "Cabecera Principal de Navegación (Header Nav) · Minimalism",
        "description": "Variante Minimalism de Cabecera Principal de Navegación (Header Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "navbar-header-cyberpunk",
        "title": "Cabecera Principal de Navegación (Header Nav) · Cyberpunk",
        "description": "Variante Cyberpunk de Cabecera Principal de Navegación (Header Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "dock-action",
    "name": "Dock Flotante de Acciones Rápidas",
    "category": "navbars",
    "categoryLabel": "Barras de Navegación",
    "summary": "Cápsula inferior suspendida estilo macOS con accesos directos táctiles y respuesta háptica.",
    "iconName": "Layers",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "dock-action-neo-brutalist",
        "title": "Dock Flotante de Acciones Rápidas · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Dock Flotante de Acciones Rápidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "dock-action-glassmorphic",
        "title": "Dock Flotante de Acciones Rápidas · Glassmorphism",
        "description": "Variante Glassmorphism de Dock Flotante de Acciones Rápidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "dock-action-liquid-glass",
        "title": "Dock Flotante de Acciones Rápidas · Liquid Glass",
        "description": "Variante Liquid Glass de Dock Flotante de Acciones Rápidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "dock-action-neumorphic",
        "title": "Dock Flotante de Acciones Rápidas · Neumorphism",
        "description": "Variante Neumorphism de Dock Flotante de Acciones Rápidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "dock-action-claymorphic",
        "title": "Dock Flotante de Acciones Rápidas · Claymorphism",
        "description": "Variante Claymorphism de Dock Flotante de Acciones Rápidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "dock-action-minimalist",
        "title": "Dock Flotante de Acciones Rápidas · Minimalism",
        "description": "Variante Minimalism de Dock Flotante de Acciones Rápidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "dock-action-cyberpunk",
        "title": "Dock Flotante de Acciones Rápidas · Cyberpunk",
        "description": "Variante Cyberpunk de Dock Flotante de Acciones Rápidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "medical-sidebar",
    "name": "Panel Lateral Médico de la Doctora",
    "category": "navbars",
    "categoryLabel": "Barras de Navegación",
    "summary": "Columna vertical de navegación clínica para historias clínicas, recetas digitales y pacientes.",
    "iconName": "Menu",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "medical-sidebar-neo-brutalist",
        "title": "Panel Lateral Médico de la Doctora · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Panel Lateral Médico de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "medical-sidebar-glassmorphic",
        "title": "Panel Lateral Médico de la Doctora · Glassmorphism",
        "description": "Variante Glassmorphism de Panel Lateral Médico de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "medical-sidebar-liquid-glass",
        "title": "Panel Lateral Médico de la Doctora · Liquid Glass",
        "description": "Variante Liquid Glass de Panel Lateral Médico de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "medical-sidebar-neumorphic",
        "title": "Panel Lateral Médico de la Doctora · Neumorphism",
        "description": "Variante Neumorphism de Panel Lateral Médico de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "medical-sidebar-claymorphic",
        "title": "Panel Lateral Médico de la Doctora · Claymorphism",
        "description": "Variante Claymorphism de Panel Lateral Médico de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "medical-sidebar-minimalist",
        "title": "Panel Lateral Médico de la Doctora · Minimalism",
        "description": "Variante Minimalism de Panel Lateral Médico de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "medical-sidebar-cyberpunk",
        "title": "Panel Lateral Médico de la Doctora · Cyberpunk",
        "description": "Variante Cyberpunk de Panel Lateral Médico de la Doctora. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "footer-institutional",
    "name": "Pie de Página Institucional (Footer)",
    "category": "navbars",
    "categoryLabel": "Barras de Navegación",
    "summary": "Footer completo de 4 columnas con enlaces institucionales, datos de contacto, copyright y cumplimiento LOPDP.",
    "iconName": "Navigation",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "footer-institutional-neo-brutalist",
        "title": "Pie de Página Institucional (Footer) · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Pie de Página Institucional (Footer). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "footer-institutional-glassmorphic",
        "title": "Pie de Página Institucional (Footer) · Glassmorphism",
        "description": "Variante Glassmorphism de Pie de Página Institucional (Footer). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "footer-institutional-liquid-glass",
        "title": "Pie de Página Institucional (Footer) · Liquid Glass",
        "description": "Variante Liquid Glass de Pie de Página Institucional (Footer). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "footer-institutional-neumorphic",
        "title": "Pie de Página Institucional (Footer) · Neumorphism",
        "description": "Variante Neumorphism de Pie de Página Institucional (Footer). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "footer-institutional-claymorphic",
        "title": "Pie de Página Institucional (Footer) · Claymorphism",
        "description": "Variante Claymorphism de Pie de Página Institucional (Footer). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "footer-institutional-minimalist",
        "title": "Pie de Página Institucional (Footer) · Minimalism",
        "description": "Variante Minimalism de Pie de Página Institucional (Footer). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "footer-institutional-cyberpunk",
        "title": "Pie de Página Institucional (Footer) · Cyberpunk",
        "description": "Variante Cyberpunk de Pie de Página Institucional (Footer). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "hero-showcase",
    "name": "Hero Principal de Conversión & Marca",
    "category": "heros",
    "categoryLabel": "Heros & Cabeceras",
    "summary": "Sección de apertura monumental con titular de autor, subtítulo persuasivo, doble CTA y sellos de confianza.",
    "iconName": "Sparkles",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "hero-showcase-neo-brutalist",
        "title": "Hero Principal de Conversión & Marca · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Hero Principal de Conversión & Marca. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "hero-showcase-glassmorphic",
        "title": "Hero Principal de Conversión & Marca · Glassmorphism",
        "description": "Variante Glassmorphism de Hero Principal de Conversión & Marca. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "hero-showcase-liquid-glass",
        "title": "Hero Principal de Conversión & Marca · Liquid Glass",
        "description": "Variante Liquid Glass de Hero Principal de Conversión & Marca. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "hero-showcase-neumorphic",
        "title": "Hero Principal de Conversión & Marca · Neumorphism",
        "description": "Variante Neumorphism de Hero Principal de Conversión & Marca. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "hero-showcase-claymorphic",
        "title": "Hero Principal de Conversión & Marca · Claymorphism",
        "description": "Variante Claymorphism de Hero Principal de Conversión & Marca. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "hero-showcase-minimalist",
        "title": "Hero Principal de Conversión & Marca · Minimalism",
        "description": "Variante Minimalism de Hero Principal de Conversión & Marca. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "hero-showcase-cyberpunk",
        "title": "Hero Principal de Conversión & Marca · Cyberpunk",
        "description": "Variante Cyberpunk de Hero Principal de Conversión & Marca. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "masked-video-player",
    "name": "Reproductor de Video Clínico Enmascarado",
    "category": "heros",
    "categoryLabel": "Heros & Cabeceras",
    "summary": "Ventana audiovisual con máscara orgánica asimétrica, botón de reproducción Play y badge de duración.",
    "iconName": "Video",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "masked-video-player-neo-brutalist",
        "title": "Reproductor de Video Clínico Enmascarado · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Reproductor de Video Clínico Enmascarado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "masked-video-player-glassmorphic",
        "title": "Reproductor de Video Clínico Enmascarado · Glassmorphism",
        "description": "Variante Glassmorphism de Reproductor de Video Clínico Enmascarado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "masked-video-player-liquid-glass",
        "title": "Reproductor de Video Clínico Enmascarado · Liquid Glass",
        "description": "Variante Liquid Glass de Reproductor de Video Clínico Enmascarado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "masked-video-player-neumorphic",
        "title": "Reproductor de Video Clínico Enmascarado · Neumorphism",
        "description": "Variante Neumorphism de Reproductor de Video Clínico Enmascarado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "masked-video-player-claymorphic",
        "title": "Reproductor de Video Clínico Enmascarado · Claymorphism",
        "description": "Variante Claymorphism de Reproductor de Video Clínico Enmascarado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "masked-video-player-minimalist",
        "title": "Reproductor de Video Clínico Enmascarado · Minimalism",
        "description": "Variante Minimalism de Reproductor de Video Clínico Enmascarado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "masked-video-player-cyberpunk",
        "title": "Reproductor de Video Clínico Enmascarado · Cyberpunk",
        "description": "Variante Cyberpunk de Reproductor de Video Clínico Enmascarado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "hero-countdown",
    "name": "Hero con Cuenta Regresiva en Vivo",
    "category": "heros",
    "categoryLabel": "Heros & Cabeceras",
    "summary": "Sección de impacto con temporizador interactivo de cuenta regresiva (Días, Horas, Minutos, Segundos) y llamado a la acción.",
    "iconName": "Timer",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "hero-countdown-neo-brutalist",
        "title": "Hero con Cuenta Regresiva en Vivo · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Hero con Cuenta Regresiva en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "hero-countdown-glassmorphic",
        "title": "Hero con Cuenta Regresiva en Vivo · Glassmorphism",
        "description": "Variante Glassmorphism de Hero con Cuenta Regresiva en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "hero-countdown-liquid-glass",
        "title": "Hero con Cuenta Regresiva en Vivo · Liquid Glass",
        "description": "Variante Liquid Glass de Hero con Cuenta Regresiva en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "hero-countdown-neumorphic",
        "title": "Hero con Cuenta Regresiva en Vivo · Neumorphism",
        "description": "Variante Neumorphism de Hero con Cuenta Regresiva en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "hero-countdown-claymorphic",
        "title": "Hero con Cuenta Regresiva en Vivo · Claymorphism",
        "description": "Variante Claymorphism de Hero con Cuenta Regresiva en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "hero-countdown-minimalist",
        "title": "Hero con Cuenta Regresiva en Vivo · Minimalism",
        "description": "Variante Minimalism de Hero con Cuenta Regresiva en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "hero-countdown-cyberpunk",
        "title": "Hero con Cuenta Regresiva en Vivo · Cyberpunk",
        "description": "Variante Cyberpunk de Hero con Cuenta Regresiva en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "testimonial",
    "name": "Testimonio Ejecutivo de Autoridad",
    "category": "testimonials",
    "categoryLabel": "Testimonios & Social Proof",
    "summary": "Tarjeta de reseña de alta fidelidad con comillas tipográficas, 5 estrellas y credenciales del paciente.",
    "iconName": "MessageSquare",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "testimonial-neo-brutalist",
        "title": "Testimonio Ejecutivo de Autoridad · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Testimonio Ejecutivo de Autoridad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "testimonial-glassmorphic",
        "title": "Testimonio Ejecutivo de Autoridad · Glassmorphism",
        "description": "Variante Glassmorphism de Testimonio Ejecutivo de Autoridad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "testimonial-liquid-glass",
        "title": "Testimonio Ejecutivo de Autoridad · Liquid Glass",
        "description": "Variante Liquid Glass de Testimonio Ejecutivo de Autoridad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "testimonial-neumorphic",
        "title": "Testimonio Ejecutivo de Autoridad · Neumorphism",
        "description": "Variante Neumorphism de Testimonio Ejecutivo de Autoridad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "testimonial-claymorphic",
        "title": "Testimonio Ejecutivo de Autoridad · Claymorphism",
        "description": "Variante Claymorphism de Testimonio Ejecutivo de Autoridad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "testimonial-minimalist",
        "title": "Testimonio Ejecutivo de Autoridad · Minimalism",
        "description": "Variante Minimalism de Testimonio Ejecutivo de Autoridad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "testimonial-cyberpunk",
        "title": "Testimonio Ejecutivo de Autoridad · Cyberpunk",
        "description": "Variante Cyberpunk de Testimonio Ejecutivo de Autoridad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "auth",
    "name": "Modal de Acceso / Security Gateway",
    "category": "modals",
    "categoryLabel": "Modales & Diálogos",
    "summary": "Ventana de autenticación protegida con campos de cédula/clave, cifrado criptográfico y recuperación de acceso.",
    "iconName": "Shield",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "auth-neo-brutalist",
        "title": "Modal de Acceso / Security Gateway · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Modal de Acceso / Security Gateway. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "auth-glassmorphic",
        "title": "Modal de Acceso / Security Gateway · Glassmorphism",
        "description": "Variante Glassmorphism de Modal de Acceso / Security Gateway. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "auth-liquid-glass",
        "title": "Modal de Acceso / Security Gateway · Liquid Glass",
        "description": "Variante Liquid Glass de Modal de Acceso / Security Gateway. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "auth-neumorphic",
        "title": "Modal de Acceso / Security Gateway · Neumorphism",
        "description": "Variante Neumorphism de Modal de Acceso / Security Gateway. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "auth-claymorphic",
        "title": "Modal de Acceso / Security Gateway · Claymorphism",
        "description": "Variante Claymorphism de Modal de Acceso / Security Gateway. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "auth-minimalist",
        "title": "Modal de Acceso / Security Gateway · Minimalism",
        "description": "Variante Minimalism de Modal de Acceso / Security Gateway. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "auth-cyberpunk",
        "title": "Modal de Acceso / Security Gateway · Cyberpunk",
        "description": "Variante Cyberpunk de Modal de Acceso / Security Gateway. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "cookie-consent-banner",
    "name": "Banner de Consentimiento de Cookies & LOPDP",
    "category": "modals",
    "categoryLabel": "Modales & Diálogos",
    "summary": "Banner inferior flotante de cumplimiento de privacidad en Ecuador con botones de aceptación y configuración.",
    "iconName": "ShieldAlert",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "cookie-consent-banner-neo-brutalist",
        "title": "Banner de Consentimiento de Cookies & LOPDP · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Banner de Consentimiento de Cookies & LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "cookie-consent-banner-glassmorphic",
        "title": "Banner de Consentimiento de Cookies & LOPDP · Glassmorphism",
        "description": "Variante Glassmorphism de Banner de Consentimiento de Cookies & LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "cookie-consent-banner-liquid-glass",
        "title": "Banner de Consentimiento de Cookies & LOPDP · Liquid Glass",
        "description": "Variante Liquid Glass de Banner de Consentimiento de Cookies & LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "cookie-consent-banner-neumorphic",
        "title": "Banner de Consentimiento de Cookies & LOPDP · Neumorphism",
        "description": "Variante Neumorphism de Banner de Consentimiento de Cookies & LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "cookie-consent-banner-claymorphic",
        "title": "Banner de Consentimiento de Cookies & LOPDP · Claymorphism",
        "description": "Variante Claymorphism de Banner de Consentimiento de Cookies & LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "cookie-consent-banner-minimalist",
        "title": "Banner de Consentimiento de Cookies & LOPDP · Minimalism",
        "description": "Variante Minimalism de Banner de Consentimiento de Cookies & LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "cookie-consent-banner-cyberpunk",
        "title": "Banner de Consentimiento de Cookies & LOPDP · Cyberpunk",
        "description": "Variante Cyberpunk de Banner de Consentimiento de Cookies & LOPDP. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "sri-invoice-modal",
    "name": "Modal de Facturación Electrónica SRI",
    "category": "modals",
    "categoryLabel": "Modales & Diálogos",
    "summary": "Ventana modal con cálculo de servicios, IVA al 15% y botón de emisión de comprobante electrónico XAdES.",
    "iconName": "Receipt",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "sri-invoice-modal-neo-brutalist",
        "title": "Modal de Facturación Electrónica SRI · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Modal de Facturación Electrónica SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "sri-invoice-modal-glassmorphic",
        "title": "Modal de Facturación Electrónica SRI · Glassmorphism",
        "description": "Variante Glassmorphism de Modal de Facturación Electrónica SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "sri-invoice-modal-liquid-glass",
        "title": "Modal de Facturación Electrónica SRI · Liquid Glass",
        "description": "Variante Liquid Glass de Modal de Facturación Electrónica SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "sri-invoice-modal-neumorphic",
        "title": "Modal de Facturación Electrónica SRI · Neumorphism",
        "description": "Variante Neumorphism de Modal de Facturación Electrónica SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "sri-invoice-modal-claymorphic",
        "title": "Modal de Facturación Electrónica SRI · Claymorphism",
        "description": "Variante Claymorphism de Modal de Facturación Electrónica SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "sri-invoice-modal-minimalist",
        "title": "Modal de Facturación Electrónica SRI · Minimalism",
        "description": "Variante Minimalism de Modal de Facturación Electrónica SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "sri-invoice-modal-cyberpunk",
        "title": "Modal de Facturación Electrónica SRI · Cyberpunk",
        "description": "Variante Cyberpunk de Modal de Facturación Electrónica SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "whatsapp-share-modal",
    "name": "Modal de Envío por WhatsApp",
    "category": "modals",
    "categoryLabel": "Modales & Diálogos",
    "summary": "Modal para despachar recetas o confirmaciones de consulta directamente al WhatsApp del paciente.",
    "iconName": "MessageCircle",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "whatsapp-share-modal-neo-brutalist",
        "title": "Modal de Envío por WhatsApp · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Modal de Envío por WhatsApp. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "whatsapp-share-modal-glassmorphic",
        "title": "Modal de Envío por WhatsApp · Glassmorphism",
        "description": "Variante Glassmorphism de Modal de Envío por WhatsApp. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "whatsapp-share-modal-liquid-glass",
        "title": "Modal de Envío por WhatsApp · Liquid Glass",
        "description": "Variante Liquid Glass de Modal de Envío por WhatsApp. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "whatsapp-share-modal-neumorphic",
        "title": "Modal de Envío por WhatsApp · Neumorphism",
        "description": "Variante Neumorphism de Modal de Envío por WhatsApp. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "whatsapp-share-modal-claymorphic",
        "title": "Modal de Envío por WhatsApp · Claymorphism",
        "description": "Variante Claymorphism de Modal de Envío por WhatsApp. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "whatsapp-share-modal-minimalist",
        "title": "Modal de Envío por WhatsApp · Minimalism",
        "description": "Variante Minimalism de Modal de Envío por WhatsApp. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "whatsapp-share-modal-cyberpunk",
        "title": "Modal de Envío por WhatsApp · Cyberpunk",
        "description": "Variante Cyberpunk de Modal de Envío por WhatsApp. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "faq",
    "name": "Acordeón de Preguntas Frecuentes FAQ",
    "category": "faq",
    "categoryLabel": "Preguntas Frecuentes",
    "summary": "Lista expandible de dudas sobre firma electrónica PAdES, recetas médicas y cobertura de aseguradoras.",
    "iconName": "HelpCircle",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "faq-neo-brutalist",
        "title": "Acordeón de Preguntas Frecuentes FAQ · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Acordeón de Preguntas Frecuentes FAQ. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "faq-glassmorphic",
        "title": "Acordeón de Preguntas Frecuentes FAQ · Glassmorphism",
        "description": "Variante Glassmorphism de Acordeón de Preguntas Frecuentes FAQ. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "faq-liquid-glass",
        "title": "Acordeón de Preguntas Frecuentes FAQ · Liquid Glass",
        "description": "Variante Liquid Glass de Acordeón de Preguntas Frecuentes FAQ. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "faq-neumorphic",
        "title": "Acordeón de Preguntas Frecuentes FAQ · Neumorphism",
        "description": "Variante Neumorphism de Acordeón de Preguntas Frecuentes FAQ. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "faq-claymorphic",
        "title": "Acordeón de Preguntas Frecuentes FAQ · Claymorphism",
        "description": "Variante Claymorphism de Acordeón de Preguntas Frecuentes FAQ. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "faq-minimalist",
        "title": "Acordeón de Preguntas Frecuentes FAQ · Minimalism",
        "description": "Variante Minimalism de Acordeón de Preguntas Frecuentes FAQ. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "faq-cyberpunk",
        "title": "Acordeón de Preguntas Frecuentes FAQ · Cyberpunk",
        "description": "Variante Cyberpunk de Acordeón de Preguntas Frecuentes FAQ. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "branch-faq-accordion",
    "name": "Acordeón de Preguntas por Especialidad",
    "category": "faq",
    "categoryLabel": "Preguntas Frecuentes",
    "summary": "Acordeón médico interactivo organizado por ramas clínicas con respuestas detalladas y chevrons animados.",
    "iconName": "HelpCircle",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "branch-faq-accordion-neo-brutalist",
        "title": "Acordeón de Preguntas por Especialidad · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Acordeón de Preguntas por Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "branch-faq-accordion-glassmorphic",
        "title": "Acordeón de Preguntas por Especialidad · Glassmorphism",
        "description": "Variante Glassmorphism de Acordeón de Preguntas por Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "branch-faq-accordion-liquid-glass",
        "title": "Acordeón de Preguntas por Especialidad · Liquid Glass",
        "description": "Variante Liquid Glass de Acordeón de Preguntas por Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "branch-faq-accordion-neumorphic",
        "title": "Acordeón de Preguntas por Especialidad · Neumorphism",
        "description": "Variante Neumorphism de Acordeón de Preguntas por Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "branch-faq-accordion-claymorphic",
        "title": "Acordeón de Preguntas por Especialidad · Claymorphism",
        "description": "Variante Claymorphism de Acordeón de Preguntas por Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "branch-faq-accordion-minimalist",
        "title": "Acordeón de Preguntas por Especialidad · Minimalism",
        "description": "Variante Minimalism de Acordeón de Preguntas por Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "branch-faq-accordion-cyberpunk",
        "title": "Acordeón de Preguntas por Especialidad · Cyberpunk",
        "description": "Variante Cyberpunk de Acordeón de Preguntas por Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "marquee",
    "name": "Marquesina Infinita Continua (Ticker)",
    "category": "carousels",
    "categoryLabel": "Carruseles & Sliders",
    "summary": "Cinta cinética continua con logos de convenios aseguradores (Saludsa, Humana, Bupa) y sellos SRI.",
    "iconName": "Repeat",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "marquee-neo-brutalist",
        "title": "Marquesina Infinita Continua (Ticker) · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Marquesina Infinita Continua (Ticker). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "marquee-glassmorphic",
        "title": "Marquesina Infinita Continua (Ticker) · Glassmorphism",
        "description": "Variante Glassmorphism de Marquesina Infinita Continua (Ticker). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "marquee-liquid-glass",
        "title": "Marquesina Infinita Continua (Ticker) · Liquid Glass",
        "description": "Variante Liquid Glass de Marquesina Infinita Continua (Ticker). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "marquee-neumorphic",
        "title": "Marquesina Infinita Continua (Ticker) · Neumorphism",
        "description": "Variante Neumorphism de Marquesina Infinita Continua (Ticker). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "marquee-claymorphic",
        "title": "Marquesina Infinita Continua (Ticker) · Claymorphism",
        "description": "Variante Claymorphism de Marquesina Infinita Continua (Ticker). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "marquee-minimalist",
        "title": "Marquesina Infinita Continua (Ticker) · Minimalism",
        "description": "Variante Minimalism de Marquesina Infinita Continua (Ticker). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "marquee-cyberpunk",
        "title": "Marquesina Infinita Continua (Ticker) · Cyberpunk",
        "description": "Variante Cyberpunk de Marquesina Infinita Continua (Ticker). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "slider",
    "name": "Slider Interactivo de Diapositivas",
    "category": "carousels",
    "categoryLabel": "Carruseles & Sliders",
    "summary": "Carrusel de fases de servicio con botones anterior/siguiente y barra de paginación sincronizada.",
    "iconName": "Sliders",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "slider-neo-brutalist",
        "title": "Slider Interactivo de Diapositivas · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Slider Interactivo de Diapositivas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "slider-glassmorphic",
        "title": "Slider Interactivo de Diapositivas · Glassmorphism",
        "description": "Variante Glassmorphism de Slider Interactivo de Diapositivas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "slider-liquid-glass",
        "title": "Slider Interactivo de Diapositivas · Liquid Glass",
        "description": "Variante Liquid Glass de Slider Interactivo de Diapositivas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "slider-neumorphic",
        "title": "Slider Interactivo de Diapositivas · Neumorphism",
        "description": "Variante Neumorphism de Slider Interactivo de Diapositivas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "slider-claymorphic",
        "title": "Slider Interactivo de Diapositivas · Claymorphism",
        "description": "Variante Claymorphism de Slider Interactivo de Diapositivas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "slider-minimalist",
        "title": "Slider Interactivo de Diapositivas · Minimalism",
        "description": "Variante Minimalism de Slider Interactivo de Diapositivas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "slider-cyberpunk",
        "title": "Slider Interactivo de Diapositivas · Cyberpunk",
        "description": "Variante Cyberpunk de Slider Interactivo de Diapositivas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "clinical-album",
    "name": "Galería & Álbum Fotográfico Clínico",
    "category": "carousels",
    "categoryLabel": "Carruseles & Sliders",
    "summary": "Tarjeta fotográfica 16:9 con badge \"+12 fotos\", etiquetas de procedimiento y zoom.",
    "iconName": "Image",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "styleLabel": "Neo-Brutalism",
        "componentId": "clinical-album-neo-brutalist",
        "title": "Galería & Álbum Fotográfico Clínico · Neo-Brutalism",
        "description": "Variante Neo-Brutalism de Galería & Álbum Fotográfico Clínico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "styleLabel": "Glassmorphism",
        "componentId": "clinical-album-glassmorphic",
        "title": "Galería & Álbum Fotográfico Clínico · Glassmorphism",
        "description": "Variante Glassmorphism de Galería & Álbum Fotográfico Clínico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "styleLabel": "Liquid Glass",
        "componentId": "clinical-album-liquid-glass",
        "title": "Galería & Álbum Fotográfico Clínico · Liquid Glass",
        "description": "Variante Liquid Glass de Galería & Álbum Fotográfico Clínico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "styleLabel": "Neumorphism",
        "componentId": "clinical-album-neumorphic",
        "title": "Galería & Álbum Fotográfico Clínico · Neumorphism",
        "description": "Variante Neumorphism de Galería & Álbum Fotográfico Clínico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "styleLabel": "Claymorphism",
        "componentId": "clinical-album-claymorphic",
        "title": "Galería & Álbum Fotográfico Clínico · Claymorphism",
        "description": "Variante Claymorphism de Galería & Álbum Fotográfico Clínico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "styleLabel": "Minimalism",
        "componentId": "clinical-album-minimalist",
        "title": "Galería & Álbum Fotográfico Clínico · Minimalism",
        "description": "Variante Minimalism de Galería & Álbum Fotográfico Clínico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "styleLabel": "Cyberpunk",
        "componentId": "clinical-album-cyberpunk",
        "title": "Galería & Álbum Fotográfico Clínico · Cyberpunk",
        "description": "Variante Cyberpunk de Galería & Álbum Fotográfico Clínico. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "bottom-nav",
    "name": "Barra de Navegación Móvil Inferior (Bottom Nav)",
    "category": "navbars",
    "categoryLabel": "Barras de Navegación",
    "summary": "Dock móvil táctil de 5 accesos directos con micro-badges numéricos de alertas y retroalimentación táctil.",
    "iconName": "Compass",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Barra de Navegación Móvil Inferior (Bottom Nav) · Neo-Brutalism",
        "componentId": "bottom-nav-neo-brutalist",
        "description": "Variante Neo-Brutalism de Barra de Navegación Móvil Inferior (Bottom Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Barra de Navegación Móvil Inferior (Bottom Nav) · Glassmorphism",
        "componentId": "bottom-nav-glassmorphic",
        "description": "Variante Glassmorphism de Barra de Navegación Móvil Inferior (Bottom Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Barra de Navegación Móvil Inferior (Bottom Nav) · Liquid Glass",
        "componentId": "bottom-nav-liquid-glass",
        "description": "Variante Liquid Glass de Barra de Navegación Móvil Inferior (Bottom Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Barra de Navegación Móvil Inferior (Bottom Nav) · Neumorphism",
        "componentId": "bottom-nav-neumorphic",
        "description": "Variante Neumorphism de Barra de Navegación Móvil Inferior (Bottom Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Barra de Navegación Móvil Inferior (Bottom Nav) · Claymorphism",
        "componentId": "bottom-nav-claymorphic",
        "description": "Variante Claymorphism de Barra de Navegación Móvil Inferior (Bottom Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Barra de Navegación Móvil Inferior (Bottom Nav) · Minimalism",
        "componentId": "bottom-nav-minimalist",
        "description": "Variante Minimalism de Barra de Navegación Móvil Inferior (Bottom Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Barra de Navegación Móvil Inferior (Bottom Nav) · Cyberpunk",
        "componentId": "bottom-nav-cyberpunk",
        "description": "Variante Cyberpunk de Barra de Navegación Móvil Inferior (Bottom Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "sidebar-nav",
    "name": "Barra Lateral Institucional & Médica (Sidebar Nav)",
    "category": "navbars",
    "categoryLabel": "Barras de Navegación",
    "summary": "Menú lateral colapsable con perfil de la doctora, estado de conexión y contadores de expedientes.",
    "iconName": "Menu",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Barra Lateral Institucional & Médica (Sidebar Nav) · Neo-Brutalism",
        "componentId": "sidebar-nav-neo-brutalist",
        "description": "Variante Neo-Brutalism de Barra Lateral Institucional & Médica (Sidebar Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Barra Lateral Institucional & Médica (Sidebar Nav) · Glassmorphism",
        "componentId": "sidebar-nav-glassmorphic",
        "description": "Variante Glassmorphism de Barra Lateral Institucional & Médica (Sidebar Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Barra Lateral Institucional & Médica (Sidebar Nav) · Liquid Glass",
        "componentId": "sidebar-nav-liquid-glass",
        "description": "Variante Liquid Glass de Barra Lateral Institucional & Médica (Sidebar Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Barra Lateral Institucional & Médica (Sidebar Nav) · Neumorphism",
        "componentId": "sidebar-nav-neumorphic",
        "description": "Variante Neumorphism de Barra Lateral Institucional & Médica (Sidebar Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Barra Lateral Institucional & Médica (Sidebar Nav) · Claymorphism",
        "componentId": "sidebar-nav-claymorphic",
        "description": "Variante Claymorphism de Barra Lateral Institucional & Médica (Sidebar Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Barra Lateral Institucional & Médica (Sidebar Nav) · Minimalism",
        "componentId": "sidebar-nav-minimalist",
        "description": "Variante Minimalism de Barra Lateral Institucional & Médica (Sidebar Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Barra Lateral Institucional & Médica (Sidebar Nav) · Cyberpunk",
        "componentId": "sidebar-nav-cyberpunk",
        "description": "Variante Cyberpunk de Barra Lateral Institucional & Médica (Sidebar Nav). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "specialties-nav-ribbon",
    "name": "Cinta de Especialidades Navegable (Specialties Ribbon)",
    "category": "navbars",
    "categoryLabel": "Barras de Navegación",
    "summary": "Cinta horizontal interactiva de ramas clínicas con desplazamiento suave e indicador de estado activo.",
    "iconName": "Sliders",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Cinta de Especialidades Navegable (Specialties Ribbon) · Neo-Brutalism",
        "componentId": "specialties-nav-ribbon-neo-brutalist",
        "description": "Variante Neo-Brutalism de Cinta de Especialidades Navegable (Specialties Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Cinta de Especialidades Navegable (Specialties Ribbon) · Glassmorphism",
        "componentId": "specialties-nav-ribbon-glassmorphic",
        "description": "Variante Glassmorphism de Cinta de Especialidades Navegable (Specialties Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Cinta de Especialidades Navegable (Specialties Ribbon) · Liquid Glass",
        "componentId": "specialties-nav-ribbon-liquid-glass",
        "description": "Variante Liquid Glass de Cinta de Especialidades Navegable (Specialties Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Cinta de Especialidades Navegable (Specialties Ribbon) · Neumorphism",
        "componentId": "specialties-nav-ribbon-neumorphic",
        "description": "Variante Neumorphism de Cinta de Especialidades Navegable (Specialties Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Cinta de Especialidades Navegable (Specialties Ribbon) · Claymorphism",
        "componentId": "specialties-nav-ribbon-claymorphic",
        "description": "Variante Claymorphism de Cinta de Especialidades Navegable (Specialties Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Cinta de Especialidades Navegable (Specialties Ribbon) · Minimalism",
        "componentId": "specialties-nav-ribbon-minimalist",
        "description": "Variante Minimalism de Cinta de Especialidades Navegable (Specialties Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Cinta de Especialidades Navegable (Specialties Ribbon) · Cyberpunk",
        "componentId": "specialties-nav-ribbon-cyberpunk",
        "description": "Variante Cyberpunk de Cinta de Especialidades Navegable (Specialties Ribbon). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "smart-tabs-ribbon",
    "name": "Pestañas Inteligentes Segmentadas (Smart Tabs)",
    "category": "navbars",
    "categoryLabel": "Barras de Navegación",
    "summary": "Barra de pestañas segmentadas con cápsula deslizante e insignias de conteo por sección.",
    "iconName": "Layers",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Pestañas Inteligentes Segmentadas (Smart Tabs) · Neo-Brutalism",
        "componentId": "smart-tabs-ribbon-neo-brutalist",
        "description": "Variante Neo-Brutalism de Pestañas Inteligentes Segmentadas (Smart Tabs). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Pestañas Inteligentes Segmentadas (Smart Tabs) · Glassmorphism",
        "componentId": "smart-tabs-ribbon-glassmorphic",
        "description": "Variante Glassmorphism de Pestañas Inteligentes Segmentadas (Smart Tabs). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Pestañas Inteligentes Segmentadas (Smart Tabs) · Liquid Glass",
        "componentId": "smart-tabs-ribbon-liquid-glass",
        "description": "Variante Liquid Glass de Pestañas Inteligentes Segmentadas (Smart Tabs). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Pestañas Inteligentes Segmentadas (Smart Tabs) · Neumorphism",
        "componentId": "smart-tabs-ribbon-neumorphic",
        "description": "Variante Neumorphism de Pestañas Inteligentes Segmentadas (Smart Tabs). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Pestañas Inteligentes Segmentadas (Smart Tabs) · Claymorphism",
        "componentId": "smart-tabs-ribbon-claymorphic",
        "description": "Variante Claymorphism de Pestañas Inteligentes Segmentadas (Smart Tabs). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Pestañas Inteligentes Segmentadas (Smart Tabs) · Minimalism",
        "componentId": "smart-tabs-ribbon-minimalist",
        "description": "Variante Minimalism de Pestañas Inteligentes Segmentadas (Smart Tabs). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Pestañas Inteligentes Segmentadas (Smart Tabs) · Cyberpunk",
        "componentId": "smart-tabs-ribbon-cyberpunk",
        "description": "Variante Cyberpunk de Pestañas Inteligentes Segmentadas (Smart Tabs). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "user-menu-popover",
    "name": "Menú Desplegable de Usuario & Doctora (User Popover)",
    "category": "navbars",
    "categoryLabel": "Barras de Navegación",
    "summary": "Popover flotante con perfil médico, credenciales MSP, configuración de firma SRI y cierre de sesión.",
    "iconName": "UserCheck",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Menú Desplegable de Usuario & Doctora (User Popover) · Neo-Brutalism",
        "componentId": "user-menu-popover-neo-brutalist",
        "description": "Variante Neo-Brutalism de Menú Desplegable de Usuario & Doctora (User Popover). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Menú Desplegable de Usuario & Doctora (User Popover) · Glassmorphism",
        "componentId": "user-menu-popover-glassmorphic",
        "description": "Variante Glassmorphism de Menú Desplegable de Usuario & Doctora (User Popover). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Menú Desplegable de Usuario & Doctora (User Popover) · Liquid Glass",
        "componentId": "user-menu-popover-liquid-glass",
        "description": "Variante Liquid Glass de Menú Desplegable de Usuario & Doctora (User Popover). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Menú Desplegable de Usuario & Doctora (User Popover) · Neumorphism",
        "componentId": "user-menu-popover-neumorphic",
        "description": "Variante Neumorphism de Menú Desplegable de Usuario & Doctora (User Popover). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Menú Desplegable de Usuario & Doctora (User Popover) · Claymorphism",
        "componentId": "user-menu-popover-claymorphic",
        "description": "Variante Claymorphism de Menú Desplegable de Usuario & Doctora (User Popover). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Menú Desplegable de Usuario & Doctora (User Popover) · Minimalism",
        "componentId": "user-menu-popover-minimalist",
        "description": "Variante Minimalism de Menú Desplegable de Usuario & Doctora (User Popover). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Menú Desplegable de Usuario & Doctora (User Popover) · Cyberpunk",
        "componentId": "user-menu-popover-cyberpunk",
        "description": "Variante Cyberpunk de Menú Desplegable de Usuario & Doctora (User Popover). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "faq-question-box",
    "name": "Caja de Pregunta Clínica Individual (Faq Box)",
    "category": "faq",
    "categoryLabel": "Preguntas Frecuentes",
    "summary": "Caja interactiva de consulta puntual con insignia de validez legal, panel expandible y enlace a WhatsApp.",
    "iconName": "HelpCircle",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Caja de Pregunta Clínica Individual (Faq Box) · Neo-Brutalism",
        "componentId": "faq-question-box-neo-brutalist",
        "description": "Variante Neo-Brutalism de Caja de Pregunta Clínica Individual (Faq Box). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Caja de Pregunta Clínica Individual (Faq Box) · Glassmorphism",
        "componentId": "faq-question-box-glassmorphic",
        "description": "Variante Glassmorphism de Caja de Pregunta Clínica Individual (Faq Box). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Caja de Pregunta Clínica Individual (Faq Box) · Liquid Glass",
        "componentId": "faq-question-box-liquid-glass",
        "description": "Variante Liquid Glass de Caja de Pregunta Clínica Individual (Faq Box). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Caja de Pregunta Clínica Individual (Faq Box) · Neumorphism",
        "componentId": "faq-question-box-neumorphic",
        "description": "Variante Neumorphism de Caja de Pregunta Clínica Individual (Faq Box). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Caja de Pregunta Clínica Individual (Faq Box) · Claymorphism",
        "componentId": "faq-question-box-claymorphic",
        "description": "Variante Claymorphism de Caja de Pregunta Clínica Individual (Faq Box). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Caja de Pregunta Clínica Individual (Faq Box) · Minimalism",
        "componentId": "faq-question-box-minimalist",
        "description": "Variante Minimalism de Caja de Pregunta Clínica Individual (Faq Box). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Caja de Pregunta Clínica Individual (Faq Box) · Cyberpunk",
        "componentId": "faq-question-box-cyberpunk",
        "description": "Variante Cyberpunk de Caja de Pregunta Clínica Individual (Faq Box). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "branch-groups-accordion",
    "name": "Acordeón Jerárquico por Grupos Clínicos",
    "category": "faq",
    "categoryLabel": "Preguntas Frecuentes",
    "summary": "Acordeón multinivel con sub-servicios clasificados por Medicina Preventiva, Materno-Infantil y Procedimientos.",
    "iconName": "HelpCircle",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Acordeón Jerárquico por Grupos Clínicos · Neo-Brutalism",
        "componentId": "branch-groups-accordion-neo-brutalist",
        "description": "Variante Neo-Brutalism de Acordeón Jerárquico por Grupos Clínicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Acordeón Jerárquico por Grupos Clínicos · Glassmorphism",
        "componentId": "branch-groups-accordion-glassmorphic",
        "description": "Variante Glassmorphism de Acordeón Jerárquico por Grupos Clínicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Acordeón Jerárquico por Grupos Clínicos · Liquid Glass",
        "componentId": "branch-groups-accordion-liquid-glass",
        "description": "Variante Liquid Glass de Acordeón Jerárquico por Grupos Clínicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Acordeón Jerárquico por Grupos Clínicos · Neumorphism",
        "componentId": "branch-groups-accordion-neumorphic",
        "description": "Variante Neumorphism de Acordeón Jerárquico por Grupos Clínicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Acordeón Jerárquico por Grupos Clínicos · Claymorphism",
        "componentId": "branch-groups-accordion-claymorphic",
        "description": "Variante Claymorphism de Acordeón Jerárquico por Grupos Clínicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Acordeón Jerárquico por Grupos Clínicos · Minimalism",
        "componentId": "branch-groups-accordion-minimalist",
        "description": "Variante Minimalism de Acordeón Jerárquico por Grupos Clínicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Acordeón Jerárquico por Grupos Clínicos · Cyberpunk",
        "componentId": "branch-groups-accordion-cyberpunk",
        "description": "Variante Cyberpunk de Acordeón Jerárquico por Grupos Clínicos. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "blog-topics-accordion",
    "name": "Índice Acordeón de Tópicos Editoriales",
    "category": "faq",
    "categoryLabel": "Preguntas Frecuentes",
    "summary": "Directorio expandible de divulgación médica clasificado por especialidades con contadores de artículos.",
    "iconName": "BookOpen",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Índice Acordeón de Tópicos Editoriales · Neo-Brutalism",
        "componentId": "blog-topics-accordion-neo-brutalist",
        "description": "Variante Neo-Brutalism de Índice Acordeón de Tópicos Editoriales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Índice Acordeón de Tópicos Editoriales · Glassmorphism",
        "componentId": "blog-topics-accordion-glassmorphic",
        "description": "Variante Glassmorphism de Índice Acordeón de Tópicos Editoriales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Índice Acordeón de Tópicos Editoriales · Liquid Glass",
        "componentId": "blog-topics-accordion-liquid-glass",
        "description": "Variante Liquid Glass de Índice Acordeón de Tópicos Editoriales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Índice Acordeón de Tópicos Editoriales · Neumorphism",
        "componentId": "blog-topics-accordion-neumorphic",
        "description": "Variante Neumorphism de Índice Acordeón de Tópicos Editoriales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Índice Acordeón de Tópicos Editoriales · Claymorphism",
        "componentId": "blog-topics-accordion-claymorphic",
        "description": "Variante Claymorphism de Índice Acordeón de Tópicos Editoriales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Índice Acordeón de Tópicos Editoriales · Minimalism",
        "componentId": "blog-topics-accordion-minimalist",
        "description": "Variante Minimalism de Índice Acordeón de Tópicos Editoriales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Índice Acordeón de Tópicos Editoriales · Cyberpunk",
        "componentId": "blog-topics-accordion-cyberpunk",
        "description": "Variante Cyberpunk de Índice Acordeón de Tópicos Editoriales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "newsletter-digest-wizard",
    "name": "Asistente Wizard de Boletín Médico (Digest Stepper)",
    "category": "modals",
    "categoryLabel": "Modales & Diálogos",
    "summary": "Modal interactivo de 3 pasos para redacción, segmentación de pacientes y despacho con firma institucional.",
    "iconName": "Mail",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Asistente Wizard de Boletín Médico (Digest Stepper) · Neo-Brutalism",
        "componentId": "newsletter-digest-wizard-neo-brutalist",
        "description": "Variante Neo-Brutalism de Asistente Wizard de Boletín Médico (Digest Stepper). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Asistente Wizard de Boletín Médico (Digest Stepper) · Glassmorphism",
        "componentId": "newsletter-digest-wizard-glassmorphic",
        "description": "Variante Glassmorphism de Asistente Wizard de Boletín Médico (Digest Stepper). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Asistente Wizard de Boletín Médico (Digest Stepper) · Liquid Glass",
        "componentId": "newsletter-digest-wizard-liquid-glass",
        "description": "Variante Liquid Glass de Asistente Wizard de Boletín Médico (Digest Stepper). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Asistente Wizard de Boletín Médico (Digest Stepper) · Neumorphism",
        "componentId": "newsletter-digest-wizard-neumorphic",
        "description": "Variante Neumorphism de Asistente Wizard de Boletín Médico (Digest Stepper). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Asistente Wizard de Boletín Médico (Digest Stepper) · Claymorphism",
        "componentId": "newsletter-digest-wizard-claymorphic",
        "description": "Variante Claymorphism de Asistente Wizard de Boletín Médico (Digest Stepper). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Asistente Wizard de Boletín Médico (Digest Stepper) · Minimalism",
        "componentId": "newsletter-digest-wizard-minimalist",
        "description": "Variante Minimalism de Asistente Wizard de Boletín Médico (Digest Stepper). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Asistente Wizard de Boletín Médico (Digest Stepper) · Cyberpunk",
        "componentId": "newsletter-digest-wizard-cyberpunk",
        "description": "Variante Cyberpunk de Asistente Wizard de Boletín Médico (Digest Stepper). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "sri-credentials-modal",
    "name": "Configuración de Firma Electrónica SRI (.p12)",
    "category": "modals",
    "categoryLabel": "Modales & Diálogos",
    "summary": "Modal de credenciales tributarias para subida de certificado .p12, clave y switch de ambiente SRI.",
    "iconName": "Key",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Configuración de Firma Electrónica SRI (.p12) · Neo-Brutalism",
        "componentId": "sri-credentials-modal-neo-brutalist",
        "description": "Variante Neo-Brutalism de Configuración de Firma Electrónica SRI (.p12). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Configuración de Firma Electrónica SRI (.p12) · Glassmorphism",
        "componentId": "sri-credentials-modal-glassmorphic",
        "description": "Variante Glassmorphism de Configuración de Firma Electrónica SRI (.p12). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Configuración de Firma Electrónica SRI (.p12) · Liquid Glass",
        "componentId": "sri-credentials-modal-liquid-glass",
        "description": "Variante Liquid Glass de Configuración de Firma Electrónica SRI (.p12). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Configuración de Firma Electrónica SRI (.p12) · Neumorphism",
        "componentId": "sri-credentials-modal-neumorphic",
        "description": "Variante Neumorphism de Configuración de Firma Electrónica SRI (.p12). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Configuración de Firma Electrónica SRI (.p12) · Claymorphism",
        "componentId": "sri-credentials-modal-claymorphic",
        "description": "Variante Claymorphism de Configuración de Firma Electrónica SRI (.p12). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Configuración de Firma Electrónica SRI (.p12) · Minimalism",
        "componentId": "sri-credentials-modal-minimalist",
        "description": "Variante Minimalism de Configuración de Firma Electrónica SRI (.p12). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Configuración de Firma Electrónica SRI (.p12) · Cyberpunk",
        "componentId": "sri-credentials-modal-cyberpunk",
        "description": "Variante Cyberpunk de Configuración de Firma Electrónica SRI (.p12). Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "medical-certificate-modal",
    "name": "Emisión de Certificado Médico con Reposo",
    "category": "modals",
    "categoryLabel": "Modales & Diálogos",
    "summary": "Modal legal para expedición de certificados de reposo laboral con validación CIE-10 y sello QR.",
    "iconName": "FileBadge",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Emisión de Certificado Médico con Reposo · Neo-Brutalism",
        "componentId": "medical-certificate-modal-neo-brutalist",
        "description": "Variante Neo-Brutalism de Emisión de Certificado Médico con Reposo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Emisión de Certificado Médico con Reposo · Glassmorphism",
        "componentId": "medical-certificate-modal-glassmorphic",
        "description": "Variante Glassmorphism de Emisión de Certificado Médico con Reposo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Emisión de Certificado Médico con Reposo · Liquid Glass",
        "componentId": "medical-certificate-modal-liquid-glass",
        "description": "Variante Liquid Glass de Emisión de Certificado Médico con Reposo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Emisión de Certificado Médico con Reposo · Neumorphism",
        "componentId": "medical-certificate-modal-neumorphic",
        "description": "Variante Neumorphism de Emisión de Certificado Médico con Reposo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Emisión de Certificado Médico con Reposo · Claymorphism",
        "componentId": "medical-certificate-modal-claymorphic",
        "description": "Variante Claymorphism de Emisión de Certificado Médico con Reposo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Emisión de Certificado Médico con Reposo · Minimalism",
        "componentId": "medical-certificate-modal-minimalist",
        "description": "Variante Minimalism de Emisión de Certificado Médico con Reposo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Emisión de Certificado Médico con Reposo · Cyberpunk",
        "componentId": "medical-certificate-modal-cyberpunk",
        "description": "Variante Cyberpunk de Emisión de Certificado Médico con Reposo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "media-picker-modal",
    "name": "Selector Universal de Medios & Galería",
    "category": "modals",
    "categoryLabel": "Modales & Diálogos",
    "summary": "Modal selector de imágenes y documentos clínicos con cuadrícula de selección y formatos WebP.",
    "iconName": "Image",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Selector Universal de Medios & Galería · Neo-Brutalism",
        "componentId": "media-picker-modal-neo-brutalist",
        "description": "Variante Neo-Brutalism de Selector Universal de Medios & Galería. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Selector Universal de Medios & Galería · Glassmorphism",
        "componentId": "media-picker-modal-glassmorphic",
        "description": "Variante Glassmorphism de Selector Universal de Medios & Galería. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Selector Universal de Medios & Galería · Liquid Glass",
        "componentId": "media-picker-modal-liquid-glass",
        "description": "Variante Liquid Glass de Selector Universal de Medios & Galería. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Selector Universal de Medios & Galería · Neumorphism",
        "componentId": "media-picker-modal-neumorphic",
        "description": "Variante Neumorphism de Selector Universal de Medios & Galería. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Selector Universal de Medios & Galería · Claymorphism",
        "componentId": "media-picker-modal-claymorphic",
        "description": "Variante Claymorphism de Selector Universal de Medios & Galería. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Selector Universal de Medios & Galería · Minimalism",
        "componentId": "media-picker-modal-minimalist",
        "description": "Variante Minimalism de Selector Universal de Medios & Galería. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Selector Universal de Medios & Galería · Cyberpunk",
        "componentId": "media-picker-modal-cyberpunk",
        "description": "Variante Cyberpunk de Selector Universal de Medios & Galería. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "album-lightbox-modal",
    "name": "Visor Lightbox de Fotografías Clínicas",
    "category": "modals",
    "categoryLabel": "Modales & Diálogos",
    "summary": "Modal de visualización de fotos en alta resolución con controles de navegación previa/siguiente y pie explicativo.",
    "iconName": "Maximize2",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Visor Lightbox de Fotografías Clínicas · Neo-Brutalism",
        "componentId": "album-lightbox-modal-neo-brutalist",
        "description": "Variante Neo-Brutalism de Visor Lightbox de Fotografías Clínicas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Visor Lightbox de Fotografías Clínicas · Glassmorphism",
        "componentId": "album-lightbox-modal-glassmorphic",
        "description": "Variante Glassmorphism de Visor Lightbox de Fotografías Clínicas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Visor Lightbox de Fotografías Clínicas · Liquid Glass",
        "componentId": "album-lightbox-modal-liquid-glass",
        "description": "Variante Liquid Glass de Visor Lightbox de Fotografías Clínicas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Visor Lightbox de Fotografías Clínicas · Neumorphism",
        "componentId": "album-lightbox-modal-neumorphic",
        "description": "Variante Neumorphism de Visor Lightbox de Fotografías Clínicas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Visor Lightbox de Fotografías Clínicas · Claymorphism",
        "componentId": "album-lightbox-modal-claymorphic",
        "description": "Variante Claymorphism de Visor Lightbox de Fotografías Clínicas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Visor Lightbox de Fotografías Clínicas · Minimalism",
        "componentId": "album-lightbox-modal-minimalist",
        "description": "Variante Minimalism de Visor Lightbox de Fotografías Clínicas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Visor Lightbox de Fotografías Clínicas · Cyberpunk",
        "componentId": "album-lightbox-modal-cyberpunk",
        "description": "Variante Cyberpunk de Visor Lightbox de Fotografías Clínicas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "patient-directory-table",
    "name": "Directorio de Pacientes con Búsqueda en Vivo",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Tabla interactiva de expedientes con filtrado por cédula, edad, fecha de atención y acceso a historia.",
    "iconName": "Users",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Directorio de Pacientes con Búsqueda en Vivo · Neo-Brutalism",
        "componentId": "patient-directory-table-neo-brutalist",
        "description": "Variante Neo-Brutalism de Directorio de Pacientes con Búsqueda en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Directorio de Pacientes con Búsqueda en Vivo · Glassmorphism",
        "componentId": "patient-directory-table-glassmorphic",
        "description": "Variante Glassmorphism de Directorio de Pacientes con Búsqueda en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Directorio de Pacientes con Búsqueda en Vivo · Liquid Glass",
        "componentId": "patient-directory-table-liquid-glass",
        "description": "Variante Liquid Glass de Directorio de Pacientes con Búsqueda en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Directorio de Pacientes con Búsqueda en Vivo · Neumorphism",
        "componentId": "patient-directory-table-neumorphic",
        "description": "Variante Neumorphism de Directorio de Pacientes con Búsqueda en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Directorio de Pacientes con Búsqueda en Vivo · Claymorphism",
        "componentId": "patient-directory-table-claymorphic",
        "description": "Variante Claymorphism de Directorio de Pacientes con Búsqueda en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Directorio de Pacientes con Búsqueda en Vivo · Minimalism",
        "componentId": "patient-directory-table-minimalist",
        "description": "Variante Minimalism de Directorio de Pacientes con Búsqueda en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Directorio de Pacientes con Búsqueda en Vivo · Cyberpunk",
        "componentId": "patient-directory-table-cyberpunk",
        "description": "Variante Cyberpunk de Directorio de Pacientes con Búsqueda en Vivo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "prescriptions-issued-table",
    "name": "Historial de Recetas Electrónicas Emitidas",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Tabla clínica de prescripciones con código correlativo, diagnóstico CIE-10 y verificación criptográfica.",
    "iconName": "FileText",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Historial de Recetas Electrónicas Emitidas · Neo-Brutalism",
        "componentId": "prescriptions-issued-table-neo-brutalist",
        "description": "Variante Neo-Brutalism de Historial de Recetas Electrónicas Emitidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Historial de Recetas Electrónicas Emitidas · Glassmorphism",
        "componentId": "prescriptions-issued-table-glassmorphic",
        "description": "Variante Glassmorphism de Historial de Recetas Electrónicas Emitidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Historial de Recetas Electrónicas Emitidas · Liquid Glass",
        "componentId": "prescriptions-issued-table-liquid-glass",
        "description": "Variante Liquid Glass de Historial de Recetas Electrónicas Emitidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Historial de Recetas Electrónicas Emitidas · Neumorphism",
        "componentId": "prescriptions-issued-table-neumorphic",
        "description": "Variante Neumorphism de Historial de Recetas Electrónicas Emitidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Historial de Recetas Electrónicas Emitidas · Claymorphism",
        "componentId": "prescriptions-issued-table-claymorphic",
        "description": "Variante Claymorphism de Historial de Recetas Electrónicas Emitidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Historial de Recetas Electrónicas Emitidas · Minimalism",
        "componentId": "prescriptions-issued-table-minimalist",
        "description": "Variante Minimalism de Historial de Recetas Electrónicas Emitidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Historial de Recetas Electrónicas Emitidas · Cyberpunk",
        "componentId": "prescriptions-issued-table-cyberpunk",
        "description": "Variante Cyberpunk de Historial de Recetas Electrónicas Emitidas. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "newsletter-subscribers-table",
    "name": "Tabla de Suscriptores con Exportación CSV",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Gestor de suscriptores al boletín médico con estado de doble opt-in y herramienta de exportación.",
    "iconName": "Mail",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Tabla de Suscriptores con Exportación CSV · Neo-Brutalism",
        "componentId": "newsletter-subscribers-table-neo-brutalist",
        "description": "Variante Neo-Brutalism de Tabla de Suscriptores con Exportación CSV. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Tabla de Suscriptores con Exportación CSV · Glassmorphism",
        "componentId": "newsletter-subscribers-table-glassmorphic",
        "description": "Variante Glassmorphism de Tabla de Suscriptores con Exportación CSV. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Tabla de Suscriptores con Exportación CSV · Liquid Glass",
        "componentId": "newsletter-subscribers-table-liquid-glass",
        "description": "Variante Liquid Glass de Tabla de Suscriptores con Exportación CSV. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Tabla de Suscriptores con Exportación CSV · Neumorphism",
        "componentId": "newsletter-subscribers-table-neumorphic",
        "description": "Variante Neumorphism de Tabla de Suscriptores con Exportación CSV. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Tabla de Suscriptores con Exportación CSV · Claymorphism",
        "componentId": "newsletter-subscribers-table-claymorphic",
        "description": "Variante Claymorphism de Tabla de Suscriptores con Exportación CSV. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Tabla de Suscriptores con Exportación CSV · Minimalism",
        "componentId": "newsletter-subscribers-table-minimalist",
        "description": "Variante Minimalism de Tabla de Suscriptores con Exportación CSV. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Tabla de Suscriptores con Exportación CSV · Cyberpunk",
        "componentId": "newsletter-subscribers-table-cyberpunk",
        "description": "Variante Cyberpunk de Tabla de Suscriptores con Exportación CSV. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "sri-invoices-table",
    "name": "Tabla de Facturas Autorizadas SRI",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Comprobantes electrónicos autorizados por el SRI con desglose de montos y descarga de RIDE en PDF.",
    "iconName": "Receipt",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Tabla de Facturas Autorizadas SRI · Neo-Brutalism",
        "componentId": "sri-invoices-table-neo-brutalist",
        "description": "Variante Neo-Brutalism de Tabla de Facturas Autorizadas SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Tabla de Facturas Autorizadas SRI · Glassmorphism",
        "componentId": "sri-invoices-table-glassmorphic",
        "description": "Variante Glassmorphism de Tabla de Facturas Autorizadas SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Tabla de Facturas Autorizadas SRI · Liquid Glass",
        "componentId": "sri-invoices-table-liquid-glass",
        "description": "Variante Liquid Glass de Tabla de Facturas Autorizadas SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Tabla de Facturas Autorizadas SRI · Neumorphism",
        "componentId": "sri-invoices-table-neumorphic",
        "description": "Variante Neumorphism de Tabla de Facturas Autorizadas SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Tabla de Facturas Autorizadas SRI · Claymorphism",
        "componentId": "sri-invoices-table-claymorphic",
        "description": "Variante Claymorphism de Tabla de Facturas Autorizadas SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Tabla de Facturas Autorizadas SRI · Minimalism",
        "componentId": "sri-invoices-table-minimalist",
        "description": "Variante Minimalism de Tabla de Facturas Autorizadas SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Tabla de Facturas Autorizadas SRI · Cyberpunk",
        "componentId": "sri-invoices-table-cyberpunk",
        "description": "Variante Cyberpunk de Tabla de Facturas Autorizadas SRI. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "triage-consultation-form",
    "name": "Formulario de Triaje & Constantes Vitales",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Registro clínico de presión arterial, frecuencia cardíaca, temperatura y motivo de consulta.",
    "iconName": "Activity",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Formulario de Triaje & Constantes Vitales · Neo-Brutalism",
        "componentId": "triage-consultation-form-neo-brutalist",
        "description": "Variante Neo-Brutalism de Formulario de Triaje & Constantes Vitales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Formulario de Triaje & Constantes Vitales · Glassmorphism",
        "componentId": "triage-consultation-form-glassmorphic",
        "description": "Variante Glassmorphism de Formulario de Triaje & Constantes Vitales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Formulario de Triaje & Constantes Vitales · Liquid Glass",
        "componentId": "triage-consultation-form-liquid-glass",
        "description": "Variante Liquid Glass de Formulario de Triaje & Constantes Vitales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Formulario de Triaje & Constantes Vitales · Neumorphism",
        "componentId": "triage-consultation-form-neumorphic",
        "description": "Variante Neumorphism de Formulario de Triaje & Constantes Vitales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Formulario de Triaje & Constantes Vitales · Claymorphism",
        "componentId": "triage-consultation-form-claymorphic",
        "description": "Variante Claymorphism de Formulario de Triaje & Constantes Vitales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Formulario de Triaje & Constantes Vitales · Minimalism",
        "componentId": "triage-consultation-form-minimalist",
        "description": "Variante Minimalism de Formulario de Triaje & Constantes Vitales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Formulario de Triaje & Constantes Vitales · Cyberpunk",
        "componentId": "triage-consultation-form-cyberpunk",
        "description": "Variante Cyberpunk de Formulario de Triaje & Constantes Vitales. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "prescription-writer-form",
    "name": "Creador de Prescripción Farmacológica",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Formulario de dosimetría médica con selector de principio activo, posología horaria y duración.",
    "iconName": "Pill",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Creador de Prescripción Farmacológica · Neo-Brutalism",
        "componentId": "prescription-writer-form-neo-brutalist",
        "description": "Variante Neo-Brutalism de Creador de Prescripción Farmacológica. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Creador de Prescripción Farmacológica · Glassmorphism",
        "componentId": "prescription-writer-form-glassmorphic",
        "description": "Variante Glassmorphism de Creador de Prescripción Farmacológica. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Creador de Prescripción Farmacológica · Liquid Glass",
        "componentId": "prescription-writer-form-liquid-glass",
        "description": "Variante Liquid Glass de Creador de Prescripción Farmacológica. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Creador de Prescripción Farmacológica · Neumorphism",
        "componentId": "prescription-writer-form-neumorphic",
        "description": "Variante Neumorphism de Creador de Prescripción Farmacológica. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Creador de Prescripción Farmacológica · Claymorphism",
        "componentId": "prescription-writer-form-claymorphic",
        "description": "Variante Claymorphism de Creador de Prescripción Farmacológica. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Creador de Prescripción Farmacológica · Minimalism",
        "componentId": "prescription-writer-form-minimalist",
        "description": "Variante Minimalism de Creador de Prescripción Farmacológica. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Creador de Prescripción Farmacológica · Cyberpunk",
        "componentId": "prescription-writer-form-cyberpunk",
        "description": "Variante Cyberpunk de Creador de Prescripción Farmacológica. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "patient-intake-form",
    "name": "Formulario de Alta & Registro de Paciente",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Captura de datos personales con validación de cédula de Ecuador Módulo 10 y contacto de emergencia.",
    "iconName": "UserPlus",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Formulario de Alta & Registro de Paciente · Neo-Brutalism",
        "componentId": "patient-intake-form-neo-brutalist",
        "description": "Variante Neo-Brutalism de Formulario de Alta & Registro de Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Formulario de Alta & Registro de Paciente · Glassmorphism",
        "componentId": "patient-intake-form-glassmorphic",
        "description": "Variante Glassmorphism de Formulario de Alta & Registro de Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Formulario de Alta & Registro de Paciente · Liquid Glass",
        "componentId": "patient-intake-form-liquid-glass",
        "description": "Variante Liquid Glass de Formulario de Alta & Registro de Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Formulario de Alta & Registro de Paciente · Neumorphism",
        "componentId": "patient-intake-form-neumorphic",
        "description": "Variante Neumorphism de Formulario de Alta & Registro de Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Formulario de Alta & Registro de Paciente · Claymorphism",
        "componentId": "patient-intake-form-claymorphic",
        "description": "Variante Claymorphism de Formulario de Alta & Registro de Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Formulario de Alta & Registro de Paciente · Minimalism",
        "componentId": "patient-intake-form-minimalist",
        "description": "Variante Minimalism de Formulario de Alta & Registro de Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Formulario de Alta & Registro de Paciente · Cyberpunk",
        "componentId": "patient-intake-form-cyberpunk",
        "description": "Variante Cyberpunk de Formulario de Alta & Registro de Paciente. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "campaign-registration-form",
    "name": "Formulario de Inscripción a Jornadas de Salud",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Tarjeta de registro para jornadas preventivas con selección de turno matutino/vespertino.",
    "iconName": "Sparkles",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Formulario de Inscripción a Jornadas de Salud · Neo-Brutalism",
        "componentId": "campaign-registration-form-neo-brutalist",
        "description": "Variante Neo-Brutalism de Formulario de Inscripción a Jornadas de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Formulario de Inscripción a Jornadas de Salud · Glassmorphism",
        "componentId": "campaign-registration-form-glassmorphic",
        "description": "Variante Glassmorphism de Formulario de Inscripción a Jornadas de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Formulario de Inscripción a Jornadas de Salud · Liquid Glass",
        "componentId": "campaign-registration-form-liquid-glass",
        "description": "Variante Liquid Glass de Formulario de Inscripción a Jornadas de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Formulario de Inscripción a Jornadas de Salud · Neumorphism",
        "componentId": "campaign-registration-form-neumorphic",
        "description": "Variante Neumorphism de Formulario de Inscripción a Jornadas de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Formulario de Inscripción a Jornadas de Salud · Claymorphism",
        "componentId": "campaign-registration-form-claymorphic",
        "description": "Variante Claymorphism de Formulario de Inscripción a Jornadas de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Formulario de Inscripción a Jornadas de Salud · Minimalism",
        "componentId": "campaign-registration-form-minimalist",
        "description": "Variante Minimalism de Formulario de Inscripción a Jornadas de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Formulario de Inscripción a Jornadas de Salud · Cyberpunk",
        "componentId": "campaign-registration-form-cyberpunk",
        "description": "Variante Cyberpunk de Formulario de Inscripción a Jornadas de Salud. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "partner-coverage-card",
    "name": "Tarjeta de Cobertura con Aseguradoras",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Tarjeta de convenio de salud (Saludsa, Humana, Bupa) con porcentaje de cobertura y línea de atención.",
    "iconName": "ShieldCheck",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Tarjeta de Cobertura con Aseguradoras · Neo-Brutalism",
        "componentId": "partner-coverage-card-neo-brutalist",
        "description": "Variante Neo-Brutalism de Tarjeta de Cobertura con Aseguradoras. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Tarjeta de Cobertura con Aseguradoras · Glassmorphism",
        "componentId": "partner-coverage-card-glassmorphic",
        "description": "Variante Glassmorphism de Tarjeta de Cobertura con Aseguradoras. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Tarjeta de Cobertura con Aseguradoras · Liquid Glass",
        "componentId": "partner-coverage-card-liquid-glass",
        "description": "Variante Liquid Glass de Tarjeta de Cobertura con Aseguradoras. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Tarjeta de Cobertura con Aseguradoras · Neumorphism",
        "componentId": "partner-coverage-card-neumorphic",
        "description": "Variante Neumorphism de Tarjeta de Cobertura con Aseguradoras. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Tarjeta de Cobertura con Aseguradoras · Claymorphism",
        "componentId": "partner-coverage-card-claymorphic",
        "description": "Variante Claymorphism de Tarjeta de Cobertura con Aseguradoras. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Tarjeta de Cobertura con Aseguradoras · Minimalism",
        "componentId": "partner-coverage-card-minimalist",
        "description": "Variante Minimalism de Tarjeta de Cobertura con Aseguradoras. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Tarjeta de Cobertura con Aseguradoras · Cyberpunk",
        "componentId": "partner-coverage-card-cyberpunk",
        "description": "Variante Cyberpunk de Tarjeta de Cobertura con Aseguradoras. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "medical-branch-card",
    "name": "Tarjeta de Rama Clínica & Especialidad",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Tarjeta institucional de especialidad con lista de prestaciones médicas y botón de agendamiento.",
    "iconName": "Stethoscope",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Tarjeta de Rama Clínica & Especialidad · Neo-Brutalism",
        "componentId": "medical-branch-card-neo-brutalist",
        "description": "Variante Neo-Brutalism de Tarjeta de Rama Clínica & Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Tarjeta de Rama Clínica & Especialidad · Glassmorphism",
        "componentId": "medical-branch-card-glassmorphic",
        "description": "Variante Glassmorphism de Tarjeta de Rama Clínica & Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Tarjeta de Rama Clínica & Especialidad · Liquid Glass",
        "componentId": "medical-branch-card-liquid-glass",
        "description": "Variante Liquid Glass de Tarjeta de Rama Clínica & Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Tarjeta de Rama Clínica & Especialidad · Neumorphism",
        "componentId": "medical-branch-card-neumorphic",
        "description": "Variante Neumorphism de Tarjeta de Rama Clínica & Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Tarjeta de Rama Clínica & Especialidad · Claymorphism",
        "componentId": "medical-branch-card-claymorphic",
        "description": "Variante Claymorphism de Tarjeta de Rama Clínica & Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Tarjeta de Rama Clínica & Especialidad · Minimalism",
        "componentId": "medical-branch-card-minimalist",
        "description": "Variante Minimalism de Tarjeta de Rama Clínica & Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Tarjeta de Rama Clínica & Especialidad · Cyberpunk",
        "componentId": "medical-branch-card-cyberpunk",
        "description": "Variante Cyberpunk de Tarjeta de Rama Clínica & Especialidad. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "service-offering-card",
    "name": "Tarjeta de Servicio Clínico con Precio Fijo",
    "category": "cards",
    "categoryLabel": "Cards & Precios",
    "summary": "Tarjeta de procedimiento médico individual con duración en minutos, honorarios en USD y requisitos.",
    "iconName": "Clock",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Tarjeta de Servicio Clínico con Precio Fijo · Neo-Brutalism",
        "componentId": "service-offering-card-neo-brutalist",
        "description": "Variante Neo-Brutalism de Tarjeta de Servicio Clínico con Precio Fijo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Tarjeta de Servicio Clínico con Precio Fijo · Glassmorphism",
        "componentId": "service-offering-card-glassmorphic",
        "description": "Variante Glassmorphism de Tarjeta de Servicio Clínico con Precio Fijo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Tarjeta de Servicio Clínico con Precio Fijo · Liquid Glass",
        "componentId": "service-offering-card-liquid-glass",
        "description": "Variante Liquid Glass de Tarjeta de Servicio Clínico con Precio Fijo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Tarjeta de Servicio Clínico con Precio Fijo · Neumorphism",
        "componentId": "service-offering-card-neumorphic",
        "description": "Variante Neumorphism de Tarjeta de Servicio Clínico con Precio Fijo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Tarjeta de Servicio Clínico con Precio Fijo · Claymorphism",
        "componentId": "service-offering-card-claymorphic",
        "description": "Variante Claymorphism de Tarjeta de Servicio Clínico con Precio Fijo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Tarjeta de Servicio Clínico con Precio Fijo · Minimalism",
        "componentId": "service-offering-card-minimalist",
        "description": "Variante Minimalism de Tarjeta de Servicio Clínico con Precio Fijo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Tarjeta de Servicio Clínico con Precio Fijo · Cyberpunk",
        "componentId": "service-offering-card-cyberpunk",
        "description": "Variante Cyberpunk de Tarjeta de Servicio Clínico con Precio Fijo. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "campaign-video-card",
    "name": "Tarjeta de Video Médico Enmarcado",
    "category": "carousels",
    "categoryLabel": "Carruseles & Sliders",
    "summary": "Reproductor de video institucional enmarcado con badge de duración y transcripción médica.",
    "iconName": "Play",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Tarjeta de Video Médico Enmarcado · Neo-Brutalism",
        "componentId": "campaign-video-card-neo-brutalist",
        "description": "Variante Neo-Brutalism de Tarjeta de Video Médico Enmarcado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Tarjeta de Video Médico Enmarcado · Glassmorphism",
        "componentId": "campaign-video-card-glassmorphic",
        "description": "Variante Glassmorphism de Tarjeta de Video Médico Enmarcado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Tarjeta de Video Médico Enmarcado · Liquid Glass",
        "componentId": "campaign-video-card-liquid-glass",
        "description": "Variante Liquid Glass de Tarjeta de Video Médico Enmarcado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Tarjeta de Video Médico Enmarcado · Neumorphism",
        "componentId": "campaign-video-card-neumorphic",
        "description": "Variante Neumorphism de Tarjeta de Video Médico Enmarcado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Tarjeta de Video Médico Enmarcado · Claymorphism",
        "componentId": "campaign-video-card-claymorphic",
        "description": "Variante Claymorphism de Tarjeta de Video Médico Enmarcado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Tarjeta de Video Médico Enmarcado · Minimalism",
        "componentId": "campaign-video-card-minimalist",
        "description": "Variante Minimalism de Tarjeta de Video Médico Enmarcado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Tarjeta de Video Médico Enmarcado · Cyberpunk",
        "componentId": "campaign-video-card-cyberpunk",
        "description": "Variante Cyberpunk de Tarjeta de Video Médico Enmarcado. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  },
  {
    "id": "route-notification-toast",
    "name": "Toast Flotante de Notificación del Sistema",
    "category": "widgets",
    "categoryLabel": "Widgets & Herramientas",
    "summary": "Micro-alerta flotante de confirmación de cita o receta con botón de cierre y estilo de éxito.",
    "iconName": "CheckCircle2",
    "isPolymorphic": true,
    "variants": [
      {
        "style": "neo-brutalism",
        "title": "Toast Flotante de Notificación del Sistema · Neo-Brutalism",
        "componentId": "route-notification-toast-neo-brutalist",
        "description": "Variante Neo-Brutalism de Toast Flotante de Notificación del Sistema. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "glassmorphism",
        "title": "Toast Flotante de Notificación del Sistema · Glassmorphism",
        "componentId": "route-notification-toast-glassmorphic",
        "description": "Variante Glassmorphism de Toast Flotante de Notificación del Sistema. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "liquid-glass",
        "title": "Toast Flotante de Notificación del Sistema · Liquid Glass",
        "componentId": "route-notification-toast-liquid-glass",
        "description": "Variante Liquid Glass de Toast Flotante de Notificación del Sistema. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "neumorphism",
        "title": "Toast Flotante de Notificación del Sistema · Neumorphism",
        "componentId": "route-notification-toast-neumorphic",
        "description": "Variante Neumorphism de Toast Flotante de Notificación del Sistema. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "claymorphism",
        "title": "Toast Flotante de Notificación del Sistema · Claymorphism",
        "componentId": "route-notification-toast-claymorphic",
        "description": "Variante Claymorphism de Toast Flotante de Notificación del Sistema. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "minimalism",
        "title": "Toast Flotante de Notificación del Sistema · Minimalism",
        "componentId": "route-notification-toast-minimalist",
        "description": "Variante Minimalism de Toast Flotante de Notificación del Sistema. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      },
      {
        "style": "cyberpunk",
        "title": "Toast Flotante de Notificación del Sistema · Cyberpunk",
        "componentId": "route-notification-toast-cyberpunk",
        "description": "Variante Cyberpunk de Toast Flotante de Notificación del Sistema. Arquitectura polimórfica 100% simétrica con código limpio TypeScript."
      }
    ]
  }
];

export function getFamilyById(id: string): ChameleonFamily | undefined {
  return CHAMELEON_FAMILIES.find((f) => f.id === id);
}

export function getFamiliesByCategory(category: string): ChameleonFamily[] {
  if (category === "all") return CHAMELEON_FAMILIES;
  return CHAMELEON_FAMILIES.filter((f) => f.category === category);
}

export function getVariant(familyId: string, styleId: string): ChameleonVariant | undefined {
  const family = getFamilyById(familyId);
  if (!family) return undefined;
  return family.variants.find((v) => v.style === styleId);
}
