import { withAxios } from '$utils/withAxios';
import { API_ROUTES } from '$constants/routes';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import { AirQuality } from '$types/Air/AirQuality';
import { AirBaseResponse } from '$types/AirResponse';
import { getCurrentDayMinusHour } from '$utils/date';

export interface DustProps {
  pageNo: number;
  numOfRows: number;
  resultType: string;
  areaIndex: number;
  controlnumber: string;
}

export const getDustFetch = async (areaIndex: number) => {
  const props: DustProps = {
    numOfRows: 1,
    pageNo: 1,
    resultType: 'json',
    areaIndex: areaIndex,
    controlnumber: getCurrentDayMinusHour(),
  };
  setTimeout(() => {}, 10000);

  return await withAxios<AirBaseResponse<AirQuality>>({
    url: API_ROUTES.AIR.QUALITY,
    params: {
      numOfRows: props.numOfRows,
      pageNo: props.pageNo,
      resultType: props.resultType,
      areaIndex: props.areaIndex,
      controlnumber: props.controlnumber,
    },
  });
};

export const useGetDust = (
  areaIndex: number,
  options?: UseQueryOptions<AirBaseResponse<AirQuality>, AxiosError, AirBaseResponse<AirQuality>, string[]>,
): UseQueryResult<AirBaseResponse<AirQuality>, AxiosError> =>
  useQuery([`${areaIndex}`, ...Querykeys.AIR.QUALITY], () => getDustFetch(areaIndex), { ...options });
/**
 *   site: string;  사용 X
 *   areaIndex: number;  사용 X :
 *   controlnumber: string;  사용 O :
 *   repItem: string;  사용 X :
 *   repVal: number;  사용 X :
 *   repCai: number;  사용 X :
 *   so2: number;  사용 X :
 *   so2Cai: string;  사용 X :
 *   no2: number;  사용 X :
 *   no2Cai: string;  사용 X :
 *   o3: number;  사용 X :
 *   o3Cai: string;  사용 X :
 *   co: number;  사용 X :
 *   coCai: string;  사용 X :
 *   pm25: number;  사용 O : 초미세먼지 양
 *   pm25Cai: number;  사용 O : 초미세먼지 지수
 *   pm10: number;  사용 O : 미세먼지 양
 *   pm10Cai: number;  사용 O : 미세먼지 지수
 */
