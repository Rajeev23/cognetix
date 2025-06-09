/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    esmExternals: true, // Enable ES modules
    // appDir: true, // Only if you're using the App Router
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }; // Avoids common SSR issues
    return config;
  },
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://neverinstall.com https://*.neverinstall.com https://ui.shadcn.com/placeholder.svg https://*.googleusercontent.com; connect-src 'self'; frame-ancestors 'none'; sandbox allow-downloads allow-forms allow-same-origin allow-scripts"
          }
        ]
      }
    ]
  }
};

module.exports = nextConfig;
