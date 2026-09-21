import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  compress: true,
  partialPrefetching: true,

  experimental: {
    // TypeScript 7 ships a native CLI without the JavaScript compiler API.
    // Run the project-local TypeScript 7 CLI while ESLint uses the TS 6 API alias.
    useTypeScriptCli: true,
    optimizePackageImports: [
      "three",
      "lucide-react",
      "radix-ui",
      "@radix-ui/react-icons",
      "embla-carousel-react",
      "embla-carousel-autoplay",
      "sonner",
    ],
    turbopackRustReactCompiler: true,
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true,
    useOffline: true,
    // viewTransition: true,
    cssChunking: true,
    authInterrupts: true,
    useLightningcss: true,
    lightningCssFeatures: {
      include: ["light-dark", "oklab-colors"],
      exclude: ["nesting"],
    },
    // Next.js 16.3: Automatically bundle small prefetch payloads together
    prefetchInlining: true,
    appNewScrollHandler: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // One quality value is enough — two close values double image variant costs
    qualities: [80],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
