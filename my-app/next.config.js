/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/React_Study",
  assetPrefix: "/React_Study/",
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
};

module.exports = nextConfig;
