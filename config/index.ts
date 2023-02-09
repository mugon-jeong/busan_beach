import getConfig from 'next/config';

const env = process.env.NEXT_PUBLIC_ENV;

interface Config {
  NEXT_PUBLIC_ENV: string;
  API_URL_BASE: string;
  BEACH_WEATHER_KEY: string;
  OCEAN_DATA_KEY: string;
  LIVING_WEATHER_KEY: string;
  MEDIUM_FORECAST_KEY: string;
  SHORT_FORECAST_KEY: string;
  AIR_QUALITY_KEY: string;
  NAVER_ANALYTICS_KEY: string;
  GA_TRACKING_ID: string;
  GOOGLE_AD_SENSE_ID: string;
}

const config = getConfig();
const publicRuntimeConfig: Config = config.publicRuntimeConfig;
export const HOST_URL = env === 'local' ? 'http://localhost:3000' : 'https://busanbeachweather.com';
export const {
  NEXT_PUBLIC_ENV,
  API_URL_BASE,
  BEACH_WEATHER_KEY,
  OCEAN_DATA_KEY,
  LIVING_WEATHER_KEY,
  MEDIUM_FORECAST_KEY,
  SHORT_FORECAST_KEY,
  AIR_QUALITY_KEY,
  NAVER_ANALYTICS_KEY,
  GA_TRACKING_ID,
  GOOGLE_AD_SENSE_ID,
} = publicRuntimeConfig;
