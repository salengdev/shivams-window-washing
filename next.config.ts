import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shivams-window-washing.vercel.app",
      },
    ],
  },
};

export default nextConfig;