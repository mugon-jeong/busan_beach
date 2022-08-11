import React from 'react';
import styled from '@emotion/styled';
import InfoOther from '../Molecules/InfoOther';
import { useGetUV } from '$queries/useGetUV';
import { uvRole } from '$utils/uvRole';

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

const OFcstUv = ({ areaNo }: { areaNo: number }) => {
  const { data: uv } = useGetUV(areaNo);
  return (
    <WrapMolecules>
      <InfoOther
        info={{
          icon: 'icon',
          title: '자외선지수',
          content:
            uvRole(uv?.response.body.items.item[0].today ?? 0) + ` ${uv?.response.body.items.item[0].today ?? 0}`,
        }}
      />
    </WrapMolecules>
  );
};

export default OFcstUv;
