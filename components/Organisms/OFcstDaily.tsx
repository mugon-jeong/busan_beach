import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import FcstDaily, { dailyInfo } from '../Molecules/FcstDaily';
import { useGetMediumForecast } from '$queries/useGetMediumForecast';
import { useGetMediumRain } from '$queries/useGetMediumRain';
import { addDayMMDD } from '$utils/date';

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
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const OFcstDaily = ({ regIdR, regIdM }: { regIdR: string; regIdM: string }) => {
  const { data: medium } = useGetMediumForecast(regIdM);
  const { data: rain } = useGetMediumRain(regIdR);
  const [daily, setDaily] = useState<{ [key in number]: dailyInfo | null }>({});
  useEffect(() => {
    if (medium && rain) {
      const dailyList: { [key in number]: dailyInfo | null } = {
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
      };
      const getData = medium.response.body.items.item[0];
      const rainData = rain.response.body.items.item[0];
      dailyList[3] = {
        days: addDayMMDD(3),
        tempHigh: getData.taMax3,
        tempLow: getData.taMin3,
        rate: rainData.rnSt3Am >= rainData.rnSt3Pm ? rainData.rnSt3Am : rainData.rnSt3Pm,
      };
      dailyList[4] = {
        days: addDayMMDD(4),
        tempHigh: getData.taMax4,
        tempLow: getData.taMin4,
        rate: rainData.rnSt4Am >= rainData.rnSt4Pm ? rainData.rnSt4Am : rainData.rnSt4Pm,
      };
      dailyList[5] = {
        days: addDayMMDD(5),
        tempHigh: getData.taMax5,
        tempLow: getData.taMin5,
        rate: rainData.rnSt5Am >= rainData.rnSt5Pm ? rainData.rnSt5Am : rainData.rnSt5Pm,
      };
      dailyList[6] = {
        days: addDayMMDD(6),
        tempHigh: getData.taMax6,
        tempLow: getData.taMin6,
        rate: rainData.rnSt6Am >= rainData.rnSt6Pm ? rainData.rnSt6Am : rainData.rnSt6Pm,
      };
      dailyList[7] = {
        days: addDayMMDD(7),
        tempHigh: getData.taMax7,
        tempLow: getData.taMin7,
        rate: rainData.rnSt7Am >= rainData.rnSt7Pm ? rainData.rnSt7Am : rainData.rnSt7Pm,
      };
      dailyList[8] = {
        days: addDayMMDD(8),
        tempHigh: getData.taMax8,
        tempLow: getData.taMin8,
        rate: rainData.rnSt8,
      };
      dailyList[9] = {
        days: addDayMMDD(9),
        tempHigh: getData.taMax9,
        tempLow: getData.taMin9,
        rate: rainData.rnSt9,
      };
      dailyList[10] = {
        days: addDayMMDD(10),
        tempHigh: getData.taMax10,
        tempLow: getData.taMin10,
        rate: rainData.rnSt10,
      };
      setDaily(dailyList);
    }
  }, [medium, rain]);

  return (
    <WrapComp>
      <h1>주간날씨</h1>
      <WrapMolecules>
        <>
          {Object.entries(daily).map(([key, value]) => {
            return <FcstDaily key={key} info={value!} />;
          })}
        </>
      </WrapMolecules>
    </WrapComp>
  );
};

export default OFcstDaily;
