/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  // Ensure proper module resolution
  transpilePackages: [],
}

module.exports = nextConfig