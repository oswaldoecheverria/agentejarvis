import React, { useEffect, useState, useMemo } from "react";
import {
  Sparkles,
  Layers,
  Code2,
  Copy,
  Check,
  Search,
  Calendar,
  Eye,
  Sun,
  Moon,
  Wand2,
  MonitorPlay,
  Palette,
  LayoutGrid,
  Sliders,
  SplitSquareVertical,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  CreditCard,
  User,
  Compass,
  Quote,
  Clock,
  Calculator,
  Grid,
  Lock,
} from "lucide-react";
import { ComponentRegistry } from "./registry";
import {
  CHAMELEON_FAMILIES,
  ChameleonFamily,
  ELEMENT_CATEGORIES,
} from "./chameleonFamilies";

interface ComponentItem {
  id: string;
  title: string;
  category: string;
  style?: string;
  tags: string[];
  author?: string;
  sourceUrl?: string;
  addedAt?: string;
  description: string;
  componentFile: string;
  code?: string;
}

interface SourceItem {
  id: string;
  name: string;
  url: string;
  lastScanned: string;
  status: string;
  componentsCount: number;
}

interface SafeRenderProps {
  children: React.ReactNode;
  fallbackName?: string;
}

interface SafeRenderState {
  hasError: boolean;
  error?: Error;
}

class SafeRender extends React.Component<SafeRenderProps, SafeRenderState> {
  constructor(props: SafeRenderProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("SafeRender atrapó un error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-rose-300 bg-rose-50 p-4 text-center font-sans text-rose-800">
          <p className="text-xs font-bold">Error en {this.props.fallbackName || "componente"}</p>
          <p className="mt-1 font-mono text-[10px] text-rose-600 line-clamp-2">
            {this.state.error?.message || "Error al renderizar"}
          </p>
        </div>
      );
    }
    return (
      <React.Suspense
        fallback={
          <div className="flex min-h-[160px] w-full items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-6 text-center text-xs font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
              <span>Cargando vista previa...</span>
            </div>
          </div>
        }
      >
        {this.props.children}
      </React.Suspense>
    );
  }
}

