/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [],
  },
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_ID: process.env.USER_ID,
  }
}