import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Github, Instagram, Mail, Menu, Rocket, Server, X } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";

import { ContributionGraph } from "@/components/ContributionGraph";
import { ProjectList } from "@/components/ProjectList";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { GITHUB_USERNAME } from "@/lib/github";
import { formatCopyright } from "@/lib/i18n";

const CONTACT_EMAIL = "juan1meza2308@gmail.com";
const SITE_URL = "https://webs-felipe.vercel.app";

const NAV_LINKS_KEYS = ["projects", "services", "contact"] as const;
type NavLinkKey = (typeof NAV_LINKS_KEYS)[number];

const STACK_KEYS = [
  "react",
  "nextjs",
  "nodejs",
  "typescript",
  "tailwind",
  "postgresql",
] as const;
type StackKey = (typeof STACK_KEYS)[number];

const SOCIALS = [
  { labelKey: "github" as const, handle: `github.com/${GITHUB_USERNAME}`, href: `https://github.com/${GITHUB_USERNAME}` },
  { labelKey: "tiktok" as const, handle: "@webs.felipe", href: "https://www.tiktok.com/@webs.felipe" },
  { labelKey: "instagram" as const, handle: "@webs.felipe", href: "https://www.instagram.com/webs.felipe" },
] as const;

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.05.85.13V9.4a6.33 6.33 0 0 0-.85-.05 6.34 6.34 0 1 0 6.34 6.34V10.8a8.16 8.16 0 0 0 4.77 1.52v-3.45a4.85 4.85 0 0 1-1-.18Z" />
  </svg>
);

function Wordmark() {
  const { translations } = useLanguage();
  return (
    <a href="/" className="text-sm font-bold tracking-tight text-foreground" aria-label={translations.header.siteName}>
      <span className="text-accent">{'<'}</span>WEBS.FELIPE<span className="text-accent">{'>'}</span>
    </a>
  );
}

function Header() {
  const { translations } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <Wordmark />

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label={translations.header.menuLabel}>
          {NAV_LINKS_KEYS.map((key) => (
            <a key={key} href={`#${key}`} className="transition-colors hover:text-foreground">
              {translations.nav[key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {translations.nav.contactMe}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={translations.header.openMenu}
            aria-expanded={menuOpen}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background md:hidden" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between px-6 py-4">
            <Wordmark />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label={translations.header.closeMenu}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Menú móvil">
            {NAV_LINKS_KEYS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold text-foreground transition-colors hover:text-accent"
              >
                {translations.nav[key]}
              </a>
            ))}
          </nav>
          <div className="px-6 pb-10">
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block rounded-full bg-accent px-6 py-4 text-center text-base font-semibold text-accent-foreground">
              {translations.nav.contactMe}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { translations } = useLanguage();

  return (
    <section className="bg-background px-6 pb-24 pt-16 md:px-12 md:pt-24">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm font-semibold text-accent">{translations.hero.greeting}</p>
          <h1 className="mt-3 font-display text-balance text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.95]">
            {translations.hero.title1}<br />{translations.hero.title2}
          </h1>

          <p className="mt-8 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
            {translations.hero.description}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label={translations.common.language}>
            {translations.techStack.items.map((tech) => (
              <li key={tech} className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-foreground">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">
              {translations.hero.ctaPrimary}
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
              {translations.hero.ctaSecondary} <ArrowUpRight className="size-4" />
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
  const { translations } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-20 bg-background px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-border/60 pt-12">
          <h2 className="font-display text-balance text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
            {translations.projects.title}
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {translations.projects.subtitle}
          </p>
        </div>
        <ProjectList />
      </div>
    </section>
  );
}

function Services() {
  const { translations } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 bg-background px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="border-t border-border/60 pt-12">
            <h2 className="font-display text-balance text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
              {translations.services.title}
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {translations.services.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {translations.services.items.map((service, index) => (
            <article key={index} className="group border-t border-border/60 py-10 transition-colors">
              <div className="flex items-start gap-6">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  {index === 0 && <Code2 className="size-5" />}
                  {index === 1 && <Server className="size-5" />}
                  {index === 2 && <Rocket className="size-5" />}
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
  const { translations } = useLanguage();

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Contacto desde webs.felipe — ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <footer id="contact" className="scroll-mt-20 bg-background px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-border/60 pt-12">
          <h2 className="font-display text-balance text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
            {translations.contact.title}
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-foreground">{translations.contact.directContact}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent">
              <Mail className="size-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>

            <p className="mt-10 text-sm font-semibold text-foreground">{translations.contact.findMe}</p>
            <ul className="mt-4 space-y-3">
              {SOCIALS.map((social) => (
                <li key={social.labelKey}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {social.labelKey === "tiktok" ? (
                      <TikTokIcon className="size-4" />
                    ) : social.labelKey === "instagram" ? (
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

          <form action={`mailto:${CONTACT_EMAIL}`} method="post" encType="text/plain" className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-foreground">
                  {translations.contact.form.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder={translations.contact.form.namePlaceholder}
                  className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-foreground">
                  {translations.contact.form.emailLabel}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder={translations.contact.form.emailPlaceholder}
                  className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-foreground">
                {translations.contact.form.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder={translations.contact.form.messagePlaceholder}
                className="w-full resize-none rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent"
              />
            </div>
            <button type="submit" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">
              {translations.contact.form.submit}
            </button>
          </form>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>{formatCopyright(translations as any, new Date().getFullYear())}</p>
          <a href="#top" className="transition-colors hover:text-foreground">
            {translations.contact.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <LanguageProvider>
      <main id="top">
        <Header />
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </main>
    </LanguageProvider>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Felipe | Desarrollador Web Full Stack" },
      { name: "description", content: "Portfolio de Felipe, desarrollador web full stack. Proyectos, contribuciones de GitHub y servicios de desarrollo web en React, Node.js y TypeScript." },
      { property: "og:title", content: "Felipe | Desarrollador Web Full Stack" },
      { property: "og:description", content: "Portfolio de Felipe, desarrollador web full stack. Proyectos, contribuciones de GitHub y servicios de desarrollo web en React, Node.js y TypeScript." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});