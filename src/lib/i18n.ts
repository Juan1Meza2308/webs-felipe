/**
 * Internationalization (i18n) for webs.felipe portfolio.
 *
 * Supports English (en) and Spanish (es). Spanish is the default.
 * All user-facing strings live here to keep components clean.
 */

export type Locale = "es" | "en";

export const DEFAULT_LOCALE: Locale = "es";
export const SUPPORTED_LOCALES: Locale[] = ["es", "en"];

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export type Translations = {
  // Common
  common: {
    loading: string;
    error: string;
    noData: string;
    viewCode: string;
    viewDemo: string;
    updated: string;
    stars: string;
    forks: string;
    language: string;
  };

  // Navigation
  nav: {
    projects: string;
    services: string;
    contact: string;
    contactMe: string;
  };

  // Header
  header: {
    menuLabel: string;
    openMenu: string;
    closeMenu: string;
    themeToggle: string;
    siteName: string;
  };

  // Hero
  hero: {
    greeting: string;
    title1: string;
    title2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };

  // Projects
  projects: {
    title: string;
    subtitle: string;
    noProjects: string;
    noDescription: string;
  };

  // Services
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };

  // Contact
  contact: {
    title: string;
    subtitle: string;
    directContact: string;
    email: string;
    findMe: string;
    socials: Array<{
      label: string;
      handle: string;
    }>;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
    };
    footer: {
      copyright: string;
      backToTop: string;
    };
  };

  // Contribution Graph
  contributions: {
    title: string;
    subtitle: string;
    total: string;
    legend: {
      less: string;
      more: string;
    };
  };

  // Tech Stack
  techStack: {
    items: string[];
  };
};

