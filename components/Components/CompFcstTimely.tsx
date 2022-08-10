import React from 'react';
import styled from '@emotion/styled';
import FcstTimely, { timelyInfo } from '../Organisms/FcstTimely';

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
  justify-content: flex-start;
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
  const data1: timelyInfo = {
    tempTimely: 28,
    rainRate: 30,
    time: 14,
  };
  const data2: timelyInfo = {
    tempTimely: 29,
    rainRate: 40,
    time: 15,
  };
  const data3: timelyInfo = {
    tempTimely: 30,
    rainRate: 50,
    time: 16,
  };

  return (
    <WrapComp>
      <h1>{fcstTitle}</h1>
      <ComponentFcst>
        <FcstTimely info={data1} />
        <FcstTimely info={data2} />
        <FcstTimely info={data3} />
        <FcstTimely info={data1} />
        <FcstTimely info={data2} />
        <FcstTimely info={data3} />
        <FcstTimely info={data3} />
        <FcstTimely info={data3} />
        <FcstTimely info={data3} />
      </ComponentFcst>
    </WrapComp>
  );
};

export default CompFcstTimely;
