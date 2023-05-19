/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.manifold.xyz',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
