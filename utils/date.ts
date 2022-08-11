import moment from 'moment';

export const getCurrentYYYYMMDDHH = () => {
  return moment().format('YYYYMMDDHHMM');
};
export const getCurrentYYYYMMDD = () => {
  return moment().format('YYYYMMDD');
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
