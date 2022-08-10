import React from 'react';
import styled from '@emotion/styled';

const Place = styled.div`
  font-size: 3.5em;
  font-weight: 700;
  line-height: 2;
`;

const AtomPlace = ({ place }: any) => {
  return <Place>{place}</Place>;
};

export default AtomPlace;
