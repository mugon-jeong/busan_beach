export const SkyStatus = {
  clean: '맑음',
  cloud: '구름많음',
  blur: '흐림',
};
export const skyRole = (fcstValue: number): string | null => {
  if (0 <= fcstValue && fcstValue < 6) {
    return SkyStatus.clean;
  } else if (6 <= fcstValue && fcstValue < 9) {
    return SkyStatus.cloud;
  } else if (9 <= fcstValue && fcstValue < 11) {
    return SkyStatus.blur;
  } else {
    return null;
  }
};
export const rainRole = (fcstValue: number): string | null => {
  if (fcstValue == 1) {
    return '비';
  } else if (fcstValue == 2) {
    return '비/눈';
  } else if (fcstValue == 3) {
    return '눈';
  } else if (fcstValue == 4) {
    return '소나기';
  } else {
    return null;
  }
};
