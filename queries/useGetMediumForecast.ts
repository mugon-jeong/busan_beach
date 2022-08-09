import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { API_ROUTES } from '$constants/routes';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import moment from 'moment';
import { MediumForecastType } from '../types/MediumForecast/MediumForecastType';

export interface MiddleWeatherProp {
  pageNo: number;
  numOfRows: number;
  dataType: string;
  regId: string;
  tmFc: string;
}

export const getMediumForecastFetch = async (regId: string) => {
  const props: MiddleWeatherProp = {
    numOfRows: 10,
    pageNo: 1,
    dataType: 'JSON',
    regId: regId,
    tmFc: moment().format('YYYYMMDD') + '06',
  };

  return await withAxios<BaseResponse<MediumForecastType>>({
    url: `${API_ROUTES.MEDIUM.FORECAST}`,
    params: {
      numOfRows: props.numOfRows,
      pageNo: props.pageNo,
      dataType: props.dataType,
      regId: props.regId,
      tmFc: props.tmFc,
    },
  });
};

export const useGetMediumForecast = (
  regId: string,
  options?: UseQueryOptions<BaseResponse<MediumForecastType>, AxiosError, BaseResponse<MediumForecastType>, string[]>,
): UseQueryResult<BaseResponse<MediumForecastType>, AxiosError> =>
  useQuery([`${regId}`, ...Querykeys.MEDIUM.FORECAST], () => getMediumForecastFetch(regId), { ...options });
