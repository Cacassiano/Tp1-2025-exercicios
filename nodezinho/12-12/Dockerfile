FROM node:lts-alpine3.22 AS builder

COPY . .
RUN npm i

EXPOSE 3000
ENTRYPOINT [ "node", "app.js"]