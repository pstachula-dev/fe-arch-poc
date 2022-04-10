import axios, { AxiosRequestConfig } from "axios";

export const apiGet = <DataT>(url: string) => (param: string, config?: AxiosRequestConfig<DataT>): Promise<DataT> => axios.get(`${url}/${param}`, config);

export const apiGet2 = <DataT>(url: string) => (param: string): Promise<DataT> => axios.get(`${url}/${param}`);