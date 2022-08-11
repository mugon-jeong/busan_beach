import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { API_ROUTES } from '$constants/routes';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import { UvType } from '$types/LivingWeather/UvType';
import { getCurrentYYYYMMDD } from '$utils/date';

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
    time: getCurrentYYYYMMDD() + '06',
  };
  setTimeout(() => {}, 10000);

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
 *   code: string;  사용 X
 *   areaNo: number; 사용 O : 측정한 지점 사용
 *   date: string; 사용 O : 발표 시간 사용
 *   today: number;  사용 O : 오늘 예측값 사용
 *   tomorrow: number;  사용 ? : 내일 예측값 필요 시 사용
 *   dayaftertomorrow: number;  사용 ? : 모레 예측값 필요 시 사용
 *   twodaysaftertomorrow: number;  사용 ? : 글피 예측값 필요 시 사용
 */
