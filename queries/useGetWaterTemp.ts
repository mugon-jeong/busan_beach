import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { WaterTemperature } from '$types/WaterTemperature';
import { Querykeys } from '$constants/querykeys';
import { API_ROUTES } from '$constants/routes';

/**
 *  const waveprop: WaveProp = {
 *     numOfRows: 1,
 *     pageNo: 10,
 *     dataType: 'JSON',
 *     beach_num: 304,
 *     searchTime: moment().format('YYYYMMDDHHMM'),
 *   };
 */
export interface WaterProp {
  pageNo: number;
  numOfRows: number;
  dataType: string;
  beach_num: number;
  searchTime: string;
}

export const getWaterTemperatureFetch = async (props: WaterProp) => {
  return await withAxios<BaseResponse<WaterTemperature>>({
    url: `${API_ROUTES.BEACH.WEATHER.WATER}`,
    params: {
      numOfRows: props.numOfRows,
      pageNo: props.pageNo,
      dataType: props.dataType,
      beach_num: props.beach_num,
      searchTime: props.searchTime,
    },
  });
};
export const useGetWaterTemperature = (
  props: WaterProp,
  options?: UseQueryOptions<BaseResponse<WaterTemperature>, AxiosError, BaseResponse<WaterTemperature>, string[]>,
): UseQueryResult<BaseResponse<WaterTemperature>, AxiosError> =>
  useQuery([`${props.beach_num}`, ...Querykeys.BEACH.WEATHER.WATER], () => getWaterTemperatureFetch(props), {
    ...options,
  });
