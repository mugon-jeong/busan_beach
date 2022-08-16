import React from 'react';
import styled from '@emotion/styled';
import ContentOthers from '$components/Content/ContentOthers';
import Link from 'next/link';

const TitleRight = styled.div`
  font-size: 0.9rem;
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

export interface beachCOntentInfoOther {
  icon: string;
  title: string;
}

const BeachContentInfoOther = ({ info }: { info: beachCOntentInfoOther }) => {
  return (
    <>
      <ContentOthers iconKey={info.icon} />
      <div>
        <TitleRight>
          {info.title}
          <br />
          <Link href={'https://www.bluelinepark.com'}>바로가기</Link>
        </TitleRight>
      </div>
    </>
  );
};

export default BeachContentInfoOther;
