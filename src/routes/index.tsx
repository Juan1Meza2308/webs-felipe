import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Code2,
  Github,
  Instagram,
  Mail,
  Menu,
  Rocket,
  Server,
  X,
} from "lucide-react";
import { useState } from "react";

import { ContributionGraph } from "@/components/ContributionGraph";
import { ProjectList } from "@/components/ProjectList";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GITHUB_USERNAME } from "@/lib/github";

const CONTACT_EMAIL = "juan1meza2308@gmail.com";
const SITE_URL = "https://webs-felipe.vercel.app";

const SITE_TITLE = "Felipe | Desarrollador Web Full Stack";
const SITE_DESCRIPTION =
  "Portfolio de Felipe, desarrollador web full stack. Proyectos, contribuciones de GitHub y servicios de desarrollo web en React, Node.js y TypeScript.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const STACK = ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"];

const SERVICES = [
  {
    icon: Code2,
    title: "Aplicaciones web a medida",
    description:
      "Producto completo de principio a fin: frontend, backend, base de datos y despliegue. Interfacez que se sienten rápidas y se ven bien en cualquier pantalla.",
  },
  {
    icon: Server,
    title: "APIs e integraciones",
    description:
      "Servicios REST bien documentados, autenticación segura y conexión con plataformas de terceros. Arquitecturas limpias que escalan sin dolores de cabeza.",
  },
  {
    icon: Rocket,
    title: "Rendimiento y mantenimiento",
    description:
      "Optimización de carga, refactor de código existente y soporte continuo. Hago que tu aplicación cargue rápido y respire mejor.",
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    handle: `github.com/${GITHUB_USERNAME}`,
    href: `https://github.com/${GITHUB_USERNAME}`,
  },
  {
    label: "TikTok",
    handle: "@webs.felipe",
    href: "https://www.tiktok.com/@webs.felipe",
  },
  {
    label: "Instagram",
    handle: "@webs.felipe",
    href: "https://www.instagram.com/webs.felipe",
  },
];

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.05.85.13V9.4a6.33 6.33 0 0 0-.85-.05 6.34 6.34 0 1 0 6.34 6.34V10.8a8.16 8.16 0 0 0 4.77 1.52v-3.45a4.85 4.85 0 0 1-1-.18Z" />
  </svg>
);

function Wordmark() {
  return (
    <a
      href="/"
      className="text-sm font-bold tracking-tight text-foreground"
      aria-label="webs.felipe — inicio"
    >
      <span className="text-accent">&lt;</span>WEBS.FELIPE
      <span className="text-accent">/&gt;</span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <Wordmark />

        <nav
          className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contacto"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Contáctame
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-background md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <Wordmark />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Menú móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-6 pb-10">
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-accent px-6 py-4 text-center text-base font-semibold text-accent-foreground"
            >
              Contáctame
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-background px-6 pb-24 pt-16 md:px-12 md:pt-24">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm font-semibold text-accent">Hola, soy Felipe</p>
          <h1 className="mt-3 font-display text-balance text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.95]">
            Desarrollador Web
            <br />
            Full Stack
          </h1>

          <p className="mt-8 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
            Construyo aplicaciones web rápidas, seguras y escalables. Me enfoco en resolver
            problemas reales con código limpio y una mentalidad orientada a producto.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologías">
            {STACK.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Trabajemos juntos
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Ver proyectos
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <ContributionGraph />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 bg-background px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-border/60 pt-12">
          <h2 className="font-display text-balance text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
            Proyectos
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Lo que he construido — repositorios públicos sincronizados directamente desde GitHub.
          </p>
        </div>
        <ProjectList />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-background px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="border-t border-border/60 pt-12">
            <h2 className="font-display text-balance text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
              Cómo puedo ayudarte
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Servicios enfocados en llevarte desde la idea hasta un producto funcionando, y
              mantenerlo vivo después.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group border-t border-border/60 py-10 transition-colors"
            >
              <div className="flex items-start gap-6">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
          <div className="border-t border-border/60" />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contacto" className="scroll-mt-20 bg-background px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-border/60 pt-12">
          <h2 className="font-display text-balance text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
            ¿Trabajamos juntos?
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Cuéntame qué necesitas y te respondo lo antes posible.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-foreground">Contacto directo</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <Mail className="size-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>

            <p className="mt-10 text-sm font-semibold text-foreground">Encuéntrame en</p>
            <ul className="mt-4 space-y-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.label === "TikTok" ? (
                      <TikTokIcon className="size-4" />
                    ) : social.label === "Instagram" ? (
                      <Instagram className="size-4" aria-hidden="true" />
                    ) : (
                      <Github className="size-4" aria-hidden="true" />
                    )}
                    <span className="group-hover:text-accent">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            action={`mailto:${CONTACT_EMAIL}`}
            method="post"
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Tu nombre
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Juan Pérez"
                  className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Tu email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="juan@empresa.com"
                  className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Mensaje
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full resize-none rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} webs.felipe. Hecho a mano.</p>
          <a href="#top" className="transition-colors hover:text-foreground">
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
