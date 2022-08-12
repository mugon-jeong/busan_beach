import React from 'react';
import styled from '@emotion/styled';
import OFcstNow from '$components/Organisms/OFcstNow';

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const TmplLeftTop = ({ beach, nx, ny }: { beach: string; nx: number; ny: number }) => {
  return (
    <TemplateLeft>
      <OFcstNow beach={beach} nx={nx} ny={ny} />
    </TemplateLeft>
  );
};

export default TmplLeftTop;
