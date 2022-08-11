import React from 'react';
import styled from '@emotion/styled';
import OFcstFineAir from '../Organisms/OFcstFineAir';
import OFcstWave from '../Organisms/OFcstWave';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';

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
        <OFcstFineAir />
      </AsyncBoundaryWithQuery>
      <AsyncBoundaryWithQuery>
        <OFcstWave />
      </AsyncBoundaryWithQuery>
    </TemplateRight>
  );
};

export default TmplWater;
