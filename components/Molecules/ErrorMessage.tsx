import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { IconURL } from '$constants/icons';

interface WrapMoleculesType {
  large: boolean | true;
}
const Div = styled.div((props: WrapMoleculesType) => ({
  width: props.large ? '100%' : '13.5em',
  padding: '1em',
  marginBottom: '1em',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.25)',
  borderRadius: '1rem',
  textAlign: 'center',
}));

const ErrorMesage = ({ IsLarge }: { IsLarge: boolean | true }) => {
  return (
    <Div large={IsLarge}>
      <div>
        <p data-testid="error-message">이런, 서버 에러가!</p>
        <Image src="/asset/img/error.png" alt="서버에러" width={100} height={100} />
      </div>
    </Div>
  );
};

export default ErrorMesage;
