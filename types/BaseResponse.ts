export interface HeaderResponse {
  resultCode: string;
  resultMsg: string;
}

export interface BodyResponse<T> {
  dataType: string;
  numOfRows: number;
  pageNo: number;
  items: BaseItem<T>;
}

export interface BaseItem<T> {
  item: T[];
}

export interface BaseData<T> {
  header: HeaderResponse;
  body: BodyResponse<T>;
}

export interface BaseResponse<T> {
  response: BaseData<T>;
}
