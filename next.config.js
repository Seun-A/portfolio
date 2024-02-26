/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [],
  },
  env: {
    SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    USER_ID: process.env.REACT_APP_EMAILJS_USER_ID,
  }
}