import moment from 'moment';
import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { API_ROUTES } from '$constants/routes';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import { UvType } from '$types/LivingWeather/UvType';

export interface uvProps {
  pageNo: number;
  numOfRows: number;
  dataType: string;
  areaNo: number;
  time: string;
}

export const getUVFetch = async (areaNo: number) => {
  const props: uvProps = {
    numOfRows: 1,
    pageNo: 1,
    dataType: 'JSON',
    areaNo: areaNo,
    time: moment().format('YYYYMMDD') + '06',
  };

  return await withAxios<BaseResponse<UvType>>({
    url: `${API_ROUTES.LIVING.UV}`,
    params: {
      numOfRows: props.numOfRows,
      pageNo: props.pageNo,
      dataType: props.dataType,
      areaNo: props.areaNo,
      time: props.time,
    },
  });
};

export const useGetUV = (
  areaNo: number,
  options?: UseQueryOptions<BaseResponse<UvType>, AxiosError, BaseResponse<UvType>, string[]>,
): UseQueryResult<BaseResponse<UvType>, AxiosError> =>
  useQuery([`${areaNo}`, ...Querykeys.LIVING.UV], () => getUVFetch(areaNo), { ...options });

/**
 *   code: string;
 *   areaNo: number;
 *   date: string;
 *   today: number;
 *   tomorrow: number;
 *   dayaftertomorrow: number;
 *   twodaysaftertomorrow: number;
 */
