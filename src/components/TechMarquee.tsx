const MARQUEE_ITEMS = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Vite",
  "Git",
];

export function TechMarquee() {
  return (
    <section
      aria-label="Tecnologías que manejo"
      className="overflow-hidden border-y border-border/60 bg-secondary/20 py-5"
    >
      <div className="flex w-max animate-marquee">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            aria-hidden={i >= MARQUEE_ITEMS.length}
          >
            {item}
            <span className="text-accent" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
