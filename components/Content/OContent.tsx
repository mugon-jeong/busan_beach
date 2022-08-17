import styled from '@emotion/styled';
import BeachContentInfoOther from './BeachContentInfoOther';
import { IconURL } from '$components/Content/Contents';

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

const OContent = ({ beach }: { beach: string }) => {
  const beachItem = IconURL[beach];
  return (
    <WrapMolecules>
      <BeachContentInfoOther
        info={{
          icon: beachItem.url,
          title: beachItem.content,
          link: beachItem.link,
        }}
      />
    </WrapMolecules>
  );
};

export default OContent;
