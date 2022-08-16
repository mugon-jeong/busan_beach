import React from 'react';
import styled from '@emotion/styled';
import OFcstNow from '$components/Organisms/OFcstNow';

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const TmplLeftTop = ({ beach, beachCode }: { beach: string; beachCode: number }) => {
  return (
    <TemplateLeft>
      <OFcstNow beach={beach} beachCode={beachCode} />
    </TemplateLeft>
  );
};

export default TmplLeftTop;
