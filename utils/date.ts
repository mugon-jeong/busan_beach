import moment from 'moment';

export const getCurrentYYYYMMDDHH = () => {
  return moment().format('YYYYMMDDHHMM');
};
export const getShortForecastDate = () => {
  const currentTime = convertHHtoInt();
  if (0 <= currentTime && currentTime < 3) {
    return getYtdYYYYMMDD();
  }
  return getCurrentYYYYMMDD();
};

export const getDustDate = () => {
  const currentTime = parseInt(moment().format('HH'));
  if (0 <= currentTime && currentTime < 2) {
    return getYtdYYYYMMDD() + '24';
  }
  return getCurrentDayMinusHour();
};

export const getMediumYYYYMMDDHH = () => {
  const currentTime = parseInt(moment().format('HH'));
  if (0 <= currentTime && currentTime < 9) {
    return getYtdYYYYMMDD() + '18';
  }
  return getCurrentYYYYMMDD() + '06';
};
export const getCurrentYYYYMMDD = () => {
  return moment().format('YYYYMMDD');
};
export const getYtdYYYYMMDD = () => {
  return moment().subtract(1, 'day').format('YYYYMMDD');
};
export const getTmrwYYYYMMDD = () => {
  return moment().add(1, 'day').format('YYYYMMDD');
};

export const addDayMMDD = (day: number) => {
  return moment().add(day, 'day').format('MM.DD');
};
export const getCurrentHHMMMinusOne = () => {
  return moment().subtract(1, 'hour').format('HHMM');
};
export const getCurrentDayMinusHour = () => {
  return moment().subtract(1, 'hour').format('YYYYMMDDHH');
};
export const getCurrentDayMinusHourHHMM = () => {
  return moment().subtract(1, 'hour').format('YYYYMMDDHH');
};
export const getCurrentMonth = () => {
  const month = moment().format('MM');
  return month.replace(/(^0+)/, '');
};

export const getCurrentDate = () => {
  const day = moment().format('DD');
  return day.replace(/(^0+)/, '');
};

export const convertCurrentDay = () => {
  const Day = moment().day().toString();
  if (Day == '0') {
    return '일';
  } else if (Day == '1') {
    return '월';
  } else if (Day == '2') {
    return '화';
  } else if (Day == '3') {
    return '수';
  } else if (Day == '4') {
    return '목';
  } else if (Day == '5') {
    return '금';
  } else if (Day == '6') {
    return '토';
  }
};
export const convertHHtoInt = (): number => {
  return parseInt(moment().format('HH'));
};

export const requestShortForecastHH = () => {
  const hh = convertHHtoInt();
  if (3 <= hh && hh < 6) {
    return '0200';
  } else if (6 <= hh && hh < 9) {
    return '0500';
  } else if (9 <= hh && hh < 12) {
    return '0800';
  } else if (12 <= hh && hh < 15) {
    return '1100';
  } else if (15 <= hh && hh < 18) {
    return '1400';
  } else if (18 <= hh && hh < 21) {
    return '1700';
  } else if (21 <= hh && hh < 24) {
    return '2000';
  } else {
    return '2300';
  }
};
