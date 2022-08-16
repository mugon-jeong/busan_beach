import React from 'react';
import styled from '@emotion/styled';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
  line-height: 1;
`;

const WrpaSkeleton = styled.div`
  width: 13.5em;
  padding: 0.8em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 48%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SkeletonOthers = () => {
  return (
    <WrpaSkeleton>
      <FcstIcon>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton circle height="100%" />
        </SkeletonTheme>
      </FcstIcon>
      <div>
        <TitleRight>
          <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
            <Skeleton width={100} />
          </SkeletonTheme>
        </TitleRight>
        <FcstTemp>
          <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
            <Skeleton width={100} />
          </SkeletonTheme>
        </FcstTemp>
      </div>
    </WrpaSkeleton>
  );
};

export default SkeletonOthers;
