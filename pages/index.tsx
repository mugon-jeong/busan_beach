import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import theme from '$styles/theme';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ROUTES } from '$constants/routes';
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
  div {
    margin-bottom: 1.6vh;
  }
`;

const WrapButtonsBig = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  div {
    width: 40%;
    cursor: pointer;
    :hover {
      transform: translateY(-5%);
    }
  }
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 100%;
  }
`;
const WrapButtonsSmall = styled.div`
  width: 80%;
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
`;

const Div = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: royalblue;
`;

const Home: NextPage = () => {
  const router = useRouter();
  // const { data: ocean } = useGetOceanData('BCH002', {
  //   onSuccess: data => {
  //     console.log(data.result);
  //   },
  // });

  // axios.get(`${API_ROUTES.API.OCEAN}`, { params: { BeachCode: 'BCH001' } }).then(res => {
  //   console.log(res);
  // });
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <WrapImg>
          <WrapButtonsBig>
            <Div>
              <Image
                src="/asset/img/bgimg_tube_clear.png"
                alt="go to heawoondae"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.HEAWOONDAE)}
              />
            </Div>
            <Div>
              <Image
                src="/asset/img/bgimg_tube_clear.png"
                alt="go to heawoondae"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.HEAWOONDAE)}
              />
            </Div>
          </WrapButtonsBig>
          <WrapButtonsBig>
            <Div>
              <Image
                src="/asset/img/bgimg_tube_clear.png"
                alt="go to heawoondae"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.HEAWOONDAE)}
              />
            </Div>
            <Div>
              <Image
                src="/asset/img/bgimg_tube_clear.png"
                alt="go to heawoondae"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.HEAWOONDAE)}
              />
            </Div>
          </WrapButtonsBig>
          <WrapButtonsSmall>
            <Div>
              <Image
                src="/asset/img/bgimg_tube_clear.png"
                alt="go to heawoondae"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.HEAWOONDAE)}
              />
            </Div>
            <Div>
              <Image
                src="/asset/img/bgimg_tube_clear.png"
                alt="go to heawoondae"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.HEAWOONDAE)}
              />
            </Div>
            <Div>
              <Image
                src="/asset/img/bgimg_tube_clear.png"
                alt="go to heawoondae"
                width={200}
                height={200}
                onClick={() => router.push(ROUTES.HEAWOONDAE)}
              />
            </Div>
          </WrapButtonsSmall>
        </WrapImg>
      </Main>
    </ThemeProvider>
  );
};

export default Home;
