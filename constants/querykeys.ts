export const Querykeys = {
  BEACH: {
    WEATHER: {
      WATER: ['GetWaterTemperature'],
      WAVE: ['GetWave'],
      ULTRA: {
        FORECAST: ['GetUltraForecast'],
      },
    },
  },
  LIVING: {
    UV: ['GetUV'],
  },
  AIR: {
    QUALITY: ['GetAirQuality'],
  },
  FORECAST: {
    MEDIUM: {
      TEMPT: ['GetMediumForecast'],
      RAIN: ['GetMediumRain'],
    },
    SHORT: ['GetShortForecast'],
  },
  OCEAN: {
    DATA: ['OceanData'],
  },
};
