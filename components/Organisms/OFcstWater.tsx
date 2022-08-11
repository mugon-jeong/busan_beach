import React from 'react';
import styled from '@emotion/styled';
import InfoOther, { otherInfo } from '../Molecules/InfoOther';
import { useGetWaterTemperature } from '$queries/useGetWaterTemp';
import SkeletonOthers from '$components/Molecules/SkeletonOthers';

const WrapMolecules = styled.div`
  width: 13.5em;
  padding: 0.8em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 48%;
    flex-direction: column;
  }
`;

interface PostProps {
  loading: boolean;
}

const OFcstWater = ({ loading }: PostProps) => {
  const { data: water } = useGetWaterTemperature(304, {
    suspense: true,
    useErrorBoundary: true,
  });

  return (
    <WrapMolecules>
      {loading ? (
        <SkeletonOthers />
      ) : (
        <InfoOther
          info={{
            icon: 'icon',
            title: '수온',
            content: water?.response.body.items.item[0].tw + '℃',
          }}
        />
      )}
    </WrapMolecules>
  );
};

export default OFcstWater;
