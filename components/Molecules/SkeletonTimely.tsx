import React from 'react';
import styled from '@emotion/styled';
import AtomDayWeek from '../Atoms/AtomDayWeek';
import CloudIcon from '@mui/icons-material/Cloud';
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
  width: 2em;
  height: 2em;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
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
        <Skeleton width={20} />
      </TemptCurrent>
      <FcstIcon>
        <SkeletonTheme baseColor="#cc4a30" highlightColor="#FF8067" borderRadius="0.5rem" duration={4}>
          <Skeleton circle height="100%" />
        </SkeletonTheme>
      </FcstIcon>
      <TimeCurrent>
        <Skeleton width={20} />
      </TimeCurrent>
      <TimeCurrent>
        <Skeleton width={20} />
      </TimeCurrent>
    </WrapFcstTimely>
  );
};

export default SkeletonTimely;
