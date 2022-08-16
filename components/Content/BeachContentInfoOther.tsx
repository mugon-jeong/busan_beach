import React from 'react';
import styled from '@emotion/styled';
import ContentOthers from '$components/Content/ContentOthers';
import Link from 'next/link';

const TitleCenter = styled.div`
  font-size: 0.9rem;
  text-align: center;
  margin-top: 0.2em;
`;

const FcstTemp = styled.div`
  font-size: 1.8em;
  text-align: right;
  font-weight: 500;
`;

export interface beachContentInfoOther {
  icon: string;
  title: string;
  link: string;
}

const BeachContentInfoOther = ({ info }: { info: beachContentInfoOther }) => {
  const title = info.title.split(' ');

  if (info.title.length > 8) {
    if (info.link !== '') {
      return (
        <>
          <Link href={info.link}>
            <a target="_blank">
              <ContentOthers iconKey={info.icon} />
              <div>
                <TitleCenter>
                  {title[0]}
                  <br />
                  {title[1]}
                  <br />
                </TitleCenter>
              </div>
            </a>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <ContentOthers iconKey={info.icon} />
          <div>
            <TitleCenter>
              {title[0]}
              <br />
              {title[1]}
              <br />
            </TitleCenter>
          </div>
        </>
      );
    }
  } else {
    if (info.link !== '') {
      return (
        <Link href={info.link}>
          <a target="_blank">
            <ContentOthers iconKey={info.icon} />
            <div>
              <TitleCenter>
                {info.title}
                <br />
              </TitleCenter>
            </div>
          </a>
        </Link>
      );
    } else {
      return (
        <>
          <ContentOthers iconKey={info.icon} />
          <div>
            <TitleCenter>
              {info.title}
              <br />
            </TitleCenter>
          </div>
        </>
      );
    }
  }
  if (info.link !== '') {
    return (
      <>
        <ContentOthers iconKey={info.icon} />
        <div>
          <TitleCenter>
            {info.title}
            <br />
            <Link href={info.link}>
              <a target="_blank">바로가기</a>
            </Link>
          </TitleCenter>
        </div>
      </>
    );
  } else {
    return (
      <>
        <ContentOthers iconKey={info.icon} />
        <div>
          <TitleCenter>
            {info.title}
            <br />
          </TitleCenter>
        </div>
      </>
    );
  }
};

export default BeachContentInfoOther;
