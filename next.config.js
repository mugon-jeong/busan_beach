/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_ENV } = process.env;
const isLocal = NEXT_PUBLIC_ENV === 'local';
const CONFIG = require(`./config/${NEXT_PUBLIC_ENV}`);
const LOCAL_ORIGIN = 'http://localhost:3000';
const publicRuntimeConfig = {
  NEXT_PUBLIC_ENV,
  ...CONFIG,
};
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const nextConfig = {
  reactStrictMode: true,
  env: publicRuntimeConfig,
  publicRuntimeConfig,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  ...(isLocal && {
    async rewrites() {
      return [
        {
          basePath: false,
          source: '/assets/:path*',
          destination: `${LOCAL_ORIGIN}/:publicfiles`,
        },
      ];
    },
  }),
};

module.exports = nextConfig;
