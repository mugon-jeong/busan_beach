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

const TitleSection = styled.div`
  width: 100%;
  padding: 0.6em;
  box-sizing: border-box;
  position: relative;
  ::before {
    width: 56%;
    height: 1px;
    content: '';
    background-color: #fff;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

const BeachContentBox = ({ beach }: { beach: string }) => {
  return (
    <>
      <ContentCenter>
        <TitleSection>
          <h2>이 지역 관광정보</h2>
        </TitleSection>
        <>
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
        </>
      </ContentCenter>
    </>
  );
};

export default BeachContentBox;
