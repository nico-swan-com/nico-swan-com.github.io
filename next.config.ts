import type { NextConfig } from 'next'

/**
 * One config, selected by BUILD_TYPE:
 *
 * - BUILD_TYPE=static      GitHub Pages (nicoswan.com). `output: 'export'` to ./out.
 *                          Must stay byte-for-byte compatible with the Pages workflow.
 * - BUILD_TYPE=standalone  Docker image (and the legacy cPanel build). Emits a
 *                          self-contained server in _next/standalone that embeds this
 *                          config, so no TypeScript is needed at runtime.
 * - unset                  Plain `next build` / `next start` for local use.
 *
 * The site has no API routes, server actions, middleware or runtime env usage,
 * so the same app builds cleanly for both the static export and the server.
 */
const { BUILD_TYPE } = process.env

const defaultConfig: NextConfig = {
  distDir: '_next'
}

const customServerConfig: NextConfig = {
  distDir: '_next',
  /**
   * Self-contained server output (_next/standalone/server.js) for Docker.
   *
   * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/output
   */
  output: 'standalone',
  /**
   * Pin file tracing to this project so the standalone layout is always
   * `_next/standalone/server.js`, even when built inside a git worktree or a
   * monorepo-like parent directory with other lockfiles.
   */
  outputFileTracingRoot: __dirname,
  /**
   * The standalone server.js embeds the resolved config, so TypeScript is
   * never loaded at runtime; don't ship it in the image.
   */
  outputFileTracingExcludes: {
    '*': ['node_modules/typescript/**']
  }
}

const staticConfig: NextConfig = {
  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: 'export',

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true
  }
}

let nextConfig = defaultConfig
switch (String(BUILD_TYPE).toUpperCase()) {
  case 'STATIC':
    nextConfig = staticConfig
    break
  case 'STANDALONE':
    nextConfig = customServerConfig
    break
  default:
    nextConfig = defaultConfig
    break
}

export default nextConfig
