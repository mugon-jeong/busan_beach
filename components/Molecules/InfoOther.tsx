import React from 'react';
import styled from '@emotion/styled';

const TitleRight = styled.div`
  font-size: 0.875rem;
  text-align: right;
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    text-align: center;
  }
`;

const FcstTemp = styled.div`
  font-size: 2em;
  text-align: right;
  font-weight: 500;
`;

const FcstIcon = styled.div`
  width: 3.2em;
  height: 3.2em;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 3.2em;
`;

export interface otherInfo {
  icon: 'icon';
  title: string;
  content: string;
}

const InfoOther = ({ info }: { info: otherInfo }) => {
  return (
    <>
      <FcstIcon>{info.icon}</FcstIcon>
      <div>
        <TitleRight>{info.title}</TitleRight>
        <FcstTemp>{info.content}</FcstTemp>
      </div>
    </>
  );
};

export default InfoOther;