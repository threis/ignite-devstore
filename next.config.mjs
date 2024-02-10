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
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig
