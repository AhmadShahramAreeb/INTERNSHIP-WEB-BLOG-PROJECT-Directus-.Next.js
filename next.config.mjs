/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [ 
            {
                hostname:"images.unsplash.com",
                protocol: "https",
            },
            {
                hostname:"media.istockphoto.com",
                protocol: "https",
            },
            {
                hostname: "localhost",
                protocol: "http",
                port: "8055",
                pathname: "/assets/**", // Assuming your images are served under /assets in Directus
              },
        ]
    }
};

export default nextConfig;
