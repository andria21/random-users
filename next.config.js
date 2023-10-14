/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.pexels.com", "randomuser.me"],
  },
};

module.exports = nextConfig;
