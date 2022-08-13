import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import theme from '$styles/theme';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ROUTES } from '$constants/routes';
import useBeforeInstallPrompt from '$hooks/useBeforeInstallPrompt';
// import { useGetOceanData } from '$queries/useGetOceanData';

const Main = styled.div`
  padding: 0 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#79f3e7, #0b90ad);
  background-repeat: no-repeat;
`;

const WrapImg = styled.div`
  width: 100%;
  height: auto;
`;

const WrapButtonsBig = styled.div`
  width: 55%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    margin-bottom: 1.6vh;
    cursor: pointer;

    :hover {
      transform: translateY(-5%);
    }
  }

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 80%;
  }
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 100%;
  }
`;
const WrapButtonsSmall = styled.div`
  width: 55%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    width: 30%;
    cursor: pointer;

    :hover {
      transform: translateY(-5%);
    }
  }

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 80%;
  }
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 100%;
  }
`;

const Div = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
`;

const AddToHome = styled.div`
  width: auto;
  height: auto;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home: NextPage = () => {
  const router = useRouter();
  const { isInstalled, addToHomeScreen } = useBeforeInstallPrompt();

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <WrapImg>
          <WrapButtonsBig>
            <Div>
              <Image
                src="/asset/img/button_haewoondae.png"
                alt="go to Heawoondae"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.HEAWOONDAE)}
              />
            </Div>
            <Div>
              <Image
                src="/asset/img/button_gwangalli.png"
                alt="go to Guananlee"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.GUANGANLEE)}
              />
            </Div>
            <Div>
              <Image
                src="/asset/img/button_dadaepo.png"
                alt="go to Dadaepo"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.DADAEPO)}
              />
            </Div>
            <Div>
              <Image
                src="/asset/img/button_songjung.png"
                alt="go to Songjung"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.SONGJUNG)}
              />
            </Div>
          </WrapButtonsBig>
          <WrapButtonsBig></WrapButtonsBig>
          <WrapButtonsSmall>
            <Div>
              <Image
                src="/asset/img/bgimg_tube_clear.png"
                alt="go to Imlang"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.IMLANG)}
              />
            </Div>
            <Div>
              <Image
                src="/asset/img/bgimg_tube_clear.png"
                alt="go to Ilguang"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.ILGUANG)}
              />
            </Div>
            <Div>
              <Image
                src="/asset/img/bgimg_tube_clear.png"
                alt="go to Songdo"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.SONGDO)}
              />
            </Div>
            <Div>
              {!isInstalled && (
                <AddToHome onClick={addToHomeScreen}>
                  <Image src="/asset/img/add-to-home.png" alt="go to heawoondae" width={150} height={150} />
                </AddToHome>
              )}
            </Div>
          </WrapButtonsSmall>
        </WrapImg>
      </Main>
    </ThemeProvider>
  );
};

export default Home;
