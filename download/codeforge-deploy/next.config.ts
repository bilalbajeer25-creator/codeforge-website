import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export" removed - API routes needed for AI blog generation
  // Deploy on Netlify with GitHub connection for API support
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
