import React from 'react';
import styled from '@emotion/styled';
import OContent from '$components/Content/OContent';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import SkeletonOthers from '$components/Molecules/SkeletonOthers';

const ContentCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BeachContentBox = ({ beach }: { beach: string }) => {
  return (
    <>
      <ContentCenter>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />}>
          <OContent beach={beach + '1'} />
        </AsyncBoundaryWithQuery>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />}>
          <OContent beach={beach + '2'} />
        </AsyncBoundaryWithQuery>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />}>
          <OContent beach={beach + '3'} />
        </AsyncBoundaryWithQuery>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />}>
          <OContent beach={beach + '4'} />
        </AsyncBoundaryWithQuery>
      </ContentCenter>
    </>
  );
};

export default BeachContentBox;
