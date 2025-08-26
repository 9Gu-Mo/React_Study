/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/React_Study",
  assetPrefix: "/React_Study/",
  images: {
    unoptimized: true,
    domains: ["cdn.jsdelivr.net"],
  },
};

module.exports = nextConfig;
