/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/shelly-ips",
  assetPrefix: "./",
};

export default nextConfig;