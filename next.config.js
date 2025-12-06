/* eslint-env node */

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  // Optional: explicitly declare turbopack config so Next 16 is happy
  turbopack: {},
};

module.exports = nextConfig;
