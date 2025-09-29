/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/crypto-nextjs' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/crypto-nextjs' : ''
};

export default nextConfig;
