export const dustRole = (dust: number) => {
  if (0 <= dust && dust <= 30) {
    return '좋음';
  } else if (31 <= dust && dust <= 80) {
    return '보통';
  } else if (81 <= dust && dust <= 150) {
    return '나쁨';
  } else {
    return '위험';
  }
};

export const dustFineRole = (dust: number) => {
  if (0 <= dust && dust <= 15) {
    return '좋음';
  } else if (16 <= dust && dust <= 35) {
    return '보통';
  } else if (36 <= dust && dust <= 75) {
    return '나쁨';
  } else {
    return '위험';
  }
};
