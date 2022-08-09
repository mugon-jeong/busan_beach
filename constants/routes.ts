import { API_URL_BASE, BEACH_WEATHER_KEY, LIVING_WEATHER_KEY } from '$config';

export const API_ROUTES = {
  BEACH: {
    WEATHER: {
      WATER: `${API_URL_BASE}/1360000/BeachInfoservice/getTwBuoyBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      WAVE: `${API_URL_BASE}/1360000/BeachInfoservice/getWhBuoyBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      FORECAST: `${API_URL_BASE}/1360000/BeachInfoservice/getVilageFcstBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      ULTRA: {
        FORECAST: `${API_URL_BASE}/1360000/BeachInfoservice/getUltraSrtFcstBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      },
      
    },
    
  },
  LIVING: {
    UV: `${API_URL_BASE}/1360000/LivingWthrIdxServiceV2/getUVIdxV2?serviceKey=${LIVING_WEATHER_KEY}`,
  },
};
