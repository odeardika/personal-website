/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/odeardika/personal-project-img/refs/heads/main/**",
      },
    ],
  },
};

export default nextConfig;
