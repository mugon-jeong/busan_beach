import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const WrapImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  cursor: pointer;
`;

const ErrorRefresh = () => {
  return (
    <WrapImg>
      <h1>이런, 서버 에러가!</h1>
      <h1>펌프를 눌러 재시도 하세요!</h1>
      <Image src="/asset/img/refresh.png" alt="에러: 재시도하세요" width={500} height={500} />
    </WrapImg>
  );
};

export default ErrorRefresh;
