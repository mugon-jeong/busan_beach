import React from 'react';
import styled from '@emotion/styled';
import ContentOthers from '$components/Content/ContentOthers';
import Link from 'next/link';
import Image from 'next/image';
import { IconURL } from '$constants/icons';

const TitleCenter = styled.div`
  font-size: 0.9rem;
  margin-top: 0.2em;
  margin-right: 0.2em;
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export interface beachContentInfoOther {
  icon: string;
  title: string;
  link: string;
}

const BeachContentInfoOther = ({ info }: { info: beachContentInfoOther }) => {
  return (
    <>
      <Link href={info.link}>
        <a target="_blank">
          <ContentOthers iconKey={info.icon} />
          <TitleWrap>
            <TitleCenter>{info.title}</TitleCenter>
            <Image src={IconURL['PLUS'].url} alt={IconURL['PLUS'].alt} width={12} height={12} />
          </TitleWrap>
        </a>
      </Link>
    </>
  );
};

export default BeachContentInfoOther;
