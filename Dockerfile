FROM node:14

COPY . ./app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn

RUN yarn build

CMD ["yarn", "start"]