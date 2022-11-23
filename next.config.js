/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "flyontech-rental.s3.amazonaws.com",
      "s3.amazonaws.com",
      "s3.us-central-1.wasabisys.com",
    ],
  },
};

module.exports = nextConfig;
