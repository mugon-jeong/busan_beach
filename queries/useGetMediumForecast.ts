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
/**
 *   regId: string;
 *   taMin3: number;
 *   taMin3Low: number;
 *   taMin3High: number;
 *   taMax3: number;
 *   taMin4: number;
 *   taMin4Low: number;
 *   taMin4High: number;
 *   taMax4: number;
 *   taMin5: number;
 *   taMin5Low: number;
 *   taMin5High: number;
 *   taMax5: number;
 *   taMin6: number;
 *   taMin6Low: number;
 *   taMin6High: number;
 *   taMax6: number;
 *   taMin7: number;
 *   taMin7Low: number;
 *   taMin7High: number;
 *   taMax7: number;
 *   taMin8: number;
 *   taMin8Low: number;
 *   taMin8High: number;
 *   taMax8: number;
 *   taMin9: number;
 *   taMin9Low: number;
 *   taMin9High: number;
 *   taMax9: number;
 *   taMin10: number;
 *   taMin10Low: number;
 *   taMin10High: number;
 *   taMax10: number;
 */
