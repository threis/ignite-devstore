/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['github.com'],
  },
}

export default nextConfig
