import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import FcstTimely, { timelyInfo } from '../Molecules/FcstTimely';
import { useGetShortForecast } from '$queries/useGetShortForecast';
import { ShortForecast } from '$types/Forecast/ShortForecast';
import { getCurrentYYYYMMDD, getTmrwYYYYMMDD } from '$utils/date';
import { skyRole } from '$utils/skyRole';

const WrapComp = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
`;

const WrapMolecules = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const OFcstTimely = ({ nx, ny }: { nx: number; ny: number }) => {
  const { data: info } = useGetShortForecast(nx, ny);
  const [tmrw, setTmrw] = useState<{ [key in string]: timelyInfo }>({});
  const [today, setToday] = useState<{ [key in string]: timelyInfo }>({});
  useEffect(() => {
    if (info) {
      const list: { [key in string]: Array<ShortForecast> } = {};
      info.response.body.items.item.map(data => {
        if (list[data.fcstDate] == undefined) {
          list[data.fcstDate] = [];
        }
        list[data.fcstDate].push(data);
      });

      const todayList: { [key in string]: timelyInfo } = {};
      const tmrwList: { [key in string]: timelyInfo } = {};
      Object.entries(list).map(([key, values]) => {
        if (key == getCurrentYYYYMMDD()) {
          values.map(infos => {
            if (todayList[infos.fcstTime] == undefined) {
              todayList[infos.fcstTime] = {
                time: infos.fcstTime.substring(0, 2),
                tempTimely: 0,
                rainRate: 0,
                sky: '',
                pty: 0,
              };
            }
            if (infos.category == 'POP') {
              todayList[infos.fcstTime] = {
                ...todayList[infos.fcstTime],
                rainRate: infos.fcstValue,
              };
            }
            if (infos.category == 'PTY') {
              todayList[infos.fcstTime] = {
                ...todayList[infos.fcstTime],
                pty: infos.fcstValue,
              };
            }
            if (infos.category == 'SKY') {
              todayList[infos.fcstTime] = {
                ...todayList[infos.fcstTime],
                sky: skyRole(infos.fcstValue),
              };
            }
            if (infos.category == 'TMP') {
              todayList[infos.fcstTime] = {
                ...todayList[infos.fcstTime],
                tempTimely: infos.fcstValue,
              };
            }
          });
        }
        if (key == getTmrwYYYYMMDD()) {
          values.map(infos => {
            if (tmrwList[infos.fcstTime] == undefined) {
              tmrwList[infos.fcstTime] = {
                time: infos.fcstTime.substring(0, 2),
                tempTimely: 0,
                rainRate: 0,
                sky: '',
                pty: 0,
              };
            }
            if (infos.category == 'POP') {
              tmrwList[infos.fcstTime] = {
                ...tmrwList[infos.fcstTime],
                rainRate: infos.fcstValue,
              };
            }
            if (infos.category == 'PTY') {
              tmrwList[infos.fcstTime] = {
                ...tmrwList[infos.fcstTime],
                pty: infos.fcstValue,
              };
            }
            if (infos.category == 'SKY') {
              tmrwList[infos.fcstTime] = {
                ...tmrwList[infos.fcstTime],
                sky: skyRole(infos.fcstValue),
              };
            }
            if (infos.category == 'TMP') {
              tmrwList[infos.fcstTime] = {
                ...tmrwList[infos.fcstTime],
                tempTimely: infos.fcstValue,
              };
            }
          });
        }
      });
      setToday(todayList);
      setTmrw(tmrwList);
    }
  }, [info, setToday, setTmrw]);
  return (
    <WrapComp>
      <h1>하루날씨</h1>
      <WrapMolecules>
        <>
          {Object.entries(today)
            .sort(([, a], [, b]) => a.time.localeCompare(b.time))
            .map(([key, values], index) => {
              return <FcstTimely key={index} info={values} />;
            })}
          {Object.entries(tmrw)
            .sort(([, a], [, b]) => a.time.localeCompare(b.time))
            .map(([key, values], index) => {
              return <FcstTimely key={index} info={values} />;
            })}
        </>
      </WrapMolecules>
    </WrapComp>
  );
};

export default OFcstTimely;
