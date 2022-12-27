/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  // ... rest of the configuration.
  experimental: {
    outputStandalone: true,
  },
}

module.exports = nextConfig
