import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",  // Disabled for Adsterra ads (needs server-side rendering)
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
