import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import theme from '$styles/theme';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ROUTES } from '$constants/routes';
import useBeforeInstallPrompt from '$hooks/useBeforeInstallPrompt';
import { gtagEvent } from '$utils/googleAnalytics';
// import { useGetOceanData } from '$queries/useGetOceanData';

const Main = styled.div`
  padding: 0 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapImg = styled.div`
  width: 100%;
  height: auto;
`;

const WrapButtons = styled.div`
  width: 56%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    width: 24%;
    margin-bottom: 1rem;
    cursor: pointer;

    :hover {
      transform: translateY(-5%);
    }
  }

  @media (max-width: ${props => props.theme.deviceSizes.pc}) {
    width: 70%;
  }

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 64%;
    div {
      width: 44%;
    }
  }
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 76%;
  }
`;

const Div = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;

  p {
    font-size: 1.1em;
    font-family: 'Cafe24Ssurround', 'Noto Sans KR', sans-serif;
    padding: 0.6em;
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
      width: 64%;
      text-align: center;
      padding: 0.3em;
    }
    @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
      width: 72%;
      text-align: center;
      padding: 0.3em;
      font-size: 1em;
    }
  }
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
  const { isInstalled, addToHomeScreen } = useBeforeInstallPrompt({
    acceptedFn: () => {
      gtagEvent({
        action: 'send',
        category: 'event',
        label: 'PWA',
        value: 'install',
      });
    },
    dismissedFn: () => {
      gtagEvent({
        action: 'send',
        category: 'event',
        label: 'PWA',
        value: 'cancel',
      });
    },
    installedFn: () => {
      gtagEvent({
        action: 'send',
        category: 'event',
        label: 'PWA',
        value: 'already',
      });
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <WrapImg>
          <WrapButtons>
            <Div onClick={() => router.push(ROUTES.HEAWOONDAE)}>
              <Image src="/asset/img/button_haewoondae.png" alt="go to Heawoondae" width={200} height={200} />
              <p>해운대</p>
            </Div>
            <Div>
              <Image
                src="/asset/img/button_gwangalli.png"
                alt="go to Guananlee"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.GUANGANLEE)}
              />
              <p>광안리</p>
            </Div>
            <Div onClick={() => router.push(ROUTES.DADAEPO)}>
              <Image src="/asset/img/button_dadaepo.png" alt="go to Dadaepo" width={200} height={200} />
              <p>다대포</p>
            </Div>
            <Div onClick={() => router.push(ROUTES.SONGJUNG)}>
              <Image src="/asset/img/button_songjung.png" alt="go to Songjung" width={200} height={200} />
              <p>송정</p>
            </Div>
          </WrapButtons>
          <WrapButtons>
            <Div>
              <Image
                src="/asset/img/button_imlang.png"
                alt="go to Imlang"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.IMLANG)}
              />
              <p>임랑</p>
            </Div>
            <Div onClick={() => router.push(ROUTES.ILGUANG)}>
              <Image src="/asset/img/button_ilguang.png" alt="go to Ilguang" width={200} height={200} />
              <p>일광</p>
            </Div>
            <Div onClick={() => router.push(ROUTES.SONGDO)}>
              <Image src="/asset/img/button_songdo.png" alt="go to Songdo" width={200} height={200} />
              <p>송도</p>
            </Div>
            <Div>
              {!isInstalled && (
                <AddToHome onClick={addToHomeScreen}>
                  <Image src="/asset/img/add-to-home.png" alt="go to heawoondae" width={150} height={150} />
                </AddToHome>
              )}
            </Div>
          </WrapButtons>
        </WrapImg>
      </Main>
    </ThemeProvider>
  );
};

export default Home;
