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

const OFcstAir = () => {
  const dataAir: otherInfo = {
    icon: 'icon',
    title: '미세먼지',
    content: '좋음 2',
  };

  return (
    <WrapMolecules>
      <InfoOther info={dataAir} />
    </WrapMolecules>
  );
};

export default OFcstAir;
