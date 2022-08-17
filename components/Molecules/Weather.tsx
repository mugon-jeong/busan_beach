import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SkeletonWeather from '$components/Molecules/SkeletonWeather';
import IconFcst from '$components/Icons/IconFcst';
import { UseGetUltraForecast } from '$queries/useGetUltraForecast';
import { rainRole, skyRole } from '$utils/skyRole';
import { convertIconKey } from '$utils/util';

const WrapMolecules = styled.div`
  width: 13.5em;
  padding: 1em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
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
  line-height: 2.75em;
`;

interface nowForecast {
  sky: string;
  tempt: number;
}

const Weather = ({ beachCode }: { beachCode: number }) => {
  const [now, setNow] = useState<nowForecast>({
    sky: '',
    tempt: 0,
  });
  const { data: realTime } = UseGetUltraForecast(beachCode);
  useEffect(() => {
    if (realTime) {
      let skyStatus: string | null = '';
      const pty = realTime.response.body.items.item.filter(value => value.category == 'PTY')[1];
      const tmp = realTime.response.body.items.item.filter(value => value.category == 'T1H')[1];
      if (pty.fcstValue == '0') {
        const sky = realTime.response.body.items.item.filter(value => value.category == 'SKY')[1];
        skyStatus = skyRole(Number(sky.fcstValue), true);
      } else {
        skyStatus = rainRole(Number(pty.fcstValue), true);
      }
      setNow({
        sky: skyStatus ?? '',
        tempt: Number(tmp.fcstValue),
      });
    }
  }, [realTime, setNow]);
  return now.tempt == 0 ? (
    <>
      <SkeletonWeather />
    </>
  ) : (
    <WrapMolecules>
      <div>
        <IconFcst iconKey={convertIconKey(now.sky) ?? 'CLEAN'} />
        <TitleCenter>{now.sky}</TitleCenter>
      </div>
      <div>
        <TitleRight>기온</TitleRight>
        <FcstTemp>{`${now.tempt}℃`}</FcstTemp>
      </div>
    </WrapMolecules>
  );
};

export default Weather;
