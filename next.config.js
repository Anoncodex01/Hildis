/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    // Add loader for .geojson files
    config.module.rules.push({
      test: /\.geojson$/,
      type: 'json',
    });
    return config;
  },
};

module.exports = nextConfig;

