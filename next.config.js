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
  // Fix for deployment issues
  swcMinify: true,
}

module.exports = nextConfig