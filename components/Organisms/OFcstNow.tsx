import React from 'react';
import AtomDate from '../Atoms/AtomDate';
import AtomPlace from '../Atoms/AtomPlace';
import Weather, { nowInfo } from '../Molecules/Weather';
import { useGetShortForecast } from '$queries/useGetShortForecast';
import { convertCurrentDay, getCurrentDate, getCurrentMonth } from '$utils/date';

const OFcstNow = () => {
  const { data: dayForecast } = useGetShortForecast(99, 75, {
    onSuccess: data => {
      console.log(data);
    },
  });
  const dataNow: nowInfo = {
    icon: 'icon',
    state: '맑음',
    temp: '24',
  };
  const [month, date, day] = [getCurrentMonth(), getCurrentDate(), convertCurrentDay()];
  return (
    <>
      <AtomDate today={`${month}월 ${date}일 ${day}요일`} />
      <AtomPlace place="해운대" />
      <Weather info={dataNow} />
    </>
  );
};

export default OFcstNow;
