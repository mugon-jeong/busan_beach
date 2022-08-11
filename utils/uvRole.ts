export const uvRole = (uvRate: number) => {
  if (0 <= uvRate && uvRate <= 2) {
    return '낮음';
  } else if (3 <= uvRate && uvRate <= 5) {
    return '보통';
  } else if (6 <= uvRate && uvRate <= 7) {
    return '높음';
  } else {
    return '위험';
  }
};
