const basePath = '/Portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: `${basePath}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Exposed so components can prefix hardcoded `/public` asset paths
  // (next/image does NOT auto-prepend basePath when images.unoptimized is true).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;