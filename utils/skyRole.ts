export const SkyStatus = {
  clean: '맑음',
  cloud: '구름많음',
  blur: '흐림',
};
export const skyRole = (fcstValue: number): string | null => {
  if (fcstValue == 1) {
    return SkyStatus.clean;
  } else if (fcstValue == 3) {
    return SkyStatus.cloud;
  } else {
    return SkyStatus.blur;
  }
};
export const rainRole = (fcstValue: number, isUltra?: boolean | false): string | null => {
  if (isUltra) {
    if (fcstValue == 1) {
      return '비';
    } else if (fcstValue == 2) {
      return '비/눈';
    } else if (fcstValue == 3) {
      return '눈';
    } else if (fcstValue == 4) {
      return '소나기';
    } else if (fcstValue == 5) {
      return '빗방울';
    } else if (fcstValue == 6) {
      return '빗방울눈날림';
    } else if (fcstValue == 7) {
      return '눈날림';
    } else {
      return null;
    }
  }

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
