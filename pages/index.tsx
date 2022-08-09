import type { NextPage } from 'next';
import styled from 'styled-components';
import Image from 'next/image';
import { useGetWave } from '../queries/useGetWave';
import { useGetMediumForecast, getMediumForecastFetch } from '../queries/useGetMediumForecast';

const Main = styled.div`
  padding: 0 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <Main>
      <div className="img">
        <Image src="/asset/img/building.png" alt="preparing the site" width={422} height={420} />
      </div>
    </Main>
  );
};

export default Home;
