import axios, { AxiosResponse } from "axios";

export const apiGet = <DataT>(url: string) => (param?: string): Promise<AxiosResponse<DataT>> => axios.get(`${url}/${param}`);