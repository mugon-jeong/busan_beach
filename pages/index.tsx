import type { NextPage } from 'next';
import styled from 'styled-components';
import Image from 'next/image';
import { useGetOceanData } from '$queries/useGetOceanData';
import axios from 'axios';

const Main = styled.div`
  padding: 0 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  axios
    .post('/api/hello', {
      params: {
        BeachCode: 'BCH002',
      },
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <Main>
      <div className="img">
        <Image src="/asset/img/building.png" alt="preparing the site" width={422} height={420} />
      </div>
    </Main>
  );
};

export default Home;
