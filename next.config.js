/**
 * @type {import('next').NextConfig}
 */

const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { NEXT_PUBLIC_ENV } = process.env;
const isLocal = NEXT_PUBLIC_ENV === 'local';
const CONFIG = require(`./config/${NEXT_PUBLIC_ENV}`);
const LOCAL_ORIGIN = 'http://localhost:3000';
const publicRuntimeConfig = {
  NEXT_PUBLIC_ENV,
  ...CONFIG,
};
const nextConfig = {
  reactStrictMode: true,
  env: publicRuntimeConfig,
  publicRuntimeConfig,
  swcMinify: true,
  compiler: {
    emotion: {
      sourceMap: isLocal,
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

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: isLocal,
  },
  reactStrictMode: true,
  env: publicRuntimeConfig,
  publicRuntimeConfig,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    emotion: {
      sourceMap: isLocal,
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
});
