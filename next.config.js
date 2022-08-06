/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_ENV } = process.env;
const isLocal = NEXT_PUBLIC_ENV === 'local';
const CONFIG = require(`./config/${NEXT_PUBLIC_ENV}`);
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
    styledComponents: {
      ssr: true,
    },
  },
};

module.exports = nextConfig;
