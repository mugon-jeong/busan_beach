import React from 'react';
import styled from '@emotion/styled';
import OFcstDaily from '$components/Organisms/OFcstDaily';

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const TmplFcstDaily = () => {
  return (
    <TemplateLeft>
      <OFcstDaily fcstTitle="주간날씨" />
    </TemplateLeft>
  );
};

export default TmplFcstDaily;
