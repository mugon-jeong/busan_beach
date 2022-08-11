import React from 'react';
import styled from '@emotion/styled';
import InfoOther from '../Molecules/InfoOther';
import { useGetWave } from '$queries/useGetWave';

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

const OFcstWave = ({ beachCode }: { beachCode: number }) => {
  const { data: wave } = useGetWave(beachCode);
  return (
    <WrapMolecules>
      <InfoOther
        info={{
          icon: 'icon',
          title: '파도높이',
          content: wave?.response.body.items.item[0].wh + 'm/s',
        }}
      />
    </WrapMolecules>
  );
};

export default OFcstWave;
