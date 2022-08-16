import React from 'react';
import styled from '@emotion/styled';
import InfoOther from '../Molecules/InfoOther';
import { useGetWaterTemperature } from '$queries/useGetWaterTemp';
import SkeletonOthers from '$components/Molecules/SkeletonOthers';

const WrapMolecules = styled.div`
  width: 13.5em;
  padding: 0.8em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 48%;
    flex-direction: column;
  }
`;
const OFcstWater = ({ beachCode }: { beachCode: number }) => {
  const { data: water } = useGetWaterTemperature(beachCode, {
    onSuccess: data => console.log('water', data),
  });

  return water ? (
    <WrapMolecules>
      <InfoOther
        info={{
          icon: 'WATER',
          title: '수온',
          content: water.response.body.items.item[0].tw + '℃',
        }}
      />
    </WrapMolecules>
  ) : (
    <SkeletonOthers />
  );
};
export default OFcstWater;
