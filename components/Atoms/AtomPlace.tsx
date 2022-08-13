import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import IconFcst from '$components/Icons/IconFcst';

const Place = styled.div`
  font-size: 3.5em;
  font-weight: 700;
  line-height: 2;
  display: flex;
`;
const BackButton = styled.div`
  width: 1em;
  height: 1em;
  cursor: pointer;
`;

const AtomPlace = ({ place }: any) => {
  const router = useRouter();
  return (
    <Place>
      <BackButton onClick={() => router.back()}>
        <IconFcst iconKey="BACK" />
      </BackButton>
      {place}
    </Place>
  );
};

export default AtomPlace;
