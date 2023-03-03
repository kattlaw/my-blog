/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
   domains: ["cdn.sanity.io"],
  },
 async rewrites() {
  return [
    {
      source: "/rss",
      destination: "/rss.xml"
    }
  ]
 }
};
