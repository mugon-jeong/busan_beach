import React from 'react';
import styled from '@emotion/styled';
import OFcstUv from '$components/Organisms/OFcstUv';
import OFcstWind from '$components/Organisms/OFcstWind';
import OFcstAir from '$components/Organisms/OFcstAir';
import OFcstFineAir from '$components/Organisms/OFcstFineAir';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import SkeletonOthers from '$components/Molecules/SkeletonOthers';

const TemplateCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TmplFcstOther = () => {
  return (
    <TemplateCenter>
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />}>
        <OFcstUv />
      </AsyncBoundaryWithQuery>
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />}>
        <OFcstWind />
      </AsyncBoundaryWithQuery>
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />}>
        <OFcstAir />
      </AsyncBoundaryWithQuery>
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />}>
        <OFcstFineAir />
      </AsyncBoundaryWithQuery>
    </TemplateCenter>
  );
};

export default TmplFcstOther;
