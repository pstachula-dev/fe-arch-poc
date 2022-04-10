import axios, { AxiosResponse } from "axios";

export const apiGet = <DataT>(url: string) => {
    return (): Promise<AxiosResponse<DataT>> => axios.get(url);
}

export const apiPost = <DataT, ParamsT>(url: string) => {
    return (params: ParamsT): Promise<AxiosResponse<DataT>> => axios.post(url, params);
}