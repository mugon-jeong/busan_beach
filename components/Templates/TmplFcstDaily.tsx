import React from 'react';
import styled from '@emotion/styled';
import OFcstDaily from '$components/Organisms/OFcstDaily';
import SkeletonDaily from '$components/Molecules/SkeletonDaily';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const TmplFcstDaily = () => {
  return (
    <TemplateLeft>
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonDaily />}>
        <OFcstDaily fcstTitle="주간날씨" />
      </AsyncBoundaryWithQuery>
    </TemplateLeft>
  );
};

export default TmplFcstDaily;
