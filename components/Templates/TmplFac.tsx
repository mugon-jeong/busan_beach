import React from 'react';
import styled from '@emotion/styled';
import OFacParking from '$components/Organisms/OFacParking';
import OFacBooth from '$components/Organisms/OFacBooth';
import OFacShower from '$components/Organisms/OFacShower';
import OFacSwim from '$components/Organisms/OFacSwim';
import OFacLifejacket from '$components/Organisms/OFacLifejacket';
import OFacParasole from '$components/Organisms/OFacParasole';
import OFacSunbed from '$components/Organisms/OFacSunbed';
import OFacTube from '$components/Organisms/OFacTube';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import SkeletonOthers from '$components/Molecules/SkeletonOthers';
import ErrorMesage from '$components/Molecules/ErrorMessage';

const TemplateCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1.2em;
`;

const TitleSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border-top: 1px solid #fff;
  font-size: 1.1em;
`;

const TmplFac = ({
  swim,
  parking,
  booth,
  shower,
  lifejacket,
  parasole,
  sunbed,
  tube,
}: {
  swim: string;
  parking: string;
  booth: string;
  shower: string;
  lifejacket: string;
  parasole: string;
  sunbed: string;
  tube: string;
}) => {
  return (
    <TemplateCenter>
      <TitleSection>해수욕장 시설정보</TitleSection>
      <>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
          <OFacSwim swim={swim} />
        </AsyncBoundaryWithQuery>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
          <OFacParking parking={parking} />
        </AsyncBoundaryWithQuery>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
          <OFacBooth booth={booth} />
        </AsyncBoundaryWithQuery>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
          <OFacShower shower={shower} />
        </AsyncBoundaryWithQuery>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
          <OFacLifejacket lifejacket={lifejacket} />
        </AsyncBoundaryWithQuery>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
          <OFacParasole parasole={parasole} />
        </AsyncBoundaryWithQuery>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
          <OFacSunbed sunbed={sunbed} />
        </AsyncBoundaryWithQuery>
        <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />} rejectedFallback={() => <ErrorMesage />}>
          <OFacTube tube={tube} />
        </AsyncBoundaryWithQuery>
      </>
    </TemplateCenter>
  );
};

export default TmplFac;
