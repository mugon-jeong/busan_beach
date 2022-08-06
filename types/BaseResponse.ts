export interface HeaderResponse {
  resultCode: string;
  resultMsg: string;
  type: string;
}

export interface BodyResponse<T> {
  numOfRows: number;
  pageNo: number;
  totalCount: number;
  items: T[];
}

export interface BaseData<T> {
  header: HeaderResponse;
  body: BodyResponse<T>;
}

export interface BaseResponse<T> {
  response: BaseData<T>;
}
