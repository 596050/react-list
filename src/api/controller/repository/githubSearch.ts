import { baseURL, githubToken, post, RequestArgs } from "../../api";

type RequestProps = { options: RequestArgs };

type GetRepositoriesReturn = {
  data: { search: GithubSearchRepositoriesResponse };
};

export const getRepositories = async (props?: RequestProps) => {
  const res = await post<GetRepositoriesReturn>({
    url: `${baseURL}`,
    ...props,
    options: {
      ...props?.options,
      // apply token
      headers: {
        Authorization: `bearer ${githubToken}`,
      },
    },
  });

  return (res || {})?.data;
};
