import type { NextPage } from 'next';
import styled from 'styled-components';
import Image from 'next/image';
import moment from 'moment';
import { useGetWave, WaveProp } from '$queries/useGetWave';

const Main = styled.div`
  padding: 0 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  const waveprop: WaveProp = {
    numOfRows: 1,
    pageNo: 10,
    dataType: 'JSON',
    beach_num: 304,
    searchTime: moment().format('YYYYMMDDHHMM'),
  };
  const { data: water } = useGetWave(waveprop, {
    onSuccess: data => {
      console.log(data.response.body.items.item);
    },
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
