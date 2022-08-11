export const skyRole = (fcstValue: number): string | null => {
  if (0 <= fcstValue && fcstValue < 6) {
    return '맑음';
  } else if (6 <= fcstValue && fcstValue < 9) {
    return '구름많음';
  } else if (9 <= fcstValue && fcstValue < 11) {
    return '흐림';
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
