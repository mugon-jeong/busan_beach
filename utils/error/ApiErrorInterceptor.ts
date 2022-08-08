import { AxiosResponse } from 'axios';
import { BaseResponse } from '$types/BaseResponse';
import { CommonApiError } from '$utils/error/ApiError';
import { Errorcode, ErrorResponse } from '$constants/errorcode';

export function ClientApiErrorInterceptor<T>(res: AxiosResponse<BaseResponse<T>>) {
  if (res.headers['content-type'] == 'text/xml;charset=UTF-8') {
    throw new CommonApiError('20');
  }
  const code = res.data.response.header.resultCode;
  if (Object.prototype.hasOwnProperty.call(ErrorResponse, code)) {
    throw new CommonApiError(code as Errorcode);
  } else {
    return res.data;
  }
}
