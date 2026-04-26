/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