export function App() {
  const [catalog, setCatalog] = useState<ComponentItem[]>([]);
  const [sources, setSources] = useState<SourceItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Modo de visualización:
  // "chameleon" = Vista de familias polimórficas con conmutador de 7 estilos (predeterminado)
  // "catalog" = Lista completa de todos los componentes individuales
  const [displayMode, setDisplayMode] = useState<"catalog" | "chameleon">("chameleon");
  const [visibleCount, setVisibleCount] = useState<number>(24);

  // Categoría Principal de Elemento Web (cards, widgets, heros, testimonials, navbars, faq, modals, carousels, all)
  const [selectedElementCategory, setSelectedElementCategory] = useState<string>("all");

  // Filtro Secundario por Estilo Visual
  const [selectedStyle, setSelectedStyle] = useState<string>("all");

  // Chameleon Matrix state: cuál variante está activa por familia
  const [familyStyleMap, setFamilyStyleMap] = useState<Record<string, string>>({});
  // Modo comparativa lado a lado por familia
  const [compareMap, setCompareMap] = useState<Record<string, boolean>>({});

  // Búsqueda en vivo
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fondo de Escenario (Claro, Blanco, Oscuro)
  const [globalStageBg, setGlobalStageBg] = useState<"light" | "white" | "dark">("light");
  const [stageBgMap, setStageBgMap] = useState<Record<string, "light" | "white" | "dark">>({});

  // Pestaña activa por tarjeta: "preview" vs "code"
  const [activeTabMap, setActiveTabMap] = useState<Record<string, "preview" | "code">>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showSourcesModal, setShowSourcesModal] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/data");
      const json = await res.json();
      setCatalog(json.catalog || []);
      setSources(json.sources || []);
    } catch (err) {
      console.error("Error cargando datos del catálogo:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCopyCode = (id: string, code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Contadores de elementos funcionales únicos (cada elemento funcional cuenta como 1, sin inflar por los 7 estilos)
  const functionalElementCounts = useMemo(() => {
    const counts: Record<string, number> = { all: CHAMELEON_FAMILIES.length };
    CHAMELEON_FAMILIES.forEach((fam) => {
      counts[fam.category] = (counts[fam.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Lista filtrada del catálogo completo (145 componentes)
  const filteredCatalog = useMemo(() => {
    return catalog.filter((item) => {
      const matchesCategory =
        selectedElementCategory === "all" || item.category === selectedElementCategory;
      const matchesStyle = selectedStyle === "all" || item.style === selectedStyle;
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        (item.style && item.style.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesStyle && matchesSearch;
    });
  }, [catalog, selectedElementCategory, selectedStyle, searchQuery]);

  // Lista filtrada de Familias Camaleón
  const filteredChameleonFamilies = useMemo(() => {
    return CHAMELEON_FAMILIES.filter((fam) => {
      const matchesCategory =
        selectedElementCategory === "all" || fam.category === selectedElementCategory;
      const matchesSearch =
        searchQuery === "" ||
        fam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fam.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fam.variants.some(
          (v) =>
            v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            v.style.toLowerCase().includes(searchQuery.toLowerCase()) ||
            v.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedElementCategory, searchQuery]);

  // Helper para iconos de categorías
  const getCategoryIcon = (catId: string, className = "h-4 w-4") => {
    switch (catId) {
      case "cards":
        return <CreditCard className={className} />;
      case "widgets":
        return <Sliders className={className} />;
      case "heros":
        return <Sparkles className={className} />;
      case "testimonials":
        return <Quote className={className} />;
      case "navbars":
        return <Compass className={className} />;
      case "faq":
        return <HelpCircle className={className} />;
      case "modals":
        return <Lock className={className} />;
      case "carousels":
        return <Layers className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  // Helper para estilos
  const getStyleBadgeStyle = (style?: string) => {
    switch (style) {
      case "neo-brutalism":
        return "border-2 border-black bg-amber-300 text-black shadow-[2px_2px_0px_#000] font-black";
      case "glassmorphism":
        return "border border-emerald-400/50 bg-emerald-500/10 text-emerald-800 backdrop-blur-xs font-bold";
      case "liquid-glass":
        return "border border-cyan-400/60 bg-cyan-500/15 text-cyan-800 backdrop-blur-md font-bold shadow-[0_0_8px_rgba(6,182,212,0.3)]";
      case "neumorphism":
        return "border border-slate-300 bg-slate-100 text-slate-700 shadow-[inset_1px_1px_2px_#fff,inset_-1px_-1px_2px_#cbd5e1] font-bold";
      case "claymorphism":
        return "border border-purple-200 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 shadow-sm font-bold";
      case "minimalism":
        return "border border-slate-800 bg-slate-900 text-white font-mono font-medium";
      case "cyberpunk":
        return "border border-cyan-400 bg-cyan-950/80 text-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.4)] font-mono font-bold";
      case "3d-canvas":
        return "border border-violet-400/60 bg-violet-50 text-violet-700 font-bold";
      case "modern-saas":
      default:
        return "border border-blue-200 bg-blue-50 text-blue-700 font-bold";
    }
  };

  const styleLabels: Record<string, string> = {
    all: "Todos los Estilos",
    "neo-brutalism": "Neo-Brutalism",
    glassmorphism: "Frosted Glass",
    "liquid-glass": "Liquid Glass",
    neumorphism: "Neumorphism",
    claymorphism: "Claymorphism 3D",
    minimalism: "Swiss Minimalist",
    cyberpunk: "Cyberpunk HUD",
  };

  // Categorías fijas con nombres limpios en español
  const officialCategories = [
    { id: "cards", label: "Cards & Precios" },
    { id: "widgets", label: "Widgets & Herramientas" },
    { id: "heros", label: "Heros & 3D Canvas" },
    { id: "testimonials", label: "Testimonios & Social Proof" },
    { id: "navbars", label: "Navbars & Docks" },
    { id: "faq", label: "Acordeones & FAQ" },
    { id: "modals", label: "Modales & Auth" },
    { id: "carousels", label: "Carruseles & Sliders" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          {/* Logo & Total Badge */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md shadow-emerald-600/20">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-xl tracking-tight text-slate-900">UI Vault</span>
                <span className="rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                  {functionalElementCounts.all} Elementos · 7 Estilos
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Catálogo polimórfico de autor: cada elemento web existe en los 7 sistemas de diseño oficiales
              </p>
            </div>
          </div>

          {/* Mode Switcher: Galería Polimórfica vs Conmutador Camaleón */}
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-100/90 p-1 shadow-inner">
              <button
                onClick={() => setDisplayMode("catalog")}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all duration-200 ${
                  displayMode === "catalog"
                    ? "bg-white text-slate-900 shadow-sm scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <LayoutGrid className="h-4 w-4 text-emerald-600" />
                <span>Todos los Elementos</span>
                <span className="rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-bold">
                  {functionalElementCounts.all}
                </span>
              </button>

              <button
                onClick={() => setDisplayMode("chameleon")}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all duration-200 ${
                  displayMode === "chameleon"
                    ? "bg-white text-emerald-800 shadow-sm scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Wand2 className="h-4 w-4 text-emerald-600" />
                <span>Conmutador Camaleón</span>
                <span className="rounded-full bg-slate-200 text-slate-700 px-2 py-0.5 text-[10px] font-bold">
                  7 Estilos
                </span>
              </button>
            </div>

            {/* Stage Background Switcher */}
            <div className="hidden sm:flex items-center rounded-xl border border-slate-200 bg-slate-100 p-0.5">
              <button
                onClick={() => {
                  setGlobalStageBg("light");
                  setStageBgMap({});
                }}
                className={`inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-bold transition-all ${
                  globalStageBg === "light"
                    ? "bg-white text-slate-800 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                title="Fondo Claro"
              >
                <Sun className="h-3.5 w-3.5 text-amber-500" />
              </button>
              <button
                onClick={() => {
                  setGlobalStageBg("white");
                  setStageBgMap({});
                }}
                className={`inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-bold transition-all ${
                  globalStageBg === "white"
                    ? "bg-white text-slate-800 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                title="Fondo Blanco"
              >
                <div className="h-3 w-3 rounded-full border border-slate-300 bg-white" />
              </button>
              <button
                onClick={() => {
                  setGlobalStageBg("dark");
                  setStageBgMap({});
                }}
                className={`inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-bold transition-all ${
                  globalStageBg === "dark"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                title="Fondo Oscuro"
              >
                <Moon className="h-3.5 w-3.5 text-indigo-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-6">
        {/* Title & Real-Time Search */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              {displayMode === "catalog"
                ? "Galería de Elementos Web"
                : "Matriz Camaleón (Conmutador 7 Estilos)"}
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-1">
              {displayMode === "catalog"
                ? `Explorando ${filteredCatalog.length} de ${catalog.length} componentes registrados con código TSX e implementación en vivo.`
                : "Cambia el diseño visual de cada elemento en tiempo real a través de los 7 sistemas de diseño oficiales."}
            </p>
          </div>

          <div className="relative min-w-[280px] md:w-80">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, tag o estilo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white py-2 pl-10 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-xs transition-all"
            />
          </div>
        </div>

        {/* ============================================================== */}
        {/* NIVEL 1 OBLIGATORIO: SELECTOR POR TIPO DE ELEMENTO WEB        */}
        {/* Con contadores exactos al lado de cada tipo                    */}
        {/* ============================================================== */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
              1. Tipo de Elemento Web:
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              {selectedElementCategory === "all"
                ? `${functionalElementCounts.all} elementos funcionales únicos`
                : `${functionalElementCounts[selectedElementCategory] || 0} elementos funcionales`}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Opción "Todos" */}
            <button
              onClick={() => setSelectedElementCategory("all")}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all duration-200 ${
                selectedElementCategory === "all"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              <Layers className="h-4 w-4" />
              <span>Todos los Elementos</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  selectedElementCategory === "all"
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {functionalElementCounts.all}
              </span>
            </button>

            {/* Categorías con sus contadores reales de elementos funcionales */}
            {officialCategories.map((cat) => {
              const isSelected = selectedElementCategory === cat.id;
              const count = functionalElementCounts[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedElementCategory(cat.id)}
                  className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all duration-200 ${
                    isSelected
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-[1.02]"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {getCategoryIcon(cat.id, "h-4 w-4")}
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isSelected
                        ? "bg-emerald-800 text-emerald-100"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* NIVEL 2: FILTRO POR ESTILO VISUAL (Para el Catálogo)          */}
        {/* Sin número redundante porque todos los estilos tienen los mismos elementos */}
        {/* ============================================================== */}
        {displayMode === "catalog" && (
          <div className="mb-6 flex flex-wrap items-center gap-1.5 px-1 py-1">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
              <Palette className="h-3.5 w-3.5 text-slate-400" />
              Filtrar por Estilo:
            </span>
            {[
              "all",
              "neo-brutalism",
              "glassmorphism",
              "liquid-glass",
              "neumorphism",
              "claymorphism",
              "minimalism",
              "cyberpunk",
            ].map((st) => {
              const isSelected = selectedStyle === st;

              return (
                <button
                  key={st}
                  onClick={() => setSelectedStyle(st)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-xs scale-[1.02]"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  <span>{styleLabels[st] || st}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* ============================================================== */}
        {/* MODO A: CATÁLOGO COMPLETO DE COMPONENTES (TODOS LOS 145)      */}
        {/* ============================================================== */}
        {displayMode === "catalog" && (
          <div>
            {filteredCatalog.length === 0 ? (
              <div className="rounded-3xl border-2 border-dashed border-slate-200 bg-white p-16 text-center">
                <Layers className="mx-auto h-12 w-12 text-slate-400 mb-3" />
                <h3 className="text-base font-bold text-slate-800">
                  No se encontraron componentes en esta combinación de filtros
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Prueba cambiando la categoría de elemento o el estilo visual.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCatalog.slice(0, visibleCount).map((item) => {
                  const ComponentToRender = ComponentRegistry[item.id];
                  const activeTab = activeTabMap[item.id] || "preview";
                  const stageBg = stageBgMap[item.id] || globalStageBg;

                  return (
                    <div
                      key={item.id}
                      className="rounded-3xl border border-slate-200 bg-white shadow-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md"
                    >
                      {/* Top Bar of Card */}
                      <div className="border-b border-slate-100 bg-slate-50/70 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] ${getStyleBadgeStyle(
                              item.style
                            )}`}
                          >
                            {styleLabels[item.style || ""] || item.style || "Modern"}
                          </span>
                          <span className="rounded-full bg-slate-200/80 px-2 py-0.5 text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-sm text-slate-900 tracking-tight line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-0.5">
                          {item.description}
                        </p>
                      </div>

                      {/* Viewport or Code */}
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-0.5 shadow-2xs">
                            <button
                              onClick={() =>
                                setActiveTabMap((prev) => ({ ...prev, [item.id]: "preview" }))
                              }
                              className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-bold transition-all ${
                                activeTab === "preview"
                                  ? "bg-slate-900 text-white"
                                  : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              <Eye className="h-3 w-3" />
                              <span>Vista</span>
                            </button>
                            <button
                              onClick={() =>
                                setActiveTabMap((prev) => ({ ...prev, [item.id]: "code" }))
                              }
                              className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-bold transition-all ${
                                activeTab === "code"
                                  ? "bg-slate-900 text-white"
                                  : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              <Code2 className="h-3 w-3" />
                              <span>TSX</span>
                            </button>
                          </div>

                          <button
                            onClick={() => handleCopyCode(item.id, item.code)}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs transition-all"
                            title="Copiar código TSX"
                          >
                            {copiedId === item.id ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-600" />
                                <span className="text-emerald-700">¡Copiado!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3 text-slate-500" />
                                <span>Copiar</span>
                              </>
                            )}
                          </button>
                        </div>

                        {activeTab === "preview" ? (
                          <div
                            className={`relative flex min-h-[260px] flex-1 items-center justify-center rounded-2xl p-4 transition-colors border border-slate-100 overflow-hidden ${
                              stageBg === "dark"
                                ? "bg-slate-950"
                                : stageBg === "white"
                                ? "bg-white"
                                : "bg-slate-100/90"
                            }`}
                          >
                            {ComponentToRender ? (
                              <div className="transform scale-[0.85] origin-center max-w-full">
                                <SafeRender fallbackName={item.id}>
                                  <ComponentToRender />
                                </SafeRender>
                              </div>
                            ) : (
                              <div className="text-center text-xs text-slate-400">
                                Componente no encontrado en el registro.
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="relative flex-1 rounded-2xl bg-slate-950 p-3 text-slate-200 shadow-inner overflow-hidden flex flex-col justify-between">
                            <span className="font-mono text-[10px] text-emerald-400 block mb-2">
                              {item.componentFile}
                            </span>
                            <pre className="max-h-[220px] overflow-auto font-mono text-[11px] leading-relaxed text-slate-300">
                              <code>{item.code || "// Código cargando..."}</code>
                            </pre>
                          </div>
                        )}
                      </div>

                      {/* Card Footer */}
                      <div className="border-t border-slate-100 px-4 py-2.5 bg-slate-50/50 flex items-center justify-between text-[11px] text-slate-500">
                        <span className="font-mono text-[10px] text-slate-400 truncate max-w-[160px]">
                          {item.id}
                        </span>
                        <div className="flex items-center gap-1">
                          {item.tags?.slice(0, 2).map((tag, tagIdx) => (
                            <span
                              key={`${item.id}-tag-${tagIdx}`}
                              className="rounded-md bg-white border border-slate-200 px-1.5 py-0.2 text-[9px] font-medium text-slate-600"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
                </div>

                {visibleCount < filteredCatalog.length && (
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 24)}
                      className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-700 shadow-xs transition-all hover:border-slate-400 hover:bg-slate-50 hover:shadow-sm"
                    >
                      Cargar más componentes ({filteredCatalog.length - visibleCount} restantes)
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* MODO B: FAMILIAS CAMALEÓN (CONMUTADOR DE 7 ESTILOS)            */}
        {/* ============================================================== */}
        {displayMode === "chameleon" && (
          <div className="space-y-12">
            {filteredChameleonFamilies.map((family) => {
              const currentStyle = familyStyleMap[family.id] || family.variants[0].style;
              const activeVariant =
                family.variants.find((v) => v.style === currentStyle) || family.variants[0];
              const activeCatalogItem = catalog.find((c) => c.id === activeVariant.componentId);

              const isComparing = compareMap[family.id] || false;
              const activeTab = activeTabMap[family.id] || "preview";
              const stageBg = stageBgMap[family.id] || globalStageBg;
              const ComponentToRender = ComponentRegistry[activeVariant.componentId];

              return (
                <div
                  key={family.id}
                  className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                >
                  <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs">
                          {getCategoryIcon(family.category, "h-5 w-5")}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-base font-extrabold text-slate-900 tracking-tight">
                              {family.name}
                            </h2>
                            <span className="rounded-full bg-slate-200/80 px-2 py-0.5 text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                              {family.categoryLabel}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">
                            {family.summary}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setCompareMap((prev) => ({
                              ...prev,
                              [family.id]: !prev[family.id],
                            }));
                          }}
                          className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all ${
                            isComparing
                              ? "border-indigo-400 bg-indigo-50 text-indigo-700 shadow-xs"
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                          }`}
                        >
                          <SplitSquareVertical className="h-3.5 w-3.5 text-indigo-600" />
                          <span>{isComparing ? "Cerrar Comparativa" : "▦ Comparar 7 Estilos"}</span>
                        </button>

                        <div className="flex items-center rounded-xl border border-slate-200 bg-white p-0.5 shadow-xs">
                          <button
                            onClick={() =>
                              setActiveTabMap((prev) => ({ ...prev, [family.id]: "preview" }))
                            }
                            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                              activeTab === "preview"
                                ? "bg-slate-900 text-white"
                                : "text-slate-600 hover:text-slate-900"
                            }`}
                          >
                            <Eye className="h-3 w-3" />
                            <span>Vista</span>
                          </button>
                          <button
                            onClick={() =>
                              setActiveTabMap((prev) => ({ ...prev, [family.id]: "code" }))
                            }
                            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                              activeTab === "code"
                                ? "bg-slate-900 text-white"
                                : "text-slate-600 hover:text-slate-900"
                            }`}
                          >
                            <Code2 className="h-3 w-3" />
                            <span>Código</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Selector Interactivo de Estilos */}
                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mr-1.5">
                        Estilo Activo:
                      </span>
                      {family.variants.map((v) => {
                        const isActive = currentStyle === v.style;
                        return (
                          <button
                            key={v.style}
                            onClick={() => {
                              setFamilyStyleMap((prev) => ({
                                ...prev,
                                [family.id]: v.style,
                              }));
                            }}
                            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-extrabold transition-all duration-200 ${
                              isActive
                                ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]"
                                : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                            }`}
                          >
                            <span
                              className={`h-2 w-2 rounded-full ${
                                isActive ? "bg-emerald-400" : "bg-slate-300"
                              }`}
                            />
                            <span>{v.styleLabel}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {!isComparing ? (
                    <div className="p-6">
                      <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs ${getStyleBadgeStyle(
                              activeVariant.style
                            )}`}
                          >
                            {styleLabels[activeVariant.style] || activeVariant.style}
                          </span>
                          <span className="text-xs font-semibold text-slate-700">
                            {activeVariant.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          {activeVariant.description}
                        </p>
                      </div>

                      {activeTab === "preview" ? (
                        <div
                          className={`relative flex min-h-[360px] w-full items-center justify-center rounded-2xl p-8 transition-colors border border-slate-100 ${
                            stageBg === "dark"
                              ? "bg-slate-950"
                              : stageBg === "white"
                              ? "bg-white"
                              : "bg-[#f1f5f9]"
                          }`}
                        >
                          {ComponentToRender ? (
                            <SafeRender fallbackName={activeVariant.componentId}>
                              <ComponentToRender />
                            </SafeRender>
                          ) : (
                            <div className="text-center text-xs text-slate-400">
                              Componente no encontrado.
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="relative rounded-2xl bg-slate-950 p-5 text-slate-200 shadow-inner overflow-hidden">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                            <span className="font-mono text-xs font-bold text-emerald-400">
                              {activeCatalogItem?.componentFile || `${activeVariant.componentId}.tsx`}
                            </span>
                            <button
                              onClick={() =>
                                handleCopyCode(
                                  activeVariant.componentId,
                                  activeCatalogItem?.code
                                )
                              }
                              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 text-xs font-bold shadow-xs transition-all"
                            >
                              {copiedId === activeVariant.componentId ? (
                                <>
                                  <Check className="h-3.5 w-3.5 text-emerald-200" />
                                  <span>¡Copiado!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3.5 w-3.5" />
                                  <span>Copiar TSX</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="max-h-[380px] overflow-auto font-mono text-xs leading-relaxed text-slate-300">
                            <code>{activeCatalogItem?.code || "// Código cargando..."}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-6 bg-slate-50/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {family.variants.map((variant) => {
                          const VarComp = ComponentRegistry[variant.componentId];
                          const varItem = catalog.find((c) => c.id === variant.componentId);

                          return (
                            <div
                              key={variant.style}
                              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs flex flex-col justify-between"
                            >
                              <div className="mb-3 flex items-center justify-between">
                                <span
                                  className={`rounded-full px-2.5 py-0.5 text-[11px] ${getStyleBadgeStyle(
                                    variant.style
                                  )}`}
                                >
                                  {variant.styleLabel}
                                </span>
                                <button
                                  onClick={() => handleCopyCode(variant.componentId, varItem?.code)}
                                  className="text-slate-400 hover:text-slate-700 p-1"
                                >
                                  {copiedId === variant.componentId ? (
                                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                                  ) : (
                                    <Copy className="h-3.5 w-3.5" />
                                  )}
                                </button>
                              </div>

                              <div
                                className={`flex min-h-[260px] items-center justify-center rounded-xl p-4 ${
                                  stageBg === "dark"
                                    ? "bg-slate-950"
                                    : stageBg === "white"
                                    ? "bg-white"
                                    : "bg-slate-100"
                                }`}
                              >
                                {VarComp ? (
                                  <div className="transform scale-[0.88] origin-center">
                                    <SafeRender fallbackName={variant.componentId}>
                                      <VarComp />
                                    </SafeRender>
                                  </div>
                                ) : (
                                  <span className="text-xs text-slate-400">Cargando...</span>
                                )}
                              </div>

                              <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                                <p className="font-semibold text-slate-700 mb-0.5">{variant.title}</p>
                                <p className="line-clamp-2">{variant.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
