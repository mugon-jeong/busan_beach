export interface AirHeaderResponse {
  code: string;
  message: string;
}

export interface AirBodyResponse<T> {
  dataType: string;
  numOfRows: number;
  pageNo: number;
  items: AirData<T>;
}

export interface AirData<T> {
  item: T[];
}

export interface AirBaseData<T> {
  header: AirHeaderResponse;
  body: AirBodyResponse<T>;
}

export interface AirBaseResponse<T> {
  getAirQualityInfoClassifiedByStation: AirBaseData<T>;
}
