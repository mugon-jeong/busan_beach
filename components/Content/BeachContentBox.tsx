import React from 'react';
import styled from '@emotion/styled';
import OContent from '$components/Content/OContent';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import SkeletonOthers from '$components/Molecules/SkeletonOthers';
import ErrorMesage from '$components/Molecules/ErrorMessage';

const ContentCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1.2em;
`;

const WrapTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleLine = styled.div`
  width: 54%;
  height: 1px;
  background-color: #fff;
  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 74%;
  }
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 50%;
  }
`;

const TitleSection = styled.div`
  width: 10em;
  box-sizing: border-box;
  position: relative;
  font-size: 1.6em;
  font-weight: 700;
  padding: 1.2em 0;
  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 13em;
  }
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 12em;
  }
`;

const BeachContentBox = ({ beach }: { beach: string }) => {
  return (
    <>
      <ContentCenter>
        <WrapTitle>
          <TitleSection>이 지역 관광정보</TitleSection>
          <TitleLine />
        </WrapTitle>
        <>
          <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
            <OContent beach={beach + '1'} />
          </AsyncBoundaryWithQuery>
          <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
            <OContent beach={beach + '2'} />
          </AsyncBoundaryWithQuery>
          <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
            <OContent beach={beach + '3'} />
          </AsyncBoundaryWithQuery>
          <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
            <OContent beach={beach + '4'} />
          </AsyncBoundaryWithQuery>
        </>
      </ContentCenter>
    </>
  );
};

export default BeachContentBox;
