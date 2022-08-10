import React from 'react';
import styled from 'styled-components';
import TextDayWeek from '../Atoms/TextDayWeek';

const WrapFcstTimely = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.25em;
  line-height: 2;
`;

const TemptCurrent = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const TimeCurrent = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const FcstIcon = styled.div`
  width: 2em;
  height: 2em;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
`;

export interface timelyInfo {
  tempTimely: number;
  rainRate: number;
  time: number;
}

const FcstTimely = ({ info }: { info: timelyInfo }) => {
  return (
    <WrapFcstTimely>
      <TemptCurrent>
        <TextDayWeek title={`${info.tempTimely}℃`} />
      </TemptCurrent>
      <FcstIcon />
      <TimeCurrent>
        <TextDayWeek title={`${info.rainRate}%`} />
      </TimeCurrent>
      <TimeCurrent>
        <TextDayWeek title={`${info.time}시`} />
      </TimeCurrent>
    </WrapFcstTimely>
  );
};

export default FcstTimely;
