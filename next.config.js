/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  reactStrictMode: true,
  images: {
    domains: ['govel-backend-production.up.railway.app']
  }
}

module.exports = nextConfig
