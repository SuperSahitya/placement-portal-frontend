/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
