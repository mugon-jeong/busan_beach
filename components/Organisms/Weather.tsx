import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { useState } from 'react';
import { useGetUltraForecast } from '$queries/useGetUltraForecast';

const WrapComp = styled.div`
  width: 13.5em;
  padding: 1em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
`;

const TitleRight = styled.div`
  font-size: 0.875rem;
  text-align: right;
`;

const TitleCenter = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const FcstTemp = styled.div`
  font-size: 2.25rem;
  text-align: right;
  font-weight: 500;
`;

const FcstIcon = styled.div`
  width: 3.75em;
  height: 3.75em;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 3.75em;
`;

const Weather = (props: any) => {
  
  return (
    <WrapComp>
      <div>
        <FcstIcon>icon</FcstIcon>
        <TitleCenter>맑음</TitleCenter>
      </div>
      <div>
        <TitleRight>기온</TitleRight>
        <FcstTemp>℃</FcstTemp>
      </div>
    </WrapComp>
  );
};

export default Weather;
