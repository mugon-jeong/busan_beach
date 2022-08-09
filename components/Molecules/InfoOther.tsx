import React from 'react';
import styled from 'styled-components';

const TitleRight = styled.div`
  font-size: 0.875rem;
  text-align: right;
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

const InfoOther = () => {
  return (
    <>
      <FcstIcon>icon</FcstIcon>
      <div>
        <TitleRight>수온</TitleRight>
        <FcstTemp>24℃</FcstTemp>
      </div>
    </>
  );
};

export default InfoOther;
