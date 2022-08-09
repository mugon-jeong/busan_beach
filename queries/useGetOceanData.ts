import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { API_ROUTES } from '$constants/routes';
import { OceanDataType } from '$types/OceanData/OceanDataType';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import moment from 'moment';

export interface OceanDataProp {
  DataType: string;
  BeachCode: string;
  ResultType: string;
}

export const getWaveFetch = async (beach_code: string) => {
  const props: OceanDataProp = {
    DataType: 'JSON',
    BeachCode: beach_code,
    ResultType: 'Json',
  };

  return await withAxios<BaseResponse<OceanDataType>>({
    url: `${API_ROUTES.OCEAN.DATA}`,
    params: {
      DataType: props.DataType,
      BeachCode: props.BeachCode,
      ResultType: props.ResultType,
    },
  });
};

export const useGetWave = (
  beach_code: string,
  options?: UseQueryOptions<BaseResponse<OceanDataType>, AxiosError, BaseResponse<OceanDataType>, string[]>,
): UseQueryResult<BaseResponse<OceanDataType>, AxiosError> =>
  useQuery([`${beach_code}`, ...Querykeys.OCEAN.DATA], () => getWaveFetch(beach_code), { ...options });
