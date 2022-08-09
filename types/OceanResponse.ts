export interface OceanResponse<T> {
  result: OceanData<T>;
}

export interface OceanData<T> {
  data: T[];
  meta: OceanMeta;
}

export interface OceanMeta {
  beach_name: string;
  beach_code: string;
  obs_post_name: string;
  obs_last_req_cnt: string;
}
