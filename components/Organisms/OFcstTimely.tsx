import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import FcstTimely, { timelyInfo } from '../Molecules/FcstTimely';
import { useGetShortForecast } from '$queries/useGetShortForecast';
import SkeletonTimely from '$components/Molecules/SkeletonTimely';

const WrapComp = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
`;

const WrapMolecules = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

interface PostProps {
  loading: boolean;
}

const OFcstTimely = ({ fcstTitle }: any, { loading }: PostProps) => {
  const { data: info } = useGetShortForecast(99, 75);
  useEffect(() => {
    if (info) {
      const sliceList = info.response.body.items.item.splice(0, 229);
      sliceList.map((data, index) => {});
    }
  }, [info]);
  const data1: timelyInfo = {
    tempTimely: 28,
    rainRate: 30,
    time: 14,
  };
  const data2: timelyInfo = {
    tempTimely: 29,
    rainRate: 40,
    time: 15,
  };
  const data3: timelyInfo = {
    tempTimely: 30,
    rainRate: 50,
    time: 16,
  };

  return (
    <WrapComp>
      <h1>{fcstTitle}</h1>
      <WrapMolecules>
        {loading ? (
          <>
            <SkeletonTimely />
            <SkeletonTimely />
            <SkeletonTimely />
            <SkeletonTimely />
            <SkeletonTimely />
            <SkeletonTimely />
            <SkeletonTimely />
            <SkeletonTimely />
            <SkeletonTimely />
          </>
        ) : (
          <>
            <FcstTimely info={data1} />
            <FcstTimely info={data2} />
            <FcstTimely info={data3} />
            <FcstTimely info={data1} />
            <FcstTimely info={data2} />
            <FcstTimely info={data3} />
            <FcstTimely info={data3} />
            <FcstTimely info={data3} />
            <FcstTimely info={data3} />
            <SkeletonTimely />
            <SkeletonTimely />
            <SkeletonTimely />
          </>
        )}
      </WrapMolecules>
    </WrapComp>
  );
};

export default OFcstTimely;
