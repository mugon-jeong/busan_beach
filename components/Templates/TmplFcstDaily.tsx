import React from 'react';
import styled from '@emotion/styled';
import OFcstDaily from '$components/Organisms/OFcstDaily';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import SkeletonDaily from '$components/Molecules/SkeletonDaily';

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const TmplFcstDaily = ({ regId }: { regId: string }) => {
  return (
    <TemplateLeft
      onMouseDown={e => {
        e.stopPropagation();
      }}
      onMouseUp={e => {
        e.stopPropagation();
      }}
      onTouchStart={e => {
        e.stopPropagation();
      }}
      onTouchEnd={e => {
        e.stopPropagation();
      }}
    >
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonDaily />}>
        <OFcstDaily regId={regId} />
      </AsyncBoundaryWithQuery>
    </TemplateLeft>
  );
};

export default TmplFcstDaily;
