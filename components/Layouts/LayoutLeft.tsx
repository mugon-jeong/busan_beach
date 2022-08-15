import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Layout = styled.div`
  width: 35rem;
  height: 100vh;
  padding: 1%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 100%;
    padding: 1.2rem 1rem 4rem 1rem;
  }
`;

const WrapBg = styled.div`
  width: 70%;
  height: auto;
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LayoutLeft = (props: any) => {
  const [posX, setPosX] = useState(0);
  const router = useRouter();
  return (
    <Layout>
      <WrapBg>
        <Image src={`/asset/img/309.svg`} alt="ilguang image" width={500} height={500} />
      </WrapBg>
      {props.children}
    </Layout>
  );
};

export default LayoutLeft;
