export const gqlQueryGithubSearch = ({
  query,
  after = "",
  before = "",
  first = 20,
}: {
  query: string;
  after?: string;
  before?: string;
  first?: number;
}) => `search(query: "${query}", type: REPOSITORY, first: ${first}${
  before ? `, before: "${before}"` : ""
}${after ? `, after: "${after}"` : ""}) {
      pageInfo {
        startCursor
        hasNextPage
        hasPreviousPage
        endCursor
      }
      edges {
        node {
          ... on Repository {
            id
            name
            forkCount
            url
            stargazerCount
            nameWithOwner
          }
        }
      }
    }`;
