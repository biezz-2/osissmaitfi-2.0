/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps in development to reduce file operations
  productionBrowserSourceMaps: false,
  // Reduce file system operations
  experimental: {
    // Disable features that might cause permission issues
  },
  images: {
    domains: [
      'images.unsplash.com',
      'picsum.photos'
    ],
  },
}

module.exports = nextConfig