export interface Column {
  id: "nameWithOwner" | "stargazerCount" | "forkCount";
  label: string;
}

export interface Datum {
  id: string;
  name: string;
  forkCount: string;
  url: string;
  stargazerCount: string;
  nameWithOwner: string;
}

export type Response = {
  pageInfo?: GithubSearchRepositoriesResponse["pageInfo"];
  edges?: GithubSearchRepositoriesResponse["edges"];
  searchValue?: string;
};
