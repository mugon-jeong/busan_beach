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

const Weather = () => {
  const [sky, setSky] = useState('');
  const [tempt, setTempt] = useState(0);
  const { data: dayForecast } = useGetShortForecast(99, 75, {
    suspense: true,
    useErrorBoundary: true,
  });
  useEffect(() => {
    const sky = dayForecast?.response.body.items.item
      .filter(value => value.category == 'SKY')
      .filter(value => value.fcstDate == getCurrentYYYYMMDD())[0];
    if (sky) {
      let skyStatus = skyRole(sky!.fcstValue);
      if (!skyStatus) {
        const rain = dayForecast?.response.body.items.item
          .filter(value => value.category == 'PTY')
          .filter(value => value.fcstDate == getCurrentYYYYMMDD())[0];
        skyStatus = rainRole(rain!.fcstValue);
      }
      setSky(skyStatus!);
    }
    const tmp = dayForecast?.response.body.items.item
      .filter(value => value.category == 'TMP')
      .filter(value => value.fcstDate == getCurrentYYYYMMDD())[0];
    if (tmp) {
      setTempt(tmp!.fcstValue);
    }
  }, [dayForecast?.response.body.items.item]);
  return (
    <WrapMolecules>
      <div>
        <FcstIcon>
          <WbSunnyIcon fontSize="large" />
        </FcstIcon>
        <TitleCenter>{sky}</TitleCenter>
      </div>
      <div>
        <TitleRight>기온</TitleRight>
        <FcstTemp>{`${tempt}℃`}</FcstTemp>
      </div>
    </WrapMolecules>
  );
};

export default Weather;
