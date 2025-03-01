FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
RUN npm install -g sharp

FROM base AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV develop
RUN npm run build:dev

FROM nginx:latest
COPY --from=builder /app/public ./public
COPY --from=builder /app/out /usr/share/nginx/html