/**
 * TODO server error code 맞춰 제작
 * TODO axios interceptor 적용
 * TODO Error boundary 적용
 */
import { Errorcode, ErrorResponse } from '$constants/errorcode';

export class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = '[SYSTEM] API Error';
  }
}

export class CommonApiError extends ApiError {
  constructor(error: Errorcode) {
    super(ErrorResponse[error]);
  }
}

export const isInstanceOfApiError = (e: unknown): e is ApiError => e instanceof ApiError;
export const isInstanceOfCommonApiError = (e: unknown): e is CommonApiError => e instanceof CommonApiError;
