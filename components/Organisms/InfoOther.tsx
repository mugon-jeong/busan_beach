import React from 'react';
import styled from '@emotion/styled';

const WrapComp = styled.div`
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
    <WrapComp>
      <FcstIcon>{info.icon}</FcstIcon>
      <div>
        <TitleRight>{info.title}</TitleRight>
        <FcstTemp>{info.content}</FcstTemp>
      </div>
    </WrapComp>
  );
};

export default InfoOther;
