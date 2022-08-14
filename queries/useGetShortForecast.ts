import { withAxios } from '$utils/withAxios';
import { API_ROUTES } from '$constants/routes';
import { BaseResponse } from '$types/BaseResponse';
import { ShortForecast } from '$types/Forecast/ShortForecast';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import { getShortForecastDate, requestShortForecastHH } from '$utils/date';

export interface ShortForecastProps {
  pageNo: number;
  numOfRows: number;
  dataType: string;
  base_date: string;
  base_time: string;
  nx: number;
  ny: number;
}

export const getShortForecastFetch = async (nx: number, ny: number) => {
  const props: ShortForecastProps = {
    numOfRows: 1000,
    pageNo: 1,
    dataType: 'JSON',
    base_date: getShortForecastDate(),
    base_time: requestShortForecastHH(),
    nx: nx,
    ny: ny,
  };
  return await withAxios<BaseResponse<ShortForecast>>({
    url: API_ROUTES.FORECAST.SHORT,
    params: {
      numOfRows: props.numOfRows,
      pageNo: props.pageNo,
      dataType: props.dataType,
      base_date: props.base_date,
      base_time: props.base_time,
      nx: props.nx,
      ny: props.ny,
    },
  });
};

export const useGetShortForecast = (
  nx: number,
  ny: number,
  options?: UseQueryOptions<BaseResponse<ShortForecast>, AxiosError, BaseResponse<ShortForecast>, string[]>,
): UseQueryResult<BaseResponse<ShortForecast>, AxiosError> =>
  useQuery([`${nx}`, `${ny}`, ...Querykeys.FORECAST.SHORT], () => getShortForecastFetch(nx, ny), { ...options });
