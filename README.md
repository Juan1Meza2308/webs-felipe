# webs.felipe — Portfolio

Portfolio personal de Felipe, desarrollador web full stack. Proyectos y contribuciones de GitHub sincronizados en vivo.

## Stack

- **Framework:** TanStack Start (SSR) + React 19
- **Router:** TanStack Router
- **Estilos:** Tailwind CSS v4 + shadcn/ui
- **Build:** Vite 8
- **Runtime:** Bun

## Desarrollo local

```sh
npm i
npm run dev
```

## Estructura

- `src/routes/` — rutas de la aplicación (`/` es el portfolio)
- `src/components/` — componentes (lista de proyectos, gráfico de contribuciones, toggle de tema)
- `src/lib/github.ts` — helpers de la API de GitHub
- `public/` — estáticos (sitemap, robots, favicon)

## Despliegue

El proyecto se despliega en Vercel. Cualquier push a `main` dispara un nuevo deploy.