# Start steps:

- Enter the root directory

# 1. Provide .env files:

Change file name of .env-example to .env with

- REACT_APP_SERVICE_BASE_URL=https://api.github.com/graphql
- PORT=3000
- REACT_APP_GITHUB_TOKEN=[REPLACE_WITH_TOKEN:https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token]

Get github access token and set equal to REACT_APP_GITHUB_TOKEN

# 2. Install and run at `localhost:3000`:

## For running client locally run:

- yarn && yarn start

## For dockerization:

- docker build -f Dockerfile -t react-list .

- docker run \
  -it \
  --rm \
  -v \${PWD}:/app \
  -v /app/node_modules \
  -p 3000:3001 \
  -e CHOKIDAR_USEPOLLING=true \
  react-list

# 3. To run tests:

For cypress end to end tests

- yarn test:e2e
