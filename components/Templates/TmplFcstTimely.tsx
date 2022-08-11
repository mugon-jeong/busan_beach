import React from 'react';
import styled from '@emotion/styled';
import OFcstTimely from '$components/Organisms/OFcstTimely';

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const TmplFcstTimely = () => {
  return (
    <TemplateLeft>
      <OFcstTimely fcstTitle="하루날씨" />
    </TemplateLeft>
  );
};

export default TmplFcstTimely;
