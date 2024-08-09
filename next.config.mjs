/** @type {import('next').NextConfig} */
const nextConfig = {
  output :"export",
  trailingSlash:true,
    images: {
      unoptimized:true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nitdgplug.org',
            port: '',
          },
          {
            protocol: 'https',
            hostname: '"api.nitdgplug.org',
            port: '',
          },
        ],
      },
};

export default nextConfig;
