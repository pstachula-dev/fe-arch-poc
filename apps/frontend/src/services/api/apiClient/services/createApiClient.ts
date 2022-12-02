import { AxiosInstance } from 'axios';

import {
  UrlParams,
  CreateApiClient,
  ApiClientOptions,
  ApiClientResponse,
} from './types';

export const parseUrlParams = (url: string, args?: UrlParams): string => {
  if (!args) return url;
  let parsedUrl = url;
  url.match(/{\w+}/g)?.forEach((param, index) => {
    parsedUrl = parsedUrl.replace(param, args[index]);
  });
  return parsedUrl;
};

export const createApiClient = (client: AxiosInstance): CreateApiClient => {
  return {
    get: async <DataT>(
      url: string,
      options?: ApiClientOptions,
    ): ApiClientResponse<DataT> => {
      return client.get<DataT>(url, options?.config);
    },

    post: <DataT, PayloadT>(
      url: string,
      payload: PayloadT,
      options?: ApiClientOptions,
    ): ApiClientResponse<DataT> => {
      return client.post(
        parseUrlParams(url, options?.httpParams),
        payload,
        options?.config,
      );
    },

    patch: <DataT, PayloadT>(
      url: string,
      payload: PayloadT,
      options?: ApiClientOptions,
    ): ApiClientResponse<DataT> => {
      return client.patch(
        parseUrlParams(url, options?.httpParams),
        payload,
        options?.config,
      );
    },

    put: <DataT, PayloadT>(
      url: string,
      payload: PayloadT,
      options?: ApiClientOptions,
    ): ApiClientResponse<DataT> => {
      return client.put(
        parseUrlParams(url, options?.httpParams),
        payload,
        options?.config,
      );
    },

    delete: <DataT>(
      url: string,
      options?: ApiClientOptions,
    ): ApiClientResponse<DataT> => {
      return client.delete(
        parseUrlParams(url, options?.httpParams),
        options?.config,
      );
    },
  };
};
