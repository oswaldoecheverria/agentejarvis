const fs = require("fs");
const catalog = JSON.parse(fs.readFileSync("F:/proyectos/agentepersonal/vault/catalog.json", "utf-8"));
console.log("Total componentes:", catalog.length);
const cats = {};
catalog.forEach((c) => {
  cats[c.category] = (cats[c.category] || 0) + 1;
});
console.log("Categorias en catalog:", cats);
