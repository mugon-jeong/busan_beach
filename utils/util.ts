import { IconKey } from '$constants/icons';

export const convertIconKey = (type: string): IconKey | null => {
  if (type == '맑음') {
    return 'CLEAN';
  }

  if (type == '구름많음') {
    return 'CLOUD';
  }

  if (type == '흐림') {
    return 'BLUR';
  }
  if (type == '비') {
    return 'RAIN';
  }
  if (type == '비/눈') {
    return 'RAINSNOW';
  }
  if (type == '눈') {
    return 'SNOW';
  }
  if (type == '소나기') {
    return 'RAIN';
  }
  if (type == '빗방울') {
    return 'RAIN';
  }
  if (type == '빗방울눈날림') {
    return 'RAINSNOW';
  }
  if (type == '눈날림') {
    return 'SNOW';
  }
  return null;
};
