const fs = require("fs");
const path = require("path");

const catalogPath = "F:/proyectos/agentepersonal/vault/catalog.json";
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf-8"));

function standardizeCategory(c) {
  const cat = (c.category || "").toLowerCase();
  const file = (c.componentFile || "").toLowerCase();
  const id = (c.id || "").toLowerCase();
  const tags = (c.tags || []).map((t) => t.toLowerCase());

  // Testimonials
  if (
    cat === "testimonials" ||
    id.includes("testimonial") ||
    file.includes("testimonial") ||
    id.includes("review") ||
    id.includes("quote")
  ) {
    return "testimonials";
  }

  // Modals / Auth
  if (
    cat === "modals" ||
    id.includes("auth") ||
    id.includes("login") ||
    id.includes("modal") ||
    file.includes("modal") ||
    file.includes("auth")
  ) {
    return "modals";
  }

  // FAQ / Accordions
  if (
    cat === "faq" ||
    cat === "accordion" ||
    id.includes("faq") ||
    id.includes("accordion") ||
    file.includes("accordion") ||
    file.includes("faq")
  ) {
    return "faq";
  }

  // Navbars & Docks
  if (
    cat === "navigation" ||
    id.includes("nav") ||
    id.includes("dock") ||
    id.includes("header") ||
    id.includes("tab-bar") ||
    file.includes("navigation")
  ) {
    return "navbars";
  }

  // Carousels & Sliders & Marquees
  if (
    cat === "slider" ||
    id.includes("slider") ||
    id.includes("carousel") ||
    id.includes("marquee") ||
    file.includes("sliders")
  ) {
    return "carousels";
  }

  // Heros & 3D Canvas
  if (
    cat === "hero" ||
    cat === "canvas" ||
    cat === "backgrounds" ||
    id.includes("hero") ||
    file.includes("heroes") ||
    file.includes("canvas") ||
    file.includes("backgrounds") ||
    id.includes("threejs") ||
    id.includes("threeui")
  ) {
    return "heros";
  }

  // Widgets & Herramientas
  if (
    cat === "widgets" ||
    id.includes("calculator") ||
    id.includes("clock") ||
    id.includes("switch") ||
    id.includes("control") ||
    id.includes("weather") ||
    id.includes("calendar") ||
    id.includes("color-picker") ||
    id.includes("audio-player") ||
    id.includes("audio-visualizer") ||
    file.includes("calculator") ||
    file.includes("clock") ||
    file.includes("control") ||
    file.includes("weather")
  ) {
    return "widgets";
  }

  // Default: Cards & Precios
  return "cards";
}

catalog.forEach((item) => {
  item.category = standardizeCategory(item);
  // Asegurar que si tiene estilo en tags o id, esté bien seteado
  if (!item.style || item.style === "modern") {
    if (item.id.includes("neo-brutalist")) item.style = "neo-brutalism";
    else if (item.id.includes("liquid-glass")) item.style = "liquid-glass";
    else if (item.id.includes("glass") || item.id.includes("frosted")) item.style = "glassmorphism";
    else if (item.id.includes("neumorphic")) item.style = "neumorphism";
    else if (item.id.includes("claymorphic")) item.style = "claymorphism";
    else if (item.id.includes("minimalist")) item.style = "minimalism";
    else if (item.id.includes("cyberpunk")) item.style = "cyberpunk";
    else if (item.id.includes("threejs") || item.id.includes("threeui")) item.style = "3d-canvas";
    else item.style = "modern-saas";
  }
});

const counts = {};
catalog.forEach((item) => {
  counts[item.category] = (counts[item.category] || 0) + 1;
});

console.log("Categorias normalizadas:", counts);
console.log("Total:", catalog.length);

fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), "utf-8");
