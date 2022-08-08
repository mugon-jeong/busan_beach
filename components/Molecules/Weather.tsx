import React from 'react';
import styled from 'styled-components';

// const WrapComponent = styled.div`
//   padding: 1.5em;
//   box-sizing: border-box;
//   background-color: rgba(0, 0, 0, 0.185);
//   border-radius: 1rem;
//   display: flex;
// `;

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

const Weather = () => {
  return (
    <>
      <div>
        <FcstIcon>icon</FcstIcon>
        <TitleCenter>맑음</TitleCenter>
      </div>
      <div>
        <TitleRight>기온</TitleRight>
        <FcstTemp>32℃</FcstTemp>
      </div>
    </>
  );
};

export default Weather;
