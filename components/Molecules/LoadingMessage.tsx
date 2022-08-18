import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { IconURL } from '$constants/icons';

const WrapImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  margin-top: 10rem;
`;

const LoadingMessage = () => {
  return (
    <WrapImg>
      <h1>노 저어 가고 있어요!</h1>
      <Image src="/asset/img/loading.png" alt="로딩중" width={478} height={496} />
    </WrapImg>
  );
};

export default LoadingMessage;
