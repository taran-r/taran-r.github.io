/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Do not transpile @shadergradient/react — its prebuilt ESM chunks break when re-bundled
  transpilePackages: ['@react-three/fiber', 'three', 'three-stdlib', 'camera-controls'],
  webpack: (config) => {
    const path = require('path')
    // Dedupe three so R3F and ShaderGradient share one instance
    config.resolve.alias = {
      ...config.resolve.alias,
      three: path.resolve(__dirname, 'node_modules/three'),
    }
    return config
  },
}

module.exports = nextConfig
