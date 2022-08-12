import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useGetShortForecast } from '$queries/useGetShortForecast';
import { getCurrentYYYYMMDD } from '$utils/date';
import { rainRole, skyRole } from '$utils/skyRole';

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
  line-height: 2.75em;
`;

interface nowForecast {
  sky: string;
  tempt: number;
}

const Weather = ({ nx, ny }: { nx: number; ny: number }) => {
  const [now, setNow] = useState<nowForecast>({
    sky: '',
    tempt: 0,
  });
  const { data: dayForecast } = useGetShortForecast(nx, ny);
  useEffect(() => {
    if (dayForecast) {
      const today = dayForecast.response.body.items.item.filter(value => value.fcstDate == getCurrentYYYYMMDD());
      const sky = today.filter(value => value.category == 'SKY')[0];
      if (sky) {
        let skyStatus = skyRole(sky.fcstValue);
        if (!skyStatus) {
          const rain = today.filter(value => value.category == 'PTY')[0];
          skyStatus = rainRole(rain!.fcstValue);
        }
        const tmp = today.filter(value => value.category == 'TMP')[0];
        setNow({
          sky: skyStatus ?? '',
          tempt: tmp.fcstValue,
        });
      }
    }
  }, [dayForecast, now]);
  return (
    <WrapMolecules>
      <div>
        <FcstIcon>
          <WbSunnyIcon fontSize="large" />
        </FcstIcon>
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
