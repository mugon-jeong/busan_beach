import React from 'react';
import styled from '@emotion/styled';
import FcstWeekly, { dailyInfo } from '../Organisms/FcstWeekly';

const WrapComp = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
`;

const ComponentFcst = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const CompFcstTimely = ({ fcstTitle }: any) => {
  const data1: dailyInfo = {
    tempHigh: 32,
    tempLow: 24,
    date: '12.01',
    days: '목',
  };
  const data2: dailyInfo = {
    tempHigh: 30,
    tempLow: 28,
    date: '12.02',
    days: '금',
  };
  const data3: dailyInfo = {
    tempHigh: 30,
    tempLow: 15,
    date: '12.03',
    days: '토',
  };

  return (
    <WrapComp>
      <h1>{fcstTitle}</h1>
      <ComponentFcst>
        <FcstWeekly info={data1} />
        <FcstWeekly info={data2} />
        <FcstWeekly info={data3} />
        <FcstWeekly info={data2} />
        <FcstWeekly info={data1} />
        <FcstWeekly info={data2} />
        <FcstWeekly info={data2} />
        <FcstWeekly info={data2} />
        <FcstWeekly info={data2} />
      </ComponentFcst>
    </WrapComp>
  );
};

export default CompFcstTimely;
