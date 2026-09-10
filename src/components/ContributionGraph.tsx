import { useQuery } from "@tanstack/react-query";
import { contributionsQuery, type ContributionDay } from "@/lib/github";

const levelClass: Record<number, string> = {
  0: "bg-grid-0",
  1: "bg-grid-1",
  2: "bg-grid-2",
  3: "bg-grid-3",
  4: "bg-grid-4",
};

function chunkWeeks(days: ContributionDay[]) {
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  return weeks;
}

const MAX_WEEKS = 26;

export function ContributionGraph({ username }: { username?: string }) {
  const { data, isLoading, isError } = useQuery(contributionsQuery(username));

  const days = data?.contributions ?? [];
  const weeks = chunkWeeks(days).slice(-MAX_WEEKS);
  const shownDays = weeks.flat();
  const first = shownDays[0]?.date;
  const last = shownDays[shownDays.length - 1]?.date;
  const total = shownDays.reduce((s, d) => s + d.count, 0);

  const fmt = (d?: string) =>
    d ? new Date(d).toLocaleDateString("es", { month: "short", year: "2-digit" }) : "";

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          GitHub contributions
        </p>
        <svg viewBox="0 0 16 16" className="size-5 fill-foreground" aria-hidden>
          <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.94-.89-1.19-.89-1.19-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.23 1.87.87 2.33.67.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.96 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.08-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
        </svg>
      </div>

      {isLoading && <div className="mt-6 h-24 animate-pulse rounded-md bg-muted" />}
      {isError && (
        <p className="mt-6 text-sm text-muted-foreground">
          No se pudieron cargar las contribuciones ahora mismo.
        </p>
      )}

      {!isLoading && !isError && (
        <>
          <div className="mt-5">
            <div className="flex gap-[2px] md:gap-[3px]">
              {weeks.map((week, i) => (
                <div key={i} className="flex flex-col gap-[2px] md:gap-[3px]">
                  {week.map((day) => (
                    <span
                      key={day.date}
                      role="img"
                      aria-label={`${day.count} contribuciones el ${day.date}`}
                      title={`${day.count} contribuciones · ${day.date}`}
                      className={`size-[8px] rounded-[2px] md:size-[9px] ${levelClass[day.level]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>{fmt(first)}</span>
            <span className="font-medium text-foreground">{total} en 6 meses</span>
            <span>{fmt(last)}</span>
          </div>
          <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground">
            <span>Menos</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <span
                key={level}
                className={`size-[8px] rounded-[2px] md:size-[9px] ${levelClass[level]}`}
                aria-hidden="true"
              />
            ))}
            <span>Más</span>
          </div>
        </>
      )}
    </div>
  );
}
