/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', 
    images: {
        unoptimized: true,
    },
    basePath: "/Home",
    assetPrefix: "/Home",
};

module.exports = nextConfig;
