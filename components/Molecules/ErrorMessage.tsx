import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { IconURL } from '$constants/icons';

const WrapMolecules = styled.div`
  width: 13.5em;
  padding: 1em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  text-align: center;
`;

const ErrorMesage = () => {
  return (
    <WrapMolecules>
      <div>
        <span data-testid="error-message">이런, 서버 에러가!</span>
        <Image src="/asset/img/error.png" alt="서버에러" width={100} height={100} />
      </div>
    </WrapMolecules>
  );
};

export default ErrorMesage;
