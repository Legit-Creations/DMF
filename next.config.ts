import type { NextConfig } from "next";
import { EventEmitter } from "node:events";

EventEmitter.defaultMaxListeners = 25;

const stsHeader =
  "max-age=31536000; includeSubDomains; preload";

const cspHeader = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https://*.public.blob.vercel-storage.com",
  "media-src 'self' blob: data: https://*.public.blob.vercel-storage.com",
  "connect-src 'self' https://*.public.blob.vercel-storage.com",
  "font-src 'self' data:",
  "object-src 'self'",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "Strict-Transport-Security",
            value: stsHeader,
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "Permissions-Policy",
            value:
              "geolocation=(), camera=(), microphone=(), payment=(), fullscreen=(self)",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },

  turbopack: {},

  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "lodash",
    ],
  },

  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;