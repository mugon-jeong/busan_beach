import type { NextPage } from 'next';
import styled from 'styled-components';
import Image from 'next/image';
// import { useGetOceanData } from '$queries/useGetOceanData';

const Main = styled.div`
  padding: 0 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
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
        <Image src="/asset/img/building.png" alt="preparing the site" width={422} height={420} />
      </div>
    </Main>
  );
};

export default Home;
