/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    const path = require('path');
    // Keep a single three / R3F instance for the vendored Shader Gradient bundle
    config.resolve.alias = {
      ...config.resolve.alias,
      three: path.resolve(__dirname, 'node_modules/three'),
      '@react-three/fiber': path.resolve(__dirname, 'node_modules/@react-three/fiber'),
    };
    return config;
  },
};

module.exports = nextConfig;
