import axios, { AxiosRequestConfig } from 'axios';
import { isSSR } from '$utils/isSSR';
import { HOST_URL } from '$config';
import { ClientApiErrorInterceptor } from '$utils/error/ApiErrorInterceptor';

const createAxiosInstance = () => {
  return axios.create();
};

const clientAxiosInstance = () => {
  const instance = createAxiosInstance();
  instance.interceptors.response.use(ClientApiErrorInterceptor);
  return instance;
};
export const globalClientAxiosInstance = clientAxiosInstance();
export const withAxios = async <T>(request: AxiosRequestConfig) => {
  return await globalClientAxiosInstance.request<T, T>({
    ...request,
    baseURL: `${isSSR ? HOST_URL : ''}`,
  });
};
