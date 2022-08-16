import React from 'react';
import styled from '@emotion/styled';
import InfoFac from '../Molecules/InfoFac';

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

const OFacShower = ({ shower }: { shower: string }) => {
  return (
    <WrapMolecules>
      <InfoFac
        info={{
          icon: 'SHOWER',
          title: '샤워실',
          content: shower,
        }}
      />
    </WrapMolecules>
  );
};

export default OFacShower;
