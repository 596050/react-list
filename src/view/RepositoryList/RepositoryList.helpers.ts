import { Column, Datum } from "./RepositoryList.types";

export const columns: Column[] = [
  { id: "nameWithOwner", label: "Name" },
  { id: "stargazerCount", label: "🌟 Stars" },
  { id: "forkCount", label: "🍴 Forks" },
];

export function createData({
  id,
  name,
  forkCount,
  url,
  stargazerCount,
  nameWithOwner,
}: {
  id: string;
  name: string;
  forkCount: number;
  url: string;
  stargazerCount: number;
  nameWithOwner: string;
}): Datum {
  return {
    id,
    name,
    forkCount: `🍴 ${forkCount}`,
    url,
    stargazerCount: `🌟 ${stargazerCount}`,
    nameWithOwner,
  };
}
