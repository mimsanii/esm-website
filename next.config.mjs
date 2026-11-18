/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be hosted anywhere (cPanel, Vercel, Netlify).
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // Lets you open the dev site from your phone on the same Wi-Fi without warnings.
  allowedDevOrigins: ['192.168.100.8'],
};

export default nextConfig;
