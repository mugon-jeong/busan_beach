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
  regId: string;
  tmFc: string;
}

export const getWaveFetch = async (regId: string) => {
  const props: TempMiddleProp = {
    numOfRows: 1,
    pageNo: 1,
    dataType: 'JSON',
    regId: regId,
    tmFc: moment().format('YYYYMMDDHHMM'),
  };
  return await withAxios<BaseResponse<WaveType>>({
    url: `${API_ROUTES.BEACH.WEATHER.WAVE}`,
    params: {
      numOfRows: props.numOfRows,
      pageNo: props.pageNo,
      dataType: props.dataType,
      regId: props.regId,
      tmFc: props.tmFc,
    },
  });
};

export const useGetWave = (
  regId: string,
  options?: UseQueryOptions<BaseResponse<WaveType>, AxiosError, BaseResponse<WaveType>, string[]>,
): UseQueryResult<BaseResponse<WaveType>, AxiosError> =>
  useQuery([`${regId}`, ...Querykeys.BEACH.WEATHER.WAVE], () => getWaveFetch(regId), { ...options });
