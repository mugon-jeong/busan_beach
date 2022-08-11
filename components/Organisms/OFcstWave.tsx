import React from 'react';
import styled from '@emotion/styled';
import InfoOther, { otherInfo } from '../Molecules/InfoOther';

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

const OFcstWave = () => {
  const dataWave: otherInfo = {
    icon: 'icon',
    title: '파도높이',
    content: '0.5m/s',
  };
  return (
    <WrapMolecules>
      <InfoOther info={dataWave} />
    </WrapMolecules>
  );
};

export default OFcstWave;
