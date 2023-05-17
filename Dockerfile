# syntax=docker/dockerfile:1
   
FROM node:18-alpine
RUN npm i -g pnpm
WORKDIR /src
COPY package.json pnpm-lock.yaml ./
RUN pnpm i --prod
COPY . .
CMD ["node", "dist/src/main.js"]
EXPOSE 3000