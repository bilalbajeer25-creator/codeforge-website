import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export" removed - API routes needed for AI blog generation
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
