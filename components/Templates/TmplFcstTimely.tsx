import React from 'react';
import styled from '@emotion/styled';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import SkeletonTimely from '$components/Molecules/SkeletonTimely';
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
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonTimely />}>
        <OFcstTimely loading={true} fcstTitle="하루날씨" />
      </AsyncBoundaryWithQuery>
    </TemplateLeft>
  );
};

export default TmplFcstTimely;
