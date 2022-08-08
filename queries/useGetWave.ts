import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { API_ROUTES } from '$constants/routes';
import { Wave } from '$types/Wave';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';

/**
 *  const waveprop: WaveProp = {
 *     numOfRows: 1,
 *     pageNo: 10,
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

export const getWaveFetch = async (props: WaveProp) => {
  return await withAxios<BaseResponse<Wave>>({
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
  props: WaveProp,
  options?: UseQueryOptions<BaseResponse<Wave>, AxiosError, BaseResponse<Wave>, string[]>,
): UseQueryResult<BaseResponse<Wave>, AxiosError> =>
  useQuery([`${props.beach_num}`, ...Querykeys.BEACH.WEATHER.WAVE], () => getWaveFetch(props), { ...options });
