import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import FcstTimely, { timelyInfo } from '../Molecules/FcstTimely';
import { useGetShortForecast } from '$queries/useGetShortForecast';
import { ShortForecast } from '$types/Forecast/ShortForecast';
import { getCurrentYYYYMMDD, getTmrwYYYYMMDD, getYtdYYYYMMDD } from '$utils/date';
import { skyRole } from '$utils/skyRole';

const WrapComp = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.15);
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

const OFcstTimely = () => {
  const { data: info } = useGetShortForecast(99, 75, {
    suspense: false,
    useErrorBoundary: false,
  });
  const [tmrw, setTmrw] = useState<{ [key in string]: timelyInfo }>({});
  const [today, setToday] = useState<{ [key in string]: timelyInfo }>({});
  const [ytd, setYtd] = useState<{ [key in string]: timelyInfo }>({});
  useEffect(() => {
    if (info) {
      const sliceList = info.response.body.items.item.splice(0, 229);
      const list: { [key in string]: Array<ShortForecast> } = {};
      sliceList.map(data => {
        if (list[data.fcstTime] == undefined) {
          list[data.fcstTime] = [];
        }
        list[data.fcstTime].push(data);
      });
      const todayList: { [key in string]: timelyInfo } = {};
      const tmrwList: { [key in string]: timelyInfo } = {};
      const ytdList: { [key in string]: timelyInfo } = {};
      Object.entries(list).map(([key, values]) => {
        if (values[0].fcstDate == getYtdYYYYMMDD()) {
          if (values.length > 11) {
            if (ytdList[key] == undefined) {
              ytdList[key] = {
                time: 0,
                tempTimely: 0,
                rainRate: 0,
                sky: '',
              };
            }
            const pop = values.filter(value => value.category == 'POP')[0];
            const sky = values.filter(value => value.category == 'SKY')[0];
            const tmp = values.filter(value => value.category == 'TMP')[0];
            ytdList[key] = {
              time: parseInt(key.substring(0, 2)),
              tempTimely: tmp.fcstValue,
              rainRate: pop.fcstValue,
              sky: skyRole(sky.fcstValue),
            };
          }
        }
        if (values[0].fcstDate == getCurrentYYYYMMDD()) {
          if (values.length > 11) {
            if (todayList[key] == undefined) {
              todayList[key] = {
                time: 0,
                tempTimely: 0,
                rainRate: 0,
                sky: '',
              };
            }
            const pop = values.filter(value => value.category == 'POP')[0];
            const sky = values.filter(value => value.category == 'SKY')[0];
            const tmp = values.filter(value => value.category == 'TMP')[0];
            todayList[key] = {
              time: parseInt(key.substring(0, 2)),
              tempTimely: tmp.fcstValue,
              rainRate: pop.fcstValue,
              sky: skyRole(sky.fcstValue),
            };
          }
        }
        if (values[0].fcstDate == getTmrwYYYYMMDD()) {
          if (values.length > 11) {
            if (tmrwList[key] == undefined) {
              tmrwList[key] = {
                time: 0,
                tempTimely: 0,
                rainRate: 0,
                sky: '',
              };
            }
            const pop = values.filter(value => value.category == 'POP')[0];
            const sky = values.filter(value => value.category == 'SKY')[0];
            const tmp = values.filter(value => value.category == 'TMP')[0];
            tmrwList[key] = {
              time: parseInt(key.substring(0, 2)),
              tempTimely: tmp.fcstValue,
              rainRate: pop.fcstValue,
              sky: skyRole(sky.fcstValue),
            };
          }
        }
      });
      const sortYtd = Object.fromEntries(Object.entries(ytdList).sort(([, a], [, b]) => a.time - b.time));
      const sortToday = Object.fromEntries(Object.entries(todayList).sort(([, a], [, b]) => a.time - b.time));
      const sortTmrw = Object.fromEntries(Object.entries(tmrwList).sort(([, a], [, b]) => a.time - b.time));
      setYtd(sortYtd);
      setToday(sortToday);
      setTmrw(sortTmrw);
    }
  }, [info]);

  return (
    <WrapComp>
      <h1>하루날씨</h1>
      <WrapMolecules>
        <>
          {Object.entries(ytd).map(([key, values], index) => {
            return <FcstTimely key={index} info={values} />;
          })}
          {Object.entries(today).map(([key, values], index) => {
            return <FcstTimely key={index} info={values} />;
          })}
          {Object.entries(tmrw).map(([key, values], index) => {
            return <FcstTimely key={index} info={values} />;
          })}
        </>
      </WrapMolecules>
    </WrapComp>
  );
};

export default OFcstTimely;
