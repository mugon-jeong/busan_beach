import React from 'react';
import styled from '@emotion/styled';
import InfoOther from '../Molecules/InfoOther';
import { useGetDust } from '$queries/useGetDust';
import { dustRole } from '$utils/dustRole';

const WrapMolecules = styled.div`
  width: 13.5em;
  padding: 0.8em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 48%;
    flex-direction: column;
  }
`;

const OFcstFineAir = () => {
  const { data: dust } = useGetDust(221202, {
    suspense: true,
    useErrorBoundary: true,
  });

  return (
    <WrapMolecules>
      <InfoOther
        info={{
          icon: 'icon',
          title: '수온',
          content: dustRole(dust?.response.body.item[0].pm25 ?? 0) + `${dust?.response.body.item[0].pm25 ?? 0}`,
        }}
      />
    </WrapMolecules>
  );
};

export default OFcstFineAir;
