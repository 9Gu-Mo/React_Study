/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/React_Study" : "",
  assetPrefix: isProd ? "/React_Study" : "",
  images: {
    unoptimized: true,
    domains: ["cdn.jsdelivr.net"],
  },
};

module.exports = nextConfig;
