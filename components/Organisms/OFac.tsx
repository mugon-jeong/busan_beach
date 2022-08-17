import React from 'react';
import styled from '@emotion/styled';
import InfoFac from '../Molecules/InfoFac';
import { IconKey } from '$constants/icons';

const WrapMolecules = styled.div`
  width: 48%;
  padding: 0.8em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 32%;
  }
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 48%;
    flex-direction: column;
  }
`;

const OFac = ({ iconKey, title, content }: { iconKey: IconKey; title: string; content: string }) => {
  return (
    <WrapMolecules>
      <InfoFac
        info={{
          icon: iconKey,
          title: title,
          content: content,
        }}
      />
    </WrapMolecules>
  );
};

export default OFac;
