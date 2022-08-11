import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { WaterTemperatureType } from '$types/BeachWeather/WaterTemperatureType';
import { Querykeys } from '$constants/querykeys';
import { API_ROUTES } from '$constants/routes';
import { getCurrentYYYYMMDDHH } from '$utils/date';

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

export const getWaterTemperatureFetch = async (beach_num: number) => {
  const props: WaterProp = {
    numOfRows: 1,
    pageNo: 1,
    dataType: 'JSON',
    beach_num: 304,
    searchTime: getCurrentYYYYMMDDHH(),
  };
  return await withAxios<BaseResponse<WaterTemperatureType>>({
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
  beach_num: number,
  options?: UseQueryOptions<
    BaseResponse<WaterTemperatureType>,
    AxiosError,
    BaseResponse<WaterTemperatureType>,
    string[]
  >,
): UseQueryResult<BaseResponse<WaterTemperatureType>, AxiosError> =>
  useQuery([`${beach_num}`, ...Querykeys.BEACH.WEATHER.WATER], () => getWaterTemperatureFetch(beach_num), {
    ...options,
  });

/**
 * beachNum: number;
 *   tm: string;
 *   tw: string;
 */
