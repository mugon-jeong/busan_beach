import { withAxios } from '$utils/withAxios';
import { API_ROUTES } from '$constants/routes';
import { OceanDataType } from '$types/OceanData/OceanDataType';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import { OceanResponse } from '$types/OceanResponse';

export const getOceanDataFetch = async (ocean_code: string) => {
  return await withAxios<OceanResponse<OceanDataType>>({
    url: API_ROUTES.API.OCEAN,
    params: {
      OceanCode: ocean_code,
    },
  });
};

export const useGetOceanData = (
  ocean_code: string,
  options?: UseQueryOptions<OceanResponse<OceanDataType>, AxiosError, OceanResponse<OceanDataType>, string[]>,
): UseQueryResult<OceanResponse<OceanDataType>, AxiosError> =>
  useQuery([`${ocean_code}`, ...Querykeys.OCEAN.DATA], () => getOceanDataFetch(ocean_code), { ...options });
/**
 *   obs_time: string; 사용 O :
 *   water_temp: number;  사용 O : 수온
 *   wind_direct: string;  사용 O : 풍향
 *   wind_speed: number;  사용 O : 풍속
 *   tide: number;  사용 X : 조위
 *   day1_am_status: string;  사용 X
 *   day1_pm_status: string;  사용 X
 *   day2_am_status: string;  사용 X
 *   day2_pm_status: string;  사용 X
 *   day3_am_status: string;  사용 X
 *   day3_pm_status: string;  사용 X
 */
