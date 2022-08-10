import React from 'react';
import styled from 'styled-components';

const TextInfo = styled.div`
  font-size: 0.875em;
  text-align: center;
`;

const TextDayWeek = ({ title }: any) => {
  return <TextInfo>{title}</TextInfo>;
};

export default TextDayWeek;
