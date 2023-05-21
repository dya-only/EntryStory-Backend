FROM node:latest
RUN npm i -g pnpm
RUN npm i -g @nestjs/cli
WORKDIR /backend
COPY package.json pnpm-lock.yaml ./
RUN pnpm i
COPY . .
CMD ["pnpm", "start:dev"]
EXPOSE 3000