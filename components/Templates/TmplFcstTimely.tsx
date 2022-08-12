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

const TmplFcstTimely = ({ nx, ny }: { nx: number; ny: number }) => {
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
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonTimely />}>
        <OFcstTimely nx={nx} ny={ny} />
      </AsyncBoundaryWithQuery>
    </TemplateLeft>
  );
};

export default TmplFcstTimely;
