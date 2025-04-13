FROM node:22-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build:standalone

FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80

COPY --from=builder /app/.next/standalone ./

EXPOSE 80

CMD ["node", "server.js"]
