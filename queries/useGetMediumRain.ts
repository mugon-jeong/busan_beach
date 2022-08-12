import { getMediumYYYYMMDDHH } from '$utils/date';
import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { API_ROUTES } from '$constants/routes';
import { MiddleWeatherProp } from '$queries/useGetMediumForecast';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import { MediumRainType } from '$types/Forecast/MediumRainType';

export const getMediumRainFetch = async (regId: string) => {
  const props: MiddleWeatherProp = {
    numOfRows: 10,
    pageNo: 1,
    dataType: 'JSON',
    regId: regId,
    tmFc: getMediumYYYYMMDDHH(),
  };

  return await withAxios<BaseResponse<MediumRainType>>({
    url: API_ROUTES.FORECAST.MEDIUM.RAIN,
    params: {
      numOfRows: props.numOfRows,
      pageNo: props.pageNo,
      dataType: props.dataType,
      regId: props.regId,
      tmFc: props.tmFc,
    },
  });
};
export const useGetMediumRain = (
  regId: string,
  options?: UseQueryOptions<BaseResponse<MediumRainType>, AxiosError, BaseResponse<MediumRainType>, string[]>,
): UseQueryResult<BaseResponse<MediumRainType>, AxiosError> =>
  useQuery([`${regId}`, ...Querykeys.FORECAST.MEDIUM.RAIN], () => getMediumRainFetch(regId), { ...options });
