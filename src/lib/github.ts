export const GITHUB_USERNAME = "Juan1Meza2308";

export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  fork: boolean;
  updated_at: string;
};

export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type Contributions = {
  total: Record<string, number>;
  contributions: ContributionDay[];
};

export async function fetchRepos(user = GITHUB_USERNAME): Promise<Repo[]> {
  const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub repos request failed (${res.status})`);
  const data: Repo[] = await res.json();
  return data.filter((r) => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count);
}

export async function fetchContributions(user = GITHUB_USERNAME): Promise<Contributions> {
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`);
  if (!res.ok) throw new Error(`Contributions request failed (${res.status})`);
  return res.json();
}

export const repoQuery = (user = GITHUB_USERNAME) => ({
  queryKey: ["github-repos", user],
  queryFn: () => fetchRepos(user),
  staleTime: 1000 * 60 * 10,
  retry: 1,
});

export const contributionsQuery = (user = GITHUB_USERNAME) => ({
  queryKey: ["github-contributions", user],
  queryFn: () => fetchContributions(user),
  staleTime: 1000 * 60 * 30,
  retry: 1,
});
