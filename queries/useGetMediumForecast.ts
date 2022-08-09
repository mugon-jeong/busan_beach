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
 *   regId: string;  사용 X : 지역 코드
 *   taMin3: number;  사용 O : 3일 뒤 최저 기온
 *   taMin3Low: number;  사용 X
 *   taMin3High: number;  사용 X
 *   taMax3: number;  사용 O : 3일 뒤 최고 기온
 *   taMin4: number;  사용 O : 4일 뒤 최저 기온
 *   taMin4Low: number;  사용 X
 *   taMin4High: number;  사용 X
 *   taMax4: number;  사용 O : 4일 뒤 최고 기온
 *   taMin5: number;  사용 O : 5일 뒤 최저 기온
 *   taMin5Low: number;  사용 X
 *   taMin5High: number;  사용 X
 *   taMax5: number;  사용 O : 5일 뒤 최고 기온
 *   taMin6: number;  사용 O : 6일 뒤 최저 기온
 *   taMin6Low: number;  사용 X
 *   taMin6High: number;  사용 X
 *   taMax6: number;  사용 O : 6일 뒤 최고 기온
 *   taMin7: number;  사용 O : 7일 뒤 최저 기온
 *   taMin7Low: number;  사용 X
 *   taMin7High: number;  사용 X
 *   taMax7: number;  사용 O : 7일 뒤 최고 기온
 *   taMin8: number;  사용 X
 *   taMin8Low: number;  사용 X
 *   taMin8High: number;  사용 X
 *   taMax8: number;  사용 X
 *   taMin9: number;  사용 X
 *   taMin9Low: number;  사용 X
 *   taMin9High: number;  사용 X
 *   taMax9: number;  사용 X
 *   taMin10: number;  사용 X
 *   taMin10Low: number;  사용 X
 *   taMin10High: number;  사용 X
 *   taMax10: number;  사용 X
 */
