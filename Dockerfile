# Stage 1 — build
FROM node:18-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production

# install deps
COPY package.json package-lock.json* pnpm-lock.yaml* ./
# choose your package manager; example uses npm:
RUN npm ci --production=false

# copy source & build
COPY . .
RUN npm run build

# Stage 2 — runtime
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# copy from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "3000"]
