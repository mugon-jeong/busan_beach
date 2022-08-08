import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { BEACH_WEATHER_KEY } from '$config';
import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { WaterTemperature } from '$types/WaterTemperature';
import { Querykeys } from '$constants/querykeys';
import { API_ROUTES } from '$constants/routes';

export interface SchoolProp {
  pageNo: number;
  numOfRows: number;
  dataType: string;
  beach_num: number;
  searchTime: string;
}

export const getWaterTemperatureFetch = async (props: SchoolProp) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return await withAxios<BaseResponse<WaterTemperature>>({
    method: 'get',
    url: `${API_ROUTES.BEACH.WEATHER.WATER}`,
    params: {
      serviceKey: BEACH_WEATHER_KEY,
      pageNo: props.pageNo,
      numOfRows: props.numOfRows,
      dataType: props.dataType,
      beach_num: props.beach_num,
      searchTime: props.searchTime,
    },
  });
};
export const useGetWaterTemperature = (
  props: SchoolProp,
  options?: UseQueryOptions<BaseResponse<WaterTemperature>, AxiosError, BaseResponse<WaterTemperature>, string[]>,
): UseQueryResult<BaseResponse<WaterTemperature>, AxiosError> =>
  useQuery(Querykeys.BEACH.WEATHER.WATER, () => getWaterTemperatureFetch(props), { ...options });
