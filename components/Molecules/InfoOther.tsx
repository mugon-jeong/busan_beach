import React from 'react';
import styled from '@emotion/styled';
import IconOthers from '$components/Icons/IconOthers';
import { IconKey } from '$constants/icons';

const TitleRight = styled.div`
  font-size: 0.8rem;
  text-align: right;
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    text-align: center;
    margin-top: 0.2em;
  }
`;

const FcstTemp = styled.div`
  font-size: 1.8em;
  text-align: right;
  font-weight: 500;
`;

const FcstIcon = styled.div`
  width: 3em;
  height: 3em;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 3.2em;
`;

export interface otherInfo {
  icon: IconKey;
  title: string;
  content: string;
}

const InfoOther = ({ info }: { info: otherInfo }) => {
  return (
    <>
      <IconOthers iconKey={info.icon} />
      <div>
        <TitleRight>{info.title}</TitleRight>
        <FcstTemp>{info.content}</FcstTemp>
      </div>
    </>
  );
};

export default InfoOther;
