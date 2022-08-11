import React from 'react';
import AtomDate from '../Atoms/AtomDate';
import AtomPlace from '../Atoms/AtomPlace';
import Weather, { nowInfo } from '../Molecules/Weather';

const OFcstNow = () => {
  const dataNow: nowInfo = {
    icon: 'icon',
    state: '맑음',
    temp: '24',
  };
  return (
    <>
      <AtomDate today={`8월 10일 수요일`} />
      <AtomPlace place="해운대" />
      <Weather info={dataNow} />
    </>
  );
};

export default OFcstNow;
