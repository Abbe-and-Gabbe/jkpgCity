FROM node:21-alpine3.18

WORKDIR /frontend

COPY ./package*.json ./

RUN npm ci

COPY . ./

CMD npm run dev -- --host