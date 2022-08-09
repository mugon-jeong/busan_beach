import moment from 'moment';
import { withAxios } from '$utils/withAxios';
import { API_ROUTES } from '$constants/routes';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import { AirQuality } from '$types/Air/AirQuality';
import { AirBaseResponse } from '$types/AirResponse';

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
    controlnumber: moment().subtract(1, 'hour').format('YYYYMMDDHH'),
  };

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
