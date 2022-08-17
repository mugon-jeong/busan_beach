import React from 'react';
import styled from '@emotion/styled';
import OFcstDaily from '$components/Organisms/OFcstDaily';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import SkeletonDaily from '$components/Molecules/SkeletonDaily';
import ErrorMesage from '$components/Molecules/ErrorMessage';

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const TmplFcstDaily = ({ regIdR, regIdM }: { regIdR: string; regIdM: string }) => {
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
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonDaily />} rejectedFallback={() => <ErrorMesage />}>
        <OFcstDaily regIdR={regIdR} regIdM={regIdM} />
      </AsyncBoundaryWithQuery>
    </TemplateLeft>
  );
};

export default TmplFcstDaily;
