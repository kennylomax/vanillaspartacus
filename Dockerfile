FROM node:16-alpine AS builder

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

FROM node:14-alpine AS runner

WORKDIR /app
EXPOSE 4000
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json /app

CMD npm run serve:ssr
