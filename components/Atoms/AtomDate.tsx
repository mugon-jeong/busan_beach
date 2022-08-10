import React from 'react';
import styled from '@emotion/styled';

const Date = styled.div`
  font-size: 1.125em;
  line-height: 2;
`;

const AtomDate = ({ today }: any) => {
  return <Date>{today}</Date>;
};

export default AtomDate;
