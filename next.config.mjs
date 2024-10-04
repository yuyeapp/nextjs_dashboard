/** @type {import('next').NextConfig} */

const nextConfig = {
    // images
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/photos/**',
            },
        ],
    },
    // partial prerendering
    experimental: {
        ppr: 'incremental',
    },
};

export default nextConfig;

