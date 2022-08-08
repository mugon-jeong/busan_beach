import { API_URL_BASE } from '$config';

export const API_ROUTES = Object.freeze({
  BEACH: {
    WEATHER: {
      WATER: `${API_URL_BASE}/1360000/BeachInfoservice/getTwBuoyBeach`,
      WAVE: `${API_URL_BASE}/1360000/BeachInfoservice/getWhBuoyBeach`,
      FORECAST: `${API_URL_BASE}/1360000/BeachInfoservice/getVilageFcstBeach`,
      SHORT: {
        FORECAST: `${API_URL_BASE}/1360000/BeachInfoservice/getUltraSrtFcstBeach`,
      },
    },
  },
});
