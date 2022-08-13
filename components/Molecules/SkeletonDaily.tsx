import React from 'react';
import styled from '@emotion/styled';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const WrapFcstDaily = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.25em;
  line-height: 2;
  margin-bottom: 0.24em;
  margin-right: 1em;
  &:last-child {
    margin-right: 0;
  }
`;

const TemptHigh = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const TemptLow = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const Date = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const Days = styled.div`
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
`;

const TempBarHeight = styled.div`
  width: 0.25rem;
  height: auto;
`;

const TempBar = styled.div`
  width: 0.25rem;
  height: 2em;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
`;

const SkeletonDaily = () => {
  return (
    <WrapFcstDaily>
      <TemptHigh>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton width={24} />
        </SkeletonTheme>
      </TemptHigh>
      <TempBarHeight>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton height="2em" />
        </SkeletonTheme>
      </TempBarHeight>
      <TemptLow>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton width={24} />
        </SkeletonTheme>
      </TemptLow>
      <FcstIcon>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton circle height="100%" />
        </SkeletonTheme>
      </FcstIcon>
      <Date>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton width={24} />
        </SkeletonTheme>
      </Date>
      <Days>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton width={24} />
        </SkeletonTheme>
      </Days>
    </WrapFcstDaily>
  );
};

export default SkeletonDaily;
