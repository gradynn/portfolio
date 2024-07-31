/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    output: "export",
    basePath: "portfolio",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
