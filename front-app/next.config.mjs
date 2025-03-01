/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    transpilePackages: ['react-big-calendar']
};

export default nextConfig;
