import React from 'react';
import styled from '@emotion/styled';
import OFcstNow from '$components/Organisms/OFcstNow';

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const TmplLeftTop = () => {
  return (
    <TemplateLeft>
      <OFcstNow />
    </TemplateLeft>
  );
};

export default TmplLeftTop;
