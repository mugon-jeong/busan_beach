import { withAxios } from '$utils/withAxios';
import { API_ROUTES } from '$constants/routes';
import { OceanDataType } from '$types/OceanData/OceanDataType';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import { OceanResponse } from '$types/OceanResponse';

export const getOceanDataFetch = async (beach_code: string) => {
  return await withAxios<OceanResponse<OceanDataType>>({
    url: API_ROUTES.API.OCEAN,
    params: {
      BeachCode: beach_code,
    },
  });
};

export const useGetOceanData = (
  beach_code: string,
  options?: UseQueryOptions<OceanResponse<OceanDataType>, AxiosError, OceanResponse<OceanDataType>, string[]>,
): UseQueryResult<OceanResponse<OceanDataType>, AxiosError> =>
  useQuery([`${beach_code}`, ...Querykeys.OCEAN.DATA], () => getOceanDataFetch(beach_code), { ...options });
/**
 *   obs_time: string;
 *   water_temp: number;
 *   wind_direct: string;
 *   wind_speed: number;
 *   tide: number;
 *   day1_am_status: string;
 *   day1_pm_status: string;
 *   day2_am_status: string;
 *   day2_pm_status: string;
 *   day3_am_status: string;
 *   day3_pm_status: string;
 */
