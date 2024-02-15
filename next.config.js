/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', 
    images: {
        unoptimized: true,
    },
    basePath: "/Home",
};

// export default nextConfig;
module.exports = nextConfig;
