export type RequestArgs = RequestInit;

export enum HttpMethods {
  "GET" = "GET",
  "PUT" = "PUT",
  "POST" = "POST",
  "PATCH" = "PATCH",
  "DELETE" = "DELETE",
}

export const httpDefaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const baseURL = process.env.REACT_APP_SERVICE_BASE_URL;
export const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

export const fetcher = (method: HttpMethods) => <T>({
  url,
  options,
}: {
  url: string;
  options?: RequestArgs;
}): Promise<T | undefined> =>
  fetch(url, {
    method,
    ...options,
    headers: { ...httpDefaultHeaders, ...options?.headers },
  })
    .then((r) => {
      if (r?.headers?.get("content-type")?.match("json")) {
        return r.json();
      }
    })
    .catch((e) => {
      console.error(`Error: ${url} \n ${e}`);
    });

export const get = fetcher(HttpMethods.GET);
export const put = fetcher(HttpMethods.PUT);
export const post = fetcher(HttpMethods.POST);
export const patch = fetcher(HttpMethods.PATCH);
export const del = fetcher(HttpMethods.DELETE);
