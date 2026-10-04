/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: require('path').join(__dirname),
}

function supabaseHostname() {
  const value = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
  if (!value) return null
  try {
    return new URL(value).hostname
  } catch {
    return null
  }
}

const imageHosts = [
  {
    protocol: 'https',
    hostname: 'images.ctfassets.net',
    port: '',
    pathname: '/**',
  },
]

const storageHost = supabaseHostname()
if (storageHost) {
  imageHosts.push({
    protocol: 'https',
    hostname: storageHost,
    port: '',
    pathname: '/storage/v1/object/public/**',
  })
}

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: imageHosts,
  },
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_ID: process.env.USER_ID,
  }
}