import React from 'react';
import styled from '@emotion/styled';
import TextDayWeek from '../Atoms/AtomDayWeek';

const WrapFcstDaily = styled.div`
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
const templow = 16;

const gap = temphigh - templow;
console.log('gap', gap);

const gapValue = 0 <= gap && gap <= 3 ? 1 : 4 <= gap && gap <= 8 ? 1.4 : 9 <= gap && gap <= 12 ? 1.8 : 2;
console.log('gapValue', gapValue);

const TempBar = styled.div`
  width: 0.25rem;
  height: ${gapValue}em;
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

const FcstDaily = ({ info }: { info: dailyInfo }) => {
  return (
    <WrapFcstDaily>
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
    </WrapFcstDaily>
  );
};

export default FcstDaily;