const es: Translations = {
  common: {
    loading: "Cargando…",
    error: "Error al cargar",
    noData: "No hay datos disponibles",
    viewCode: "Ver código",
    viewDemo: "Ver demo",
    updated: "Actualizado",
    stars: "Estrellas",
    forks: "Forks",
    language: "Lenguaje",
  },
  nav: {
    projects: "Proyectos",
    services: "Servicios",
    contact: "Contacto",
    contactMe: "Contáctame",
  },
  header: {
    menuLabel: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    themeToggle: "Cambiar tema",
    siteName: "webs.felipe — inicio",
  },
  hero: {
    greeting: "Hola, soy Felipe",
    title1: "Desarrollador Web",
    title2: "Full Stack",
    description:
      "Construyo aplicaciones web rápidas, seguras y escalables. Me enfoco en resolver problemas reales con código limpio y una mentalidad orientada a producto.",
    ctaPrimary: "Trabajemos juntos",
    ctaSecondary: "Ver proyectos",
  },
  projects: {
    title: "Proyectos",
    subtitle:
      "Lo que he construido — repositorios públicos sincronizados directamente desde GitHub.",
    noProjects: "Aún no hay repositorios públicos para mostrar.",
    noDescription: "Sin descripción en GitHub todavía.",
  },
  services: {
    title: "Cómo puedo ayudarte",
    subtitle:
      "Servicios enfocados en llevarte desde la idea hasta un producto funcionando, y mantenerlo vivo después.",
    items: [
      {
        title: "Aplicaciones web a medida",
        description:
          "Producto completo de principio a fin: frontend, backend, base de datos y despliegue. Interfaces que se sienten rápidas y se ven bien en cualquier pantalla.",
      },
      {
        title: "APIs e integraciones",
        description:
          "Servicios REST bien documentados, autenticación segura y conexión con plataformas de terceros. Arquitecturas limpias que escalan sin dolores de cabeza.",
      },
      {
        title: "Rendimiento y mantenimiento",
        description:
          "Optimización de carga, refactor de código existente y soporte continuo. Hago que tu aplicación cargue rápido y respire mejor.",
      },
    ],
  },
  contact: {
    title: "¿Trabajamos juntos?",
    subtitle: "Cuéntame qué necesitas y te respondo lo antes posible.",
    directContact: "Contacto directo",
    email: "juan1meza2308@gmail.com",
    findMe: "Encuéntrame en",
    socials: [
      { label: "GitHub", handle: "github.com/Juan1Meza2308" },
      { label: "TikTok", handle: "@webs.felipe" },
      { label: "Instagram", handle: "@webs.felipe" },
    ],
    form: {
      nameLabel: "Tu nombre",
      namePlaceholder: "Juan Pérez",
      emailLabel: "Tu email",
      emailPlaceholder: "juan@empresa.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      submit: "Enviar mensaje",
    },
    footer: {
      copyright: "© {year} webs.felipe. Hecho a mano.",
      backToTop: "Volver arriba",
    },
  },
  contributions: {
    title: "Actividad en GitHub",
    subtitle: "Contribuciones del último año",
    total: "Total",
    legend: {
      less: "Menos",
      more: "Más",
    },
  },
  techStack: {
    items: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
};

const en: Translations = {
  common: {
    loading: "Loading…",
    error: "Failed to load",
    noData: "No data available",
    viewCode: "View code",
    viewDemo: "View demo",
    updated: "Updated",
    stars: "Stars",
    forks: "Forks",
    language: "Language",
  },
  nav: {
    projects: "Projects",
    services: "Services",
    contact: "Contact",
    contactMe: "Contact me",
  },
  header: {
    menuLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    themeToggle: "Toggle theme",
    siteName: "webs.felipe — home",
  },
  hero: {
    greeting: "Hi, I'm Felipe",
    title1: "Web Developer",
    title2: "Full Stack",
    description:
      "I build fast, secure, and scalable web applications. I focus on solving real problems with clean code and a product-oriented mindset.",
    ctaPrimary: "Let's work together",
    ctaSecondary: "View projects",
  },
  projects: {
    title: "Projects",
    subtitle:
      "What I've built — public repositories synced directly from GitHub.",
    noProjects: "No public repositories to show yet.",
    noDescription: "No description on GitHub yet.",
  },
  services: {
    title: "How I can help",
    subtitle:
      "Services focused on taking you from idea to a working product, and keeping it alive afterwards.",
    items: [
      {
        title: "Custom web applications",
        description:
          "Complete product from start to finish: frontend, backend, database, and deployment. Interfaces that feel fast and look great on any screen.",
      },
      {
        title: "APIs & integrations",
        description:
          "Well-documented REST services, secure authentication, and third-party platform connections. Clean architectures that scale without headaches.",
      },
      {
        title: "Performance & maintenance",
        description:
          "Load optimization, refactoring existing code, and ongoing support. I make your application load fast and breathe better.",
      },
    ],
  },
  contact: {
    title: "Let's work together?",
    subtitle: "Tell me what you need and I'll get back to you as soon as possible.",
    directContact: "Direct contact",
    email: "juan1meza2308@gmail.com",
    findMe: "Find me on",
    socials: [
      { label: "GitHub", handle: "github.com/Juan1Meza2308" },
      { label: "TikTok", handle: "@webs.felipe" },
      { label: "Instagram", handle: "@webs.felipe" },
    ],
    form: {
      nameLabel: "Your name",
      namePlaceholder: "John Doe",
      emailLabel: "Your email",
      emailPlaceholder: "john@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send message",
    },
    footer: {
      copyright: "© {year} webs.felipe. Handcrafted.",
      backToTop: "Back to top",
    },
  },
  contributions: {
    title: "GitHub Activity",
    subtitle: "Contributions from the last year",
    total: "Total",
    legend: {
      less: "Less",
      more: "More",
    },
  },
  techStack: {
    items: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
};

export const translations: Record<Locale, Translations> = { es, en };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
}

export function formatCopyright(locale: Locale, year: number): string {
  return getTranslations(locale).contact.footer.copyright.replace("{year}", String(year));
}