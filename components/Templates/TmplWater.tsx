import React from 'react';
import styled from '@emotion/styled';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import OFcstWater from '$components/Organisms/OFcstWater';
import OFcstWave from '$components/Organisms/OFcstWave';

const TemplateRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  @media (max-width: ${props => props.theme.deviceSizes.mobileSE}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TmplWater = () => {
  return (
    <TemplateRight>
      <AsyncBoundaryWithQuery>
        <OFcstWater />
      </AsyncBoundaryWithQuery>
      <AsyncBoundaryWithQuery>
        <OFcstWave />
      </AsyncBoundaryWithQuery>
    </TemplateRight>
  );
};

export default TmplWater;
