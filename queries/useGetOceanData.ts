import { withAxios } from '$utils/withAxios';
import { API_ROUTES } from '$constants/routes';
import { OceanDataType } from '$types/OceanData/OceanDataType';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import { OceanResponse } from '$types/OceanResponse';

export interface OceanDataProp {
  DataType: string;
  BeachCode: string;
  ResultType: string;
}

export const getOceanDataFetch = async (beach_code: string) => {
  const props: OceanDataProp = {
    DataType: 'JSON',
    BeachCode: beach_code,
    ResultType: 'Json',
  };

  return await withAxios<OceanResponse<OceanDataType>>({
    url: `${API_ROUTES.OCEAN.DATA}`,
    params: {
      DataType: props.DataType,
      BeachCode: props.BeachCode,
      ResultType: props.ResultType,
    },
  });
};

export const useGetOceanData = (
  beach_code: string,
  options?: UseQueryOptions<OceanResponse<OceanDataType>, AxiosError, OceanResponse<OceanDataType>, string[]>,
): UseQueryResult<OceanResponse<OceanDataType>, AxiosError> =>
  useQuery([`${beach_code}`, ...Querykeys.OCEAN.DATA], () => getOceanDataFetch(beach_code), { ...options });
