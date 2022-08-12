import React from 'react';
import styled from '@emotion/styled';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const WrapFcstTimely = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.25em;
  line-height: 2;
  margin-bottom: 0.24em;
  margin-right: 1em;
  &:last-child {
    margin-right: 0;
  }
`;

const TemptCurrent = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const TimeCurrent = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const FcstIcon = styled.div`
  width: 1.4em;
  height: 1.4em;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
  line-height: 1;
  margin-bottom: 0.2em;
`;

export interface timelyInfo {
  tempTimely: number;
  rainRate: number;
  time: number;
}

const SkeletonTimely = () => {
  return (
    <WrapFcstTimely>
      <TemptCurrent>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton width={24} />
        </SkeletonTheme>
      </TemptCurrent>
      <FcstIcon>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton circle height="100%" />
        </SkeletonTheme>
      </FcstIcon>
      <TimeCurrent>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton width={24} />
        </SkeletonTheme>
      </TimeCurrent>
      <TimeCurrent>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton width={24} />
        </SkeletonTheme>
      </TimeCurrent>
    </WrapFcstTimely>
  );
};

export default SkeletonTimely;
