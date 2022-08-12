import React from 'react';
import styled from '@emotion/styled';
import AtomDayWeek from '../Atoms/AtomDayWeek';
import IconTimely from '$components/Icons/IconTimely';

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
  sky: string | null;
}

const FcstTimely = ({ info }: { info: timelyInfo }) => {
  return (
    <WrapFcstTimely>
      <TemptCurrent>
        <AtomDayWeek title={`${info.tempTimely}℃`} />
      </TemptCurrent>
      <FcstIcon>
        {info.rainRate == 0 ? (
          <>
            <IconTimely iconKey={info.sky == '맑음' ? 'CLEAN' : info.sky == '구름많음' ? 'CLOUD' : 'BLUR'} />
          </>
        ) : (
          <>
            <IconTimely iconKey={'RAIN'} />
          </>
        )}
      </FcstIcon>
      <TimeCurrent>
        {info.rainRate == 0 ? <AtomDayWeek title={`${info.sky}`} /> : <AtomDayWeek title={`${info.rainRate}%`} />}
      </TimeCurrent>
      <TimeCurrent>
        <AtomDayWeek title={`${info.time}시`} />
      </TimeCurrent>
    </WrapFcstTimely>
  );
};

export default FcstTimely;
