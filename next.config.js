/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '44378',
                pathname: '/files/**',
            },
        ],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias['@elastic/eui/lib'] = '@elastic/eui/dist/eui';
        }
      
        return config;
    },
}

module.exports = nextConfig
