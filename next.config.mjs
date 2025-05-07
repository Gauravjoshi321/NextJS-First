/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'csswrjqetukbmmeliksc.supabase.co',
        pathname: '/storage/v1/object/**',
      },
    ],
  },
  // output: "export"
};

export default nextConfig;
