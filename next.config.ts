import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Needed for static exports
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.karma-living.com.au",
      },
      {
        protocol: "https",
        hostname: "www.instagram.com",
      },
    ],
  },
};

export default nextConfig;
