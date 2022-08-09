export interface AirHeaderResponse {
  code: string;
  message: string;
}

export interface AirBodyResponse<T> {
  dataType: string;
  numOfRows: number;
  pageNo: number;
  item: T[];
}

export interface AirBaseData<T> {
  header: AirHeaderResponse;
  body: AirBodyResponse<T>;
}

export interface AirBaseResponse<T> {
  response: AirBaseData<T>;
}
