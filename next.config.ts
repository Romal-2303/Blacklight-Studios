import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] }, // Prevent conflicts with static imports
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
