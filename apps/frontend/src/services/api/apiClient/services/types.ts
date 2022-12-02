import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type UrlParams = Record<string, string>;

export type ApiClientResponse<T> = Promise<AxiosResponse<T>>;

export interface ApiClientOptions {
  config?: AxiosRequestConfig;
  httpParams?: UrlParams;
}

export interface CreateApiClient {
  get: <DataT>(
    url: string,
    options?: ApiClientOptions,
  ) => ApiClientResponse<DataT>;
  post: <DataT, PayloadT>(
    url: string,
    payload: PayloadT,
    options?: ApiClientOptions,
  ) => ApiClientResponse<DataT>;
  patch: <DataT, PayloadT>(
    url: string,
    payload: PayloadT,
    options?: ApiClientOptions,
  ) => ApiClientResponse<DataT>;
  put: <DataT, PayloadT>(
    url: string,
    payload: PayloadT,
    options?: ApiClientOptions,
  ) => ApiClientResponse<DataT>;
  delete: <DataT>(
    url: string,
    options?: ApiClientOptions,
  ) => ApiClientResponse<DataT>;
}
