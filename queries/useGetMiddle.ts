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
export interface TempMiddleProp {
  pageNo: number;
  numOfRows: number;
  dataType: string;
  administrative_code: string;
  searchTime: string;
}

export const getWaveFetch = async (administrative_code: string) => {
  const props: TempMiddleProp = {
    numOfRows: 1,
    pageNo: 1,
    dataType: 'JSON',
    administrative_code: administrative_code,
    searchTime: moment().format('YYYYMMDDHHMM'),
  };
  return await withAxios<BaseResponse<WaveType>>({
    url: `${API_ROUTES.BEACH.WEATHER.WAVE}`,
    params: {
      numOfRows: props.numOfRows,
      pageNo: props.pageNo,
      dataType: props.dataType,
      administrative_code: props.administrative_code,
      searchTime: props.searchTime,
    },
  });
};

export const useGetWave = (
  beach_num: number,
  options?: UseQueryOptions<BaseResponse<WaveType>, AxiosError, BaseResponse<WaveType>, string[]>,
): UseQueryResult<BaseResponse<WaveType>, AxiosError> =>
  useQuery([`${beach_num}`, ...Querykeys.BEACH.WEATHER.WAVE], () => getWaveFetch(beach_num), { ...options });
