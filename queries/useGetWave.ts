import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { API_ROUTES } from '$constants/routes';
import { WaveType } from '$types/BeachWeather/WaveType';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import moment from 'moment';

/**
 *  const waveprop: WaveProp = {
 *     numOfRows: 1,
 *     pageNo: 1,
 *     dataType: 'JSON',
 *     beach_num: 304,
 *     searchTime: moment().format('YYYYMMDDHHMM'),
 *   };
 */
export interface WaveProp {
  pageNo: number;
  numOfRows: number;
  dataType: string;
  beach_num: number;
  searchTime: string;
}

export const getWaveFetch = async (beach_num: number) => {
  const props: WaveProp = {
    numOfRows: 1,
    pageNo: 1,
    dataType: 'JSON',
    beach_num: beach_num,
    searchTime: moment().format('YYYYMMDDHHMM'),
  };
  return await withAxios<BaseResponse<WaveType>>({
    url: `${API_ROUTES.BEACH.WEATHER.WAVE}`,
    params: {
      numOfRows: props.numOfRows,
      pageNo: props.pageNo,
      dataType: props.dataType,
      beach_num: props.beach_num,
      searchTime: props.searchTime,
    },
  });
};

export const useGetWave = (
  beach_num: number,
  options?: UseQueryOptions<BaseResponse<WaveType>, AxiosError, BaseResponse<WaveType>, string[]>,
): UseQueryResult<BaseResponse<WaveType>, AxiosError> =>
  useQuery([`${beach_num}`, ...Querykeys.BEACH.WEATHER.WAVE], () => getWaveFetch(beach_num), { ...options });
