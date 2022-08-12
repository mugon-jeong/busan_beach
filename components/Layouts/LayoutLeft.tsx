import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Layout = styled.div`
  width: 35rem;
  height: 100vh;
  padding: 1%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 100%;
    padding: 1.2rem 1rem;
  }
`;

const LayoutLeft = (props: any) => {
  const [posX, setPosX] = useState(0);
  const router = useRouter();
  return;
  <>
    <Layout>{props.children}</Layout>;
  </>;
};

export default LayoutLeft;
