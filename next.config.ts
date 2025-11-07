import type { NextConfig } from 'next';
import withPlaiceholder from '@plaiceholder/next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
    ],
    unoptimized: true,
  },
};

export default withPlaiceholder(nextConfig);
