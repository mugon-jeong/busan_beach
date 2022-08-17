import React from 'react';
import styled from '@emotion/styled';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const WrapComp = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  overflow: hidden;
`;

const WrapMolecules = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  ::-webkit-scrollbar {
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const SkeletonDaily = () => {
  return (
    <WrapComp>
      <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
        <Skeleton width={200} height={40} />
      </SkeletonTheme>
      <WrapMolecules>
        <SkeletonTheme baseColor="#afafaf" highlightColor="#e0e0e0" borderRadius="0.5rem" duration={4}>
          <Skeleton width={500} height={20} />
          <Skeleton width={500} height={20} />
          <Skeleton width={500} height={20} />
          <Skeleton width={500} height={20} />
          <Skeleton width={500} height={20} />
          <Skeleton width={500} height={20} />
        </SkeletonTheme>
      </WrapMolecules>
    </WrapComp>
  );
};

export default SkeletonDaily;
