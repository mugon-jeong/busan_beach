import type { NextPage } from 'next';
import styled from '@emotion/styled';
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
  width: auto;
  height: auto;
  cursor: pointer;
  :hover {
    transform: translateY(-5%);
  }
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
    <Main>
      <div className="img">
        <WrapImg>
          <Image
            src="/asset/img/bgimg_tube_clear.png"
            alt="go to heawoondae"
            width={422}
            height={420}
            onClick={() => router.push(ROUTES.HEAWOONDAE)}
          />
        </WrapImg>
      </div>
    </Main>
  );
};

export default Home;
