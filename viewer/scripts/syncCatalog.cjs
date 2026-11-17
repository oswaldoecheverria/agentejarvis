const fs = require("fs");
const path = require("path");

const repoRoot = "F:/proyectos/agentepersonal";
const catalogPath = path.join(repoRoot, "vault/catalog.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf-8"));
const catalogMap = new Map(catalog.map((c) => [c.id, c]));

const elementsDir = path.join(repoRoot, "vault/components/elements");

function getCategoryFromDir(sub) {
  if (sub.includes("pricing") || sub.includes("profile")) return "cards";
  if (sub.includes("calculator") || sub.includes("clock") || sub.includes("control") || sub.includes("weather")) return "widgets";
  if (sub.includes("testimonial")) return "testimonials";
  if (sub.includes("auth")) return "modals";
  if (sub.includes("faq")) return "faq";
  return "cards";
}

function getStyleFromFilename(name) {
  if (name.includes("neo-brutalist")) return "neo-brutalism";
  if (name.includes("liquid-glass")) return "liquid-glass";
  if (name.includes("glassmorphic")) return "glassmorphism";
  if (name.includes("neumorphic")) return "neumorphism";
  if (name.includes("claymorphic")) return "claymorphism";
  if (name.includes("minimalist")) return "minimalism";
  if (name.includes("cyberpunk")) return "cyberpunk";
  return "modern";
}

let added = 0;
function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (full.endsWith(".tsx")) {
      const id = path.basename(full, ".tsx");
      const rel = path.relative(path.join(repoRoot, "vault/components"), full).replace(/\\/g, "/");

      if (!catalogMap.has(id)) {
        const style = getStyleFromFilename(id);
        const category = getCategoryFromDir(full);
        const title = id
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");

        catalog.push({
          id,
          title,
          category,
          style,
          tags: [category, style, "polymorphic"],
          description: `Componente funcional de tipo ${category} implementado con precisión en estilo ${style}.`,
          author: "Vault Studio",
          sourceUrl: "https://erikasalud.com",
          componentFile: rel,
          addedAt: new Date().toISOString(),
          stars: 5,
        });
        catalogMap.set(id, true);
        added++;
      }
    }
  }
}

walk(elementsDir);
console.log(`Added ${added} new components to catalog.json. Total now: ${catalog.length}`);
fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), "utf-8");
