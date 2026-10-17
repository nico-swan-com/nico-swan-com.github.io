# syntax=docker/dockerfile:1

# Multi-stage build for the Next.js standalone server.
#
#   deps    -> install all dependencies from the lockfile (build needs dev deps)
#   builder -> `next build` with BUILD_TYPE=standalone (output: 'standalone')
#   runner  -> only the traced standalone server, static assets and public/
#
# The runner never sees next.config.ts or TypeScript: the standalone server.js
# embeds the resolved Next config, so nothing is installed at start-up.

ARG NODE_IMAGE=node:22-alpine

# ---- deps -------------------------------------------------------------------
FROM ${NODE_IMAGE} AS deps
WORKDIR /app
# libc6-compat helps some prebuilt binaries (e.g. @next/swc, sharp) on musl
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
# --ignore-scripts skips the husky "prepare" hook (no .git in the build context)
RUN npm ci --ignore-scripts --no-fund \
  && npm audit --omit=dev

# ---- builder ----------------------------------------------------------------
FROM ${NODE_IMAGE} AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 \
    BUILD_TYPE=standalone
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# distDir is "_next" (see next.config.ts), so the output lands in
# _next/standalone and _next/static
RUN npx --no-install next build

# ---- runner -----------------------------------------------------------------
FROM ${NODE_IMAGE} AS runner
WORKDIR /app

ARG VERSION=dev
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=3000 \
    APP_VERSION=${VERSION}

# The official node image already ships an unprivileged "node" user (uid 1000)
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/_next/standalone ./
COPY --from=builder --chown=node:node /app/_next/static ./_next/static

USER node
EXPOSE 3000

CMD ["node", "server.js"]
