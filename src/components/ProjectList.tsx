import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, CalendarDays, GitFork, Star } from "lucide-react";
import { repoQuery, type Repo } from "@/lib/github";

function ProjectRow({ repo }: { repo: Repo }) {
  const language = repo.language ?? "Varios";

  return (
    <article className="grid gap-8 border-t border-border/60 py-10 transition-colors hover:bg-secondary/20 md:grid-cols-[1fr_1fr] md:gap-12">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold leading-tight text-foreground">
            {repo.name.replace(/[-_]/g, " ")}
          </h3>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Ver repositorio ${repo.name} en GitHub`}
            className="mt-1 shrink-0 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowUpRight className="size-5" />
          </a>
        </div>

        <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
          {repo.description ?? "Sin descripción en GitHub todavía."}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-accent" aria-hidden="true" />
            {language}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Star className="size-4" aria-hidden="true" />
            {repo.stargazers_count}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <GitFork className="size-4" aria-hidden="true" />
            {repo.forks_count}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4" aria-hidden="true" />
            {new Date(repo.updated_at).toLocaleDateString("es", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        {repo.topics && repo.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            Ver código
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Ver demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectList({ username }: { username?: string }) {
  const { data, isLoading, isError } = useQuery(repoQuery(username));

  if (isLoading) {
    return (
      <div className="mt-10 space-y-6">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-40 animate-pulse rounded-2xl bg-secondary/50" />
        ))}
      </div>
    );
  }

  if (isError || !data?.length) {
    return (
      <p className="mt-10 text-sm text-muted-foreground">
        Aún no hay repositorios públicos para mostrar.
      </p>
    );
  }

  return (
    <div className="pt-8">
      {data.slice(0, 8).map((repo) => (
        <ProjectRow key={repo.id} repo={repo} />
      ))}
      <div className="border-t border-border/60" />
    </div>
  );
}
