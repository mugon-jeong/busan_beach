import React from 'react';
import styled from '@emotion/styled';
import TextDayWeek from '../Atoms/AtomDayWeek';

const WrapFcstTimely = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.25em;
  line-height: 2;
  margin-bottom: 0.24em;
  margin-right: 1em;
  &:last-child {
    margin-right: 0;
  }
`;

const TemptHigh = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const TemptLow = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const Date = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const Days = styled.div`
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

const TempBarHeight = styled.div`
  width: 0.25rem;
  height: auto;
`;

const temphigh = 30;
const templow = 25;

const gap = temphigh - templow;
console.log('gap', gap);

const gapValue = 0 <= gap && gap <= 3 ? 15 : 4 <= gap && gap <= 8 ? 45 : 9 <= gap && gap <= 12 ? 70 : 100;
console.log('gapValue', gapValue);

const gapBar = (1 / gapValue) * 100;
console.log('gapBar', gapBar);

const TempBar = styled.div`
  width: 0.25rem;
  height: ${gapBar}em;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
`;

export interface dailyInfo {
  tempHigh: number;
  tempLow: number;
  rate: string;
  days: string;
}

const FcstWeekly = ({ info }: { info: dailyInfo }) => {
  return (
    <WrapFcstTimely>
      <TemptHigh>
        <TextDayWeek title={`${info.tempHigh}℃`} />
      </TemptHigh>
      <TempBarHeight>
        <TempBar />
      </TempBarHeight>
      <TemptLow>
        <TextDayWeek title={`${info.tempLow}℃`} />
      </TemptLow>
      <FcstIcon />
      <Date>
        <TextDayWeek title={info.rate} />
      </Date>
      <Days>
        <TextDayWeek title={info.days} />
      </Days>
    </WrapFcstTimely>
  );
};

export default FcstWeekly;
