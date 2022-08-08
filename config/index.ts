import getConfig from 'next/config';

const env = process.env.NEXT_PUBLIC_ENV;

interface Config {
  NEXT_PUBLIC_ENV: string;
  API_URL_BASE: string;
  BEACH_WEATHER_KEY: string;
}

const config = getConfig();
const publicRuntimeConfig: Config = config.publicRuntimeConfig;
export const HOST_URL = 'http://localhost:3000';
export const { NEXT_PUBLIC_ENV, API_URL_BASE, BEACH_WEATHER_KEY } = publicRuntimeConfig;
