import { useQuery } from "@tanstack/react-query";
import { repoQuery, type Repo } from "@/lib/github";

function ProjectRow({ repo, index }: { repo: Repo; index: number }) {
  return (
    <article className="grid gap-8 border-t border-border/40 py-12 md:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="font-display text-4xl text-muted-foreground">
          &lt;{index + 1}&gt;
        </p>
        <h3 className="mt-6 text-2xl font-semibold leading-tight text-foreground">
          {repo.name.replace(/[-_]/g, " ")}
        </h3>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Stack
        </p>
        <p className="text-sm font-medium text-accent">
          {repo.language ?? "Varios"}
          {repo.topics?.length ? ` · ${repo.topics.slice(0, 4).join(", ")}` : ""}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
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
      <div className="rounded-2xl border border-border/60 bg-secondary/40 p-8">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {repo.description ?? "Sin descripción en GitHub todavía."}
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Stars
            </dt>
            <dd className="mt-1 text-foreground">{repo.stargazers_count}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Actualizado
            </dt>
            <dd className="mt-1 text-foreground">
              {new Date(repo.updated_at).toLocaleDateString("es")}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function ProjectList({ username }: { username?: string }) {
  const { data, isLoading, isError } = useQuery(repoQuery(username));

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-48 animate-pulse rounded-2xl bg-secondary/50" />
        ))}
      </div>
    );
  }

  if (isError || !data?.length) {
    return (
      <p className="text-sm text-muted-foreground">
        Aún no hay repositorios públicos para mostrar.
      </p>
    );
  }

  return (
    <div>
      {data.slice(0, 8).map((repo, i) => (
        <ProjectRow key={repo.id} repo={repo} index={i} />
      ))}
    </div>
  );
}
