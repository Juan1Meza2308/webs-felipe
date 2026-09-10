import { createFileRoute } from "@tanstack/react-router";
import { ContributionGraph } from "@/components/ContributionGraph";
import { ProjectList } from "@/components/ProjectList";
import { GITHUB_USERNAME } from "@/lib/github";

// TODO: reemplaza con tu email real
const CONTACT_EMAIL = "tu-email@ejemplo.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Felipe — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio de Felipe, full stack developer. Proyectos y contribuciones sincronizados en vivo desde GitHub.",
      },
      { property: "og:title", content: "Felipe — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Proyectos, stack y contribuciones de GitHub actualizados automáticamente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "GitHub", href: `https://github.com/${GITHUB_USERNAME}` },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  {
    title: "Aplicaciones web a medida",
    body: "Producto completo: frontend, backend, base de datos y despliegue.",
  },
  {
    title: "APIs e integraciones",
    body: "Servicios REST, autenticación y conexión con plataformas de terceros.",
  },
  {
    title: "Rendimiento y mantenimiento",
    body: "Optimización, refactor y soporte continuo sobre proyectos existentes.",
  },
];

function Index() {
  return (
    <main>
      <section className="bg-background px-6 pb-24 pt-8 md:px-12">
        <header className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">
            &lt;WEBS.FELIPE&gt;
          </span>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="mx-auto mt-16 max-w-6xl">
          <h1 className="font-display text-[13vw] leading-[0.88] md:text-[7.5rem]">
            Full stack developer
            <br />
            Felipe
          </h1>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold">
                &lt;React.js Next.js Node.js TypeScript&gt;
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Desarrollador full stack con experiencia en proyectos propios y
                en equipo. Me enfoco en construir soluciones escalables y
                eficientes, con una mentalidad estructurada y orientada a
                resolver problemas.
              </p>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Ver mi GitHub
              </a>
            </div>
            <ContributionGraph />
          </div>
        </div>
      </section>

      <section id="proyectos" className="dark bg-background px-6 py-24 text-foreground md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-[11vw] leading-none md:text-[6rem]">
            Selected projects
          </h2>
          <p className="mt-6 max-w-lg text-sm text-muted-foreground">
            Repositorios públicos sincronizados directamente desde GitHub.
          </p>
          <div className="mt-12">
            <ProjectList />
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-background px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-5xl md:text-7xl">Servicios</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contacto"
        className="dark bg-background px-6 py-20 text-foreground md:px-12"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl md:text-6xl">
            Trabajemos juntos
          </h2>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-accent"
          >
            github.com/{GITHUB_USERNAME}
          </a>
        </div>
      </footer>
    </main>
  );
}
