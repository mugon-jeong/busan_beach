import React from 'react';
import AtomDate from '../Atoms/AtomDate';
import AtomPlace from '../Atoms/AtomPlace';
import Weather, { nowInfo } from '../Organisms/Weather';

interface IProps {
  Template: string | undefined;
  month: string | undefined;
  day: string | undefined;
  Day: string | undefined;
}

const CompNow = (props: IProps) => {
  const dataNow: nowInfo = {
    icon: 'icon',
    state: '맑음',
    temp: props.Template,
  };
  return (
    <>
      <AtomDate today={`${props.month}월 ${props.day}일 수요일`} />
      <AtomPlace place="해운대" />
      <Weather info={dataNow} />
    </>
  );
};

export default CompNow;
