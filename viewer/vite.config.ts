import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import fs from "node:fs";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    {
      name: "ui-vault-api-middleware",
      configureServer(server) {
        const repoRoot = path.resolve(__dirname, "..");
        const vaultDir = path.join(repoRoot, "vault");
        const catalogPath = path.join(vaultDir, "catalog.json");
        const sourcesPath = path.join(vaultDir, "sources.json");
        const componentsDir = path.join(vaultDir, "components");

        server.middlewares.use((req, res, next) => {
          const url = new URL(req.url || "/", "http://localhost");

          // GET /api/data -> catalog + sources + code
          if (req.method === "GET" && url.pathname === "/api/data") {
            try {
              const rawCatalog = JSON.parse(fs.readFileSync(catalogPath, "utf-8"));
              let sources = [];
              if (fs.existsSync(sourcesPath)) {
                sources = JSON.parse(fs.readFileSync(sourcesPath, "utf-8"));
              }

              const catalogArray = Array.isArray(rawCatalog) ? rawCatalog : (rawCatalog.components || []);

              const enrichedCatalog = catalogArray.map((item: any) => {
                const compFile = item.componentFile || `components/elements/${item.elementFamily || item.id.split('-')[0]}/${item.id}.tsx`;
                const filePath = compFile.startsWith("components/")
                  ? path.join(vaultDir, compFile)
                  : path.join(componentsDir, compFile);
                let code = item.code || "";
                if (!code && fs.existsSync(filePath)) {
                  code = fs.readFileSync(filePath, "utf-8");
                }
                return {
                  id: item.id,
                  title: item.title || item.name,
                  category: item.category,
                  style: item.style,
                  tags: item.tags || [],
                  author: item.author || "Antigravity UI-Vault",
                  description: item.description,
                  componentFile: compFile,
                  code,
                };
              });

              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ catalog: enrichedCatalog, sources }));
              return;
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
              return;
            }
          }

          // DELETE /api/component/:id
          if (req.method === "DELETE" && url.pathname.startsWith("/api/component/")) {
            const id = url.pathname.replace("/api/component/", "").trim();
            try {
              let catalog = JSON.parse(fs.readFileSync(catalogPath, "utf-8"));
              const item = catalog.find((c: any) => c.id === id);

              if (item) {
                const filePath = path.join(componentsDir, item.componentFile);
                if (fs.existsSync(filePath)) {
                  fs.unlinkSync(filePath);
                }
                catalog = catalog.filter((c: any) => c.id !== id);
                fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), "utf-8");
              }

              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ success: true, deletedId: id }));
              return;
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
              return;
            }
          }

          next();
        });
      },
    },
  ],
  server: {
    port: 3333,
    fs: {
      allow: [path.resolve(__dirname, "..")],
    },
  },
  resolve: {
    alias: {
      "@vault": path.resolve(__dirname, "../vault"),
      "lucide-react": path.resolve(__dirname, "node_modules/lucide-react"),
      "react": path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
});
