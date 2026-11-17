import React, { lazy } from 'react';

// Vite dynamic glob: carga diferida bajo demanda (cero carga inicial, carga ultra-rápida y a prueba de fallos)
const rawModules = import.meta.glob<{ default?: React.ComponentType<any>; [key: string]: any }>(
  '../../vault/components/elements/**/*.tsx'
);

export const ComponentRegistry: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {};

for (const path in rawModules) {
  const filename = path.split('/').pop()?.split('\\').pop();
  if (filename && filename.endsWith('.tsx')) {
    const id = filename.replace(/\.tsx$/, '');
    ComponentRegistry[id] = lazy(async () => {
      const mod = await rawModules[path]();
      const Comp = mod.default || Object.values(mod).find((val) => typeof val === 'function');
      if (!Comp) {
        throw new Error(`No se encontró componente exportado en ${path}`);
      }
      return { default: Comp };
    });
  }
}

if (typeof window !== 'undefined') {
  (window as any).__COMPONENT_REGISTRY__ = ComponentRegistry;
}

export const COMPONENT_REGISTRY = ComponentRegistry;
export default ComponentRegistry;
