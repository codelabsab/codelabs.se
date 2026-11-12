/**
 * Security headers sent on every response.
 *
 * The site is fully static: no auth, cookies, forms or third-party scripts,
 * and every image, font and video is served from this origin. The CSP can
 * therefore lock everything to 'self'.
 *
 * 'unsafe-inline' stays on script-src because Next.js inlines its bootstrap
 * and the JSON-LD blocks, and a nonce-based policy would force every page to
 * render dynamically. It stays on style-src for React inline style attributes.
 * Nothing on the site renders user input, so there is no injection path for
 * an inline script to arrive through.
 */
const isDev = process.env.NODE_ENV !== 'production'

const contentSecurityPolicy = [
  "default-src 'self'",
  // React's dev tooling needs eval; production does not get it.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "media-src 'self'",
  `connect-src 'self'${isDev ? ' ws:' : ''}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do not advertise the framework.
  poweredByHeader: false,
  // No `images.remotePatterns`: every image is local, so the image optimizer
  // refuses to fetch any remote URL.
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

module.exports = nextConfig
