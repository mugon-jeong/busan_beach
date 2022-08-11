import React from 'react';
import styled from '@emotion/styled';
import OFcstNow from '$components/Organisms/OFcstNow';

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const TmplLeftTop = ({ nx, ny }: { nx: number; ny: number }) => {
  return (
    <TemplateLeft>
      <OFcstNow nx={nx} ny={ny} />
    </TemplateLeft>
  );
};

export default TmplLeftTop;
