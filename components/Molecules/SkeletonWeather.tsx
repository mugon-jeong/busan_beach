import React from 'react';
import styled from '@emotion/styled';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const WrapMolecules = styled.div`
  width: 13.5em;
  padding: 1em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
`;

const TitleRight = styled.div`
  font-size: 0.875rem;
  text-align: right;
`;

const TitleCenter = styled.div`
  font-size: 0.875rem;
  text-align: center;
`;

const FcstTemp = styled.div`
  font-size: 2.25rem;
  text-align: right;
  font-weight: 500;
`;

const FcstIcon = styled.div`
  width: 2.75em;
  height: 2.75em;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
  line-height: 1;
`;

const SkeletonOthers = () => {
  return (
    <>
      <WrapMolecules>
        <div>
          <FcstIcon>
            <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
              <Skeleton circle height="100%" />
            </SkeletonTheme>
          </FcstIcon>
        </div>
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
      </WrapMolecules>
    </>
  );
};

export default SkeletonOthers;
